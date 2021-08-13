import React from "react";
import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { GoMail, GoLocation } from "react-icons/go";
import { FiPhoneCall, FiArrowUpCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <Container fluid className="body">
        <br />
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={5}  className="my-5">
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

            <Col xs={12} md={2} className="my-5">
              <h3 className="text">Follow Us</h3>
              <br />
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon size="lg" color="#4267B2" icon={faFacebook}></FontAwesomeIcon>
                <strong> Facebook</strong>
              </a>
              <br />
              <br />
              <a href="https://www.twitter.com/">
                <FontAwesomeIcon size="lg" color="#1DA1F2" icon={faTwitter}></FontAwesomeIcon>
                <strong> Twitter</strong>
              </a>
              <br />
              <br />
              <a href="https://www.linedin.com/">
                <FontAwesomeIcon size="lg" color="#0077b5" icon={faLinkedinIn}></FontAwesomeIcon>
                <strong> LinkedIn</strong>
              </a>
              <br />
            </Col>

            <Col xs={12} md={5}  className="my-5">
              <h4 className="text">CONTACT US</h4>
              <br />
              <h6>
                <GoLocation size={30} color={"firebrick"}/> Gulistan-e-Johar, Karachi, Sindh, Pakistan
              </h6>
              <br />
              <h6>
                <GoMail size={30} color={"firebrick"}/> info@scientificbit
              </h6>
              <br />
              <h6>
                <FiPhoneCall size={30} color={"firebrick"}/> +92-3003926373
              </h6>
            </Col>
          </Row>
          <br />
          <a href="#" className="fixed">
          <FiArrowUpCircle size={30} color={"firebrick"}/>
        </a>
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
