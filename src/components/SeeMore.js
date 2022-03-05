import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import { useMediaQuery } from './hooks/useMediaQuery'

function SeeMore() {

    const isLarge = useMediaQuery(`(min-width:990px)`)
  return (
    <Row className='d-flex justify-content-center align-items-center' style={{minHeight:"60vh"}}>
        <h1 className='m-auto my-2'
        style={{textAlign:"center"}}>See More!</h1>
        <Container>
            <Row>
                <Col className='d-flex p-5 flex-column  justify-content-center align-items-center' lg={6}>
                    <h3 style={
                        {
                            maxWidth:"35ch",
                            height:"auto",
                            minHeight:isLarge?"35vh":"auto",
                            textAlign:"center",
                            marginBottom:"2em"
                            
                        }
                    }>Head over to my GitHub and check out all the action behind the scenes</h3>
                    <Button style={{
                        padding:isLarge?"2em 7em":"1em 2em",
                        color:"white",
                        minHeight:"48px",
                        minWidth:"250px"
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.003" viewBox="0 0 34.875 34.003">
                    <path id="Icon_awesome-github" data-name="Icon awesome-github" d="M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z" transform="translate(0 -0.563)" fill="#fff"/>
                  </svg>
                  <h2>Github</h2></Button>

                </Col>
                <Col className='d-flex p-5  flex-column  justify-content-center align-items-center' lg={6}>
                    <h3 style={
                        {
                            maxWidth:"35ch",
                            height:"auto",
                            minHeight:isLarge?"35vh":"auto",
                            textAlign:"center",
                            marginBottom:"2em"
                            
                        }
                    } >My CodePen has a lot examples of the latest and greatest tech I've been learning</h3>
                    <Button style={{
                        minWidth:"200px",
                        padding:isLarge?"2em 7em":"1em 2em",
                        minHeight:"48px",
                        minWidth:"250px",
                        
                        color:"white"
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <path id="Icon_awesome-codepen" data-name="Icon awesome-codepen" d="M35.317,11.229,18.864.26a1.563,1.563,0,0,0-1.728,0L.683,11.229A1.573,1.573,0,0,0,0,12.515V23.484a1.573,1.573,0,0,0,.683,1.286L17.136,35.74a1.563,1.563,0,0,0,1.728,0l16.453-10.97A1.573,1.573,0,0,0,36,23.484V12.515a1.573,1.573,0,0,0-.683-1.286Zm-15.77-6.79,12.114,8.076-5.4,3.616-6.71-4.48Zm-3.094,0v7.212l-6.71,4.48-5.4-3.616ZM3.094,15.408,6.971,18,3.094,20.591ZM16.453,31.56,4.339,23.484l5.4-3.616,6.71,4.48ZM18,21.655,12.536,18,18,14.343,23.464,18Zm1.547,9.9V24.347l6.71-4.48,5.4,3.616ZM32.906,20.591,29.029,18l3.877-2.592Z" fill="#fff"/>
                  </svg>
                  <h2>Codepen</h2></Button>
                </Col>
            </Row>
        </Container>
    </Row>
  )
}

export default SeeMore