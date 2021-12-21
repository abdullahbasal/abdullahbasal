import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "../Styles/Navbar.css";
import logo from "../Assets/code24.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Container className="navbar-container">
      <Row>
        <Col md="4" className="navbar-logo-col">
          <Link to="/abdullahbasal">
            <img src={logo} style={{ verticalAlign: "middle" }} />{" "}
            <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>
              Abdullah Başal
            </h5>
          </Link>
        </Col>
        <Col md="8" className="navbar-list-col">
          <ul>
            <Link to="/abdullahbasal">
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

      <Dropdown
        style={{ textAlign: "center" }}
        className="navbar-dropdown-menu"
      >
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Menü
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item style={{ textAlign: "center" }}>
            <Link to="/abdullahbasal">
              <p style={{ color: "black" }}>Anasayfa</p>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item style={{ textAlign: "center" }}>
            <Link to="/About">
              <p style={{ color: "black" }}>Hakkımda</p>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item style={{ textAlign: "center" }}>
            <Link to="/Resume">
              <p style={{ color: "black" }}>Öz Geçmiş</p>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item style={{ textAlign: "center" }}>
            <Link to="/Contact">
              <p style={{ color: "black" }}>İletişim</p>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}
