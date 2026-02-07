import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitTextIntoChunks = async(text)=>{
  console.log("Splitting text into chunks...");
  
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
  })


  const docs= await splitter.createDocuments([text]);

  console.log("Total chunks created: ", docs.length);

  return docs;
  
}

export default splitTextIntoChunks;