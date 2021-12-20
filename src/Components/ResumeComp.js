import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Styles/ResumeComp.css";
export default function ResumeComp() {
  return (
    <Container className="resumecomp-container">
      <Row>
        <Col md="4">
          <h2>Eğitim</h2>
          <br />
          <ul className="list-component">
            <li className="__item">
              <div className="card-component">
                <h5 className="__year">2021 - Devam Ediyor</h5>
                <h6 className="__title">Anadolu Üniversitesi</h6>
                <p className="__text">Web Tasarım ve Kodlama</p>
              </div>
            </li>
            <li className="__item">
              <div className="card-component">
                <h5 className="__year">2015 - 2018</h5>
                <h6 className="__title">Anadolu Üniversitesi</h6>
                <p className="__text">Kamu Yönetimi</p>
              </div>
            </li>
            <li className="__item">
              <div className="card-component">
                <h5 className="__year">2016 - 2018</h5>
                <h6 className="__title">Süleyman Demirel Üniversitesi</h6>
                <p className="__text">İşletme Yönetimi</p>
              </div>
            </li>
            <li className="__item">
              <div className="card-component">
                <h5 className="__year">2013 - 2015</h5>
                <h6 className="__title">Balıkesir PMYO</h6>
              </div>
            </li>
          </ul>
        </Col>
        <Col md="4">
          <h2>İş Deneyimlerim</h2>
          <br />
          <ul className="list-component">
            <li className="__item">
              <div className="card-component">
                <h5 className="__year">2021 - Devam Ediyor</h5>
                <h6 className="__title">Deka Technology</h6>
                <p className="__text">Front-End Devoloper</p>
              </div>
            </li>
            <li className="__item">
              <div className="card-component">
                <h5 className="__year">2021 - Devam ediyor</h5>
                <h6 className="__title">Freelance</h6>
                <p className="__text">Front-End Devoloper & Design</p>
              </div>
            </li>
          </ul>
        </Col>
        <Col md="4">
          <h2>Bilgisayar Yeteneklerim</h2>
          <ul>
            <li className="resume-list-item">
              React Native (Henüz İlgileniyorum)
            </li>
            <li className="resume-list-item">Vue.js (Henüz İlgileniyorum)</li>
            <li className="resume-list-item">React</li>
            <li className="resume-list-item">Functional Programming</li>
            <li className="resume-list-item">Javascript</li>
            <li className="resume-list-item">Typescript</li>
            <li className="resume-list-item">ES6</li>
            <li className="resume-list-item">Git</li>
            <li className="resume-list-item"> Sass </li>
            <li className="resume-list-item">Bootstrap</li>
            <li className="resume-list-item">CSS </li>
            <li className="resume-list-item">HTML</li>
            <li className="resume-list-item">Microsoft Office</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <p style={{ textAlign: "center" }}>
          Bulunduğum Projeleri Şirket Gizliliği Nedeniyle Paylaşamıyorum. Ancak
          Kişisel Olarak Uğraştığım Kodlamalara Github Linkim üzerinden
          Ulaşabilirsiniz.
        </p>
      </Row>
    </Container>
  );
}
