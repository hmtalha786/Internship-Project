import React from "react";
import Asif from "./images/asif.jpeg";
import Mehdi from "./images/mehdi.jpeg";
import Rizwan from "./images/rizwan.jpeg";
import Zain from "./images/zain.jpeg";
import Saqib from "./images/saqib.jpeg";
import Haseeb from "./images/haseeb.jpg";
import Naeem from "./images/naeem.jpg";
import Talha from "./images/talha.jpg";
import "../components/css/team.css";
import { Col, Container, Row, Card } from "react-bootstrap";

const Team = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className="mx-auto">
            <h3 className="text">Our Team</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto text-center">
            <h6>
              We build solutions that bring innovation in the hands of modern
              society.
            </h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Asif}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Muhammad Asif</h5>
              <p style={{ color: "gray" }}>CEO, ScientificBit</p>
            </div>
          </Col>
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Mehdi}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Mehdi Hassan</h5>
              <p style={{ color: "gray" }}>Vice President</p>
            </div>
          </Col>
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Rizwan}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Muhammad Rizwan</h5>
              <p style={{ color: "gray" }}>Senior Team Lead</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Zain}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Zain Ul Abideen</h5>
              <p style={{ color: "gray" }}>Software Engineer</p>
            </div>
          </Col>
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Saqib}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Muhammad Saqib</h5>
              <p style={{ color: "gray" }}>Software Engineer</p>
            </div>
          </Col>
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Naeem}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Muhammad Naeem</h5>
              <p style={{ color: "gray" }}>Software Engineer</p>
            </div>
          </Col>
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Haseeb}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Abdul Haseeb</h5>
              <p style={{ color: "gray" }}>Software Engineer</p>
            </div>
          </Col>
          <Col xs="auto text-center" className="mx-auto">
            <div>
              <img
                src={Talha}
                alt="talha"
                style={{ width: "8rem", margin: "25px", borderRadius: "50%" }}
              />
              <h5>Muhammad Talha</h5>
              <p style={{ color: "gray" }}>Software Engineer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
