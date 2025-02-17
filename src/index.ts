// import dotenv from "dotenv";
// dotenv.config({ path: ".env"});
import 'dotenv/config'
import { chatCompletion } from "./controllers/chat.controller";
import { addMessages, getMessages, memoryChatCompletion } from "./controllers/memorychat.controller";

const prompt = process.argv[2];

const main = async () => {
  console.log("Building AI Agent From Scratch: ");

  //transactional-chat
  // const output = await chatCompletion(prompt);
  
  //memory-chat
  await addMessages([{ role: "user", content: prompt }]);
  const messages = await getMessages();

  const output = await memoryChatCompletion({ messages });
  await addMessages([{ role: "assistant", content: output.content }]);

  console.log(output.content);

};

main();