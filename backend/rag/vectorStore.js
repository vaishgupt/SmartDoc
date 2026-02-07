import { FaissStore } from "@langchain/community/vectorstores/faiss";
import getEmbeddings from "./embeddings.js";

const createVectorStore = async (docs) => {
  console.log("Creating FAISS vector store...");

  const embeddings = getEmbeddings();

  const store = await FaissStore.fromDocuments(docs, embeddings);

  await store.save("./faiss"); // persists locally
  console.log("FAISS store saved");

  return store;
};

export default createVectorStore;
