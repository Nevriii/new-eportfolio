import logo from './logo.svg';
import './App.css';
import './components/scss/background.scss';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ECertificates } from './components/ECertificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Define particle positions based on your CSS background positions
    const particlePositions = [
      { x: 20, y: 30, color: 'red' },
      { x: 30, y: 50, color: 'red' },
      { x: 80, y: 20, color: 'green' },
      { x: 70, y: 40, color: 'green' },
      { x: 40, y: 80, color: 'blue' },
      { x: 50, y: 60, color: 'blue' },
      { x: 90, y: 70, color: 'red' },
      { x: 10, y: 90, color: 'green' },
      { x: 60, y: 10, color: 'blue' }
    ];

    const handleMouseMove = (e) => {
      // Remove existing connection lines
      document.querySelectorAll('.connection-line').forEach(line => line.remove());
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const connectionRadius = 300; // 300px radius for connections
      
      // Create connection lines from cursor to nearby particles
      particlePositions.forEach((particle, index) => {
        const particleX = (particle.x / 100) * window.innerWidth;
        const particleY = (particle.y / 100) * window.innerHeight;
        
        // Calculate distance from cursor to particle
        const deltaX = particleX - mouseX;
        const deltaY = particleY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Only create lines to particles within connection radius
        if (distance <= connectionRadius) {
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          
          // Create connection line
          const connectionLine = document.createElement('div');
          connectionLine.className = 'connection-line';
          connectionLine.style.position = 'fixed';
          connectionLine.style.left = mouseX + 'px';
          connectionLine.style.top = mouseY + 'px';
          connectionLine.style.width = distance + 'px';
          connectionLine.style.height = '1px';
          connectionLine.style.background = 'rgba(255, 255, 255, 0.8)';
          connectionLine.style.transformOrigin = '0 0';
          connectionLine.style.transform = `rotate(${angle}deg)`;
          connectionLine.style.zIndex = '-1';
          connectionLine.style.pointerEvents = 'none';
          connectionLine.style.animation = 'connectDotsFromCursor 2s ease-in-out infinite';
          connectionLine.style.animationDelay = `${index * 0.1}s`; // Stagger animations
          document.body.appendChild(connectionLine);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.connection-line').forEach(line => line.remove());
    };
  }, []);

  return (
    <div className="App">
      {/* Particle layers for different movement directions */}
      <div className="particle-layer-1"></div>
      <div className="particle-layer-2"></div>
      <div className="particle-layer-3"></div>
      
      <NavBar />
      <Introduction />
      <Skills />
      <Projects />
      <ECertificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
