import React from "react";
import business from "../images/business.svg";
import value from "../images/value.svg";
import solutions from "../images/solutions.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Slides = () => {
  return (
    <div className="">
      <br />
      <br />
      <Carousel variant="dark">
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={5}>
                <br />
                <br />
                <h6>Software & the industry redefined</h6>
                <br />
                <h3>PROVIDING SOLUTIONS FOR FUTURE BUSSINESS</h3>
                <br />
                <p>
                  We're Engineers driven by a purpose. Our mission is to use
                  technology to serve humanity to achieve its full potential. We
                  are experienced in turning entrepreneurial dreams into
                  reality.
                </p>
              </Col>
              <Col xs={12} md={5}>
                <img src={business} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={5}>
                <br />
                <br />
                <h6>Software & the industry redefined</h6>
                <br />
                <h3>DEVELOPING SOLUTIONS THROUGH INNOVATION</h3>
                <br />
                <p>
                  We simply cannot attempt to be innovative while holding on to
                  the same mindset as we had before, therefore Techwards is
                  evolving holistically to engage new technological challenges
                  head on.
                </p>
              </Col>
              <Col xs={12} md={5}>
                <img src={solutions} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={5}>
                <br />
                <br />
                <h6>Software & the industry redefined</h6>
                <br />
                <h3>ADDING VALUE TO THE SOCIETY AND LIFE</h3>
                <br />
                <p>
                  As it is said "Data is the new oil” , just like oil...raw data
                  isn’t valuable in and of itself, but, rather, the value is
                  created when it is gathered completely and accurately,
                  allowing you to react to market forces and be proactive and
                  intentional in your decision-making for progression of the
                  society.
                </p>
              </Col>
              <Col xs={12} md={5}>
                <img src={value} className="" alt="logo" />
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
