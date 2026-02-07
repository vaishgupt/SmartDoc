import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const loadPDFText = async (filePath) => {
  console.log("Reading PDF from :", filePath);

  const loader = new PDFLoader(filePath, { splitPages: false });
  const docs = await loader.load();
  const text = docs[0]?.pageContent ?? "";

  console.log("PDF text length", text.length);

  return text;
};

export default loadPDFText;
