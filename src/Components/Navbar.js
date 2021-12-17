import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Navbar.css";
import logo from "../Assets/code24.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Container className="navbar-container">
      <Row>
        <Col md="6" className="navbar-logo-col">
          <Link to="/">
            <img src={logo} style={{ verticalAlign: "middle" }} />{" "}
            <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>
              Abdullah Başal
            </h5>
          </Link>
        </Col>
        <Col md="6" className="navbar-list-col">
          <ul>
            <Link to="/">
              <li>Anasayfa</li>
            </Link>
            <li>Hakkımda</li>
            <li>Öz Geçmişim</li>
            <li>İletişim</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
