import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import { useMediaQuery } from './hooks/useMediaQuery'

function Project( { title, description, skillsDiv, id }) {

    const isMedium = useMediaQuery( `(min-width:768px)`) ;
    
  return (
    <Row className='my-5'>
        <Col> 
            <div className="cardContainer">
                <div className="imgContainer"></div>
                <div className="card" style={{
                    border:"none",
                    color:"white",
                    background:isMedium ? "white" : "#8781FE",
                    opacity:"1",
                   }}>
                    <h2 className='my-2'>Featured Project</h2>
                    <h3 className='my-2'>{title}</h3>
                    <p className='my-2'
                        style={{
                            background: isMedium ? "#8781FE" : "transparent",
                            padding: isMedium ? "1em" : "0",
                            zIndex:"22"
                        }}>{description}</p>


                    <div 
                    style={{
                        zIndex:"22"
                    }}
                    className="skillsDiv">
                        {skillsDiv.map((skill,index) => (
                            <Badge 
                            style={
                                {padding:"0.75em",
                                borderRadius:"0px",
                                backgroundColor:"#8781FE",
                                }
                            }
                            className="mx-2"key={index}>{skill}</Badge>
                        ))}
 
                    </div>
                </div>
            </div>

        </Col>
    </Row>
  )
}

export default Project