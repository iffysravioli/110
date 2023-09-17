import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Auth from "./Auth"
import Chatbot from "./Chatbot"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App