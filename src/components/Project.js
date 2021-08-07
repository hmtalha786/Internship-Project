import React from "react";
import choose from "./images/choose.svg";
import mission from "./images/mission.svg";
import idealogy from "./images/idealogy.svg";
import { Col, Container, Row } from "react-bootstrap";

const Project = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Venture Philosophy & Work Experience</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>We set the platform to turn great ideas into reality</h6>
          </Col>
        </Row>

        

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={choose} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Why us</h3>
            <p>
              We are driven by our values & principles. At Techwards, we deliver
              results while following the right practices. We believe in
              eliminating negative externalities to help you achieve your goals
              through meaningful software.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={mission} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Our Mission</h3>
            <p>
              We are driven by our values & principles. At Techwards, we deliver
              results while following the right practices. We believe in
              eliminating negative externalities to help you achieve your goals
              through meaningful software.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={idealogy} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Our Idealogy</h3>
            <p>
              We are driven by our values & principles. At Techwards, we deliver
              results while following the right practices. We believe in
              eliminating negative externalities to help you achieve your goals
              through meaningful software.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs="auto">
            <p>
              From pure research to building large scale distributed systems,
              our expertise are broad yet focused.
            </p>
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
      </Container>
    </div>
  );
};

export default Project;
