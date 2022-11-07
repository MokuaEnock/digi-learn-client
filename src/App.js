
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
