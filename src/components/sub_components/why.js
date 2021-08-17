import React from "react";
import "../css/why.css";
import mission from "../images/mission.svg";
import idealogy from "../images/idealogy.svg";
import ReactJs from "../images/ReactJs.png";
import Angular from "../images/Angular.png";
import Vue from "../images/Vue.png";
import Node from "../images/Node.png";
import Net from "../images/NET.png";
import JavaScript from "../images/JavaScript.png";
import IOS from "../images/IOS.png";
import Laravel from "../images/Laravel.png";
import Bootstrap from "../images/Bootstrap.png";
import Flutter from "../images/Flutter.png";
import Python from "../images/Python.png";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
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
        <Row className="justify-content-md-center my-5">
          <Col xs={12} className="text-center">
            <h3 className="text text-center">Our Tech Stack</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={6} md={2} className="text-center my-3">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={ReactJs}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="React"
                />
                <Card.Body>
                  <h6>React Js</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3">
            <a href="https://angular.io/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Angular}
                  className="mx-auto mt-4"
                  style={{ width: "30%" }}
                  alt="Angular"
                />
                <Card.Body>
                  <h6>Angular Js</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3">
            <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Vue}
                  className="mx-auto mt-4"
                  style={{ width: "37%" }}
                  alt="Vue"
                />
                <Card.Body>
                  <h6>Vue Js</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3">
            <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Flutter}
                  className="mx-auto mt-4"
                  style={{ width: "32%" }}
                  alt="Flutter"
                />
                <Card.Body>
                  <h6>Flutter</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3">
            <a
              href="https://www.apple.com/ios/ios-14/"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={IOS}
                  style={{ width: "32%" }}
                  alt="IOS"
                />
                <Card.Body>
                  <h6>iOS</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3">
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={Bootstrap}
                  style={{ width: "40%" }}
                  alt="Bootstrap"
                />
                <Card.Body>
                  <h6>Bootstrap</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={6} md={2} className="text-center my-3">
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={JavaScript}
                  style={{ width: "31%" }}
                  alt="JavaScript"
                />
                <Card.Body>
                  <h6>JavaScript</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3">
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Node}
                  className=" mx-auto mt-4"
                  style={{ width: "51%" }}
                  alt="Node"
                />
                <Card.Body>
                  <h6>Node Js</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3">
            <a href="https://laravel.com/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={Laravel}
                  style={{ width: "30%" }}
                  alt="Laravel"
                />
                <Card.Body>
                  <h6>Laravel</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3">
            <a
              href="https://dotnet.microsoft.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={Net}
                  style={{ width: "31%" }}
                  alt=".Net"
                />
                <Card.Body>
                  <h6>.NET Core</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={2} className="text-center my-3">
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={Python}
                  style={{ width: "31%" }}
                  alt="Python"
                />
                <Card.Body>
                  <h6>Python</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>

        <Row className="justify-content-md-center mx-auto text-center">
          <Col md={3} className="mx-auto my-5">
            <Link to="/services">
              <Button variant="outline-danger" type="submit">
                <strong>See More</strong>
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={5} className="text-center mx-auto my-3">
            <img src={mission} alt="logo" />
            <br />
            <br />
            <h3 className="text">Our Mission</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. We are here to guide
              and find success for you in the digital world.
            </p>
          </Col>
          <Col xs={12} md={5} className="text-center mx-auto my-3">
            <img src={idealogy} alt="logo" />
            <br />
            <br />
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
