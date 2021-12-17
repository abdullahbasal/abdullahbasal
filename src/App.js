import React from "react";
import Particles from "./Components/Particles";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Cursor from "./Cursor";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";

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
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
