import React from "react";
import "../css/why.css";
import mission from "../images/mission.svg";
import idealogy from "../images/idealogy.svg";
import technical from "../images/technical.svg";
import { Col, Container, Row } from "react-bootstrap";

const Why = () => {
  return (
    <div>
      <Container fluid className="body">
        <br />
        <br />
        <br />
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
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className="mx-auto text-center my-5">
            <img src={technical} style={{ width: "60%" }} alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Our Tech Stack</h3>
            <br />
            <ul>
              <li>.Net & .NET Core</li>
              <li>React.JS</li>
              <li>Node.JS</li>
              <li>Python</li>
              <li>Bootstrap/HTML</li>
              <li>Angular & Angular JS</li>
              <li>Vue.js</li>
              <li>PHP/Laravel</li>
              <li>Flutter</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}  className="mx-auto text-center my-3">
            <img src={mission} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-3">
            <h3 className="text">Our Mission</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. Look no further, We
              are here to guide and find success for you in the digital world.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="mx-auto text-center my-3">
            <img src={idealogy} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-3">
            <h3 className="text">Our Idealogy</h3>
            <p>
              We are driven by our values & principles. At ScientificBit, we
              deliver results while following the right practices. We believe in
              eliminating negative externalities to help you achieve your goals
              through meaningful software.
            </p>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default Why;
