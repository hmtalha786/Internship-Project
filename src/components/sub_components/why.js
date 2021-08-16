import React from "react";
import "../css/why.css";
import mission from "../images/mission.svg";
import idealogy from "../images/idealogy.svg";
import technical from "../images/technical.svg";
import ReactJs from "../images/ReactJs.png";
import Angular from "../images/Angular.png";
import Vue from "../images/Vue.png";
import Node from "../images/Node.png";
import Net from "../images/NET.png";
import Laravel from "../images/Laravel.png";
import Bootstrap from "../images/Bootstrap.png";
import Flutter from "../images/Flutter.png";
import Python from "../images/Python.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Row className="justify-content-md-center my-3">
          <Col xs={12} className="text-center">
            <h3 className="text text-center">Our Tech Stack</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-5">
            <img
              src={ReactJs}
              className="mt-1"
              style={{ width: "35%" }}
              alt="React"
            />

            <h6 className="my-3">React. Js</h6>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <img src={Angular} style={{ width: "30%" }} alt="Angular" />

            <h6 className="my-3">Angular Js</h6>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <img
              src={Vue}
              className="my-2"
              style={{ width: "30%" }}
              alt="Vue"
            />

            <h6 className="my-3">Vue.Js</h6>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <img src={Flutter} style={{ width: "30%" }} alt="Flutter" />

            <h6 className="my-3">Flutter</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-5">
            <img
              src={Node}
              className="mt-2 mb-1"
              style={{ width: "36%" }}
              alt="Node"
            />
            <h6 className="my-3">Node. Js</h6>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <img src={Laravel} style={{ width: "25%" }} alt="Laravel" />
            <h6 className="my-3">PHP / Laravel</h6>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <img src={Net} style={{ width: "25%" }} alt=".Net" />
            <h6 className="my-3">.Net & .NET Core</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-5">
            <img
              src={Bootstrap}
              className="mt-2"
              style={{ width: "30%" }}
              alt="Bootstrap"
            />
            <h6 className="my-3">HTML / Bootstrap</h6>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <img src={Python} style={{ width: "26%" }} alt="Python" />
            <h6 className="my-3">Python</h6>
          </Col>

          {/* <Col xs="auto">
          <img src={ReactJs} style={{ width: "10%" }} alt="React" />
          <img src={Angular} style={{ width: "6%" }} alt="Angular" />
          <img src={Vue} style={{ width: "6%" }} alt="Vue" />
          <img src={Node} style={{ width: "6%" }} alt="Node" />
          <img src={Net} style={{ width: "6%" }} alt=".Net" />
          <img src={Laravel} style={{ width: "6%" }} alt="Laravel" />
          <img src={Bootstrap} style={{ width: "6%" }} alt="Bootstrap" />
          <img src={Flutter} style={{ width: "6%" }} alt="Flutter" />
          <img src={Python} style={{ width: "6%" }} alt="Python" />
          </Col> */}
        </Row>

        <Row className="justify-content-md-center mx-auto text-center">
          <Link to="/services">
            <Button variant="outline-danger" type="submit">
              <strong>See More</strong>
            </Button>
          </Link>
        </Row>

        <br/>

        {/* <Row className="justify-content-md-center">
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
        </Row> */}

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="mx-auto text-center my-3">
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
