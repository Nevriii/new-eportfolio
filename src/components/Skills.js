import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "../assets/img/skills-logo/JavaScriptlogo.png";
import logo2 from "../assets/img/skills-logo/angularlogo.png";
import logo3 from "../assets/img/skills-logo/csslogo.png";
import logo4 from "../assets/img/skills-logo/htmllogo.png";
import logo5 from "../assets/img/skills-logo/ioniclogo.png";
import logo6 from "../assets/img/skills-logo/javalogo.png";
import logo7 from "../assets/img/skills-logo/mysqllogo.png";
import logo8 from "../assets/img/skills-logo/phplogo.png";
import logo9 from "../assets/img/skills-logo/pythonlogo.png";
import logo10 from "../assets/img/skills-logo/reactjslogo.png";
import logo11 from "../assets/img/skills-logo/springbootlogo.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Container>
                          <Row className="align-items-center justify-content-center">
                            <Col xs={12} md={6} xl={6} className="text-content">
                              <div className="gallery-wrapper container d-flex flex-wrap flex-md-column me-md-5" style={{ paddingRight: "20px" }}>
                                <div className="gallery">
                                    <span style={{ "--i": 1 }}>
                                        <img src={logo6} alt="Java Logo" />
                                    </span>
                                    <span style={{ "--i": 2 }}>
                                        <img src={logo9} alt="Python Logo" />
                                    </span>

                                    <span style={{ "--i": 3 }}>
                                        <img src={logo8} alt="PHP Logo" />
                                    </span>
                                    <span style={{ "--i": 4 }}>
                                        <img src={logo7} alt="MySQL Logo" />
                                    </span>
                                </div>
                                <div className="gallery">
                                    <span style={{ "--i": 5 }}>
                                        <img src={logo4} alt="HTML5 Logo" />
                                    </span>
                                    <span style={{ "--i": 6 }}>
                                        <img src={logo3} alt="CSS Logo" />
                                    </span>
                                    <span style={{ "--i": 7 }}>
                                        <img src={logo1} alt="JavaScript Logo" />
                                    </span>
                                </div>
                                <div className="gallery">
                                    <span style={{ "--i": 8 }}>
                                        <img src={logo10} alt="ReactJS Logo" />
                                    </span>
                                    <span style={{ "--i": 9 }}>
                                        <img src={logo2} alt="Angular Logo" />
                                    </span>
                                    <span style={{ "--i": 10 }}>
                                        <img src={logo5} alt="Ionic Logo" />
                                    </span>
                                    <span style={{ "--i": 11 }}>
                                        <img src={logo11} alt="Spring Boot Logo" />
                                    </span>
                                </div>
                            </div>
                            </Col>
                            <Col xs={12} md={6} xl={6} className="text-content">
                              <p>
                                I'm a Computer Science Student at Mapúa University specializing in Application Development.
                                Throughout my journey as a student, I have developed projects that uses Java, JavaScript,
                                Python, HTML, CSS, PHP, and MySQL. I also have experience using frameworks such as ReactJS,
                                Angular, Ionic, and Spring Boot.
                              </p>
                            </Col>
                          </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}