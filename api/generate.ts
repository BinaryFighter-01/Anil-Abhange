import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const apiKey = process.env.AI_API_KEY; // <-- MUST MATCH VERCEL VARIABLE NAME

    if (!apiKey) {
      return res.status(500).json({ error: "No API key found on server." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    const text =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini.";

    res.status(200).json({ reply: text });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "AI request failed", details: err.toString() });
  }
}
