import express from "express";
import multer from "multer";
import loadPDFText from "../rag/loader.js"
import splitTextIntoChunks from "../rag/splitter.js";
import createEmbeddings from "../rag/embeddings.js";
import createVectorStore from "../rag/vectorStore.js";



const router = express.Router();


const storage = multer.diskStorage({
  destination: (req,file, cb)=>
    cb(null,"uploads/"),

  filename:(req,file,cb)=>{
    cb(null,Date.now() + "-" + file.originalname);
  }
})

const upload = multer({ storage });

router.post("/upload",upload.single("pdf"),async (req,res)=>{
  try {
    if (!req.file?.path) {
      return res.status(400).json({ message: "No PDF file uploaded (field name must be `pdf`)." });
    }

    console.log("File received", req.file.fieldname);

    const filePath = req.file.path;
    const text = await loadPDFText(filePath);
    const chunks = await splitTextIntoChunks(text);

    let vectorStoreSaved = false;
    try {
      await createVectorStore(chunks);
      vectorStoreSaved = true;
    } catch (e) {
      console.warn("Vector store step failed (continuing):", e?.message ?? e);
    }
    // Create embeddings once, and report a dimension (if it works).
    let embeddingVectorSize = 0;
    try {
      const embeddings = createEmbeddings();
      const sample = chunks[0]?.pageContent ?? "";
      if (sample) {
        const v = await embeddings.embedQuery(sample);
        embeddingVectorSize = v?.length ?? 0;
      }
    } catch (e) {
      console.warn("Embedding step failed (continuing):", e?.message ?? e);
    }

    return res.json({
      message: "PDF uploaded successfully",
      textPreview: text.substring(0, 300),
      totalChunks: chunks.length,
      firstChunkPreview: chunks.length ? chunks[0].pageContent.substring(0, 200) : "",
      embeddingVectorSize,
      vectorStoreSaved,
    });

  } catch (err) {
    console.error("Upload processing failed:", err);
    return res.status(500).json({
      message: "Upload failed",
      error: err?.message ?? String(err),
    });
  }
  
})

export default router;