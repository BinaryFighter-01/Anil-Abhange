import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const genAI = new GoogleGenerativeAI(apiKey, {
      apiVersion: "v1beta"
    });

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
}
