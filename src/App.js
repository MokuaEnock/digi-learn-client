import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Forgot from "./components/Auth/Forgot";
import NavBar from "./components/Navbar";
import Home from "./components/landing/Home";
import Contact from "./components/Contact";
import Lecturer from "./components/Lecturers/Lecturer";
import About from "./components/about/About";
import Students from "./components/students/Students";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Forgot />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/lecturer" element={<Lecturer />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
