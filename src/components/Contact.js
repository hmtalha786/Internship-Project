import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GoMail, GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className="mx-auto">
            <h3 className="text">Feel Free to Contact Us</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className="mx-auto text-center" >
            <h6>Our door are always open for your valuable insights.</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className="my-5">
            <Row className="justify-content-md-center">
              <Col xs="auto" className="mx-auto">
                <h3 className="text">Contact Information</h3>
              </Col>
            </Row>

            <Row className="justify-content-md-center">
              <Col xs="auto" className="mx-auto">
                <h6>We would love to hear from you</h6>
              </Col>
            </Row>

            <br />
            <br />

            <Row className="justify-content-md-center">
              <Col xs="auto">
                <div>
                  <GoLocation size={30} color={"firebrick"} />
                  <strong className="item">
                    Gulistan-e-Johar, Karachi, Sindh, Pakistan
                  </strong>
                </div>

                <br />

                <div>
                  <GoMail size={30} color={"firebrick"} />
                  <strong className="item">info@scientificbit.com</strong>
                </div>

                <br />

                <div>
                  <FiPhoneCall size={30} color={"firebrick"} />
                  <strong className="item">+92-3003926373</strong>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6} className="my-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text">Your Query / Concern</Form.Label>
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
