import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ECertificates } from './components/ECertificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
