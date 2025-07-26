import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { eCertificates } from './components/eCertificates';
import Banner from './assets/img/banner-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Skills />
      <eCertificates />
    </div>
  );
}

export default App;
