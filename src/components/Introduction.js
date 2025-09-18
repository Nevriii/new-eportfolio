import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myselfImg from "../assets/img/myself.png";

export const Introduction = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={6} xl={6} className="text-content">
                        <h1>Hi! I'm Vin</h1>
                        <p>A Junior-level <span className="tagline">Software Engineer</span></p>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="image-content">
                        <img src={myselfImg} alt="myselfImg"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}