import React from "react";
import { Container } from "react-bootstrap";
import ErrorImg from "../Assets/404errorimg.png";
export default function ErrorComp() {
  return (
    <Container style={{ textAlign: "center" }}>
      <img src={ErrorImg} width="300px" height="300px" />
      <h1>Sayfa Bulunamadı</h1>
    </Container>
  );
}
