export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  try {
    const { prompt } = await req.json();

    const apiKey = process.env.VITE_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing API key" }),
        { status: 500 }
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const gRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    const data = await gRes.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini.";

    return new Response(JSON.stringify({ reply: text }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server crashed", details: err.message }),
      { status: 500 }
    );
  }
}
