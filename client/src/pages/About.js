import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel/carousel";

function About() {
  return (
    <div>
      <Carousel />
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Bogify!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}


export default About;
