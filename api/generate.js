const OpenAI = require("openai");

module.exports = async (req, res) => {
  try {
    // Allow only POST
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    // Load API key from Vercel env
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "OPENAI_API_KEY missing" });
    }

    const client = new OpenAI({ apiKey });

    // 🔥 OpenAI Responses API call
    const response = await client.responses.create({
      model: "gpt-5-nano",
      input: prompt,
      store: false
    });

    // Extract text safely
    const finalText =
      response.output &&
      response.output[0] &&
      response.output[0].content &&
      response.output[0].content[0] &&
      response.output[0].content[0].text
        ? response.output[0].content[0].text
        : "No response received.";

    return res.status(200).json({ reply: finalText });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({
      error: err.message || "Something went wrong"
    });
  }
};
