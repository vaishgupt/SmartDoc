import express from "express";
import runQA from "../rag/qaChain.js";

const router = express.Router();

router.post("/ask", async(req,res)=>{
  const {question} = req.body;

  if(!question){
    return res.status(400).json({
      error: "Question is required"
    })
  }

  try{
    const answer = await runQA(question);
    res.json({answer});
  }catch(err){
    console.error(err);
    res.status(500).json({
      error:"Failed to answer question"
    })
    
  }
})

export default router;