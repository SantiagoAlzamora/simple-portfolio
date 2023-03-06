import "./contact.css"
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import { useState } from "react";

export default function Contact() {

    const form = useRef();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_al8taeb', 'template_z7nio3f', form.current, '94WEgugE1D1_lUYkj')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            setError(false)
        }, (error) => {
            console.log(error.text);
            setError(true)
            setSuccess(false)
        });
    };

    return (
        <div className='contact' id="contact">
            <div className="title-contact" >
                <h2>Contact</h2>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <h3 className="title">to: santiagoalzamora06@gmail.com</h3>
                <div class="half">
                    <div class="item">
                        <label for="name">NAME</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div class="item">
                        <label for="email">EMAIL</label>
                        <input type="text" name="email" id="email" required={true}/>
                    </div>
                </div>
                <div class="full">
                    <label for="message">MESSAGE</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <div class="action">
                    <input type="submit"  value="SEND MESSAGE" />
                </div>
                {success && <p className="info-message">Message sent successfully</p>}
                {error && <p className="info-message">Error sending the message</p>}
            </form>
        </div>
    )
}
