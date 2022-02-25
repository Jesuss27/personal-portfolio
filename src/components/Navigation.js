import React from 'react'
import {Navbar, Nav, NavDropdown,Container, Row} from "react-bootstrap"


function Navigation() {
  return (
    <>
        
        <Navbar bg="gray-500" expand="md">
            <Container>
                <Navbar.Brand>LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#portfolio">Portfolio</Nav.Link></Nav.Item>
                    
                  </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
       
    </>
  )
}

export default Navigation