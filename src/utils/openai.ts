import { OpenAI } from "openai";

const globalForOpenAI = global as unknown as { openai?: OpenAI };

const openai = globalForOpenAI.openai ?? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

if (!globalForOpenAI.openai) {
  globalForOpenAI.openai = openai;
}

export { openai };
