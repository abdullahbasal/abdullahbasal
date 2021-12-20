import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Navbar.css";
import logo from "../Assets/code24.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Container className="navbar-container">
      <Row>
        <Col md="4" className="navbar-logo-col">
          <Link to="/">
            <img src={logo} style={{ verticalAlign: "middle" }} />{" "}
            <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>
              Abdullah Başal
            </h5>
          </Link>
        </Col>
        <Col md="8" className="navbar-list-col">
          <ul>
            <Link to="/">
              <li className="navbar-li-item">Anasayfa</li>
            </Link>
            <Link to="/About">
              <li className="navbar-li-item">Hakkımda</li>
            </Link>
            <Link to="/Resume">
              <li className="navbar-li-item">Öz Geçmiş</li>
            </Link>
            <Link to="/Contact">
              <li className="navbar-li-item">İletişim</li>
            </Link>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
