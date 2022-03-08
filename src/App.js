import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import "./styles/main.scss"
import {Switch, Route} from "react-router-dom"
//import components
import Landing from "./components/Landing.js"
import About from "./components/About.js"
import Portfolio from "./components/Portfolio.js"
import Container from "react-bootstrap/Container"
import SeeMore from './components/SeeMore';
import InTouch from './components/InTouch';
import Contact from './components/Contact';
// styling and animation
import { createGlobalStyle } from "styled-components";
import {motion} from "framer-motion"

function App() {

  const GlobalStyles = createGlobalStyle`
  /* global styles */

    html{
      font-family:"Mulish",sans-serif;
      /* h1 variables */
      --h1-mobile-s: 32px;
      --h1-mobile-md: 33px;
      --h1-mobile-l: 34px;
      --h1-desktop-s: 64px;
      --h1-desktop-md: 72px;
      --h1-desktop-l: 95px;
      /* p variables */
      --p-mobile-s: 18px;
      --p-mobile-md: 19px;
      --p-mobile-l: 20px;
      --p-desktop-s: 20px;
      --p-desktop-md: 20px;
      --p-desktop-l: 20px;
      /* h3 variables */
      --h3-mobile-s: 26px;
      --h3-mobile-md: 27px;
      --h3-mobile-l:28px;
      --h3-desktop-s: 32px;
      --h3-desktop-md: 38px;
      --h3-desktop-l: 40px;
      /* h2 variables */
      --h2-mobile-s: 32px;
      --h2-mobile-md: 33px;
      --h2-mobile-l:34px;
      --h2-desktop-s: 48px;
      --h2-desktop-md: 56px;
      --h2-desktop-l: 62px;
      /* color variables */
      --primary-purple:#8781FE;
      --faded-purple:#B2AEFE;
    }
  
  `

  const variants = {
    visible: {
      opacity:1,
      y:0,
      transition:{
        when:"beforeChildren",
        duration:1,
      }
    },
    hidden:{
      opacity:0,
      y:50,
    }
  }
  return (
    <>
    <GlobalStyles />
    <Navigation />
    <Container>
      {/* motion container */}
      <motion.div initial={"hidden"} animate={"visible"} variants={variants}>

        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}>
          <Landing />
        </motion.div>

        <motion.div  whileInView={"visible"} initial={"hidden"} variants={variants}>
          <About />
        </motion.div>

        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}><Portfolio /></motion.div>
        
        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}><SeeMore /></motion.div>
        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}><InTouch /></motion.div>
        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}><Contact /></motion.div>

      </motion.div>
    </Container>
    </>
  );
}

export default App;
