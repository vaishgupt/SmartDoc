
import { useState } from "react"
import image from "../assets/image.png"
import { ArrowUpFromLine } from 'lucide-react'
const AskQues=()=>{

  const [ques,setQues] = useState("");
  const [ans,setAns] = useState("");
  const [status,setStatus] = useState("");

  const handleSubmit=async ()=>{
      if(!ques.trim()){
        return;
      }

      try{
        setStatus("Asking...");
        setAns("");

        const baseURL=  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

        const res= await fetch(`${baseURL}/ask`,{
          method:"POST",
          headers:{ "Content-Type": "application/json"},
          body : JSON.stringify({ question: ques }),
        })

        const data= await res.json();
        if(!res.ok){
          throw new Error(data.error || "Failed to get answer");
        }

        setStatus("");
        setAns(data.answer || "(no answer text)");

      }catch(err){
        setStatus(`Error: ${err.message}`);
        setAns("");
      }
  }

  return(
    <div className="page-container">
      <h1>Welcome!</h1>
      <img src={image} alt="image"/>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", alignItems: "center", maxWidth: "500px", margin: "0 auto" }}>
        <input 
          type="text"
          placeholder="Ask Question..."
          value={ques}
          onChange={(e)=>setQues(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit}><ArrowUpFromLine /></button>
      </div>
      
      {status && <p className="status-message">{status}</p>}
      {ans && <p className="answer-text">{ans}</p>}
    </div>
  )
}

export default AskQues;