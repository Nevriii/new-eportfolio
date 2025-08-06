import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ECertificates } from './components/ECertificates';
import { Contact } from './components/Contact';
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
    </div>
  );
}

export default App;
