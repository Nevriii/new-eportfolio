import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { ECertificates } from './components/ECertificates';
import Banner from './assets/img/banner-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Skills />
      <ECertificates />
    </div>
  );
}

export default App;
