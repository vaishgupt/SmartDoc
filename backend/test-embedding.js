import dotenv from "dotenv";
dotenv.config(); // MUST be first

import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

console.log(
  "GOOGLE_API_KEY:",
  process.env.GEMINI_API ? "LOADED" : "NOT LOADED"
);

const embeddings = new GoogleGenerativeAIEmbeddings({
   apiKey: process.env.GEMINI_API,
  model: "gemini-embedding-001",
});

async function run() {
  const vector = await embeddings.embedQuery("Hello world");
  console.log("Vector length:", vector.length);
}

run();
