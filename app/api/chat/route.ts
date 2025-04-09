// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error: unknown) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
