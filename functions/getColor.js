// functions/getColor.js
export async function onRequest() {
  const colors = [
    // ロール式
    { type: "ロール式網戸", display: "アイボリーホワイト（IW）", group: "単色" },
    { type: "ロール式網戸", display: "ピュアホワイト（PW）", group: "単色" },
    { type: "ロール式網戸", display: "ブロンズ（BR）", group: "単色" },
    { type: "ロール式網戸", display: "白木（N2）", group: "木目" },
    { type: "ロール式網戸", display: "チェリー（N3）", group: "木目" },

    // スライド式
    { type: "スライド式網戸", display: "アイボリーホワイト（IW）", group: "単色" },
    { type: "スライド式網戸", display: "ブロンズ（BR）", group: "単色" },
    { type: "スライド式網戸", display: "シルバー（SL）", group: "単色" },
    { type: "スライド式網戸", display: "ブラック（BL）", group: "単色" },
    { type: "スライド式網戸", display: "ミルキーメイプル（MM）", group: "木目" },
    { type: "スライド式網戸", display: "アーモンドメイプル（AM）", group: "木目" },
    { type: "スライド式網戸", display: "チョコメイプル（CM）", group: "木目" },
  ];

  return new Response(JSON.stringify(colors), {
    headers: { "Content-Type": "application/json" }
  });
}
