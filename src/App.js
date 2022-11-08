
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import NavBar from "./Navbar"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
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
