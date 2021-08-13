import React from "react";
import P1 from "./images/P1.png";
import P3 from "./images/P3.jpg";
import P4 from "./images/P4.jpeg";
import P5 from "./images/P5.png";
import { Col, Container, Row } from "react-bootstrap";

const Project = () => {
  return (
    <div>
      <br />
      <br />
      <br />

      <Container fluid className="body">
        <br />
        <br />
        <br />
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Contributions & Projects</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>We set the platform to turn great ideas into reality</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={3} className="text-center">
            <h6 className="text">Clients</h6>
            <strong>36</strong>
          </Col>
          <Col xs={3} className="text-center">
            <h6 className="text">Completed Projects</h6>
            <strong>384</strong>
          </Col>
          <Col xs={3} className="text-center">
            <h6 className="text">Under Development</h6>
            <strong>16</strong>
          </Col>
          <Col xs={3} className="text-center">
            <h6 className="text">Workers</h6>
            <strong>21</strong>
          </Col>
        </Row>
        <br />
        <br />
      </Container>

      <Container>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Our Projects</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>Some of our contributions in the digital world</h6>
          </Col>
        </Row>

        <br />

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto">
            <a href="#">
              <img variant="top" src={P1} alt="NAEQUO" />
            </a>
          </Col>

          <Col xs={12} md={8}>
            <h3 className="text">NAEQUO</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. Look no further, We
              are here to guide and find success for you in the digital world.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto">
            <a href="#">
              <img
                variant="top"
                src={P4}
                style={{ width: "100%" }}
                alt="Turz Hub"
              />
            </a>
          </Col>

          <Col xs={12} md={8}>
            <h3 className="text">Turz Hub</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. Look no further, We
              are here to guide and find success for you in the digital world.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto">
            <a href="#">
              <img
                variant="top"
                src={P3}
                style={{ width: "70%" }}
                alt="Quetry"
              />
            </a>
          </Col>

          <Col xs={12} md={8}>
            <h3 className="text">Quetry</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. Look no further, We
              are here to guide and find success for you in the digital world.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto">
            <a href="#">
              <img src={P5} style={{ width: "70%" }} alt="Snoonu" />
            </a>
          </Col>
          <Col xs={12} md={8}>
            <h3 className="text">Snoonu</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. Look no further, We
              are here to guide and find success for you in the digital world.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
