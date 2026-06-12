export async function onRequest(context) {
  const url = new URL(context.request.url);
  const type = url.searchParams.get("type");
  const w = Number(url.searchParams.get("w"));
  const h = Number(url.searchParams.get("h"));
  const color = url.searchParams.get("color");
  const bath = url.searchParams.get("bath");

  // ★ここに本番ロジックを移植する
  const price = Math.round(w * h * 0.1);

  return new Response(JSON.stringify({ price }), {
    headers: { "Content-Type": "application/json" }
  });
}
