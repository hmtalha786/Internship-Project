import React from "react";
import P2 from "./images/P2.png";
import P3 from "./images/P3.png";
import P4 from "./images/P4.jpeg";
import P5 from "./images/P5.png";
import Grab from "./images/Grab.jpg";
import TeeMates from "./images/TeeMates.jpg";
import Ok from "./images/Ok.jpg";
import CabSnapper from "./images/CabSnapper.jpg";
import CareGiver from "./images/Caregiver.jpg";
import CVSA from "./images/CVSA.jpg";
import Fyxify from "./images/fyxify.jpg";
import FyxifyPro from "./images/fyxifyPro.jpg";
import HomeChef from "./images/HomeChef.jpg";
import MarnKDS from "./images/MarnKDS.jpg";
import MarnMenu from "./images/MarnMenu.jpg";
import MarnResturant from "./images/MarnResturant.jpg";
import Nabila from "./images/Nabila.jpg";
import Patient from "./images/Patient.jpg";
import Prongo from "./images/prongo.jpg";
import PTA from "./images/PTA.jpg";

import { Col, Container, Row, Card } from "react-bootstrap";

const Project = () => {
  return (
    <div>
      <br />
      <br />
      <br />

      <Container fluid className="body">
        <br />
        <br />
        <br />
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className="mx-auto">
            <h3 className="text">Contributions & Projects</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className="mx-auto">
            <h6>We set the platform to turn great ideas into reality</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={3} className="text-center">
            <h6 className="text">Clients</h6>
            <strong>36</strong>
          </Col>
          <Col xs={3} className="text-center">
            <h6 className="text">Completed Projects</h6>
            <strong>384</strong>
          </Col>
          <Col xs={3} className="text-center">
            <h6 className="text">Under Development</h6>
            <strong>16</strong>
          </Col>
          <Col xs={3} className="text-center">
            <h6 className="text">Workers</h6>
            <strong>21</strong>
          </Col>
        </Row>
        <br />
        <br />
      </Container>

      <Container>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Web Projects</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>Some Remarkable Web based contributions</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto text-center my-3">
            <br />
            <a href="https://shipr.express/." target="_blank" rel="noreferrer">
              <img src={P2} style={{ width: "100%" }} alt="Shiper" />
            </a>
          </Col>

          <Col xs={12} md={8} className="my-3">
            <h3 className="text">Shipr.Express</h3>
            <p>
              Shipr is a neutral electronic platform that allows importers and
              exporters access to multiple forwarders and transporters through a
              single site. The backend API is written in Python (Flask API) and
              the front-end app uses Angular frameworks.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto text-center my-3">
            <br />
            <a
              href="https://quantree.co/public."
              target="_blank"
              rel="noreferrer"
            >
              <img src={P3} style={{ width: "100%" }} alt="Quantree" />
            </a>
          </Col>

          <Col xs={12} md={8} className="my-3">
            <h3 className="text">Quantree</h3>
            <p>
              Quantree is a quantitative investment management tool, which uses
              data science and machine learning to predict the right investment
              options in Stock market and Mutual funds. The product is not yet
              launched. It uses Python for backend, R for data science and
              Angular for front-end work.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto text-center mb-3">
            <a href="https://snoonu.com/" target="_blank" rel="noreferrer">
              <img src={P5} style={{ width: "100%" }} alt="Snoonu" />
            </a>
          </Col>
          <Col xs={12} md={8} className="my-3">
            <h3 className="text">Snoonu, Qatar</h3>
            <p>
              Snoonu is a company based in Qatar which offers personal concierge
              and delivery services and eCommerce application as an E-Mall. We
              are working with Snoonu, to revamp their current product using
              microservices based architecture. In this project, we are using
              .NET Core, MongoDB, Elasticsearch and AWS cloud infrastructure.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto text-center my-3">
            <a href="#" target="_blank" rel="noreferrer">
              <img src={P4} style={{ width: "100%" }} alt="Turz Hub" />
            </a>
          </Col>

          <Col xs={12} md={8} className="my-3">
            <h3 className="text">Turz Hub</h3>
            <p>
              TourzHub, a platform for connecting tour agents with tourists. It
              is a PHP Laravel based product, currently in progress.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className=" mx-auto">
            <h3 className="text">Mobile Apps</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className=" mx-auto">
            <h6>Android and iOS based Mobile Applications</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/jm/app/cabsnapper/id883310357"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={CabSnapper}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="React"
                />
                <Card.Body>
                  <h6>Cab Snapper</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/us/app/patient-voice-caregiver/id1330607385"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={CareGiver}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="Angular"
                />
                <Card.Body>
                  <h6>Care Giver</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/us/app/patient-voice-patient/id1330900512"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Patient}
                  className=" mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="Node"
                />
                <Card.Body>
                  <h6>Patient Voice</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/us/app/cvsa-out-of-service-criteria/id1424204784"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={CVSA}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="Vue"
                />
                <Card.Body>
                  <h6>CVSA</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/pk/app/fyxify/id1496668271"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Fyxify}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="Flutter"
                />
                <Card.Body>
                  <h6>Fyxify</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/lk/app/homechef-order-homemade-food/id1214342255"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={HomeChef}
                  style={{ width: "35%" }}
                  alt="Bootstrap"
                />
                <Card.Body>
                  <h6>Home Chef</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/pk/app/team-nabila/id1512783448"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={Nabila}
                  style={{ width: "35%" }}
                  alt="JavaScript"
                />
                <Card.Body>
                  <h6>Team Nabila</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/pk/app/fyxify-pro/id1496668341"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={FyxifyPro}
                  style={{ width: "35%" }}
                  alt="IOS"
                />
                <Card.Body>
                  <h6>Fyxify Pro</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/sa/app/marn-kds/id1489595827"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={MarnKDS}
                  style={{ width: "35%" }}
                  alt="Python"
                />
                <Card.Body>
                  <h6>Marn KDS</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/sa/app/marn-menu/id1292612468"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={MarnMenu}
                  style={{ width: "35%" }}
                  alt="Python"
                />
                <Card.Body>
                  <h6>Marn Menu</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/sa/app/marn-restaurant/id1171368719"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={MarnResturant}
                  style={{ width: "35%" }}
                  alt="Python"
                />
                <Card.Body>
                  <h6>Marn Resturant</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/us/app/pta-relay-ride-share/id1362743251"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={PTA}
                  style={{ width: "35%" }}
                  alt=".Net"
                />
                <Card.Body>
                  <h6>PTA Relay</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={6} md={2} className="text-center my-3 mx-auto">
            <a
              href="https://apps.apple.com/pk/app/prongo/id1259876904"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  className=" mx-auto mt-4"
                  src={Prongo}
                  style={{ width: "35%" }}
                  alt="Laravel"
                />
                <Card.Body>
                  <h6>Prongo</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className=" mx-auto text-center">
            <h3 className="text">Flutter based Applications</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto" className=" mx-auto">
            <h6>
              We also build cross platform hybrid Apps to fulfill our client
              needs.
            </h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="text-center my-3">
            <a
              href="https://apps.apple.com/ca/app/grab-fm/id1498250271"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Grab}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="React"
                />
                <Card.Body>
                  <h6>Grab FM!</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={12} md={3} className="text-center my-3">
            <a
              href="https://apps.apple.com/lb/app/teemates-golf/id1561178517"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={TeeMates}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="Angular"
                />
                <Card.Body>
                  <h6>TeeMates Golf</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col xs={12} md={3} className="text-center my-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.clickncollect"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                style={{ width: "10rem" }}
                className="mx-auto"
                border="danger"
              >
                <Card.Img
                  variant="top"
                  src={Ok}
                  className="mx-auto mt-4"
                  style={{ width: "35%" }}
                  alt="Vue"
                />
                <Card.Body>
                  <h6>OK Click n Collect</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
