export async function onRequest(context) {
  const data = [
    { name: "標準", code: "STD" },
    { name: "浴室仕様", code: "BATH" }
  ];

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
