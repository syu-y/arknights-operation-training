import { getGridForPattern } from "./patterns.js";

/** grid行配列 → {origin:{ox,oy}, offsets:[{dx,dy}], size:{w,h}} */
export function parseGridToOffsets(lines) {
  if (!lines || !lines.length) return null;
  const H = lines.length;
  const W = Math.max(...lines.map((l) => l.length));
  const padded = lines.map((l) => l.padEnd(W, " "));
  let ox = -1, oy = -1;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (padded[y][x] === "■") { ox = x; oy = y; break; }
    }
    if (ox >= 0) break;
  }
  if (ox < 0) return null;
  const offsets = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (padded[y][x] === "□") offsets.push({ dx: x - ox, dy: y - oy }); // 画面座標(右+下+)
    }
  }
  return { origin: { ox, oy }, offsets, size: { w: W, h: H } };
}

/** 向き別回転（画面座標: 右が+X, 下が+Y） */
export function rotate(dx, dy, facing) {
  switch (facing) {
    case "W": return { dx:  dy, dy: -dx }; // 90°CW
    case "S":  return { dx: -dx, dy: -dy }; // 180°
    case "E":  return { dx: -dy, dy:  dx }; // 270°CW
    case "N":
    default:      return { dx, dy };           // 0°
  }
}

/**
 * 盤面セル群へ展開
 * @param {Object} args
 *  - patternId: string | number
 *  - patterns: patterns.json 配列
 *  - facing: 'up'|'right'|'down'|'left'
 *  - ox, oy: オペレーターの盤面座標（0始まり）
 *  - boardW, boardH: 盤面サイズ
 * @return []
 */
export function computeRangeCells({ patternId, patterns, facing, ox, oy, boardW, boardH }) {
  const rec = patterns.find(p => String(p.id) === String(patternId));
  const grid = getGridForPattern(rec);
  const parsed = parseGridToOffsets(grid);
  if (!parsed) return [];
  const out = [];
  // 自マス
  if (ox >= 0 && oy >= 0 && ox < boardW && oy < boardH) {
    out.push([ 0, 0 ]);
  }
  // 射程
  for (const o of parsed.offsets) {
    out.push([ o.dx, o.dy ]);
  }
  return out;
}
