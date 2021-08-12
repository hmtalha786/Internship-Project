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
            <h6>We do all it here at ScientificBit</h6>
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
            <br />
            <br />
            <img src={web} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Full Stack Development</h5>
            <hr />
            <p>
              A web application (or web app) is application software that runs
              on a web server, unlike computer-based software programs that are
              run locally on the operating system (OS) of the device. Everything
              is interconnected and intertwined. Get past the front-end User
              Interface and you have the database and beyond that, interactions
              with hundreds if not thousands of SaaS applications & It doesn’t
              stop there, the authentication mechanisms, the meticulous logging
              systems and the high-scale search functionalities, among other
              things. But wait, don’t fret because we’ve got you covered in all
              these domains. While you cool off, we handle the full stack
              development of your website and application.
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
              Prolific and growing smartphone industry has attracted businesses
              from every corner of the marketplace to develop their mobile
              applications as consumers detach themselves from desktop computing
              and turn to their mobile devices. Our well informed Android & IOS
              developers will help you take the optimal decisions to help you
              develop a state of the art solution for mobile devices, without
              compromising on performance or key requirements of your software.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <br />
            <br />
            <img src={mobile} className="" alt="logo" />
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <br />
            <br />
            <img src={seo} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">SEO & Quality Assurance</h5>
            <hr />
            <p>
              Search engine optimization (SEO) is the process of improving the
              quality and quantity of website traffic to a website or a web page
              from search engines. Our functional & automation QA team audits
              the software products and activities to verify that the software
              meets quality criteria which link to industry standards. We will
              not only enforce industry best practises, but we will also provide
              appropriate and applicable initiatives to improve processes in
              order to maintain a high level of service quality & to provide a
              holistic approach towards our clients success.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default What;
