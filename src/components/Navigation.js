import React from 'react'
import {Navbar, Nav, NavDropdown,Container, Row} from "react-bootstrap"
import { HashLink as Link} from "react-router-hash-link"


function Navigation() {
  return (
    <>
        
        <Navbar bg="gray-500" expand="md">
            <Container>
                <Navbar.Brand>LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Item className='m-2'>
                      <Link to="/">Home</Link>
                     </Nav.Item>

                    <Nav.Item className='m-2' ><Link to="/#about">About Me</Link></Nav.Item>
                    <Nav.Item className='m-2'><Link to="/#portfolio">Portfolio</Link></Nav.Item>
                    <Nav.Item className='m-2'><Link to="/contact">Contact</Link></Nav.Item>
                    
                  </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
       
    </>
  )
}

export default Navigation