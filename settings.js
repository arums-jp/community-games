// =============================================
// 「設定」シート読み込み（全ゲーム共通）
//
// スプレッドシートの「設定」シートに A列=設定名 / B列=値 の形で
// 設定を書いておくと、各ゲームが起動時にその値を読み込む。
// 設定シートが無い・値が空・数値でない場合は config.js の既定値を使う。
//
//   A列（設定名）        B列（値）
//   クイズ出題数          10
//   クロスワード出題数     10
//   絵合わせペア数         8      ← 6 / 8 / 10 / 12 のいずれか
// =============================================

const SETTINGS_SHEET_NAME = '設定';

// 設定名 → CONFIG のキー名
const SETTINGS_KEY_MAP = {
  'クイズ出題数':        'MAX_QUESTIONS',
  'クロスワード出題数':   'CROSSWORD_MAX_QUESTIONS',
  '絵合わせペア数':      'MEMORY_PAIRS',
};

// 値を特定の選択肢に限定する設定
// 絵合わせは4列グリッドなので、カード枚数（ペア数×2）が4の倍数になる値だけ許可する。
// 範囲外の値が入力された場合は config.js の既定値のままにする。
const SETTINGS_ALLOWED_VALUES = {
  'MEMORY_PAIRS': [6, 8, 10, 12],
};

/**
 * 「設定」シートを読み込んで CONFIG を上書きする。
 * 失敗しても例外は投げず、config.js の既定値のまま続行する。
 */
async function loadSheetSettings() {
  if (!CONFIG.SPREADSHEET_ID || !CONFIG.API_KEY) return;

  const range = encodeURIComponent(SETTINGS_SHEET_NAME + '!A1:B100');
  const url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
    CONFIG.SPREADSHEET_ID + '/values/' + range + '?key=' + CONFIG.API_KEY;

  try {
    const resp = await fetch(url);
    if (!resp.ok) return; // 設定シートが無い場合など → 既定値を使う

    const json = await resp.json();
    const rows = json.values || [];

    rows.forEach(function(row) {
      const name = String(row[0] || '').trim();
      const raw  = String(row[1] || '').trim();
      const key  = SETTINGS_KEY_MAP[name];
      if (!key || raw === '') return;

      const num = Number(raw);
      if (isNaN(num) || num <= 0) return;

      const allowed = SETTINGS_ALLOWED_VALUES[key];
      if (allowed && allowed.indexOf(num) === -1) return; // 選択肢外 → 既定値のまま

      CONFIG[key] = num;
    });
  } catch (ex) {
    // ネットワークエラー等 → 既定値のまま続行
  }
}
