import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import { useMediaQuery } from './hooks/useMediaQuery'

function SeeMore() {

    const isMedium = useMediaQuery(`(min-width:768px)`)
  return (
    <Row className='d-flex justify-content-center align-items-center'>
        <h1 className='m-auto'
        style={{textAlign:"center"}}>See More!</h1>
        <Container>
            <Row>
                <Col className='d-flex p-2 flex-column  justify-content-center align-items-center' md={6}>
                    <p style={
                        {
                            maxWidth:"15ch",
                            height:isMedium ? "20vh": "auto",
                            textAlign: isMedium ? "":"center",
                            
                        }
                    }>Head over to my GitHub and check out all the action behind the scenes</p>
                    <Button style={{
                        padding:"2em 7em"
                    }}>Github</Button>

                </Col>
                <Col className='d-flex p-2  flex-column  justify-content-center align-items-center' md={6}>
                    <p style={
                        {
                            maxWidth:"15ch",
                            height:isMedium ?"20vh": "auto",
                            textAlign: isMedium ? "":"center",
                            
                        }
                    } >My CodePen has a lot examples of the latest and greatest tech I've been learning</p>
                    <Button style={{
                        padding:"2em 7em"
                    }}>Github</Button>
                </Col>
            </Row>
        </Container>
    </Row>
  )
}

export default SeeMore