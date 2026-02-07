import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { FileText } from "lucide-react";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import AskQues from "./pages/AskQues";


const App=()=>{
  return(
    <div>
      <div className="header-icon">
        <FileText size={32} color="#4CAF50" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/upload" element={<Upload/>}></Route>
          <Route path="/ask" element={<AskQues/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;