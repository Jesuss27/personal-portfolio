
import "../styles/main.scss"
//import components
import Landing from "../components/Landing.js"
import About from "../components/About.js"
import Portfolio from "../components/Portfolio.js"
import Container from "react-bootstrap/Container"
import SeeMore from '../components/SeeMore';
import InTouch from '../components/InTouch';
// styling and animation
import { createGlobalStyle } from "styled-components";
import {motion} from "framer-motion"


function Home() {
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

      </motion.div>
    </Container>
  )
}

export default Home