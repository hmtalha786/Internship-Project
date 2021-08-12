import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Row className="justify-content-md-center my-3">
              <Col xs="auto">
                <h3 className="text">Contact Information</h3>
              </Col>
            </Row>

            <Row className="justify-content-md-center my-3">
              <Col xs="auto">
                <h6>We would love to hear from you</h6>
              </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center my-3">
              <Col xs="auto">
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

          </Col>

          <Col xs={12} md={6}>
            <Row className="justify-content-md-center my-3">
              <Col xs="auto">
                <h3 className="text">Feel Free to Contact Us</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center my-3">
              <Col xs="auto">
                <h6>Our door are always open for your valuable insights.</h6>
              </Col>
            </Row>
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
              <div className="text-center">
                <Button variant="outline-danger" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default Contact;
