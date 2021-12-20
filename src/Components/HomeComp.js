import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "typed.js";
import "../Styles/HomeComp.css";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";

export default function HomeComp() {
  const el = useRef(null);
  console.log("Merhaba ben Abdullah Başal Siteme Hoş geldiniz :)");
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Merhaba Siteme Hoş Geldiniz",
        "Front-end developer",
        "Web Tasarım",
        "Freelancer",
        "Blogger",
      ],
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 300,
      loop: "true",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container className="home-comp-container">
      <Row>
        <Col className="icerik-alani">
          <Row>
            <Col>
              <h1>Abdullah Başal</h1>
            </Col>
          </Row>
          <Row>
            <Col className="typed-col">
              <span ref={el}></span>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li className="social-media-icon-li">
                  <a
                    href="https://www.github.com/abdullahbasal"
                    target="_blank"
                  >
                    <img
                      src={github}
                      style={{ height: "24px", width: "24px" }}
                    />
                  </a>
                </li>
                <li className="social-media-icon-li">
                  <a
                    href="https://www.instagram.com/apocalipsetuta"
                    target="_blank"
                  >
                    <img
                      src={instagram}
                      style={{ height: "24px", width: "24px" }}
                    />
                  </a>
                </li>
                <li className="social-media-icon-li">
                  <a
                    href="https://tr.linkedin.com/in/abdullahbasal"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      style={{
                        height: "24px",
                        width: "24px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
