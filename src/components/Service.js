import React from "react";
import web from "./images/web.svg";
import mobile from "./images/mobile.svg";
import seo from "./images/seo.svg";
import support from "./images/support.svg";
import resource from "./images/resource.svg";
import design from "./images/design.svg";
import enterprise from "./images/enterprise.svg";
import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h3 className="text">Our Services</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-3">
          <Col xs="auto">
            <h6>We set the platform to turn great ideas into reality</h6>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs="auto text-center">
            <p>
              Scientific Bit (Private) Limited started with the aim to put core
              software engineering into practice by building some in-house
              solutions and providing innovative solutions to our customers.
              Scientific Bit is founded by three Techies, having 16 years of
              Software development experience, which includes Mobile Apps, Web
              Development, Backend systems, and much more. We hope to have you
              along in our journey and may it prove a win-win opportunity for
              all parties involved. Scientific Bit strives to be a long-time
              partner to its clients, offering its software engineering service
              in a full-stack range to help them grow. We're always putting our
              best foot forward to create good quality software apps. Our team
              has experience is following areas:
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={web} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Web Design & Development</h5>
            <hr />
            <p>
              A web application (or web app) is application software that runs
              on a web server, unlike computer-based software programs that are
              run locally on the operating system (OS) of the device. Everything
              is interconnected and intertwined. Get past the front-end User
              Interface and you have the database and beyond that, interactions
              with hundreds if not thousands of SaaS applications & It doesn’t
              stop there, the authentication mechanisms, the meticulous logging
              systems and the high-scale search functionalities, among other
              things. But wait, don’t fret because we’ve got you covered in all
              these domains. While you cool off, we handle the full stack
              development of your website and application.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={mobile} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Mobile Application Development</h5>
            <hr />
            <p>
              Mobile app development is the act or process by which a mobile app
              is developed for mobile devices, such as personal digital
              assistants, enterprise digital assistants or mobile phones.
              Prolific and growing smartphone industry has attracted businesses
              from every corner of the marketplace to develop their mobile
              applications as consumers detach themselves from desktop computing
              and turn to their mobile devices. Our well informed Android & IOS
              developers will help you take the optimal decisions to help you
              develop a state of the art solution for mobile devices, without
              compromising on performance or key requirements of your software.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={enterprise} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Enterprise Application Development</h5>
            <hr />
            <p>
              An enterprise applications are large multi user, multi developer
              and a multi component applications that can work on large chunks
              of data and utilise extensive parallel processing, network
              distributed resources and complex logic. These applications can be
              deployed across multiple platforms and operate simultaneously with
              many other applications.Enterprise applications are business
              oriented and deployed to meet specific business requirements. They
              encode business policies, processes, rules and entities and are
              developed with specific business requirements in mind.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={seo} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Software Quality Assurance</h5>
            <hr />
            <p>
              Search engine optimization (SEO) is the process of improving the
              quality and quantity of website traffic to a website or a web page
              from search engines. Our functional & automation QA team audits
              the software products and activities to verify that the software
              meets quality criteria which link to industry standards. We will
              not only enforce industry best practises, but we will also provide
              appropriate and applicable initiatives to improve processes in
              order to maintain a high level of service quality & to provide a
              holistic approach towards our clients success.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={resource} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Resource Outsourcing</h5>
            <hr />
            <p>
              Resource outsourcing refers to a process in which the employer
              transfers responsibilities and risks for HR functions to the
              external provider which performs this tasks for the company. Since
              HR functions can be complex and time-consuming business opt for
              outsourcing either whole HR logistics or part of the HR
              responsibilities like payroll. Outsourcing Can Improve Employee
              Relations and Streamline Hiring Orientation. ... An HRO will be
              available for your employee relations, as well as being able to
              offer efficient and professional new hire orientation.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={design} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">UI/UX Design</h5>
            <hr />
            <p>
              User interface (UI) design or user interface engineering is the
              design of user interfaces for machines and software, such as
              computers, home appliances, mobile devices, and other electronic
              devices, with the focus on maximizing usability and the user
              experience. The goal of user interface design is to make the
              user's interaction as simple and efficient as possible, in terms
              of accomplishing user goals (user-centered design). Good user
              interface design facilitates finishing the task at hand without
              drawing unnecessary attention to itself. Graphic design and
              typography are utilized to support its usability, influencing how
              the user performs certain interactions and improving the aesthetic
              appeal of the design.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center my-5">
          <Col xs={12} md={4}>
            <img src={support} className="my-5" alt="logo" />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text">Technical Support</h5>
            <hr />
            <p>
              Technical support refers to services that entities provide to
              users of technology products or services. In general, technical
              support provides help regarding specific problems with a product
              or service, rather than providing training, provision or
              customization of the product, or other support services. Technical
              Support is a position hired by a company to oversee and maintain
              their computer hardware and software systems. Their skills are an
              asset to the company, as they assist in resolving technical issues
              concerning customer's accounts or company software infrastructure.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
