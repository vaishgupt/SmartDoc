import { FaissStore } from "@langchain/community/vectorstores/faiss";
import getEmbeddings from "./embeddings.js";
import fs from "fs";

const VECTOR_PATH="./faiss";

const getRetriever = async()=>{
  console.log("Loading FAISS vector store...");

  if(!fs.existsSync(VECTOR_PATH)){
    throw new Error("FAISS store not found.Upload PDF first.");
  }

  const embeddings = getEmbeddings();
  const vectorStore = await FaissStore.load(VECTOR_PATH,embeddings);

  console.log("FAISS vector store loaded");

  return vectorStore.asRetriever({k: 3});
  
  
}

export default getRetriever;