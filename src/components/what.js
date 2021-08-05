import React from "react";
import web from "../images/web.svg";
import mobile from "../images/mobile.svg";
import seo from "../images/seo.svg";
import { Col, Container, Row } from "react-bootstrap";

const What = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <h5>Our Services</h5>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <h6>We set the platform to turn great ideas into reality</h6>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <p>
              We aspire to raise the bar of technology to make your lives
              meaningfully easier & help you focus on the things that matter to
              you the most. We excel in the following services, but as it’s said
              : The sky is the limit!
            </p>
          </Col>
        </Row>
        <br /><br />
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <img src={web} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5>Web Application Development</h5><hr/>
            <p>
              Web development is the work involved in developing a Web site for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network
              services.
            </p>
          </Col>
        </Row>
        <br /><br />
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h5>Mobile Application Development</h5><hr/>
            <p>
              Web development is the work involved in developing a Web site for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network
              services.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src={mobile} className="" alt="logo" />
          </Col>
        </Row>
        <br /><br />
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <img src={seo} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5>SEO (Search Engine Optimization)</h5><hr/>
            <p>
              Web development is the work involved in developing a Web site for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network
              services.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default What;
