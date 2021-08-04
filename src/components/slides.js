import React from "react";
import dev from "../images/dev.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Slides = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Carousel>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={6} className="mb-3">
                <h6>Software & the industry redefined</h6><br/>
                <h1>PROVIDING SOLUTIONS FOR FUTURE BUSSINESS</h1>
                <p>
                  We're Engineers driven by a purpose. Our mission is to use
                  technology to serve humanity to achieve its full potential. We
                  are experienced in turning entrepreneurial dreams into
                  reality.
                </p>
                {/* <Button variant="outline-secondary">Stay Connected</Button> */}
              </Col>
              <Col xs={12} md={6} className="my-3">
                <img src={dev} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={6} className="my-3">
                <h6>Software & the industry redefined</h6><br/>
                <h1>DEVELOPING SOLUTIONS THROUGH INNOVATION</h1>
                <p>
                  We simply cannot attempt to be innovative while holding on to
                  the same mindset as we had before, therefore Techwards is
                  evolving holistically to engage new technological challenges
                  head on.
                </p>
                {/* <Button variant="outline-secondary">Stay Connected</Button> */}
              </Col>
              <Col xs={12} md={6} className="my-3">
                <img src={dev} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={6} className="my-3">
                <h6>Software & the industry redefined</h6><br/>
                <h1>ADDING VALUE TO THE SOCIETY</h1>
                <p>
                  As it is said "Data is the new oil” , just like oil...raw data
                  isn’t valuable in and of itself, but, rather, the value is
                  created when it is gathered completely and accurately,
                  allowing you to react to market forces and be proactive and
                  intentional in your decision-making for progression of the
                  society.
                </p>
                {/* <Button variant="outline-secondary">Stay Connected</Button> */}
              </Col>
              <Col xs={12} md={6} className="my-3">
                <img src={dev} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Slides;
