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
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
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
