import dotenv from "dotenv";
dotenv.config({ path: ".env"});
import { chatCompletion } from "./controllers/chat.controller";

console.log("Building AI Agent From Scratch");

const main = async () => {
  const output = await chatCompletion("hi");
  console.log(output);
};

main();