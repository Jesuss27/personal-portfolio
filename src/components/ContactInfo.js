import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ContactItem from './ContactItem'
import Pin from "../components/svg/Pin"
import Phone from './svg/Phone'
import EmailSvg from './svg/EmailSvg'
import Map from "../components/Map"

function ContactInfo() {

   
  return (
    <Container>
      <Row>
            <Map />
      </Row>
        
      <Row>
        <ContactItem svg={<Pin/>} text="San Diego, California"/>
        <ContactItem svg={<Phone/>} text="714-234-7791"/>
        <ContactItem svg={<EmailSvg/>} text="jesussevilla27@icloud.com"/>
        </Row>
        
        

    </Container>
  )
}

export default ContactInfo