import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myselfImg from "../assets/img/myself.png";
import Aos from 'aos';

export const Introduction = () => {
    useEffect(() => {
        Aos.init({ duration: 800, easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)', once: true, offset: 50 });
      }, []);
    return (
        <section className="banner" id="home" data-aos="fade-down" data-aos-delay="100">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={6} xl={6} className="text-content" data-aos="fade-right" data-aos-delay="300">
                        <h1>Hi! I'm Vin</h1>
                        <p>A Junior-level <span className="tagline">Software Engineer</span></p>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="image-content" data-aos="fade-left" data-aos-delay="300">
                        <img src={myselfImg} alt="myselfImg"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}