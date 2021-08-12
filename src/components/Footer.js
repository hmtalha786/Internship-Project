import React from "react";
import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

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
              <br />
              <p>
                ScientificBit is an information technology, consulting, and
                business solutions company that helps enterprises use innovation
                and emerging technologies to digitally transform their
                businesses.
              </p>
            </Col>

            <Col xs={12} md={2}>
              <h3 className="text">Follow Us</h3>
              <br />
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              <strong> Facebook</strong>
              <br />
              <br />
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              <strong> Twitter</strong>
              <br />
              <br />
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              <strong> LinkedIn</strong>
            </Col>

            <Col xs={12} md={5}>
              <h4 className="text">CONTACT US</h4>
              <br />
              <p>
                <strong>Address : </strong>Gulistan-e-Johar, Karachi, Sindh,
                Pakistan
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
