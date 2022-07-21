import React, {useEffect, useState} from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'
import ContactInfo from "../components/ContactInfo.js"
import ContactForm from "../components/ContactForm.js"
import { useInView } from 'react-intersection-observer';
import "../styles/Contact.css"


function Contact( {setIsContactVisible}) {

  const [emailSuccess, setEmailSuccess] = useState()

  const { ref:contactRef, inView} = useInView(
    {
      threshold:0.5,
    }
  );
  useEffect(()=> {
    setIsContactVisible(inView)
  })
  return (
    <div ref={contactRef} id="contact" className="footer-section">

       <ContactInfo emailSuccess={emailSuccess} />
          
      <ContactForm emailSuccess={emailSuccess} setEmailSuccess={setEmailSuccess}/>

    </div>
    
      
        
     
        
         
      
   
  )
}

export default Contact