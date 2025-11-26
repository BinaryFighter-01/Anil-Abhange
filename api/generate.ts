import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt provided." });
    }

    const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

    const result = await model.generateContent([
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]);

    const text = result.response.text();
    return res.status(200).json({ reply: text || "No response from Gemini." });

  } catch (error: any) {
    console.error("Gemini API ERROR:", error.message || error);
    return res.status(500).json({
      error: "Gemini API failed",
      details: error.message || error
    });
  }
}
