import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoWhite from '../assets/img/logo-white.png';
import logoBlack from '../assets/img/logo-black.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import lightModeIcon from '../assets/img/light-icon.svg';
import darkModeIcon from '../assets/img/dark-icon.svg';


function useMediaQuery(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [query]);
  
    return matches;
  }

export const NavBar = () => {
    const [activeLink, setActivelink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });
    const isTabletOrMobile = useMediaQuery("(max-width: 991px)");
    const currentLogo =
    !isDarkMode && isTabletOrMobile ? logoBlack : logoWhite;

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }

            const sections = [
                { id: 'home', offset: document.getElementById('home')?.offsetTop || 0 },
                { id: 'skills', offset: document.getElementById('skills')?.offsetTop || 0 },
                { id: 'projects', offset: document.getElementById('projects')?.offsetTop || 0 },
                { id: 'ecerts', offset: document.getElementById('ecerts')?.offsetTop || 0 }
            ];
            
            // Account for navbar height (adjust this value based on your navbar height)
            const navbarHeight = 75; // Based on your CSS scroll-padding-top
            const scrollPosition = window.scrollY + navbarHeight;
            
            let currentSection = 'home';
            
            // Find the current section based on scroll position
            for (let i = sections.length - 1; i >= 0; i--) {
                if (scrollPosition >= sections[i].offset - 100) { // 100px buffer for better detection
                    currentSection = sections[i].id;
                    break;
                }
            }
            
            setActivelink(currentSection);
            if (window.location.hash !== `#${currentSection}`) {
                window.history.replaceState(null, '', `#${currentSection}`);
            }
        }

        setTimeout(() => {
            onScroll();
        }, 100);

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // Initialize theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const bannerElement = document.querySelector('.banner');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-body');
            if (bannerElement) {
                bannerElement.classList.add('banner-dark');
            }
            setIsDarkMode(true);
        } else {
            document.body.classList.remove('dark-body');
            if (bannerElement) {
                bannerElement.classList.remove('banner-dark');
            }
            setIsDarkMode(false);
        }
    }, []);

    // Handle theme toggle with React state
    const handleThemeToggle = (e) => {
        const isChecked = e.target.checked;
        const bannerElement = document.querySelector('.banner');
        setIsDarkMode(isChecked);
        
        if (isChecked) {
            document.body.classList.add('dark-body');
            if (bannerElement) {
                bannerElement.classList.add('banner-dark');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-body');
            if (bannerElement) {
                bannerElement.classList.remove('banner-dark');
            }
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={currentLogo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ marginLeft: "30px" }}>
                        <Nav.Link 
                            href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link2'}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link2'}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link2'}>Projects</Nav.Link>
                        <Nav.Link href="#ecerts" className={activeLink === 'ecerts' ? 'active navbar-link' : 'navbar-link2'}>E-Certificates</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ervin-tejada-a18239242" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/Nevriii" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                            <a href="mailto:ervintejada05@gmail.com"><img src={navIcon3} alt="Email" /></a>
                        </div>
                        <input 
                            className="theme-toggle"
                            style= {{ '--light-icon': `url(${lightModeIcon})`, '--dark-icon': `url(${darkModeIcon})` }} 
                            type="checkbox" 
                            checked={isDarkMode}
                            onChange={handleThemeToggle}
                        />
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}