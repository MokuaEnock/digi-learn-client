import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import Lecturer from "./components/Lecturers/Lecturer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/lecturer" element={<Lecturer />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
