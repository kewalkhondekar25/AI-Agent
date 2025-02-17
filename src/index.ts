import dotenv from "dotenv";
dotenv.config({ path: ".env"});
import { chatCompletion } from "./controllers/chat.controller";

const prompt = process.argv[2];

const main = async () => {
  console.log("Building AI Agent From Scratch: ");
  const output = await chatCompletion(prompt);
  console.log(output);
};

main();