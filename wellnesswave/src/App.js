import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logoww.png';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App