import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Project from "./Project.js"
import { featuredProjects } from './featuredProjects'
import { useMediaQuery } from './hooks/useMediaQuery.js'

function Portfolio() {
    const isMedium = useMediaQuery(`(min-width:768px)`)
  return (
            <Row className='my-5'>
                <Col>
                    <div className="titleDiv d-flex align-items-center"
                        style={{
                            maxWidth:isMedium ? "50%" : "100%",
                        }}>
                        <h2>Portfolio</h2>
                        <div className="lineDiv"></div>
                    </div>
                    {/* featured projects */}
                    {featuredProjects.map(project => (
                        <Project key={project.title} 
                        title={project.title} 
                        description={project.description}
                         skillsDiv={project.skills} 
                         isMedium={isMedium} 
                         id={project.id} />
                    ))}
                </Col>

            </Row>
  )
}

export default Portfolio