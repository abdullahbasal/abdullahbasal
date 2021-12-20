import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Styles/AboutMe.css";
import ProfilPhoto from "../Assets/profil-photo.jpg";

export default function AboutMe() {
  return (
    <Container className="about-me-container">
      <Row>
        <Col>
          <h2>Hakkımda</h2>
        </Col>
      </Row>
      <Row>
        <Col className="img-col">
          <img
            src={ProfilPhoto}
            style={{ objectFit: "fill", width: "200px" }}
          />
        </Col>
      </Row>
      <Col>
        <p>
          Merhaba, ben Abdullah Başal, Türkiye, İstanbul'da yazılım
          geliştiricisiyim. 2015 yılında PMYO, 2018 yılında İşletme Yönetimi ve
          yine 2018 yılında Kamu Yönetimini bitirdim. Okumayı seviyorum ve şuan
          web tasarım ve kodlama bölümünü okuyorum. Deka Technology Front-End
          Developer olarak çalışmaya başladım. Deka Technology ilk iş
          deneyimimde bana çok şey öğretti. Kron, Efes Pilsen gibi büyük
          projeleri bulunmakta ve bir sürü küçük projeleri bulunmaktaydı.
          Çalıştığım projede çok deneyim kazandım. Benim işim React JS, HTML5,
          CSS3, Bootstrap ve React Hook kullanarak tasarımları koda dökmek.
          Ayrıca projemizde ihtiyaç duyulduğunda bazı özel tasarımları
          kodlayarak tasarıma yardımcı oluyordum. Bana mentörlük yapan Okan
          Çalışkan deneyimli bir geliştiriciydi. Deka Technology'de çalışırken
          bana çok şey öğretti ve geliştirdi. ona minnettarım. Hala Deka
          Technology'de çalışıyorum. Ekstra olarak Freelance işler yapıyorum.
          Deka Technolohy'de çalışmak çok güzel.
        </p>
        <Row>
          <Col>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/oz-gecmis.appspot.com/o/Abdullah%20Ba%C5%9Fal%20CV.pdf?alt=media&token=92fa1ece-d655-4b5f-b938-74c3a0f67c15"
              target="_blank"
            >
              <div id="my-button"></div>
            </a>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
