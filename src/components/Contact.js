import { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs-config';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Validate form
    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: 'Please fill in all required fields (First Name, Email, and Message)' });
      setButtonText("Send");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDetails.email)) {
      setStatus({ success: false, message: 'Please enter a valid email address' });
      setButtonText("Send");
      return;
    }

    try {
      // Get current time in Philippines
      const timePH = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" });
      const templateParams = {
        title: "Hire",
        name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
        time: timePH,
        message: formDetails.message,
        email: formDetails.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      
      if (response.status === 200) {
        setStatus({ success: true, message: 'Message sent successfully!' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setButtonText("Send");
      setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setStatus({});
    setFormDetails(formInitialDetails);
  };

  return (
    <>
      {/* Sidebar "Hire Me" Button */}
      <div className="hire-me-sidebar" onClick={() => setShowModal(true)}>
        <div className="hire-me-text">Hire Me!</div>
      </div>

      {/* Contact Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose}
        size="lg"
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={12}>
                <div className="contact">
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                            <button type="submit" disabled={buttonText === "Sending..."}><span>{buttonText}</span></button>
                          </Col>
                          {
                            status.message &&
                            <Col>
                              <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                          }
                        </Row>
                      </form>
                    </div>}
                  </TrackVisibility>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}