import { useEffect, useRef, useState } from "react";
import "./scss/e-cert.scss";
import data_warehouse from "../assets/img/ecerts-logo/data_warehouse.png";
import engineering_practices from "../assets/img/ecerts-logo/engineering_practices.png";
import data_science from "../assets/img/ecerts-logo/intro_to_data_sci.png";
import essential_tools_for_app_development from "../assets/img/ecerts-logo/essential_tools_for_app_dev.png";
import greedy_algorithms from "../assets/img/ecerts-logo/greedy_algorithms.png";
import intro_to_ai_cert from "../assets/img/ecerts-logo/intro_to_ai_cert.png";
import software_development_process_and_methodologies from "../assets/img/ecerts-logo/software_development_process_and_methodologies.png";
import version_control_git from "../assets/img/ecerts-logo/version_control_git.png";
import Aos from "aos";

export const ECertificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);
    
    const Photo = [ 
        data_warehouse,
        engineering_practices,
        data_science,
        essential_tools_for_app_development,
        greedy_algorithms,
        intro_to_ai_cert,
        software_development_process_and_methodologies,
        version_control_git
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Check if section is in viewport
                if (rect.bottom >= 0 && rect.top <= windowHeight) {
                    // Calculate progress through the section (0 to 1)
                    const sectionProgress = Math.max(0, Math.min(1, 
                        (windowHeight - rect.top) / (windowHeight + rect.height)
                    ));
                    
                    // Map progress to certificate index
                    const newIndex = Math.min(
                        Math.floor(sectionProgress * Photo.length),
                        Photo.length - 1
                    );
                    
                    setCurrentIndex(newIndex);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [Photo.length]);

    useEffect(() => {
        Aos.init({ duration: 800, easing: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)', once: true, offset: 50 });
      }, []);

    return (
        <section className="e-certs" id="ecerts">
            <div className="e-certificates">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="e-certificates-bx">
                                <h2 data-aos="zoom-out-up" data-aos-delay="100">eCertificates</h2>
                                <div className="certificates-container">
                                    {Photo.map((photo, index) => (
                                        <figure 
                                            key={index}
                                            className={index === currentIndex ? 'active' : ''}
                                            data-index={index}
                                            ref={sectionRef}
                                        >
                                            <img src={photo} alt={`eCertificate ${index + 1}`}/>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
