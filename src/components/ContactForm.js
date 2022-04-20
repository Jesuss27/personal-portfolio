import React, { useEffect } from 'react'
import {useState , useRef} from "react"
import { Row } from 'react-bootstrap';
import emailjs from 'emailjs-com'


function ContactForm({ setEmailSuccess, emailSuccess }) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const form = useRef();

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm("service_1aww0gz", "template_jtki5yo", e.target, "Su7s4Px5TZdDnuQvx")
    .then(function(response) {
        setEmailSuccess(true)
       console.log('SUCCESS!', response.status, response.text);
       
    }, function(error) {
        setEmailSuccess(false)
       console.log('FAILED...', error);
    })    
    }
    

  return (
    <div  style={{
        borderRadius:"10px",
        border:"2px solid #e8e7fd" ,
    }}>

        <form ref={form} id="form" onSubmit={sendEmail}>
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
    </div>
  )
}

export default ContactForm