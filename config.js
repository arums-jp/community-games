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

  // 出題する最大問題数（スプレッドシートの問題数が少ない場合は全問出題）
  MAX_QUESTIONS: 10,

  // 絵合わせ: カードデータのシート名
  MEMORY_SHEET: '絵合わせ',

  // クロスワード: 問題データのシート名
  CROSSWORD_SHEET: 'クロスワード',

  // 写真・シルエットクイズ: 問題データのシート名
  VISUAL_SHEET: '写真クイズ',

  // 文字並べ替えクイズ: 問題データのシート名
  WORD_ORDER_SHEET: '文字並べ替え',
};
