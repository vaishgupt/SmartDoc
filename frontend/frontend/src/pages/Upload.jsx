import { Upload } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UploadDoc = () => {
  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // Very simple upload logic to your backend
      const formData = new FormData();
      formData.append("pdf", file); // field name MUST match backend: upload.single("pdf")

      const baseUrl =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

      const res = await fetch(`${baseUrl}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Upload failed");
      }

      toast.success("Document uploaded!");

      // After a short delay, go to ask page
      setTimeout(() => {
        navigate("/ask");
      }, 1500);
    } catch (err) {
      console.error("Upload error:", err);
      toast.error(`Upload failed: ${err.message}`);
    }
  };

  return (
    <div className="page-container">
      <h4>Hello! 👋</h4>
      <p>What are we learning today?</p>
      <h6>Unlock the full power of your AI</h6>

      <label>
        <Upload size={48} color="blue" />
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>

      <ToastContainer />

      <p>Upload the document</p>
    </div>
  );
};

export default UploadDoc;
