import React from "react";
import "./css/footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container fluid className="body">
        <br />
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={5}>
              <h2 className="">
                Scientific<strong className="red">bit</strong>
              </h2>
              <h6>Software solutions and Services</h6>
              <p>
                ScientificBit is an information technology, consulting, and
                business solutions company that helps enterprises use innovation
                and emerging technologies to digitally transform their
                businesses.
              </p>
            </Col>

            <Col xs={12} md={2}>
              <h3 className="text">User Links</h3>
              <Link to="/">
                <h6>Home</h6>
              </Link>
              <Link to="/about">
                <h6>About</h6>
              </Link>
              <Link to="/services">
                <h6>Services</h6>
              </Link>
              <Link to="/projects">
                <h6>Projects</h6>
              </Link>
              <Link to="/contact">
                <h6>Contact</h6>
              </Link>
            </Col>

            <Col xs={12} md={5}>
              <h4 className="text">CONTACT US</h4>
              <p>
                <strong>Address : </strong>Gulistan-e-Johar, Karachi, Sindh, Pakistan
              </p>
              <p>
                <strong>Email : </strong>info@scientificbit
              </p>
              <p>
                <strong>Phone : </strong>+92-3003926373
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <Row className="justify-content-md-center text-center">
            <h6 className="text">
              © Copyright ScientificBit. All Rights Reserved
            </h6>
          </Row>
          <br />
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
