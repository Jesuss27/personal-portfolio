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
              <p className='mt-2'>Hello, my name is</p>
              <h2 className='mt-2 highlight-purple'>Jesus Javier Sevilla</h2>
              <h1 className='mt-2 faded-purple'>I build stuff that works</h1>
              <p className='mt-2'>I am a <span className='highlight-purple'>web developer</span> that specializes in 
                  building immersive digital adventures. Currently,
                  I'm looking to join a firm designing and developing digital products that is 
                  focused on evolving human-centric businesses and providing quality services</p>

              <Button style={{padding:"2em 3em"}}  variant="outline-primary">Check out my portfolio!</Button>
              
              </Col>
          </Row>
        </Container>
    
  )
}

export default Landing;