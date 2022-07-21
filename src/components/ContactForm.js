import React, { useEffect } from 'react'
import {useState , useRef} from "react"
import emailjs from 'emailjs-com'
import "../styles/ContactForm.css"


function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const form = useRef();

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm("service_1aww0gz", "template_jtki5yo", e.target, "Su7s4Px5TZdDnuQvx")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       
    }, function(error) {
       console.log('FAILED...', error);
    })    
    }
    

  return (
        <>
        
        <form ref={form} id="form" onSubmit={sendEmail}>
        <h2 style={{color:"white"}} >Inquire</h2 >
            <div className="form-group">
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name"
                    name="name" value={name}
                    onChange={ e => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Email:
                    <input type="text" id="email"
                    name="email" value={email}
                    onChange={ e => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="message">
                    Message:
                    <textarea type="text" id="message"
                    name="message" value={message}
                    onChange={ e => setMessage(e.target.value)}
                    />
                </label>
            </div>
            <input className="button" type="submit" value="Send"/>
        </form>
        </>
  )
}

export default ContactForm