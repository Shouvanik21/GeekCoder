import groq from "../config/groq.js";

export const detectLanguage = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Code is required.",
      });
    }

    const prompt = `
You are an expert programming language detector.

Identify the programming language of the following code.

Rules:
- Return ONLY the language name.
- Do not explain anything.
- Examples:
JavaScript
Python
Java
C++
C#
Go
Rust
PHP
TypeScript
HTML
CSS

Code:

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
      temperature: 0,
    });

    const language =
      completion.choices[0]?.message?.content.trim();

    res.json({
      success: true,
      language,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to detect language.",
    });
  }
};