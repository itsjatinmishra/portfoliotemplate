import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import Service from "./components/Service";
import Contact from "./components/Contact";


const App = () => {
  return (
    <Router>
      <Sidebar />
      <main className="ps-lg-5" style={{ zIndex: -1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* {activeSection && <p>Active Section: {activeSection}</p>} */}
    </Router>
  );
};

export default App;
