import React from "react";
import "../css/what.css";
import web from "../images/web.svg";
import mobile from "../images/mobile.svg";
import seo from "../images/seo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Col xs="auto text-center">
            <p>
              We're always putting our best foot forward to create good quality
              software apps. Our team has experience is following areas:
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="my-5">
            <img src={web} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-5">
            <h5 className="text">Full Stack Development</h5>
            <hr />
            <p>
              A web application (or web app) is application software that runs
              on a web server, unlike computer-based software programs that are
              run locally on the operating system (OS) of the device. Everything
              is interconnected and intertwined.
            </p>
            <Link to="/services">
              <Button variant="outline-danger" type="submit">
                <strong>Read More</strong>
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="my-5">
            <img src={mobile} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-5">
            <h5 className="text">Mobile Application Development</h5>
            <hr />
            <p>
              Mobile app development is the act or process by which a mobile app
              is developed for mobile devices, such as personal digital
              assistants, enterprise digital assistants or mobile phones.
              Prolific and growing smartphone industry has attracted businesses
              from every corner of the marketplace.
            </p>
            <Link to="/services">
              <Button variant="outline-danger" type="submit">
                <strong>Read More</strong>
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="my-5">
            <img src={seo} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-5">
            <h5 className="text">SEO & Quality Assurance</h5>
            <hr />
            <p>
              Search engine optimization (SEO) is the process of improving the
              quality and quantity of website traffic to a website or a web page
              from search engines. Our functional & automation QA team audits
              the software products and activities to verify that the software
              meets quality criteria which link to industry standards.
            </p>
            <Link to="/services">
              <Button variant="outline-danger" type="submit">
                <strong>Read More</strong>
              </Button>
            </Link>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default What;
