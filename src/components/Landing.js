import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Landing() {
  return (
      <Container>
          <Row className='d-flex justify-content-start align-items-center' style={{height:"90vh"}}>
              <Col className='ml-auto'>
              <h5 className='mt-2'>Hello, my name is</h5>
              <h1 className='mt-2'>Jesus Javier Sevilla</h1>
              <h3 className='mt-2'>I build stuff that works</h3>
              <p className='mt-2'>I am a web developer that specializes in 
                  building immersive digital adventures. Currently,
                  I'm looking to join a firm designing and developing digital products that is 
                  focused on evolving human-centric businesses and providing quality services</p>

              <Button  variant="outline-primary">Check out my portfolio!</Button>
              
              </Col>
          </Row>
        </Container>
    
  )
}

export default Landing;