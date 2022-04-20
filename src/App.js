
import './App.css';
import Navigation from './components/Navigation';
import "./styles/main.scss"
import {Routes, Route} from "react-router-dom"
//import components
import Home from "./pages/Home"
// styling and animation
import {useState} from "react"

function App() {

const [isLandingVisible, setIsLandingVisible] = useState()
const [isAboutVisible, setIsAboutVisible] = useState()
const [isPortfolioVisible, setIsPortfolioVisible] = useState()
const [isContactVisible, setIsContactVisible] = useState()


  
  return (
    <>
    <Navigation 
    isLandingVisible={isLandingVisible} 
    isAboutVisible={isAboutVisible} 
    isPortfolioVisible={isPortfolioVisible} 
    isContactVisible={isContactVisible} />
    <Routes>
      <Route 
      path="/" 
      element={
      <Home 
        setIsLandingVisible={setIsLandingVisible} 
        setIsAboutVisible={setIsAboutVisible} 
        setIsPortfolioVisible={setIsPortfolioVisible}  
        setIsContactVisible={setIsContactVisible}
        />}>

        </Route>
      
    </Routes>
    
    
    
    </>
  );
}

export default App;
