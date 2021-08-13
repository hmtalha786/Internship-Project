import React from "react";
import P1 from "./images/P1.png";
import P2 from "./images/P2.png";
import P3 from "./images/P3.png";
import P4 from "./images/P4.jpeg";
import P5 from "./images/P5.png";
import { Col, Container, Row } from "react-bootstrap";

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
          <Col xs="auto">
            <h3 className="text">Contributions & Projects</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
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
            <h3 className="text">Our Technical Partner</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>The most remarkable technical partner in the digital world</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto my-3">
            <a href="https://inaequo.net/" target="_blank" rel="noreferrer">
              <img src={P1} alt="Inaequo Solutions" />
            </a>
          </Col>

          <Col xs={12} md={8} className="my-3">
            <h3 className="text">Inaequo Solutions</h3>
            <p>
              Inaequo Solutions is our trustful technical partner who provides
              engineering resources for our in-house and external projects.
              Inaequo Solutions expertise in customer satisfaction by providing
              quality solutions and continuous support to their clients.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Our Projects</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>Some of our remarkable contributions</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={2} className="mx-auto my-3">
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
          <Col xs={12} md={2} className="mx-auto my-3">
            <br />
            <a href="https://quantree.co/public." target="_blank" rel="noreferrer">
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
          <Col xs={12} md={2} className="mx-auto mb-3">
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
          <Col xs={12} md={2} className="mx-auto my-3">
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
      </Container>
    </div>
  );
};

export default Project;
