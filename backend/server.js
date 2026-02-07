import "dotenv/config";
import express from "express";
import uploadRoute from "./routes/uploadRoute.js";
import askRouter from "./routes/askRoute.js"
import cors from "cors"

const app=express();
app.use(express.json());

const PORT=5000;

app.use(cors());

app.use("/",uploadRoute);
app.use("/",askRouter);
console.log("GOOGLE_API_KEY:", process.env.GEMINI_API ? "LOADED" : "NOT LOADED");



app.listen(PORT,()=>{
  console.log(`Server running at PORT ${PORT}`);
})