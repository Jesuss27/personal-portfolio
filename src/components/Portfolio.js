import React, {useEffect} from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Project from "./Project.js"
import { featuredProjects } from './featuredProjects'
import { useMediaQuery } from './hooks/useMediaQuery.js'
import { useInView } from 'react-intersection-observer';

function Portfolio( {setIsPortfolioVisible} ) {
    const { ref:portfolioRef, inView} = useInView({
        threshold:0.2,
      });
    useEffect(()=> {
  
      setIsPortfolioVisible(inView)
    })
    


    const isMedium = useMediaQuery(`(min-width:1024px)`)
  return (
            <Row ref={portfolioRef} className='my-5'>
                <Col>
                    <div className="titleDiv d-flex align-items-center"
                        style={{
                            maxWidth:isMedium ? "50%" : "100%",
                        }}>
                        <h2 id="portfolio">Portfolio</h2>
                        <div className="lineDiv"></div>
                    </div>
                    {/* featured projects */}
                    {featuredProjects.map(project => (
                        <Project key={project.title} 
                        title={project.title} 
                        description={project.description}
                         skillsDiv={project.skills} 
                         isMedium={isMedium} 
                         id={project.id}
                         githubLink={project.githubLink}
                         herokuLink={project.herokuLink}
                         img={project.image} />
                    ))}
                </Col>

            </Row>
  )
}

export default Portfolio