
import "../styles/main.scss"
//import components
import Landing from "../components/Landing.js"
import About from "../components/About.js"
import Portfolio from "../components/Portfolio.js"
import Container from "react-bootstrap/Container"
import SeeMore from '../components/SeeMore';
import InTouch from '../components/InTouch';
import Contact from "../pages/Contact"
// styling and animation
import {motion} from "framer-motion"


function Home( { setIsLandingVisible, setIsAboutVisible, setIsPortfolioVisible, setIsContactVisible }) {
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
    <Container>
      {/* motion container */}
      <motion.div initial={"hidden"} animate={"visible"} variants={variants}>

        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}>
          <Landing setIsLandingVisible={setIsLandingVisible}/>
        </motion.div>

        <motion.div  whileInView={"visible"} initial={"hidden"} variants={variants}>
          <About setIsAboutVisible={setIsAboutVisible} />
        </motion.div>

        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}>
          <Portfolio setIsPortfolioVisible={setIsPortfolioVisible} />
          </motion.div>
        
        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}><SeeMore /></motion.div>
        <motion.div whileInView={"visible"} initial={"hidden"} variants={variants}><InTouch /></motion.div>
      </motion.div>
    </Container>
    <Contact setIsContactVisible={setIsContactVisible} />
    </>
  )
}

export default Home