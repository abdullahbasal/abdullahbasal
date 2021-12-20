import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/ContactComp.css";
import ContactImg from "../Assets/contact.png";
import Email from "../Assets/email.png";
import Telephone from "../Assets/telephone.png";
export default function ContactComp() {
  return (
    <Container className="contactcomp-container">
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <img
            src={ContactImg}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>İletişime Geç!</Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <p>
            Projen için ücret teklifi almak için veya, aklına takılan bir soruyu
            sormak ya da "Merhaba!" demek için bile mail adreslerimden bana
            ulaşabilirsin, sosyal medya adreslerimi AnaSayfa'ya bıraktım.
            Icon'lara Tıklayarak bana yazabilirsin.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Col>
            <a
              href="https://wa.me/05070927505"
              target="_blank"
              style={{ color: "white" }}
            >
              <img
                src={Telephone}
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
              +90 507 092 7505
            </a>
          </Col>
          <Col style={{ marginTop: "20px", marginBottom: "20px" }}>
            <a
              href="mailto:1abdullahbasal@gmail.com"
              style={{ color: "white" }}
              target="_blank"
            >
              <img
                src={Email}
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              1abdullahbasal@gmail.com
            </a>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
