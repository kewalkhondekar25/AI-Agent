import OpenAI from "openai";

export type AIMessage = OpenAI.Chat.Completions.ChatCompletionAssistantMessageParam | { role: "user"; content: string };

export type MessageWithMetaData = AIMessage & { id: string, createdAt: string }; 

export type DataType = { messages: MessageWithMetaData[] };