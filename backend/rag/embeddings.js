// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

// const createEmbeddings = async (docs) => {
//   console.log("Creating embeddings...");

//   const embeddings = new GoogleGenerativeAIEmbeddings({
//     apiKey: process.env.GEMINI_API,
//    model: "gemini-embedding-001",
//   });

//   const texts = docs.map((doc) => doc.pageContent);
//   if (texts.length === 0) return [];

//   const vectors = await embeddings.embedDocuments(texts);
//   console.log("Embedding vector length:", vectors[0]?.length ?? 0);
//   return vectors;
// };

// export default createEmbeddings;



import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const getEmbeddings = () => {
  return new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API,
    model: "gemini-embedding-001",
  });
};

export default getEmbeddings;
