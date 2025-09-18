import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export const ProjectCard = ({ title, description, imgUrls }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (imgUrls.length === 1) return; // No need to switch if only one image
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imgUrls]);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <img src={imgUrls[currentIndex]} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="proj-txtx">{description}</span>
        </div>
      </div>
    </Col>
  )
}