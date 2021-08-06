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
                <Button variant="outline-primary" type="submit">
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
