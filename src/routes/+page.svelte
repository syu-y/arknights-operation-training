<script lang="ts">
  import { onMount } from 'svelte';
  import { ATTR_BLOCK, ATTR_EFF, fieldTypes } from '../types/Field';
  import {
    opLists,
    type FaceType,
    type Operator,
    type OpType,
  } from '../types/Operator';
  import patterns from '../tools/patterns.json';
  import { computeRangeCells } from '$lib/utils/attackRange.js';
  import { Icons } from '$lib/utils/importImages';

  // ===== 基本設定 =====
  let CELL = 60; // 1マスのピクセル
  let gridW = 12; // 横マス数
  let gridH = 12; // 縦マス数
  let selW = gridW;
  let selH = gridH;
  let gridEl: HTMLDivElement; // 盤面DOM参照
  let attrMenuEl; // メニューDOM参照
  const sizeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // ===== レイヤ情報 =====
  let activeLayer = 'field';

  // ===== フィールド関連 =====
  let fields = Array.from(
    { length: gridH },
    () => Array.from({ length: gridW }, () => 0), // 0: empty
  );
  // 各セルの属性情報を保持（0=なし, 1=配置不可, 2=効果, 3=両方）
  let attrs = Array.from({ length: gridH }, () =>
    Array.from({ length: gridW }, () => 0),
  );

  // ===== フィールド範囲選択 & コピー／貼り付け =====
  let isSelecting = false;
  let selStart: { x: any; y: any } | null = null; // {x,y}
  let selEnd: { x: any; y: any } | null = null;
  let selRect: { x: any; y: any; w: any; h: any } | null = null;
  let copyBuffer: { fields: number[][]; attrs: number[][] } | null = null;
  let suppressNextCellClick = false;
  let pasteMode = false; // クリック待ち
  let pasteHover = null; // {x,y} ホバー中セル（プレビュー用）

  const FieldUtils = {
    cycleField(x: number, y: number) {
      if (!fields[y] || fields[y][x] == null) return;
      fields[y][x] = (fields[y][x] + 1) % fieldTypes.length;
      fields = fields.map((row) => [...row]); // 変更検知
    },
    getField(x: number, y: number) {
      return fields[y] && fields[y][x] != null ? fields[y][x] : 0;
    },
    clearField() {
      fields = Array.from(
        { length: gridH },
        () => Array.from({ length: gridW }, () => 0), // 0: empty
      );
    },
    // コピー&ペースト操作
    copyPaste: {
      rectFromPoints(a: { x: number; y: number }, b: { x: number; y: number }) {
        const x = Math.min(a.x, b.x);
        const y = Math.min(a.y, b.y);
        const w = Math.abs(a.x - b.x) + 1;
        const h = Math.abs(a.y - b.y) + 1;
        return { x, y, w, h };
      },
      updateSelRect() {
        if (selStart && selEnd)
          selRect = FieldUtils.copyPaste.rectFromPoints(selStart, selEnd);
      },
      eventToGridCell(ev: { clientX: number; clientY: number }) {
        const r = gridEl.getBoundingClientRect();
        // グリッド外も安全にクランプ
        const px = Math.max(0, Math.min(r.width - 1, ev.clientX - r.left));
        const py = Math.max(0, Math.min(r.height - 1, ev.clientY - r.top));
        const gx = Math.max(0, Math.min(gridW - 1, Math.floor(px / CELL)));
        const gy = Math.max(0, Math.min(gridH - 1, Math.floor(py / CELL)));
        return { x: gx, y: gy };
      },
      clearSelection() {
        isSelecting = false;
        selStart = null;
        selEnd = null;
        selRect = null;
      },
      onCellPointerDownSelect(
        e: PointerEvent & { currentTarget: EventTarget & HTMLButtonElement },
        x: any,
        y: any,
      ) {
        if (!(activeLayer === 'field' && e.shiftKey)) return;
        isSelecting = true;
        selStart = { x, y };
        selEnd = { x, y };
        FieldUtils.copyPaste.updateSelRect();
        suppressNextCellClick = true;
        e.preventDefault();

        // window 監視
        const onMove = (ev: any) => {
          if (!isSelecting) return;
          selEnd = FieldUtils.copyPaste.eventToGridCell(ev);
          FieldUtils.copyPaste.updateSelRect();
        };
        const onUp = (ev: any) => {
          if (isSelecting) {
            isSelecting = false;
            selEnd = FieldUtils.copyPaste.eventToGridCell(ev);
            FieldUtils.copyPaste.updateSelRect(); // 最終確定
          }
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
        };

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      },
      onCellPointerUpSelect(e: { preventDefault: () => void }) {
        if (isSelecting && activeLayer === 'field') {
          isSelecting = false; // 範囲選択を確定
          FieldUtils.copyPaste.updateSelRect(); // 最終矩形を反映
          e.preventDefault();
        }
      },
      onCellPointerEnterSelect(e: any, x: any, y: any) {
        if (isSelecting && activeLayer === 'field') {
          selEnd = { x, y };
          FieldUtils.copyPaste.updateSelRect();
        }
      },
      copySelection() {
        if (!selRect) return;
        const { x, y, w, h } = selRect;
        const bufFields = Array.from({ length: h }, (_, dy) =>
          Array.from({ length: w }, (_, dx) =>
            FieldUtils.getField(x + dx, y + dy),
          ),
        );

        const bufAttrs = Array.from({ length: h }, (_, dy) =>
          Array.from({ length: w }, (_, dx) =>
            FieldUtils.attrChange.getAttr(x + dx, y + dy),
          ),
        );

        copyBuffer = { fields: bufFields, attrs: bufAttrs };
      },
      pasteSelectionAt(x: number, y: number) {
        if (!copyBuffer) return;
        const bufFields = Array.isArray(copyBuffer)
          ? copyBuffer
          : copyBuffer.fields;
        const bufAttrs = Array.isArray(copyBuffer)
          ? null
          : (copyBuffer.attrs ?? null);
        const h = bufFields.length;
        const w = bufFields[0]?.length ?? 0;
        if (!w || !h) return;

        // 上書き貼り付け（盤外は無視）
        for (let dy = 0; dy < h; dy++) {
          for (let dx = 0; dx < w; dx++) {
            const tx = x + dx,
              ty = y + dy;
            if (!inBounds(tx, ty) || !fields[ty]) continue;
            const srcField = bufFields[dy][dx];
            fields[ty][tx] = srcField;

            // 属性のコピー（対象：地上/高台のみ）、非対象は0にクリア。
            if (bufAttrs) {
              const srcAttr = bufAttrs[dy]?.[dx] ?? 0;
              if (FieldUtils.attrChange.isAttrApplicable(srcField)) {
                if (attrs[ty]) attrs[ty][tx] = srcAttr;
              } else {
                if (attrs[ty]) attrs[ty][tx] = 0;
              }
            } else {
              // 属性なしの場合：クリア
              if (attrs[ty])
                attrs[ty][tx] = FieldUtils.attrChange.isAttrApplicable(srcField)
                  ? attrs[ty][tx]
                  : 0;
            }
          }
        }
        // 変更検知
        fields = fields.map((row: any) => [...row]);
        attrs = attrs.map((row: any) => [...row]);

        // コピーモード解除
        FieldUtils.copyPaste.cancelPasteMode();
      },
      enterPasteMode() {
        if (!copyBuffer) return;
        pasteMode = true;
        pasteHover = null;
        suppressNextCellClick = false; // ← 直前に選択した場合でも貼り付けクリックを殺さない
      },
      cancelPasteMode() {
        pasteMode = false;
        pasteHover = null;
        selRect = null;
      },
    },
    // 属性操作
    attrChange: {
      isAttrApplicable(fieldIdx: number) {
        // 地上(=1)・高台(=2)のみ
        return fieldIdx === 1 || fieldIdx === 2;
      },
      getAttr(x: number, y: number) {
        return attrs[y] && attrs[y][x] != null ? attrs[y][x] : 0;
      },
      setAttr(x: number, y: number, v: number) {
        if (!attrs[y] || attrs[y][x] == null) return;
        attrs[y][x] = v;
        attrs = attrs.map((r) => [...r]); // 変更検知
      },
      toggleAttrBit(x: any, y: any, bit: number, on: any) {
        const cur = FieldUtils.attrChange.getAttr(x, y);
        const next = on ? cur | bit : cur & ~bit;
        FieldUtils.attrChange.setAttr(x, y, next);
      },
    },
  };

  // ===== オペレーター関連 =====
  let selectedOperator: Operator;
  let operators: Operator[] = [];
  const Facing: FaceType[] = ['N', 'W', 'S', 'E']; // 北東南西（上右下左）
  const arrowFor = { N: '▲', W: '◀', S: '▼', E: '▶' };
  // ===== ドラッグ移動 =====
  let draggingId: number | null = null;
  let dragPx = { x: 0, y: 0 };

  const OpeUtils = {
    opAt(x: number, y: number) {
      return operators.find((o) => o.x === x && o.y === y);
    },
    placeOperator(x: number, y: number) {
      // 同一セルに重ね置き不可
      if (OpeUtils.opAt(x, y)) return;

      //配置済みのオペレーターは配置不可
      let deployed = false;
      operators.forEach((op) => {
        if (op.id === selectedOperator.id) deployed = true;
      });
      if (!deployed) {
        let operator = selectedOperator;
        operator.x = x;
        operator.y = y;
        operators = [...operators, operator];
      }
    },
    toggleFacingAt(x: number, y: number) {
      const op = OpeUtils.opAt(x, y);
      if (!op) return;
      const i = Facing.indexOf(op.facing);
      op.facing = Facing[(i + 1) % 4];
      operators = operators.map((o) => (o.id === op.id ? { ...op } : o));
    },
    // ===== 攻撃範囲（パターン＋回転） =====
    basePattern(op: Operator) {
      let ofs = [];
      ofs = computeRangeCells({
        patternId: op.skills[op.skillIdx].pattern,
        patterns,
        facing: op.facing,
        ox: op.x,
        oy: op.y,
        boardW: gridW,
        boardH: gridH,
      });
      return ofs;
    },
    rotateOffset([dx, dy]: number[], facing: string) {
      switch (facing) {
        case 'E':
          return [dx, dy];
        case 'S':
          return [-dy, dx];
        case 'W':
          return [-dx, -dy];
        case 'N':
          return [dy, -dx];
      }
    },
    attackTiles(op: Operator) {
      const base = OpeUtils.basePattern(op);
      const allRange = base
        .map((o) => OpeUtils.rotateOffset(o, op.facing))
        .map(([dx, dy]) => [op.x + dx, op.y + dy]);
      const attackRange = allRange.filter(([x, y]) => inBounds(x, y));

      return attackRange;
    },
    // ===== スキル=====
    cycleSkill(op: Operator) {
      const cur = op.skillIdx ?? 0;
      const next = (cur + 1) % op.skills.length;
      const updated = { ...op, skillIdx: next };
      operators = operators.map((o) => (o.id === op.id ? updated : o));
    },
    // ===== クリック挙動 =====
    onCellClick(x: number, y: number) {
      if (activeLayer === 'field') {
        FieldUtils.cycleField(x, y);
      } else {
        const op = OpeUtils.opAt(x, y);
        if (op)
          OpeUtils.toggleFacingAt(x, y); // 中心マスクリックで向き切替
        else OpeUtils.placeOperator(x, y); // 何もなければ配置
      }
    },
    // ===== 移動操作 =====
    move: {
      onOpPointerDown(
        e: PointerEvent & { currentTarget: EventTarget & HTMLDivElement },
        op: Operator,
      ) {
        draggingId = op.id;
        const rect = gridEl.getBoundingClientRect();
        dragPx.x = e.clientX - rect.left;
        dragPx.y = e.clientY - rect.top;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        e.preventDefault();
      },
      onGridPointerMove(e: { clientX: number; clientY: number }) {
        if (draggingId == null) return;
        const rect = gridEl.getBoundingClientRect();
        dragPx.x = e.clientX - rect.left;
        dragPx.y = e.clientY - rect.top;
        // 範囲選択の更新
        if (isSelecting && activeLayer === 'field') {
          const rect = gridEl.getBoundingClientRect();
          const px = e.clientX - rect.left;
          const py = e.clientY - rect.top;
          const gx = Math.max(0, Math.min(gridW - 1, Math.floor(px / CELL)));
          const gy = Math.max(0, Math.min(gridH - 1, Math.floor(py / CELL)));
          selEnd = { x: gx, y: gy };
          FieldUtils.copyPaste.updateSelRect();
        }
      },
      onGridPointerUp(e: { pointerId: number }) {
        if (draggingId == null) return;
        // ドロップ先セルへスナップ
        const gx = Math.min(
          gridW - 1,
          Math.max(0, Math.floor(dragPx.x / CELL)),
        );
        const gy = Math.min(
          gridH - 1,
          Math.max(0, Math.floor(dragPx.y / CELL)),
        );
        if (!OpeUtils.opAt(gx, gy)) {
          operators = operators.map((o) =>
            o.id === draggingId ? { ...o, x: gx, y: gy } : o,
          );
        }
        draggingId = null;
        if (isSelecting) {
          isSelecting = false;
          // selRect は updateSelRect 済み。1マスだけなら w=h=1 の矩形になります
        }
        if (isSelecting && activeLayer === 'field') {
          isSelecting = false;
          FieldUtils.copyPaste.updateSelRect();
        }
        if (e && gridEl?.hasPointerCapture?.(e.pointerId)) {
          gridEl.releasePointerCapture(e.pointerId);
        }
      },
      // ピクセル位置（ドラッグ中はピクセル座標、通常はセル→ピクセル）
      opPixel(op: Operator) {
        if (draggingId === op.id)
          return { left: dragPx.x - CELL / 2, top: dragPx.y - CELL / 2 };
        return { left: op.x * CELL, top: op.y * CELL };
      },
    },
    // ===== オペレーター削除 =====
    removeOperator(id: number) {
      operators = operators.filter((o) => o.id !== id);
    },
    clearOperators() {
      operators = [];
    },
  };

  // フィールドサイズ変更
  function resizeGrid(newW: number, newH: number) {
    const oldH = fields.length;
    const oldW = fields[0].length;
    // フィールド：重なり部分は保持、それ以外は empty(0)
    const next = Array.from({ length: newH }, () =>
      Array.from({ length: newW }, () => 0),
    );
    for (let y = 0; y < newH; y++) {
      for (let x = 0; x < newW; x++) {
        if (y < oldH && x < oldW) next[y][x] = fields[y][x];
      }
    }
    fields = next;

    // 属性：重なり部分は保持、それ以外は empty(0)
    const nextAttrs = Array.from({ length: newH }, () =>
      Array.from({ length: newW }, () => 0),
    );
    const minW = Math.min(gridW, newW);
    const minH = Math.min(gridH, newH);
    for (let y = 0; y < minH; y++) {
      for (let x = 0; x < minW; x++) nextAttrs[y][x] = attrs[y][x];
    }
    attrs = nextAttrs;

    // オペレーター：範囲外はクランプ。座標重複は先勝ちで重複排除
    const seen = new Set();
    const clamped = [];
    for (const o of operators) {
      const nx = Math.max(0, Math.min(newW - 1, o.x));
      const ny = Math.max(0, Math.min(newH - 1, o.y));
      const key = ny * newW + nx;
      if (!seen.has(key)) {
        seen.add(key);
        clamped.push({ ...o, x: nx, y: ny });
      }
    }
    operators = clamped;

    gridW = newW;
    gridH = newH;
  }

  // ===== ユーティリティ =====
  function inBounds(x: number, y: number) {
    return x >= 0 && y >= 0 && x < gridW && y < gridH;
  }
  function bgOfField(idx: number) {
    return fieldTypes[idx]?.color ?? '#fff';
  }

  // 右クリック用ポップアップメニュー
  let attrMenu = { open: false, gx: 0, gy: 0, left: 0, top: 0 };
  const MenuUtils = {
    closeAttrMenu() {
      attrMenu = { open: false, gx: 0, gy: 0, left: 0, top: 0 };
    },
    handleKeyDown(e: {
      key: string;
      metaKey: any;
      ctrlKey: any;
      preventDefault: () => void;
    }) {
      const key = e.key.toLowerCase();
      const isMeta = e.metaKey || e.ctrlKey;

      // フィールド系ショートカット
      if (activeLayer === 'field') {
        if (isMeta && key === 'c') {
          if (selRect) {
            FieldUtils.copyPaste.copySelection();
            FieldUtils.copyPaste.enterPasteMode();
            e.preventDefault();
          }
        } else if (key === 'escape') {
          FieldUtils.copyPaste.cancelPasteMode();
          FieldUtils.copyPaste.clearSelection();
          if (attrMenu.open) MenuUtils.closeAttrMenu();
        }
      }
      // 他レイヤーのショートカットをここに追加してもOK
    },
    handlePointerDown() {
      // メニュー外クリックで閉じる（メニュー側は stopPropagation 済み）
      if (attrMenu.open) MenuUtils.closeAttrMenu();
    },
    onCellContextMenu(
      e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
      x: number,
      y: number,
    ) {
      if (activeLayer !== 'field') return;
      e.preventDefault();
      e.stopPropagation();
      const f = FieldUtils.getField(x, y);
      if (!FieldUtils.attrChange.isAttrApplicable(f)) {
        // 対象外マスはメニュー出さない
        attrMenu = { open: false, gx: 0, gy: 0, left: 0, top: 0 };
        return;
      }
      const rect = gridEl.getBoundingClientRect();
      attrMenu = {
        open: true,
        gx: x,
        gy: y,
        left: Math.max(0, Math.min(rect.width - 140, e.clientX - rect.left)),
        top: Math.max(0, Math.min(rect.height - 90, e.clientY - rect.top)),
      };
    },
  };

  // 右クリックのコンテキストメニュー無効（誤操作防止）
  onMount(() => {
    window.addEventListener('keydown', MenuUtils.handleKeyDown);
    window.addEventListener('pointerdown', MenuUtils.handlePointerDown);
    return () => {
      window.removeEventListener('keydown', MenuUtils.handleKeyDown);
      window.removeEventListener('pointerdown', MenuUtils.handlePointerDown);
    };
  });
</script>

<div class="maparea">
  <!-- ===== ツールバー ===== -->
  <div class="toolbar">
    <div class="group">
      <span class="head">レイヤー</span>
      <label
        ><input type="radio" bind:group={activeLayer} value="field" /> フィールド</label
      >
      <label
        ><input type="radio" bind:group={activeLayer} value="operator" /> オペレーター</label
      >
    </div>
    <div class="child-group">
      {#if activeLayer === 'field'}
        <div class="group">
          <span class="head">フィールドサイズ</span>
          <div>
            <label
              >横
              <select
                bind:value={selW}
                on:change={(e) => resizeGrid(+selW, gridH)}
                class="selectbox"
              >
                {#each sizeOptions as n}<option
                    value={n}
                    class="selectbox-options">{n}</option
                  >{/each}
              </select>
            </label>
            ×
            <label
              >縦
              <select
                bind:value={selH}
                on:change={(e) => resizeGrid(gridW, +selH)}
                class="selectbox"
              >
                {#each sizeOptions as n}<option
                    value={n}
                    class="selectbox-options">{n}</option
                  >{/each}
              </select>
            </label>
          </div>
          <div class="child-group">
            <div class="hint copyinfo">・セルをクリックすると順送り切替</div>
            <div class="hint copyinfo">
              ・コピー&ペースト：Shift＋ドラッグで範囲選択 → Ctrl + C →
              コピー先のセルをクリック
            </div>
            <div class="hint copyinfo">
              ・マス情報追加：地上マス、高台マスで右クリック
            </div>
          </div>
        </div>
      {:else}
        <div class="group">
          <span class="head">オペレーター種別</span>
          <select bind:value={selectedOperator} class="selectbox">
            {#each opLists as op}
              <option value={op} class="selectbox-options">{op.name}</option>
            {/each}
          </select>
          <div class="child-sgroup">
            <div class="hint">
              ・空セルクリックで配置（重複不可）、ドラッグで移動
            </div>
            <div class="hint">・中心マスダブルクリックで向き変更（▲▶▼◀）</div>
            <div class="hint">・中心マス右クリックでスキル変更</div>
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- ===== 盤面 ===== -->
  <div class="stage-wrap">
    <div
      class="grid"
      bind:this={gridEl}
      style={`--w:${gridW}; --h:${gridH}; width:${gridW * CELL}px; height:${gridH * CELL}px; background-size:${CELL}px ${CELL}px;`}
      on:pointermove={OpeUtils.move.onGridPointerMove}
      on:pointerup={OpeUtils.move.onGridPointerUp}
    >
      <!-- フィールドセル -->
      {#each Array(gridH) as _, y}
        {#each Array(gridW) as __, x}
          <button
            class="cell"
            style={`background:${bgOfField(FieldUtils.getField(x, y))}`}
            on:contextmenu={(e) => MenuUtils.onCellContextMenu(e, x, y)}
            on:pointerdown={(e) =>
              FieldUtils.copyPaste.onCellPointerDownSelect(e, x, y)}
            on:click={() => {
              // ★貼り付けモードならここが最優先
              if (pasteMode && activeLayer === 'field') {
                FieldUtils.copyPaste.pasteSelectionAt(x, y); // クリックセルを左上に貼る
                FieldUtils.copyPaste.cancelPasteMode();
                return;
              }
              // 範囲選択直後のクリックは無視
              if (suppressNextCellClick) {
                suppressNextCellClick = false;
                return;
              }
              if (activeLayer === 'field') FieldUtils.cycleField(x, y);
              else OpeUtils.onCellClick(x, y);
            }}
          >
            {#if fields[y][x] === 3}<span class="tag">階</span>{/if}
            {#if fields[y][x] === 4}<span class="tag">敵</span>{/if}
            {#if fields[y][x] === 5}<span class="tag">自</span>{/if}
            {#if FieldUtils.attrChange.isAttrApplicable(FieldUtils.getField(x, y)) && (attrs[y]?.[x] ?? 0) & ATTR_BLOCK}
              <span class="attr-chip block" title="配置不可">禁</span>
            {/if}
            {#if FieldUtils.attrChange.isAttrApplicable(FieldUtils.getField(x, y)) && (attrs[y]?.[x] ?? 0) & ATTR_EFF}
              <span class="attr-chip eff" title="効果">効</span>
            {/if}
          </button>
        {/each}
      {/each}

      <!-- 攻撃範囲（セル単位の半透明オーバレイ） -->
      {#each operators as op}
        {#each OpeUtils.attackTiles(op) as [tx, ty]}
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <div
            class="range"
            style={`left:${tx * CELL}px; top:${ty * CELL}px; width:${CELL}px; height:${CELL}px;`}
            title="攻撃範囲"
          />
        {/each}
      {/each}

      <!-- オペレーター本体（絶対配置） -->
      {#each operators as op}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="op"
          style={`left:${OpeUtils.move.opPixel(op).left}px; 
						top:${OpeUtils.move.opPixel(op).top}px;
						width:${CELL}px; 
						height:${CELL}px; 
						pointer-events:${activeLayer === 'field' ? 'none' : 'auto'};`}
          on:pointerdown={(e) => OpeUtils.move.onOpPointerDown(e, op)}
          on:dblclick={() => OpeUtils.toggleFacingAt(op.x, op.y)}
          on:contextmenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            OpeUtils.cycleSkill(op);
          }}
          title={`${op.name} / 向き: ${op.facing}`}
        >
          <div class="op-body">
            <img src={Icons[op.id - 1]} />
            <button
              class="op-del"
              on:click|stopPropagation|preventDefault={() =>
                OpeUtils.removeOperator(op.id)}
              on:pointerdown|stopPropagation
              title="このオペレーターを削除"
              aria-label="オペレーターを削除">×</button
            >
            <!-- <div class="op-arrow">{arrowFor[op.facing]}</div>
            <div class="op-name">{op.name}</div> -->
            <div class="op-skill">S{(op.skillIdx ?? 0) + 1}</div>
          </div>
        </div>
      {/each}

      <!-- 選択範囲 -->
      {#if selRect}
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <div
          class="selection"
          style={`left:${selRect.x * CELL}px; top:${selRect.y * CELL}px; width:${selRect.w * CELL}px; height:${selRect.h * CELL}px;`}
        />
      {/if}

      <!-- 右クリックメニュー -->
      {#if attrMenu.open}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="attr-menu"
          bind:this={attrMenuEl}
          style={`left:${attrMenu.left}px; top:${attrMenu.top}px;`}
          on:pointerdown|stopPropagation
          on:click|stopPropagation
          on:contextmenu|preventDefault|stopPropagation
        >
          <div class="attr-menu-title">属性</div>
          <label class="row">
            <input
              type="checkbox"
              checked={(FieldUtils.attrChange.getAttr(
                attrMenu.gx,
                attrMenu.gy,
              ) &
                ATTR_BLOCK) !==
                0}
              on:change={(e) =>
                FieldUtils.attrChange.toggleAttrBit(
                  attrMenu.gx,
                  attrMenu.gy,
                  ATTR_BLOCK,
                  e.currentTarget.checked,
                )}
            />
            配置不可
          </label>
          <label class="row">
            <input
              type="checkbox"
              checked={(FieldUtils.attrChange.getAttr(
                attrMenu.gx,
                attrMenu.gy,
              ) &
                ATTR_EFF) !==
                0}
              on:change={(e) =>
                FieldUtils.attrChange.toggleAttrBit(
                  attrMenu.gx,
                  attrMenu.gy,
                  ATTR_EFF,
                  e.currentTarget.checked,
                )}
            />
            効果
          </label>
          <div class="buttons">
            <button
              class="mini"
              on:click={() =>
                (attrMenu = { open: false, gx: 0, gy: 0, left: 0, top: 0 })}
              >閉じる</button
            >
            <button
              class="mini subtle"
              on:click={() => {
                FieldUtils.attrChange.setAttr(attrMenu.gx, attrMenu.gy, 0);
              }}>クリア</button
            >
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- ===== 補助UI ===== -->
  <div class="legend">
    <div><span class="swatch" style="--c:#f4f4f5"></span>未配置</div>
    <div><span class="swatch" style="--c:#a9a9a9"></span>地上</div>
    <div><span class="swatch" style="--c:#bfdbfe"></span>高台</div>
    <div><span class="swatch" style="--c:#fde68a"></span>階段</div>
    <div><span class="swatch" style="--c:#ED1A3D"></span>相手拠点</div>
    <div><span class="swatch" style="--c:#1A3DED"></span>自拠点</div>
  </div>

  <!-- ===== クレジット表記 ===== -->
  <hr />
  <div>
    <p>©Hypergryph Co.,Ltd. All Rights Reserved.</p>
    <p>©2018 Yostar, Inc. All Rights Reserved.</p>
    <p>
      使用しているゲーム画像の著作権および商標権、その他知的財産権は、当該コンテンツの提供元に帰属します。
    </p>
  </div>
</div>

<!-- ===== css ===== -->
<style>
  :root {
    color-scheme: light dark;
  }
  * {
    box-sizing: border-box;
  }

  .maparea {
    width: 770px;
    margin: 10px 30px;
  }

  .toolbar {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    margin: 0px 0 10px;
  }
  .group {
    display: flex;
    column-gap: 10px;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
  }
  .group .head {
    font-weight: 700;
    margin-right: 10px;
  }
  .hint {
    font-size: 12px;
    color: #ffffff;
    width: 100%;
  }
  .hint.copyinfo {
    font-size: 12px;
    color: #ffffff;
  }
  .selectbox-options {
    color: white;
    background: black;
  }
  /** ----------------------- グリッド----------------------- */
  .stage-wrap {
    overflow: auto;
    padding: 10px 20px;
    border: 1px dashed #d4d4d8;
    border-radius: 12px;
  }
  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(var(--w), 1fr);
    grid-template-rows: repeat(var(--h), 1fr);
    background-image: linear-gradient(to right, #0002 1px, transparent 1px),
      linear-gradient(to bottom, #0002 1px, transparent 1px);
    user-select: none;
    touch-action: none;
    column-gap: 0px;
    row-gap: 0px;
  }
  /** ----------------------- マス ----------------------- */
  .cell {
    position: relative;
    width: 100%;
    height: 100%;
    outline: 1px solid #00000011;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .cell:hover {
    outline-color: #3b82f6aa;
  }
  .cell .tag {
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 10px;
    padding: 1px 4px;
    border-radius: 6px;
    background: #0009;
    color: #fff;
  }
  .selection {
    position: absolute;
    border: 2px dashed #3b82f6;
    background: rgba(59, 130, 246, 0.12);
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
  }

  /** ----------------------- 属性 ----------------------- */
  /* 属性バッジ（セル左下/右下） */
  .attr-chip {
    position: absolute;
    bottom: 2px;
    padding: 4px;
    font-size: 20px;
    font-weight: bold;
    line-height: 16px;
    border-radius: 4px;
    color: #fff;
  }
  .attr-chip.block {
    left: 2px;
    background: #ef4444;
  } /* 赤: 配置不可 */
  .attr-chip.eff {
    right: 2px;
    background: #10b981;
  } /* 緑: 効果 */

  /* 属性メニュー（右クリック） */
  .attr-menu {
    position: absolute;
    width: 140px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    padding: 8px;
    z-index: 10;
  }
  .attr-menu .attr-menu-title {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 6px;
  }
  .attr-menu .row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    padding: 4px 0;
  }
  .attr-menu .buttons {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    margin-top: 6px;
  }
  .attr-menu .mini {
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    background: #fff;
    cursor: pointer;
  }
  .attr-menu .mini.subtle {
    color: #374151;
  }
  .attr-menu .mini:hover {
    background: #f3f4f6;
  }
  .range {
    position: absolute;
    background: rgba(239, 68, 68, 0.35); /* 赤半透明 */
    pointer-events: none;
  }

  /** ----------------------- オペレーター ----------------------- */
  .op {
    position: absolute;
    padding: 2px;
    cursor: grab;
  }
  .op .op-del {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 14px;
    font-weight: bolder;
    padding: 0 4px;
    line-height: 16px;
    border-radius: 999px;
    border: 1px solid #ef4444;
    background: #fff;
    color: #ef4444;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  .op .op-del:hover {
    background: #fee2e2;
  }
  .op:active {
    cursor: grabbing;
  }
  .op-body {
    position: relative;
    width: 100%;
    height: 100%;
    background: #111827;
    color: #fff;
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-radius: 8px;
    align-items: center;
    justify-items: center;
  }
  .op-arrow {
    font-size: 10px;
    opacity: 0.8;
  }
  .op-name {
    font-size: 18px;
    line-height: 1;
  }
  .op-skill {
    position: absolute;
    top: -5px;
    left: -5px;
    font-size: 10px;
    padding: 0 4px;
    line-height: 16px;
    border-radius: 6px;
    background: #2563eb;
    color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }
  .legend {
    display: flex;
    gap: 12px;
    margin: 10px 0 4px;
    flex-wrap: wrap;
    color: #374151;
    font-size: 14px;
  }
  .legend .swatch {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: var(--c);
    border: 1px solid #0002;
    border-radius: 3px;
    margin-right: 6px;
  }

  @media (prefers-color-scheme: dark) {
    .stage-wrap {
      border-color: #52525b;
    }
    .cell {
      outline-color: #030000;
    }
    .legend {
      color: white;
    }
    .selectbox {
      border: 1px solid white;
    }
    .selectbox-options {
      color: black;
      background: white;
    }
    .op-skill {
      background: #1d4ed8;
    }
    .attr-chip.block {
      background: #b91c1c;
    }
    .attr-chip.eff {
      background: #059669;
    }
    .attr-menu {
      background: #0b0b0c;
      border-color: #3f3f46;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    }
    .attr-menu .mini {
      background: #0b0b0c;
      border-color: #3f3f46;
      color: #e5e7eb;
    }
    .attr-menu .mini:hover {
      background: #111827;
    }
  }
</style>
