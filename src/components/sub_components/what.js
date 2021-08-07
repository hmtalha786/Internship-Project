import React from "react";
import "../css/what.css";
import web from "../images/web.svg";
import mobile from "../images/mobile.svg";
import seo from "../images/seo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

const What = () => {
  return (
    <div>
      <Container>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Our Services</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>We set the platform to turn great ideas into reality</h6>
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
          <Col xs={12} md={4}>
            <img src={web} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Web Application Development</h5>
            <hr />
            <p>
              A web application (or web app) is application software that runs
              on a web server, unlike computer-based software programs that are
              run locally on the operating system (OS) of the device.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={6}>
            <h5 className="text">Mobile Application Development</h5>
            <hr />
            <p>
              Mobile app development is the act or process by which a mobile app
              is developed for mobile devices, such as personal digital
              assistants, enterprise digital assistants or mobile phones.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src={mobile} className="" alt="logo" />
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={seo} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">SEO (Search Engine Optimization)</h5>
            <hr />
            <p>
              Search engine optimization (SEO) is the process of improving the
              quality and quantity of website traffic to a website or a web page
              from search engines.
            </p>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default What;
