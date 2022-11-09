
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Login from "./components/Login"
import NavBar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        </Routes >
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
