import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import { useMediaQuery } from './hooks/useMediaQuery'

function InTouch() {

  const isMedium = useMediaQuery(`(min-width:768px)`)
  const isLarge = useMediaQuery(`(min-width:1050px)`)
  return (
    <>

    <Container>
        <Row style={{
        minHeight:"100vh",
        textAlign:"center"}}>
          <Col className='d-flex flex-column justify-content-around mx-auto' style={{
            textAlign:"center",
            maxWidth:isMedium ? "75%": ""}}>
            <h1>Get In Touch</h1>
            <h3>Do I sound like a good fit for your team?</h3>
            <div className="linesContainer d-flex align-items-center">
              <div className="lineDiv "></div>
              <h3>That's what I thought</h3>
              <div className="lineDiv"></div>
            </div>
            <h3>Connect with me and perhaps
              we can work together at making
                the web a more <span className='highlight-purple'>beautiful place</span>.
              </h3>
              
          </Col>
          </Row>
      </Container>
      
    </>
  )
}

export default InTouch