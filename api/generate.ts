export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Missing prompt" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ UPDATED MODEL NAME
    const model = "gemini-1.5-flash"; // or "gemini-1.5-pro"

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error("Gemini API Error:", data.error);
      return new Response(JSON.stringify({ 
        error: data.error.message || "Gemini API error" 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Extract text safely
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from model.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("SERVER ERROR:", error);
    return new Response(JSON.stringify({ 
      error: error.message || "Server error" 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
