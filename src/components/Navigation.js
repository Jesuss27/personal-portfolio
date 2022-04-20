import React from 'react'
import {Navbar, Nav, NavDropdown,Container, Row} from "react-bootstrap"
import { HashLink as Link} from "react-router-hash-link"
import LinkItem from "./LinkItem.js"


function Navigation( {isLandingVisible, isAboutVisible,isPortfolioVisible,isContactVisible}) {
  return (
    <>
        
        <Navbar style={{background:"white",zIndex:"1000", position:"sticky",}} fixed="top" expand="md">
            <Container> 
                <Navbar.Brand><h2>JS</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Item className='my-2 mx-4'><Link to="/"><LinkItem text={"Home"} isVisible={isLandingVisible}/></Link></Nav.Item>
                     <Nav.Item className='my-2 mx-4' ><Link to="/#about"><LinkItem text={"About Me"} isVisible={isAboutVisible}/></Link></Nav.Item>
                    <Nav.Item className='my-2 mx-4'><Link to="/#portfolio"><LinkItem text={"Portfolio"} isVisible={isPortfolioVisible}/></Link></Nav.Item>
                    <Nav.Item className='my-2 mx-4'><Link to="/#contact"><LinkItem text={"Contact"} isVisible={isContactVisible}/></Link></Nav.Item>
                    
                  </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
       
    </>
  )
}

export default Navigation