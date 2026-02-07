import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import getRetriever from "./retriever.js";

const runQA= async(question)=>{
  console.log("User question ", question);

  const retriever = await getRetriever();
  const docs= await retriever.invoke(question);

  console.log("Relevant chunks found ",docs.length);
  
  const context = docs.map(d=>d.pageContent).join("\n\n");

  const model = new ChatGoogleGenerativeAI({
    apiKey : process.env.GEMINI_API,
   model: "gemini-3-flash-preview",
  })

  const prompt= `
  Answer the question ONLY using the context below.
If the answer is not in the context, say "Not found in document".
  

  Context: ${context}

  Question : ${question}`;

  const response = await model.invoke(prompt);
  return response.content;
  
}

export default runQA;