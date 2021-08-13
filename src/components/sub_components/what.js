import React from "react";
import "../css/what.css";
import web from "../images/web.svg";
import mobile from "../images/mobile.svg";
import seo from "../images/seo.svg";
import profile from "../images/profile.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const What = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className="mx-auto text-center">
            <img src={profile} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text">Company Profile</h2>
            <p>
              Scientific Bit (Private) Limited started with the aim to put core
              software engineering into practice by building some in-house
              solutions and providing innovative solutions to our customers.
              Scientific Bit is founded by three Techies, having 16 years of
              Software development experience, which includes Mobile Apps, Web
              Development, Backend systems, and much more. We hope to have you
              along in our journey and may it prove a win-win opportunity for
              all parties involved. Scientific Bit strives to be a long-time
              partner to its clients, offering its software engineering service
              in a full-stack range to help them grow. We're always putting our
              best foot forward to create good quality software apps. Our team
              has experience is following areas:
            </p>
            <ul>
              <li>Web Design & Development</li>
              <li>Mobile App Development</li>
              <li>Enterprise App Development</li>
              <li>Software Quality Assurance</li>
              <li>Resource Outsourcing </li>
              <li>UI/UX Design</li>
              <li>Technical Support</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="mx-auto text-center my-3">
            <img src={web} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-3">
            <h5 className="text">Full Stack Development</h5>
            <hr />
            <p>
              A web application (or web app) is application software that runs
              on a web server, unlike computer-based software programs that are
              run locally on the operating system (OS) of the device. Everything
              is interconnected and intertwined.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="mx-auto text-center my-3">
            <img src={mobile} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-3">
            <h5 className="text">Mobile Application Development</h5>
            <hr />
            <p>
              Mobile app development is the act or process by which a mobile app
              is developed for mobile devices, such as personal digital
              assistants, enterprise digital assistants or mobile phones.
              Prolific and growing smartphone industry has attracted businesses
              from every corner of the marketplace.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4} className="mx-auto text-center my-3">
            <img src={seo} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="my-3">
            <h5 className="text">SEO & Quality Assurance</h5>
            <hr />
            <p>
              Search engine optimization (SEO) is the process of improving the
              quality and quantity of website traffic to a website or a web page
              from search engines. Our functional & automation QA team audits
              the software products and activities to verify that the software
              meets quality criteria which link to industry standards.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-md-center mx-auto text-center">
        <Link to="/services">
              <Button variant="outline-danger" type="submit">
                <strong>See More</strong>
              </Button>
            </Link>
        </Row>
        <br/><br /><br />
      </Container>
    </div>
  );
};

export default What;
