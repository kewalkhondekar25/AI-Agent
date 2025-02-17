import type { AIMessage, DataType, MessageWithMetaData } from "../utils/types";
import { v4 as uuidv4 } from "uuid";
import { openai } from "../utils/openai";
import { JSONFilePreset } from 'lowdb/node';

//add messages to inmemory db/file
const addMetaData = (message: AIMessage): MessageWithMetaData => {
  return {
    ...message,
    id: uuidv4(),
    createdAt: new Date().toISOString()
  }
};

//remove messages meta data (id, timestamps) to AI
const removeMetaData = (message: MessageWithMetaData): AIMessage => {
  const { id, createdAt, ...messageWithOutMetaData } = message;
  return messageWithOutMetaData;
};

//data
const defaultData: DataType = { messages: []}

//read DB
const getDB = async () => {
  const db = await JSONFilePreset<DataType>('db.json', defaultData)
  return db;
};

//add meta-data & msg to db
const addMessages = async (messages: AIMessage[])  => {
  const db = await getDB();
  db.data.messages.push(...messages.map(addMetaData));
  await db.write();
};

//get & remove meta-data from msg
const getMessages = async () => {
  const db = await getDB();
  return db.data.messages.map(removeMetaData);
};

const memoryChatCompletion = async ({ messages}: { messages: AIMessage[]}) => {
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages
  });

  return response.choices[0].message;
};

export { 
  getMessages,
  addMessages,
  memoryChatCompletion 
};


