import React, {useEffect} from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'
import ContactInfo from "../components/ContactInfo.js"
import ContactForm from "../components/ContactForm.js"
import { useInView } from 'react-intersection-observer';


function Contact( {setIsContactVisible}) {
  const { ref:contactRef, inView} = useInView(
    {
      threshold:0.5,
    }
  );
  useEffect(()=> {

    setIsContactVisible(inView)
  })
  return (
    <Container  ref={contactRef} id="contact" style={{height:"100vh"}}>
              <Row className='d-flex justify-content-center'>
        <h1 style={{textAlign:"center"}} className="mb-5">Contact</h1>
      </Row>
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <ContactInfo />
          
          
        </Col>

        <Col md={6}>
          <ContactForm />
          
        </Col>
      </Row>
    </Container>
  )
}

export default Contact