import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const url =
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.VITE_API_KEY}`;

    const response = await fetch(url, {
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

    const data = await response.json();

    console.log("🔥 RAW GEMINI RESPONSE:", data);

    // Extract text safely
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

    if (!reply) {
      return res.status(500).json({
        error: "Gemini returned no text",
        raw: data
      });
    }

    return res.status(200).json({ reply });

  } catch (err: any) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
