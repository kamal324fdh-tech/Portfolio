
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Project from "./component/project";
import Resume from "./component/resume";
import Contact from "./component/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

