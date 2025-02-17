import { OpenAI } from "openai";

let openAIClientType: OpenAI | null = null;

const OpenAIClient = () => {
  if(!openAIClientType){
    openAIClientType = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  };
  return openAIClientType;
};


export default OpenAIClient;