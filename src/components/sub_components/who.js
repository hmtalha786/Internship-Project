import React from "react";
import "../css/who.css";
import innovation from "../images/innovation.svg";
import choose from "../images/choose.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <div>
      <Container fluid className="body">
        <br />
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6} className="mx-auto text-center">
              <img src={innovation} className="" alt="logo" />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="text">Who We Are ???</h2>
              <br/>
              <p>
                We're Engineers, programmers, researchers, and consultants
                driven by a purpose. Our mission is to use technology to serve
                humanity to achieve its full potential.We are experienced in
                turning entrepreneurial dreams into reality. However, ask us
                about our most valuable product, and we will say It's our team.
              </p>
              <br/>
              <Link to="/about">
                <Button variant="outline-danger" type="submit">
                  <strong>See More</strong>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className="mx-auto text-center">
            <img src={choose} alt="logo" className="my-3"/>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text">What Makes Us Different ???</h2>
            <br/>
            <p>
              We are committed to our clients and their needs, taking on their
              projects as our own and always working towards their success. We
              see beyond what is strictly necessary. We think ahead and provide
              ideas and improvements.
            </p>
            <p>
              Appreciation for quality, professionalism, and innovation allow us
              to go beyond what is expected. We embrace change in our mindset
              and attitude, always keeping an open mind.
            </p>
            <p>
              We strive to find new ways to solve problems untill we achieve our
              destiny. We are unique to effectively adopt modern cutting edge
              technologies to fulfill the needs of modern world. Look no
              further, We are here to guide and solve your problems in the
              digital world.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Who;
