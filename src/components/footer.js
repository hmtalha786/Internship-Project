import React from "react";
import "../css/footer.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={5}>
            <h3 className="text"><strong>S</strong>cientific<strong>Bit</strong></h3>
            <p>
              We're Engineers driven by a purpose. Our mission is to use
              technology to serve humanity to achieve its full potential. We are
              experienced in turning entrepreneurial dreams into reality.
            </p>
            <p>
              We simply cannot attempt to be innovative while holding on to the
              same mindset as we had before, therefore Techwards is evolving
              holistically to engage new technological challenges head on.
            </p>
          </Col>

          <Col xs={12} md={3}>
            <h5 className="text">CONTACT US</h5>
            <p>
              <strong>Address : </strong>A108 Adam Street New York, NY 535022
              United States
            </p>
            <p>
              <strong>Email : </strong>info@scientificbit
            </p>
            <p>
              <strong>Phone : </strong>+92-3002984139
            </p>
          </Col>

          <Col xs={12} md={4}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Query / Concern</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5 text-center">
          <h6 className="text">© Copyright NewBiz. All Rights Reserved</h6>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
