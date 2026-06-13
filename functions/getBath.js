// functions/getBath.js
export async function onRequest() {
  const bath = [
    { value: "なし", display: "なし" },
    { value: "浴室仕様", display: "浴室仕様" }
  ];

  return new Response(JSON.stringify(bath), {
    headers: { "Content-Type": "application/json" }
  });
}
