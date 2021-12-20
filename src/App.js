import React from "react";
import Particles from "./Components/Particles";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Cursor from "./Cursor";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Container className="App">
          <Particles></Particles>
          <Cursor />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Abdullahbasal" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
