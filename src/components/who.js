import React from "react";
import dev from "../images/dev.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Who = () => {
  return (
    <div>
      <h4>Who we are ...</h4>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <br />
      <Container>
        <Row>
          <Col>
            <img src={dev} className="" alt="logo" />
          </Col>
          <Col>
            <h6>We provide solutions for your bussinues</h6>
            <p>
              Adele stopped singing due to damage to her vocal cords, which
              prevented her from singing on the doctor's advice to avoid further
              damage. Adele announced she left music on Twitter, explaining the
              reason we mentioned, but Adele plans to return gradually.
            </p>
            <h6>We provide solutions for your bussinues</h6>
            <p>
              Adele stopped singing due to damage to her vocal cords, which
              prevented her from singing on the doctor's advice to avoid further
              damage. Adele announced she left music on Twitter, explaining the
              reason we mentioned, but Adele plans to return gradually.
            </p>
            <h6>We provide solutions for your bussinues</h6>
            <p>
              Adele stopped singing due to damage to her vocal cords, which
              prevented her from singing on the doctor's advice to avoid further
              damage. Adele announced she left music on Twitter, explaining the
              reason we mentioned, but Adele plans to return gradually.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Who;
