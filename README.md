# Smart-Doc

A powerful RAG (Retrieval Augmented Generation) application that allows you to upload PDF documents and ask questions related to content of pdf.

## 🎯 Features

- **PDF Upload**: Easily upload PDF documents to the system
- **Smart Q&A**: Ask questions about your documents and get accurate answers using AI
- **Vector Search**: Uses FAISS (Facebook AI Similarity Search) for efficient document retrieval
- **Context-Aware Responses**: Answers are generated based on the document content using the Gemini API
- **User-Friendly Interface**: Clean React-based frontend for easy interaction
- **Real-time Processing**: Instant PDF parsing and embedding generation

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **LangChain** - For LLM orchestration
- **Google Gemini API** - AI model for question answering
- **FAISS** - Vector database for document retrieval
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction
- 

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - UI icons
- **React Toastify** - Notifications
- **TypeScript/JavaScript** - Language

## 📦 Project Structure

```
smart-doc/
├── backend/
│   ├── rag/                 # Core RAG pipeline
│   │   ├── embeddings.js    # Generate embeddings
│   │   ├── loader.js        # Load PDF files
│   │   ├── qaChain.js       # Question-answering chain
│   │   ├── retriever.js     # Retrieve relevant documents
│   │   ├── splitter.js      # Split text into chunks
│   │   └── vectorStore.js   # Vector store management
│   ├── routes/              # API endpoints
│   │   ├── uploadRoute.js   # PDF upload endpoint
│   │   └── askRoute.js      # Question endpoint
│   ├── faiss/               # FAISS index storage
│   ├── uploads/             # Uploaded PDF files
│   ├── server.js            # Express server
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables
│
└── frontend/
    └── frontend/            # React application
        ├── src/
        │   ├── pages/       # Page components
        │   │   ├── Home.jsx
        │   │   ├── Upload.jsx
        │   │   └── AskQues.jsx
        │   ├── App.jsx      # Main application
        │   └── main.jsx     # Entry point
        ├── package.json     # Frontend dependencies
        └── .env             # Frontend environment variables
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd smart-doc/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in the backend directory
   ```env
   GEMINI_API=your_google_gemini_api_key_here
   ```

4. **Start the backend server**
   ```bash
   node server.js
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd smart-doc/frontend/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** (if needed for API endpoint configuration)
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Upload PDF
- **Endpoint**: `POST /upload`
- **Content-Type**: `multipart/form-data`
- **Parameter**: `pdf` (file)
- **Response**: 
  ```json
  {
    "message": "PDF uploaded and processed successfully",
    "file": "uploaded_file_name"
  }
  ```

### Ask Question
- **Endpoint**: `POST /ask`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "question": "Your question about the document"
  }
  ```
- **Response**:
  ```json
  {
    "answer": "AI-generated answer based on document content"
  }
  ```

## 💡 How It Works

1. **Document Upload**: User uploads a PDF file through the frontend
2. **Text Extraction**: Backend extracts text from the PDF
3. **Text Chunking**: Large text is split into smaller chunks for better processing
4. **Embedding Generation**: Each chunk is converted to embeddings using Google's embedding model
5. **Vector Storage**: Embeddings are stored in FAISS index for fast retrieval
6. **Question Processing**: When a question is asked, relevant document chunks are retrieved
7. **Response Generation**: Google Gemini API generates an answer based on retrieved context

## 🔧 Environment Variables

### Backend (.env)
```env
GEMINI_API=your_google_gemini_api_key
```

### Frontend (.env) - Optional
```env
VITE_API_URL=http://localhost:5000
```

## 🎨 Frontend Pages

- **Home**: Landing page and navigation hub
- **Upload**: Upload PDF documents
- **Ask Questions**: Ask and get answers about uploaded documents

## 📝 Usage Example

1. Open the application in your browser
2. Navigate to the Upload page
3. Select and upload a PDF file
4. Wait for processing to complete
5. Go to Ask Questions page
6. Type your question about the document
7. Get instant AI-powered answers

## 🐛 Troubleshooting

### CORS Issues
- Ensure CORS is enabled in the backend
- Check that frontend URL is allowed in backend CORS configuration

### PDF Upload Fails
- Verify the file is a valid PDF
- Check the `uploads/` directory has write permissions
- Ensure file size is reasonable

### No Answers Found
- Make sure PDF was successfully uploaded and processed
- Check that your question is related to the document content
- Verify the GEMINI_API key is valid

### Cannot Connect to Backend
- Ensure backend server is running on port 5000
- Check firewall settings
- Verify the API endpoint in frontend configuration

## 📄 License

ISC

## 👨‍💻 Development

For development with hot reload:

**Backend**: 
```bash
npm install --save-dev nodemon
nodemon server.js
```

**Frontend**:
```bash
npm run dev
```

## 🚦 Current Status

- ✅ PDF Upload functionality
- ✅ Vector embedding and storage
- ✅ RAG-based Q&A system
- ✅ React frontend interface
- ✅ FAISS vector search

## 📚 Dependencies Overview

- **LangChain**: Unified framework for LLM applications
- **Google Generative AI**: Gemini API integration
- **FAISS**: High-performance similarity search
- **Express**: Web framework
- **Multer**: Middleware for file uploads
- **Vite**: Next-generation build tool

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Last Updated**: February 2026
