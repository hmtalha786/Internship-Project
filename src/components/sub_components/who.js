import React from "react";
import "../css/who.css";
import innovation from "../images/innovation.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <div>
      <Container fluid className="body">
        <br />
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <img src={innovation} className="" alt="logo" />
            </Col>
            <Col xs={12} md={6}>
              <h5>About Us</h5>
              <h2 className="text">Who we are ...</h2>
              <p>
                We're Engineers, programmers, researchers, and consultants
                driven by a purpose. Our mission is to use technology to serve
                humanity to achieve its full potential.We are experienced in
                turning entrepreneurial dreams into reality. However, ask us
                about our most valuable product, and we will say It's our team.
              </p>
              <Link to="/about">
              <Button variant="outline-danger" type="submit">
                <strong>Read More</strong>
              </Button>
            </Link>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Who;
