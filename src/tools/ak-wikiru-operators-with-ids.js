#!/usr/bin/env node
/* Arknights operators list with numeric pattern IDs (wikiru JP) - v6
 * 変更点:
 * - レアリティ: #body > p:nth-child(2) > a:nth-child(2) の title を数値優先で取得
 * - スキル範囲: table > thead > tr > th:nth-child(4) 出現順 1件目=S1/2件目=S2/3件目=S3
 *   → そのセルが空(図なし)なら「通常攻撃の攻撃範囲」で補完
 * - 通常攻撃の図: ページ内の「攻撃範囲/射程」セクションを優先探索し、E2らしさでスコアして1つ選択
 * - X系記号 → 全角スペース、<span>内の□ → 全角スペース、<br> → 改行
 * - 分類: diamond:r / line:n / rect:WxH / grid:<hash8> → 数値IDを付与
 * - patterns.json に代表図（grid行配列）を保持
 * - 非オペ: 既知8職 × レア1..6 以外は除外
 *
 * Node 18+ / npm i cheerio
 */

import { writeFileSync } from "fs";
import { load } from "cheerio";
import { createHash } from "crypto";

const UA = "AK-Wikiru-OpListIDs/1.5 (+script)";
const INDEX_URL = "https://arknights.wikiru.jp/index.php?%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E4%B8%80%E8%A6%A7";
const HOST = "https://arknights.wikiru.jp/";
const SLEEP_MS = 150;

// 既知の職業
const CLASS_JP_TO_CODE = {
  "先鋒":"vanguard","前衛":"guard","重装":"defender","狙撃":"sniper",
  "術師":"caster","医療":"medic","補助":"supporter","特殊":"specialist"
};
const KNOWN_CLASSES = new Set(Object.keys(CLASS_JP_TO_CODE));

/* ---------- utils ---------- */
const sleep = (ms)=>new Promise(r=>setTimeout(r,ms));
async function getText(url){
  const res = await fetch(url, { headers:{ "User-Agent": UA }});
  if(!res.ok) throw new Error(`${res.status} ${res.statusText} - ${url}`);
  return await res.text();
}
const sha8 = (lines) => createHash("sha256")
  .update(lines.join("\n"), "utf8").digest("hex").slice(0,8);

/* ---------- 一覧 → 候補URL ---------- */
/* 入口ページ → 個別URL（id="sortabletable<number>" の table 内だけから収集） */
async function fetchOperatorLinks(){
  const html = await getText(INDEX_URL);
  const $ = load(html);
  const hrefs = new Set();

  // id="sortabletable<数字>" の table を抽出
  const tables = $('table[id]').toArray().filter(el => {
    const id = ($(el).attr('id') || '').trim();
    return /^sortabletable\d+$/.test(id);
  });

  for (const tbl of tables) {
    $(tbl).find('a[href]').each((_, a) => {
      let href = $(a).attr('href') || '';
      if (!href) return;

      // 絶対URL化
      try { href = new URL(href, HOST).href; } catch { return; }

      const u = new URL(href);

      // /index.php?オペ名 の形のみ許可（アンカーは無視）
      if (!/\/index\.php$/i.test(u.pathname)) return;
      if (!u.search || u.search === '?') return;

      // 編集系などは除外（?cmd=, ?plugin=, ?word= など）
      if (/[?&](?:cmd|plugin|word|mode)=/i.test(u.search)) return;

      // 件名に明らかな一覧系ワードが入るものは除外
      const q = decodeURIComponent(u.search.replace(/^\?/, ''));
      if (/一覧|Menu|Sandbox|コメント\//.test(q)) return;

      // 正規化して追加（#以降は落とす）
      hrefs.add(u.origin + u.pathname + u.search.split('#')[0]);
    });
  }

  // デバッグ用（必要なら）
  // console.log('[links-from-sortabletables]', hrefs.size);

  return [...hrefs];
}

function getE2GridFromHeaderRows($){
  let e2 = null;
  $('table > thead > tr').each((_, tr) => {
    const $tr = $(tr);
    const firstThText = ($tr.find('th').eq(0).text() || '').trim();
    if (!/(昇進\s*2|E2|通常攻撃)/i.test(firstThText)) return;

    const html = $tr.find('th').eq(3).html() || "";
    const lines = extractDiagramFromHTML(html);
    if (lines) { e2 = lines; return false; } // 最初に見つかったものを採用
  });
  return e2; // 無ければ null
}

/* ---------- 基本情報 ---------- */
function extractName($){
  return ($("#firstHeading").text() || $("h1").first().text() || "").trim();
}
function extractClassStrict($){
  let h2 = $('#content_1_0').first();
  let divcont = h2.next();
  let table = divcont.children("table");
  let tbody = table.children("tbody");
  let tr = tbody.children("tr:nth-child(6)");
  let td = tr.children("td:nth-child(2)");
  let label = "";
  if (td) label = td.text().trim();
  const code = CLASS_JP_TO_CODE[label] || (label || "").toLowerCase();
  return { label, code };
}
/* レアリティ: セレクタ a[title] を数値優先で取得 */
function extractRarityBySelector($){
 // まず仕様どおりに狙う（p/a の“2番目の要素”を厳密に）
  let a = $('#body > p:nth-child(2) > a:nth-child(2)[title]');
  if (!a.length) {
    // 代替: #body 直下の p 群のうち先頭付近から title を持つ a を2番目としてみなす
    const cand = $('#body > p a[title]').eq(1);
    if (cand.length) a = cand;
  }
  const title = (a.attr('title') || '').trim();
  if (!title) return 0;
  const m = title.match(/([1-6])/);
  if (m) return Number(m[1]);
  const stars = (title.match(/[★☆]/g) || []).length;
  return (stars >= 1 && stars <= 6) ? stars : 0;
}

/* ---------- innerHTML → 図（行配列） ---------- */
function extractDiagramFromHTML(innerHTML){
  if(!innerHTML || !innerHTML.trim()) return null;
  if(!/[■□]/.test(innerHTML)) return null;

  const frag = load(`<root>${innerHTML}</root>`, { decodeEntities:false });

  // span 内の「□」→ 全角スペース
  frag("span").each((_,sp)=>{
    const h = frag(sp).html() ?? "";
    frag(sp).html(h.replace(/□/g, "　"));
  });

  // <br> → 改行
  frag("br").replaceWith("\n");

  // 生テキスト
  let text = frag.root().text();

  // X 系は全角スペース（列保持）
  text = text.replace(/[Xx×✕╳Ｘｘ]/g, "　");

  // &nbsp; → 半角空白
  text = text.replace(/\u00A0/g, " ");

  // 許可文字のみ（■□・半/全角空白・改行）
  let cleaned = text.replace(/[^\u25A0\u25A1 \u3000\r\n]/g, "");

  // 行化（■□を含む行のみ）
  let lines = cleaned.split(/\r?\n/).filter(s => /[■□]/.test(s));
  if (!lines.length) return null;

  // 右端空白削除 → 同幅化
  lines = lines.map(s => s.replace(/[ \u3000]+$/g, ""));
  const W = Math.max(0, ...lines.map(s => s.length));
  lines = lines.map(s => s.padEnd(W, " "));

  // 最低条件：■=1 / □>=1
  const joined = lines.join("");
  const nb = (joined.match(/■/g)||[]).length;
  const nw = (joined.match(/□/g)||[]).length;
  if (nb !== 1 || nw < 1) return null;

  return lines;
}

/* ---------- スキル図: thead 4列目 先頭から3件 ---------- */

/* 2) スキル図：スキル表があればその thead から、なければ従来法＋E2補完 */
function pickSkillGridsFromHeaders($){
  // スキル1
  let h4_s1 = $('#content_1_5').first();
  let divcont = h4_s1.next();
  let table = divcont.children("table");
  let thead = table.children("thead");
  let tr = thead.children("tr:nth-child(1)");
  let th = tr.children("th:nth-child(4)");
  let skill1 = th.html();

  // スキル2
  let h4_s2 = $('#content_1_6').first();
  if(!h4_s2) { return [skill1] }
  divcont = h4_s2.next();
  table = divcont.children("table");
  thead = table.children("thead");
  tr = thead.children("tr:nth-child(1)");
  th = tr.children("th:nth-child(4)");
  let skill2= th.html();

  // スキル3
  let h4_s3 = $('#content_1_7').first();
  if(!h4_s3) { return [skill1, skill2] }
  divcont = h4_s3.next();
  table = divcont.children("table");
  thead = table.children("thead");
  tr = thead.children("tr:nth-child(1)");
  th = tr.children("th:nth-child(4)");
  let skill3= th.html();
  return [skill1, skill2, skill3] 
}

/* ---------- 通常攻撃（E2想定）の図を推定 ---------- */
/* 攻撃範囲/射程セクションを優先し、E2らしさでスコア */
function extractSections($, rx){
  const out = [];
  $("h2,h3,h4").each((_, h) => {
    const title = $(h).text().trim();
    if (!rx.test(title)) return;
    const parts = [];
    let n = $(h).next();
    while (n.length && !/H[2-4]/.test(n[0].tagName)) {
      parts.push(n[0]);
      n = n.next();
    }
    out.push(load(parts.map(x => $.html(x)).join("")));
  });
  return out;
}
function collectGridsFromRoot($root){
  const blocks = [];
  $root("pre, code, th, td, p, div, blockquote").each((_, el) => {
    const html = $root(el).html() || "";
    if (!/[■□]/.test(html)) return;
    const lines = extractDiagramFromHTML(html);
    if (lines) blocks.push(lines);
  });
  return blocks;
}
function scoreForE2(lines, contextText){
  const g = lines.map(r=>r.trim()).join("\n");
  let s = 0;
  if (/(昇進2|昇進Ⅱ|昇進 II|E2|素質|通常攻撃)/i.test(contextText)) s += 5;
  if (/(攻撃範囲|射程)/.test(contextText)) s += 2;
  // 図のサイズ・密度で少し点数
  const whites = (g.match(/□/g)||[]).length;
  const width = Math.max(...lines.map(r=>r.length));
  s += Math.min(5, Math.floor(width/3)) + Math.min(5, Math.floor(whites/5));
  return s;
}
function pickNormalAttackGrid($){
  // 通常攻撃
  let h4_s1 = $('#content_1_0').first();
  let divcont1 = h4_s1.next();//プロフ
  let divcont2 = divcont1.next();//ステ
  let divcont3 = divcont2.next();//攻撃範囲
  let table = divcont3.children("table");
  let tbody = table.children("tbody");
  let tr = tbody.children("tr:nth-child(3)");
  let e1 = tr.children("td:nth-child(2)");//昇進1
  let e2 = tr.children("td:nth-child(3)");//昇進2
  if(e2.html() === '-') { 
    return extractDiagramFromHTML(e1.html())
  } else {
    return extractDiagramFromHTML(e2.html())
  }
}

/* ---------- 図 → 分類キー ---------- */
function gridToCoords(lines){
  const H = lines.length;
  const W = Math.max(...lines.map(r=>r.length));
  const mat = lines.map(r=>r.padEnd(W," ").split(""));
  let ox=-1, oy=-1;
  for(let y=0;y<H;y++){ for(let x=0;x<W;x++){ if(mat[y][x]==="■"){ ox=x; oy=y; break; } } if(ox>=0) break; }
  if(ox<0) return { cells:[], raw:lines };
  const cells=[];
  for(let y=0;y<H;y++) for(let x=0;x<W;x++) if(mat[y][x]==="□"){
    const dx=x-ox, dy=-(y-oy); cells.push([dx,dy]);
  }
  return { cells, raw:lines };
}
function classifyKey(lines){
  const { cells } = gridToCoords(lines);
  if (!cells.length) return `grid:${sha8(lines)}`;

  // diamond:r
  const r = Math.max(...cells.map(([x,y]) => Math.abs(x)+Math.abs(y)));
  const need=new Set();
  for(let dx=-r; dx<=r; dx++) for(let dy=-r; dy<=r; dy++){
    const d=Math.abs(dx)+Math.abs(dy);
    if (d>=1 && d<=r) need.add(`${dx},${dy}`);
  }
  const have=new Set(cells.map(([x,y])=>`${x},${y}`));
  if ([...need].every(k=>have.has(k))) return `diamond:${r}`;

  // line:n
  const xs0=cells.filter(([_,y])=>y===0).map(([x])=>x);
  if (xs0.length){
    const maxX=Math.max(...xs0);
    const contiguous=Array.from({length:maxX},(_,i)=>i+1).every(x=>xs0.includes(x));
    const noUpDown=cells.every(([x,y])=>y===0 || x===0);
    if (contiguous && maxX>=1 && noUpDown) return `line:${maxX}`;
  }

  // rect:W×H
  const xs=cells.map(([x])=>x), ys=cells.map(([_,y])=>y);
  const minX=Math.min(...xs), maxX=Math.max(...xs);
  const minY=Math.min(...ys), maxY=Math.max(...ys);
  if (minX>=1){
    const need2=[];
    for(let x=1;x<=maxX;x++) for(let y=minY;y<=maxY;y++) need2.push(`${x},${y}`);
    const have2=new Set(cells.map(([x,y])=>`${x},${y}`));
    if (need2.every(k=>have2.has(k))){
      const W=maxX, H=maxY-minY+1;
      return `rect:${W}x${H}`;
    }
  }

  // 不定形
  return `grid:${sha8(lines)}`;
}

/* ---------- 代表図（patterns.json 用） ---------- */
function canonicalGridFromKey(key) {
  if (key.startsWith("rect:")) {
    const m = key.match(/^rect:(\d+)x(\d+)$/);
    if (!m) return null;
    const W = +m[1], H = +m[2];
    const halfUp = Math.floor((H - 1) / 2);
    const minY = -halfUp, maxY = minY + H - 1;
    const rows = [];
    for (let y = maxY; y >= minY; y--) {
      let row = "";
      for (let x = 0; x <= W; x++) {
        if (x === 0 && y === 0) row += "■";
        else if (x >= 1) row += "□";
        else row += " ";
      }
      rows.push(row.replace(/\s+$/,""));
    }
    return rows;
  }
  if (key.startsWith("line:")) {
    const n = +key.slice(5);
    return [ "■" + "□".repeat(n) ];
  }
  if (key.startsWith("diamond:")) {
    const r = +key.slice(8);
    const rows = [];
    for (let y = r; y >= -r; y--) {
      let row = "";
      for (let x = -r; x <= r; x++) {
        const d = Math.abs(x) + Math.abs(y);
        if (x === 0 && y === 0) row += "■";
        else if (d >= 1 && d <= r) row += "□";
        else row += " ";
      }
      rows.push(row.replace(/\s+$/,""));
    }
    return rows;
  }
  return null; // grid:<hash> は実サンプルを代表図にする
}

/* ---------- パターンID管理（代表図つき） ---------- */
const patternKeyToId = new Map();
const patternsList = []; // [{ id:"1", key:"rect:3x3", grid:[...] }]
function getPatternId(key, sampleLines) {
  if (!patternKeyToId.has(key)) {
    const id = String(patternKeyToId.size + 1);
    patternKeyToId.set(key, id);
    const grid = sampleLines || canonicalGridFromKey(key) || null;
    patternsList.push({ id, key, grid });
  } else if (sampleLines) {
    const id = patternKeyToId.get(key);
    const rec = patternsList.find(p => p.id === id);
    if (rec && !rec.grid) rec.grid = sampleLines;
  }
  return patternKeyToId.get(key);
}

/* ---------- 1ページ処理 ---------- */
async function processOperatorPage(url, idSeq){
  const html = await getText(url);
  const $ = load(html);

  const name = extractName($);
  console.warn("name : " + name);

  const { label, code } = extractClassStrict($);
  console.warn("label, code : " + label, code);

  const rare = extractRarityBySelector($);
  if (!rare) console.warn('[rare0]', name);
  console.warn("rare : " + rare);

  // 非オペ除外
  if (!(rare >= 1 && rare <= 6)) {
    throw new Error("skip non-operator");
  }
  // スキル用に thead 4列目から 1..3 を取得
  let [g1, g2, g3] = pickSkillGridsFromHeaders($);
  if(g1) g1 = extractDiagramFromHTML(g1)
  if(g2) g2 = extractDiagramFromHTML(g2)
  if(g3) g3 = extractDiagramFromHTML(g3)
  console.warn("g1 : " + g1);
  console.warn("g2 : " + g2);
  console.warn("g3 : " + g3);

  // 通常攻撃（E2想定）を推定（スキル枠が空の補完用）
  const normal = pickNormalAttackGrid($);
  console.warn("normal : " + normal);

  // 空のスキル枠は通常攻撃で補完
  if (!g1 && normal) g1 = normal;
  if (!g2 && normal) g2 = normal;
  if (!g3 && normal) g3 = normal;

  // レア度で出力スキル数を制限
  const modes =
    rare <= 3 ? ["S1"] :
    rare <= 5 ? ["S1", "S2"] :
                ["S1", "S2", "S3"];

  const gridsByMode = { S1: g1, S2: g2, S3: g3 };

  const skills = [];
  for (const mode of modes) {
    const lines = gridsByMode[mode];
    if (!lines) continue; // 通常攻撃も取れないレアケースは出力しない
    const key = classifyKey(lines);
    const pid = getPatternId(key, lines);
    skills.push({ mode, pattern: pid });
  }
  console.warn("skills : " + skills);

  const ope = {
    id: idSeq,
    rare,
    name,
    class: { name:code, label },
    skills,
    x: 0,
    y: 0,
    facing: 'E',
    skillIdx: 0 
  };
  console.warn('[ope]', ope);
  return ope;
}

/* 0) スキル表を見つける：thead 1列目に「スキル1/2/3（I/II/III 含む）」が出る表を優先 */
function findSkillsTable($) {
  let chosen = null;
  //スキル1
  let h4_s1 = $('#content_1_5').first();
  let divcont = h4_s1.next();
  let table = divcont.children("table");
  let thead = table.children("thead");
  let th = thead.children("th:nth-child(4)");

  $('table').each((_, tbl) => {
    const $tbl = $(tbl);
    const labels = [];
    $tbl.find('thead > tr').each((__, tr) => {
      const t = ($tbl(tr).find('th').first().text() || '').trim();
    });
    // cheerio だと上の書き方がややこしいので素直に書く
    const ths = $tbl.find('thead > tr > th:first-child');
    const hasSkillRow = ths.toArray().some(th => {
      const s = ($(th).text() || '').trim();
      return /スキル\s*(?:1|2|3|I{1,3}|Ⅰ|Ⅱ|Ⅲ)/.test(s);
    });
    if (!hasSkillRow) return;

    // 一応、4列目に図があるかも確認（なくても候補に）
    const hasDiagram = $tbl.find('thead > tr > th:nth-child(4)').toArray()
      .some(th => /[■□]/.test($(th).html() || ''));

    // 最初に条件を満たした表を採用（複数あれば先勝ち）
    if (!chosen) chosen = $tbl;
  });
  return chosen; // 無い場合は null
}

/* 1) 指定テーブルの thead 行から E2（通常攻撃）を拾う */
function getE2GridFromHeaderRowsIn($root){
  let e2 = null;
  $root.find('thead > tr').each((_, tr) => {
    const $tr = $(tr);
    const label = ($tr.find('th').eq(0).text() || '').trim();
    if (!/(昇進\s*2|E2|通常攻撃)/i.test(label)) return;
    const html = $tr.find('th').eq(3).html() || "";
    const lines = extractDiagramFromHTML(html);
    if (lines) { e2 = lines; return false; }
  });
  return e2;
}

/* ---------- メイン ---------- */
(async ()=>{
  const outOps = process.argv[2] || "operators.json";
  const outPatterns = process.argv[3] || "patterns.json";

  const links = await fetchOperatorLinks();
  console.log('[links]', links.length);
  const operators = [];
  let idSeq = 1;

  for (const href of links) {
    try {
      console.warn("-------------------- idSeq  = " + idSeq + "--------------------");
      const row = await processOperatorPage(href, idSeq);
      
      operators.push(row);
      idSeq++;
    } catch (e) {
      // 非オペ or 取得失敗はスキップ
    }
    await sleep(SLEEP_MS);
  }

  writeFileSync(outOps, JSON.stringify(operators, null, 2), "utf8");
  writeFileSync(outPatterns, JSON.stringify(patternsList, null, 2), "utf8");

  console.log(`Saved ${operators.length} operators -> ${outOps}`);
  console.log(`Saved ${patternsList.length} unique patterns -> ${outPatterns}`);
})();
