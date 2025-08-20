/** patterns.json の1件 { id, key, grid? } から描画用の行配列を得る */
export function getGridForPattern(rec) {
  if (!rec) return null;
  const lines = (rec.grid && rec.grid.length) ? rec.grid : gridFromKey(rec.key);
  return lines ? normalizeLines(lines) : null;
}

// key から代表図を作る（grid が無いとき用）
export function gridFromKey(key) {
  if (!key) return null;
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
      rows.push(row.replace(/\s+$/, ""));
    }
    return rows;
  }
  if (key.startsWith("line:")) {
    const n = +key.slice(5);
    return ["■" + "□".repeat(n)];
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
      rows.push(row.replace(/\s+$/, ""));
    }
    return rows;
  }
  if (key.startsWith("cross:")) {
    const m = key.match(/^cross:(\d+),(\d+),(\d+),(\d+)$/);
    if (!m) return null;
    const L = +m[1], R = +m[2], U = +m[3], D = +m[4];
    const rows = [];
    for (let y = U; y >= -D; y--) {
      let row = "";
      for (let x = -L; x <= R; x++) {
        if (x === 0 && y === 0) row += "■";
        else if (x === 0 || y === 0) row += "□";
        else row += " ";
      }
      rows.push(row.replace(/\s+$/, ""));
    }
    return rows;
  }
  return null; // grid:<hash> は patterns.json の grid を使う
}

// 全角スペースを半角にそろえる
export function normalizeLines(lines) {
  return lines.map((l) => l.replace(/\u3000/g, " "));
}
