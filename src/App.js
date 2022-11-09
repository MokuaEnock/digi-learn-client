import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Forgot from "./components/Forgot"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./Contact"

function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Forgot />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
