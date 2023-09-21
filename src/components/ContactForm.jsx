import {useRef} from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
        const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_45av0gf', 'template_tyq0pbv', form.current, 'Bd-JEsYHH89M9RpTm')
              .then((result) => {
                  console.log(result.text);
                  alert('The message was sent successfully!');
              }, (error) => {
                  console.log(error.text);
                  alert('Error sending the message. Please try again later or use the other info on site');
              });
              e.target.reset()
          };
    return(
        <section>
            <div className="formContainer">
                <h4 className="subHead">Contact form</h4>
                <form ref={form} onSubmit={sendEmail} className="formBoxes">
                    <input type="text" placeholder="Full name"  name="user_name" required className="name"/>
                    <input type="email" placeholder="Email"  name="user_email" required className="email"/>
                    <input type="text" placeholder="Subject"  name="subject" required className="contactSubject"/>
                    <textarea name="message" cols="30" rows="10" className="textMessage"></textarea>
                    <button type="submit" className="btn">Send message</button>
                </form>
            </div>
        </section>
    )
}



export default ContactForm