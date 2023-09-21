import React from 'react';
import ContactForm from '../components/contactform';

export default function Contact () {

  return (
    <div>
        <h2 className='headline'>Let's connect</h2>
    <div className='contactContainer'>
        <section>
         <div className='phoneInfo'> 
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/phone--v1.png" alt="phone--v1"/>
            <p>+ 45 22 96 39 16</p>
         </div>  
         <div className='emailInfo'>
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/mail--v1.png" alt="mail--v1"/>
            <p>noreskelund@gmail.com</p>
         </div>

         <a href="https://www.linkedin.com/in/nor-rose-andersen-a25976230/" target="_blank">
            <div>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
            </div>
        </a>

          <div>
          <p>Click it</p>
          </div>
        </section>

    <section className='formSection'>
      <ContactForm />
    </section>


    </div>
    </div>

  )
}

