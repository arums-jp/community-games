// =============================================
// 設定ファイル
// このファイルを編集してスプレッドシートのIDとAPIキーを設定してください
// =============================================

const CONFIG = {
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
  MEMORY_PAIRS: 8,                // 絵合わせのペア数

  // 絵合わせ: カードデータのシート名
  MEMORY_SHEET: '絵合わせ',

  // クロスワード: 問題データのシート名
  CROSSWORD_SHEET: 'クロスワード',
};
