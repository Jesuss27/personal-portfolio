import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'


function ContactItem({svg, text}) {
  return (
    
        <Row className="mb-2 item mx-auto" style={{maxWidth:"500px"}}>
            <Col xs={2}>
                {svg}
            </Col>
            <Col xs={10}>
                <div className="itemText">{text}</div>
            </Col>
        </Row>
    
  )
}

export default ContactItem