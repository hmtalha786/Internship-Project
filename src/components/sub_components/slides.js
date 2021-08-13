import React from "react";
import "../css/slides.css";
import business from "../images/business.svg";
import value from "../images/value.svg";
import solutions from "../images/solutions.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Slides = () => {
  return (
    <div>
      <Carousel variant="dark" controls={false}>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={5}>
                <br />
                <br />
                <h6>Softwares for Bussiness</h6>
                <br />
                <h3 className="text">PROVIDING SOLUTIONS & SERVICES FOR YOUR BUSSINESS</h3>
                <br />
                <p>
                  Here at ScientificBit we design and develop Bussiness
                  application to scale up, increase your Bussiness productivity.
                  We're Engineers driven by a purpose. Our mission is to use
                  technology to serve humanity to achieve its full potential. We
                  are experienced in turning entrepreneurial dreams into
                  reality.
                </p>
              </Col>
              <Col xs={12} md={{ span:5, offset:1 }}>
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
                <h6>Seek for Innovation</h6>
                <br />
                <h2 className="text">
                  DEVELOPING SOLUTIONS THROUGH INNOVATION
                </h2>
                <br />
                <p>
                  Taking the advantage of innovative solutions, investing in and
                  committing to a full innovation life cycle. Promoting the
                  development of innovative solutions, products and
                  services focused on new digital skills and technologies.
                </p>
              </Col>
              <Col xs={12} md={{ span:5, offset:1 }}>
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
                <h6>Towards a better world</h6>
                <br />
                <h2 className="text">ADDING VALUE TO THE SOCIETY AND LIFE</h2>
                <br />
                <p>
                  Enabling the business operation by helping customer gain
                  market share through differentiation, reducing the operational
                  or system administration cost, through scaling up user growth
                  without degrading the user experience
                </p>
              </Col>
              <Col xs={12} md={{ span:5, offset:1 }}>
                <img src={value} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <br />
    </div>
  );
};

export default Slides;
