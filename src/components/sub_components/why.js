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
        <Row className="justify-content-md-center my-3">
          <Col xs={12} className="text-center">
            <h3 className="text text-center">Our Tech Stack</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                src={ReactJs}
                className="mx-auto mt-5"
                style={{ width: "35%" }}
                alt="React"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="my-3">React. Js</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                src={Angular}
                className="mx-auto mt-5"
                style={{ width: "30%" }}
                alt="Angular"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="my-3">Angular Js</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                src={Vue}
                className="mx-auto mt-5"
                style={{ width: "33%" }}
                alt="Vue"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="mt-4 mb-3">Vue. Js</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                src={Flutter}
                className="mx-auto mt-5"
                style={{ width: "32%" }}
                alt="Flutter"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="my-3">Flutter</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                src={Node}
                className=" mx-auto mt-5"
                style={{ width: "54%" }}
                alt="Node"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="my-3">Node. Js</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                className=" mx-auto mt-4 mb-2"
                src={Laravel}
                style={{ width: "44%" }}
                alt="Laravel"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="mb-3">PHP / Laravel</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                className=" mx-auto mt-4"
                src={Net}
                style={{ width: "49%" }}
                alt=".Net"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="mb-3">.Net & .NET Core</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                className=" mx-auto mt-5"
                src={Bootstrap}
                style={{ width: "45%" }}
                alt="Bootstrap"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="my-3">Bootstrap</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className="text-center my-5">
            <Card
              style={{ width: "16rem" }}
              className="mx-auto"
              border="danger"
            >
              <Card.Img
                variant="top"
                className=" mx-auto mt-5"
                src={Python}
                style={{ width: "40%" }}
                alt="Python"
              />
              <Card.Body>
                <Card.Text>
                  <h6 className="mt-1 mb-3">Python</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center mx-auto text-center">
          <Col md={3} className="mx-auto">
            <Link to="/services">
              <Button variant="outline-danger" type="submit">
                <strong>See More</strong>
              </Button>
            </Link>
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
