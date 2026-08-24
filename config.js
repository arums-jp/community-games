// =============================================
// 設定ファイル
// このファイルを編集してスプレッドシートのIDとAPIキーを設定してください
// =============================================

const CONFIG = {
  // 今月QRコードから案内するゲーム（quiz/、crossword/、visual-quiz/ など）
  ACTIVE_GAME: 'quiz/',

  // 月替わり設定を管理するシート名。A列に設定名、B列に値を入力する
  CONTROL_SHEET: '設定',

  // 景品企画の表示設定
  MONTH_LABEL: '2026年8月のチャレンジ',
  CHALLENGE_TITLE: '地域クイズ 景品チャレンジ',
  ACHIEVEMENT_MIN_SCORE: 1.0,
  PRIZE_GUIDANCE: 'この画面をコミュニティセンターの職員にお見せください。',

  // Google スプレッドシートのID（URLの /d/ と /edit の間の文字列）
  SPREADSHEET_ID: '1ywGFr5-XRkMKBUywETaW-LcaNcLoUYUwc1FOyGHDAp4',

  // Google Sheets API キー
  API_KEY: 'AIzaSyBmRZpSdiq5bhLFsfg2lUN0hZ_VnVZ70YM',

  // スプレッドシートのシート名
  SHEET_NAME: 'クイズ',

  // 出題数などの既定値
  // ※スプレッドシートの「設定」シートに値があればそちらが優先される
  MAX_QUESTIONS: 10,              // クイズの出題数
  CROSSWORD_MAX_QUESTIONS: 10,    // クロスワードの出題数
  MEMORY_PAIRS: 8,                // 絵合わせのペア数（6/8/10/12 のみ）
  VISUAL_MAX_QUESTIONS: 10,       // 写真・シルエットクイズの出題数
  WORD_ORDER_MAX_QUESTIONS: 10,   // 文字並べ替えクイズの出題数

  // 絵合わせ: カードデータのシート名
  MEMORY_SHEET: '絵合わせ',

  // クロスワード: 問題データのシート名
  CROSSWORD_SHEET: 'クロスワード',

  // 写真・シルエットクイズ: 問題データのシート名
  VISUAL_SHEET: '写真クイズ',

  // 文字並べ替えクイズ: 問題データのシート名
  WORD_ORDER_SHEET: '文字並べ替え',
};
