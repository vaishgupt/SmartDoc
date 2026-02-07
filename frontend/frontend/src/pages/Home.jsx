import botimage from "../assets/botimage.png"
import { Link } from "react-router-dom";
import { Zap, Target, Brain, FileText } from "lucide-react";

const Home=()=>{
  return(
    <div className="page-container">
      <h1>
        <FileText size={32} style={{ verticalAlign: "middle", marginRight: "10px" }} />
        Meet the SmartDoc!
      </h1>
      <h5>
        <Zap size={18} style={{ verticalAlign: "middle", marginRight: "5px" }} />
        Fast 
        <span style={{ margin: "0 10px" }}>.</span>
        <Target size={18} style={{ verticalAlign: "middle", marginRight: "5px" }} />
        ACCURATE 
        <span style={{ margin: "0 10px" }}>.</span>
        <Brain size={18} style={{ verticalAlign: "middle", marginRight: "5px" }} />
        AI-POWERED
      </h5>
      <p>Summarize PDFs, Docs & Text instantly</p>
      <img src={botimage} alt="image" />
      <div className="button-container">
        <Link to="/upload"><button>Try Now</button></Link>
      </div>
    </div>
  )
}

export default Home;