import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import { useMediaQuery } from './hooks/useMediaQuery'
import Heroku from "./svg/Heroku.js"
import Github from "./svg/Github.js"

function Project( { title, description, skillsDiv, isMedium, herokuLink, githubLink , img }) {
    
  return (
    <Row className='my-5'>
        <Col> 
            <div className="cardContainer" style={{position:"relative"}}>
                <div style={{
                    position:"absolute",
                    right: "0",
                    bottom:"0",
                    width:"60%",
                    border:"1px solid black",
                    boxShadow:"5px 5px 10px grey",
                    
                    backgroundColor:"#DAD8FF",
                    zIndex:"21",
                    display: isMedium? "inline-block":"none",
                }}className="imgContainer responsive photo-mask">
                    <img src={img} style={{width:"100%",height:"auto",objectFit:"contain",zIndex:"100"}} alt=""  ></img>
                    </div>

                <div className="card" style={{
                    border:"none",
                    color:"white",
                    background:isMedium ? "white" : "#8781FE",
                    opacity:"1",
                    padding:"2em",
                    
                   }}>
                    <h4 style={{
                        color: isMedium ? "black" : "white",
                        zIndex:"22"
                    }}
                    className='my-2'>Featured Project</h4>

                    <div className="d-flex align-items-center">
                        <h3 style={{
                            color: isMedium ? "black" : "white",
                            zIndex:"22"
                        }}className='my-2'>{title}</h3>
                        <Heroku link={herokuLink} />
                        <Github link={githubLink}   />
                    </div>


                    <p className='my-2'
                        style={{
                            background: isMedium ? "#8781FE" : "",
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
                            bg="secondary"
                            style={
                                {padding:"0.75em",
                                borderRadius:"0px",
                                backgroundColor:"#FFFADE",
                                fontFamily:`"Mulish", sans-serif`,
                                letterSpacing:"1px"
                                }
                            }
                            className="m-2"key={index}>{skill}</Badge>
                        ))}
 
                    </div>
                    <p><a href={herokuLink} target='__blank' style={{textDecoration:"underline",color:"black"}}>Link to project</a></p>
                </div>
            </div>

        </Col>
    </Row>
  )
}

export default Project