import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

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
import Aos from 'aos';

export const Skills = () => {
    const responsive = {
        tablet: {
            breakpoint: { max: 991, min: 464 }, // Changed max to 991 to match Bootstrap's lg breakpoint
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    useEffect(() => {
        Aos.init({ duration: 800, easing: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)', once: true, offset: 50 });
      }, []);

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="skills-bx" data-aos="fade-down">Skills</h2>
                            {/* Carousel - Only shows on mobile/tablet */}
                            <div className="d-block d-lg-none" data-aos="zoom-out-right" data-aos-delay="100">
                                <Carousel 
                                    responsive={responsive} 
                                    infinite={true}
                                    autoPlay={true}               // Enable autoplay
                                    autoPlaySpeed={3000}          // 3 seconds between slides
                                    keyBoardControl={true}       // Allow keyboard navigation
                                    customTransition="transform 600ms ease-in-out"    // Smooth transition
                                    transitionDuration={600}     // Transition duration
                                    removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on all devices
                                    className="owl-carousel owl-theme skill-slider"
                                    data-aos="zoom-out-right" data-aos-delay="300"
                                >
                                    <div className="item">
                                        <img src={logo6} alt="Image" />
                                        <h5>Java</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo9} alt="Image" />
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo8} alt="Image" />
                                        <h5>PHP</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo7} alt="Image" />
                                        <h5>MySQL</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo4} alt="Image" />
                                        <h5>HTML</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo3} alt="Image" />
                                        <h5>CSS</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo1} alt="Image" />
                                        <h5>JavaScript</h5>
                                    </div>
                                </Carousel>
                                <Carousel 
                                    responsive={responsive} 
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={4000}
                                    keyBoardControl={true}
                                    customTransition="transform 600ms ease-in-out"
                                    transitionDuration={800}
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    className="owl-carousel owl-theme skill-slider"
                                    data-aos="zoom-out-right" data-aos-delay="100"
                                >
                                    <div className="item">
                                        <img src={logo10} alt="Image" />
                                        <h5>ReactJS</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo2} alt="Image" />
                                        <h5>Angular</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo5} alt="Image" />
                                        <h5>Ionic</h5>
                                    </div>
                                    <div className="item">
                                        <img src={logo11} alt="Image" />
                                        <h5>Spring Boot</h5>
                                    </div>
                                </Carousel>
                            </div>
                            <Container>
                                <Row className="align-items-center justify-content-center">
                                    {/* Rotating Gallery - Only shows on desktop/laptop */}
                                    <Col xs={12} md={6} xl={6} className="text-content d-none d-lg-block" data-aos="zoom-out-right" data-aos-delay="300">
                                        <div className="gallery-wrapper container d-flex flex-column me-md-5" style={{ paddingRight: "20px" }}>
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
                                    <Col xs={12} md={12} xl={6} className="skill-bx-txt" data-aos="zoom-out-left" data-aos-delay="300">
                                        <p className="text-content">
                                            I'm a Computer Science graduate at Mapúa University specializing in Application Development.
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
        </section>
    )
}