import React from "react";
import innovation from "../images/innovation.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Who = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <img src={innovation} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5>About Us</h5>
            <h2>Who we are ...</h2>
            <p>
              We're Engineers driven by a purpose. Our mission is to use
              technology to serve humanity to achieve its full potential.We are
              experienced in turning entrepreneurial dreams into reality.
              However, ask us about our most valuable product, and we will say
              It's our team.
            </p>
            <p>
              We're programmers, researchers, and consultants who take
              responsibility and pride in the way we work & we will not only
              develop your software but help you set your direction right to get
              the most out of your software because only then technology would
              serve humanity to achieve it's full potential.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Who;
