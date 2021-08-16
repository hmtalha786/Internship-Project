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
        <Row className="justify-content-md-center mb-5">
          <Col xs={12} className="text-center">
            <h3 className="text text-center">Our Tech Stack</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={ReactJs}
                className="mt-3"
                style={{ width: "15%", marginLeft: "15px" }}
                alt="React"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">React. Js</h6>
                  <p>
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces or UI components. It is
                    maintained by Facebook and community.
                  </p>
                </Card.Text>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Angular}
                className="mt-3"
                style={{ width: "13%", marginLeft: "17px" }}
                alt="Angular"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">Angular Js</h6>
                  <p>
                    Angular is a TypeScript-based free and open-source web
                    application framework led by the Angular Team at Google and
                    by a community of individuals and corporations.
                  </p>
                </Card.Text>
                <a href="https://angular.io/" target="_blank" rel="noreferrer">
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Vue}
                className="mt-3"
                style={{ width: "16%", marginLeft: "15px" }}
                alt="Vue"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">Vue. Js</h6>
                  <p>
                    Vue.js is an open-source model–view–viewmodel front end
                    JavaScript framework for building user interfaces and
                    single-page applications. It was created by Evan You.
                  </p>
                </Card.Text>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={IOS}
                className="mt-3"
                style={{ width: "14%", marginLeft: "15px" }}
                alt="Vue"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">iOS</h6>
                  <p>
                    iOS (formerly iPhone OS) is a mobile operating system
                    created and developed by Apple Inc. that powers iPhone and
                    iPod Touch, Apple Smart Watch etc.
                  </p>
                </Card.Text>
                <a
                  href="https://www.apple.com/ios/ios-14/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={ReactJs}
                className="mt-3"
                style={{ width: "15%", marginLeft: "15px" }}
                alt="React"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">React Native</h6>
                  <p>
                    React Native is an open-source mobile application framework
                    created by Facebook, Inc. It is used to develop applications
                    for Android, iOS, Web using React's framework.
                  </p>
                </Card.Text>
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Flutter}
                className="mt-3"
                style={{ width: "13%", marginLeft: "15px" }}
                alt="Angular"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">Flutter</h6>
                  <p>
                    Flutter is an open-source UI software development kit
                    created by Google. It uses Dart and can be used to develop
                    cross platform applications.
                  </p>
                </Card.Text>
                <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={JavaScript}
                className="mt-3"
                style={{ width: "14%", marginLeft: "15px" }}
                alt="React"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">JavaScript</h6>
                  <p>
                    JavaScript, often abbreviated as JS, is a programming
                    language that conforms to the ECMAScript specification.
                    JavaScript is high-level, often just-in-time compiled.
                  </p>
                </Card.Text>
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Bootstrap}
                className="mt-3"
                style={{ width: "17%", marginLeft: "15px" }}
                alt="Angular"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">Bootstrap</h6>
                  <p>
                    Bootstrap is a free and open-source CSS framework directed
                    at responsive, mobile-first front-end web development. It
                    contains CSS and JavaScript-based components.
                  </p>
                </Card.Text>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Python}
                className="mt-3"
                style={{ width: "14%", marginLeft: "15px" }}
                alt="Vue"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">Python</h6>
                  <p>
                    Python is an interpreted high-level general-purpose
                    programming language. Python's design philosophy emphasizes
                    code readability with significant indentation.
                  </p>
                </Card.Text>
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Net}
                className="mt-3"
                style={{ width: "13%", marginLeft: "15px" }}
                alt="React"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">.Net & .NET Core</h6>
                  <p>
                    .NET is a free and open-source, managed computer software
                    framework for Windows, Linux, and macOS operating systems.
                    It is a cross-platform successor to .NET Framework.
                  </p>
                </Card.Text>
                <a
                  href="https://dotnet.microsoft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Node}
                className="mt-3"
                style={{ width: "21%", marginLeft: "15px" }}
                alt="Angular"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">Node Js</h6>
                  <p>
                    Node.js is an open-source, cross-platform, back-end
                    JavaScript runtime environment that runs on the V8 engine
                    and executes JavaScript code outside a web browser.
                  </p>
                </Card.Text>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="my-3">
            <Card className="" border="danger">
              <Card.Img
                variant="top"
                src={Laravel}
                className="mt-3"
                style={{ width: "12%", marginLeft: "15px" }}
                alt="Vue"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="text">PHP / Laravel</h6>
                  <p>
                    Laravel is a free, open-source PHP web framework, created by
                    Taylor Otwell and intended for the development of web apps
                    following the MVC architectural pattern.
                  </p>
                </Card.Text>
                <a href="https://laravel.com/" target="_blank" rel="noreferrer">
                  <Button variant="outline-danger">
                    <strong>See More</strong>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />

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
