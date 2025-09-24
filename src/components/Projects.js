import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// thesis img
import thesis_homepage from "../assets/img/projects-img/thesis-homepage.png";
import thesis_wards from "../assets/img/projects-img/thesis-wards.png";
import thesis_nurse from "../assets/img/projects-img/thesis-nurse.png";
import thesis_patient from "../assets/img/projects-img/thesis-patient.png";

// rainn img
import rainn_home from "../assets/img/projects-img/rainn-home.png";
import rainn_aboutme from "../assets/img/projects-img/rainn-aboutme.png";
import rainn_eb from "../assets/img/projects-img/rainn-eb.png";
import rainn_expertise from "../assets/img/projects-img/rainn-expertise.png";

// jobfinder img
import jobfinder_start from "../assets/img/projects-img/jobfinder-start.png";
import jobfinder_home from "../assets/img/projects-img/jobfinder-home.png";
import jobfinder_details from "../assets/img/projects-img/jobfinder-details.png";

// librarysystem img
import librarysystem_home from "../assets/img/projects-img/librarysystem-home.png";
import librarysystem_about from "../assets/img/projects-img/librarysystem-about.png";
import librarysystem_menu from "../assets/img/projects-img/librarysystem-menu.png";
import librarysystem_contact from "../assets/img/projects-img/librarysystem-contact.png";
import librarysystem_register from "../assets/img/projects-img/librarysystem-register.png";

// wio img
import wio_home from "../assets/img/projects-img/wio-home.png";
import wio_about from "../assets/img/projects-img/wio-about.png";
import wio_menu from "../assets/img/projects-img/wio-menu.png";
import wio_contact from "../assets/img/projects-img/wio-contact.png";
import wio_reservation from "../assets/img/projects-img/wio-reservation.png";

// oracle img
import oracle_login from "../assets/img/projects-img/oracle-login.png";
import oracle_home from "../assets/img/projects-img/oracle-home.png";
import oracle_list from "../assets/img/projects-img/oralce-list.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  const thesisImages = [thesis_homepage, thesis_wards, thesis_nurse, thesis_patient];
  const rainnImages = [rainn_home, rainn_aboutme, rainn_eb, rainn_expertise];
  const librarysystemImages = [librarysystem_home, librarysystem_about, librarysystem_menu, librarysystem_contact, librarysystem_register];
  const wioImages = [wio_home, wio_about, wio_menu, wio_contact, wio_reservation];

  const jobfinderImages = [jobfinder_start, jobfinder_home, jobfinder_details];
  const oracleImages = [oracle_login, oracle_home, oracle_list];

  const web_projects = [
    {
      title: "Thesis: Patient Acuity Monitoring for Improved Nurse-to-Patient Staffing and Assignment",
      description: "A collaborative project with one of the medical companies in the Philippines, which needed a solution for its patient monitoring system, developed a model that uses patient acuity to improve decision-making.",
      imgUrls: thesisImages,
    },
    {
      title: "Rainn Website",
      description: "A commissioned project for a BS Multimedia Arts Student.",
      imgUrls: rainnImages,
    },
    {
      title: "Library System",
      description: "Developed a commissioned project: a simple library website.",
      imgUrls: librarysystemImages,
    },
    {
      title: "Winging It Online",
      description: "A client-based project—a requirement for our course subject to aid small business owners.",
      imgUrls: wioImages,
    },
  ];

  const mobile_projects = [
    {
      title: "Job Finder App",
      description: "A commissioned project—a simple job finder app.",
      imgUrls: jobfinderImages,
    },
  ];

  const other_projects = [
    {
      title: "CRUD via Oracle",
      description: "A commissioned project—a simple CRUD operation via Oracle inside a virtual machine.",
      imgUrls: oracleImages,
    }
  ]

  return (
    <section className="project" id="projects" data-aos="fade-up">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="isVisible" data-aos="fade-up" data-aos-delay="100">
                <h2 data-aos="fade-down">Projects</h2>
                <p data-aos="fade-up" data-aos-delay="150">These are the projects I've developed during my journey as a student.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" data-aos="zoom-in" data-aos-delay="200">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="isVisible">
                    <Tab.Pane eventKey="first">
                      <Row data-aos="fade-up" data-aos-delay="100">
                        {
                          web_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrls={project.imgUrls}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="proj-imgbx-img" data-aos="fade-up" data-aos-delay="100">
                        {
                          mobile_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrls={project.imgUrls}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row data-aos="fade-up" data-aos-delay="100">
                        {
                          other_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrls={project.imgUrls}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}