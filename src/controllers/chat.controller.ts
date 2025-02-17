import { openai } from "../utils/openai";

const chatCompletion = async (prompt: string) => {
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.1,
    messages: [{ role: "user", content: prompt }]
  });

  return response.choices[0].message.content;
  
};

export { chatCompletion };