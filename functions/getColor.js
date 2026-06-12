export async function onRequest(context) {
  const data = [
    { name: "アイボリーホワイト（IW）", category: "単色" },
    { name: "ピュアホワイト（PW）", category: "単色" },
    { name: "ブロンズ（BR）", category: "単色" },
    { name: "白木（N2）", category: "木目" },
    { name: "チェリー（N3）", category: "木目" }
  ];

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
