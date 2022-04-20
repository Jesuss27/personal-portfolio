import React, {useEffect} from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'
import { useInView } from 'react-intersection-observer';

function About( {setIsAboutVisible}) {
    const { ref:aboutRef, inView} = useInView({
        threshold:0.5,
      });
      
  useEffect(()=> {

    setIsAboutVisible(inView)
  })




  return (
     <Container  ref={aboutRef} >
        <Row className='d-flex justify-content-start align-items-center' style={{minHeight: "100vh"}} >
            <Col md={6}className='ml-auto d-flex flex-column justify-content-around'>
                <div className="titleDiv d-flex  align-items-center mb-5">
                    <h2 id='about'>About Me</h2>
                    <div className="lineDiv"></div>
                </div>
                <p>Hello! My name is Jesus and I like to make the web
                     a more beautiful place. I first became interested in web development 
                    in March 2020, when I noticed that I had a ton 
                    extra free time on my hands (I wonder why...).</p>

                <p>I decided to pick up a productive new hobby, 
                    and I heard that programming was all the 
                    rage. Off I went and dived head first into the 
                    deep rabbit hole that is web development. Turns out, 
                    I've gotten quiet good at it.</p>   

                <p>Today I spend my days, when I'm not playing chess or 
                    rolling on the jiu jitsu mats, <span className="highlight-purple">designing </span>and
                     <span className="highlight-purple"> developing</span> web applications that look amazing 
                     and work just the way that they should!</p>

                <p>Here is some of the tech I've been working with.</p>

                <Row>
                    <Col sm={6}>
                        <ul>
                            <li className='d-flex align-items-center'>
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                                <path id="Polygon_1" data-name="Polygon 1" d="M7,0l7,13H0Z" transform="translate(13) rotate(90)" fill="#8781fe"/>
                            </svg>
                            JavaScript
                            </li>
                            <li className='d-flex align-items-center'>
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                                <path id="Polygon_1" data-name="Polygon 1" d="M7,0l7,13H0Z" transform="translate(13) rotate(90)" fill="#8781fe"/>
                            </svg>
                            HTML
                            </li>
                            <li className='d-flex align-items-center'>
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                                <path id="Polygon_1" data-name="Polygon 1" d="M7,0l7,13H0Z" transform="translate(13) rotate(90)" fill="#8781fe"/>
                            </svg>
                            CSS
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                    <ul >
                            <li className='d-flex align-items-center'>
                                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                                    <path id="Polygon_1" data-name="Polygon 1" d="M7,0l7,13H0Z" transform="translate(13) rotate(90)" fill="#8781fe"/>
                                </svg>
                            React
                            </li>
                            <li className='d-flex align-items-center'>
                                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                                    <path id="Polygon_1" data-name="Polygon 1" d="M7,0l7,13H0Z" transform="translate(13) rotate(90)" fill="#8781fe"/>
                                </svg>
                            Bootstrap 5
                            </li>
                            <li className='d-flex align-items-center'>
                                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                                    <path id="Polygon_1" data-name="Polygon 1" d="M7,0l7,13H0Z" transform="translate(13) rotate(90)" fill="#8781fe"/>
                                </svg>
                            Wordpress
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' md={6}>
                <div  style={{boxShadow:"5px 5px 10px grey",}}className="photo-mask my-4">
                <img src="/images/headshotPNG.png" alt="" className='headshot' />
                </div>


                
            </Col>
        </Row>
      </Container>
      
     
    
  )
}

export default About