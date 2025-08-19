#!/usr/bin/env node
/**
 * Arknights オペ画像一括DL (#body 内の sortabletable<number> テーブル限定)
 * - 連番ファイル名: 1.png, 2.png, ...
 * - デフォルト: ./op-images に保存
 * - --force-png を付けると sharp で PNG 変換（任意）
 *
 * Node 18+, npm i cheerio[, sharp]
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { load } from 'cheerio';

// -------- settings --------
const INDEX_URL =
  "https://arknights.wikiru.jp/?%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E4%B8%80%E8%A6%A7";
const UA = "AK-OpImgFetcher/1.0 (+script)";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CLI
const args = process.argv.slice(2);
const outDir =
  getFlag("--out") || path.join(__dirname, "op-images");
const forcePng = hasFlag("--force-png");

// optional sharp
let sharp = null;
if (forcePng) {
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("[warn] --force-png には `npm i sharp` が必要です。変換なしで保存します。");
  }
}

function hasFlag(flag) {
  return args.includes(flag);
}
function getFlag(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : null;
}

// -------- helpers --------
async function getHTML(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return await res.text();
}

function absoluteURL(u) {
  try {
    // 相対URLにも対応
    return new URL(u, INDEX_URL).href;
  } catch {
    return null;
  }
}

function pickBestFromSrcset(srcset) {
  // "url1 1x, url2 2x" → 最後（高解像）を採用
  const parts = (srcset || "").split(",").map(s => s.trim()).filter(Boolean);
  if (!parts.length) return null;
  const last = parts[parts.length - 1].split(/\s+/)[0];
  return last || null;
}

function isOperatorTableId(id) {
  return /^sortabletable\d+$/.test((id || "").trim());
}

/** #body 内の sortabletable<number> テーブルから img を収集 */
function collectOperatorImageURLs($) {
  const urls = new Set();

  $('#body table[id]').each((_, el) => {
    const id = $(el).attr("id") || "";
    if (!isOperatorTableId(id)) return;

    $(el).find("img").each((__, img) => {
      const $img = $(img);
      // data-src / data-original / srcset / src の順で解決
      let src =
        $img.attr("data-src") ||
        $img.attr("data-original") ||
        pickBestFromSrcset($img.attr("srcset")) ||
        $img.attr("src") ||
        "";

      src = (src || "").trim();
      if (!src) return;

      // 透明1px等を弾きたい場合はここにフィルタを足す
      const abs = absoluteURL(src);
      if (abs) urls.add(abs);
    });
  });

  return [...urls];
}

// -------- main --------
(async () => {
  await fs.mkdir(outDir, { recursive: true });

  const html = await getHTML(INDEX_URL);
  const $ = load(html);

  // #body 限定、sortabletable<number> だけから拾う
  const list = collectOperatorImageURLs($);

  if (!list.length) {
    console.error("[error] 画像URLを1件も検出できませんでした。セレクタやDOM構造の変化を確認してください。");
    process.exit(1);
  }

  console.log(`[info] 取得対象: ${list.length} 件`);
  // インデックスの JSON も残す（どのURLが何番か）
  const indexJson = [];

  let n = 1;
  for (const url of list) {
    const filename = `${n}.png`;
    const outfile = path.join(outDir, filename);

    try {
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const buf = Buffer.from(await res.arrayBuffer());

      let outBuf = buf;
      if (forcePng && sharp) {
        try {
          outBuf = await sharp(buf).png().toBuffer();
        } catch (e) {
          console.warn(`[warn] sharp 変換失敗 (${url}) → 元データで保存します: ${e.message}`);
        }
      }
      await fs.writeFile(outfile, outBuf);
      indexJson.push({ n, filename, src: url });
      console.log(`[ok] #${n} -> ${filename}`);
      n++;
      await wait(120); // 少しマナー
    } catch (e) {
      console.warn(`[skip] ${url} : ${e.message}`);
    }
  }

  await fs.writeFile(path.join(outDir, "index.json"), JSON.stringify(indexJson, null, 2), "utf8");
  console.log(`[done] 保存先: ${outDir} / 件数: ${n - 1}`);
})().catch(e => {
  console.error(e);
  process.exit(1);
});

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
