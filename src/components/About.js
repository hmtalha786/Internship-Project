import React from "react";
import team from "./images/team.svg";
import choose from "./images/choose.svg";
import mission from "./images/mission.svg";
import idealogy from "./images/idealogy.svg";
import innovation from "./images/innovation.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <img src={innovation} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5>About Us</h5>
            <h2 className="text">Who we are ...</h2>
            <p>
              We're Engineers, programmers, researchers, and consultants driven
              by a purpose. Our mission is to use technology to serve humanity
              to achieve its full potential.We are experienced in turning
              entrepreneurial dreams into reality. However, ask us about our
              most valuable product, and we will say It's our team.
            </p>
            <p>
              We're who take responsibility and pride in the way we work & we
              will not only develop your software but help you set your
              direction right to get the most out of your software because only
              then technology would serve humanity to achieve it's full
              potential.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={6}>
            <img src={team} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text">Our Team</h2>
            <p>
              We are engineers and leaders with vast experience of developing
              and delivering scalable and impactful software, with a track
              record of turning entrepreneurial dreams into reality. We are
              proficient programmers, architects and researchers who have set up
              Silicon Valley startups that eventually got acquired by the
              largest software companies in the world. Some of our softwares
              determines the standards in the industry. At Techwards, we take
              pride in the way we work. And we take ownership of the work we
              deliver.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={choose} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Why us</h3>
            <p>
              We strive to find new ways to solve problems untill we achieve our
              destiny. We are unique to effectively adopt modern cutting edge
              technologies to fulfill the needs of modern world. Look no
              further, We are here to guide and solve your problems in the
              digital world
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={mission} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Our Mission</h3>
            <p>
              Our mission is to empower visionaries to transform their ideas
              into reality. We Build innovative Aapplications for Startups and
              Corporations to fulfill their business needs. Look no further, We
              are here to guide and find success for you in the digital world.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={idealogy} className="" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text">Our Idealogy</h3>
            <p>
              We are driven by our values & principles. At ScientificBit, we
              deliver results while following the right practices. We believe in
              eliminating negative externalities to help you achieve your goals
              through meaningful software.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
