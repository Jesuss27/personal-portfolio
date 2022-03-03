import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/Landing.js"
import About from "./components/About.js"
import Portfolio from "./components/Portfolio.js"
import Container from "react-bootstrap/Container"
import SeeMore from './components/SeeMore';
import InTouch from './components/InTouch';


function App() {
  return (
    <>
    <Navigation />
    <Container>
      <Landing />
      <About />
      <Portfolio />
      <SeeMore />
      <InTouch />
    </Container>
    </>
  );
}

export default App;
