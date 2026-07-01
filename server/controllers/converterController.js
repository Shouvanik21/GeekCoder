import groq from "../config/groq.js";

export const convertCode = async (req, res) => {
  try {
    const { sourceLanguage, targetLanguage, code } = req.body;

    if (!sourceLanguage || !targetLanguage || !code) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

  const prompt = `
You are an expert software engineer.

Convert the following ${sourceLanguage} code into ${targetLanguage}.

STRICT RULES:
- Return ONLY the converted source code.
- DO NOT include markdown.
- DO NOT include triple backticks.
- DO NOT write \`\`\`${targetLanguage}.
- DO NOT explain anything.
- Output must begin directly with the first line of code.

Source Code:

${code}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    let convertedCode = completion.choices[0]?.message?.content || "";

    // Remove markdown code fences
    convertedCode = convertedCode
      .replace(/^```[\w-]*\n?/i, "") // Remove opening ```python, ```js, etc.
      .replace(/\n?```$/i, "") // Remove closing ```
      .trim();

    res.status(200).json({
      success: true,
      convertedCode,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to convert code.",
    });
  }
};
