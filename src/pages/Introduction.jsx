import React, { useEffect } from 'react';
import selfie from "../assets/selfie.png";

export default function Introduction() {
  useEffect(() => {
    const intro1 = document.querySelector('.intro1');
    const intro2 = document.querySelector('.intro2');
    const intro3 = document.querySelector('.intro3');

    intro1.style.animation = 'fadeIn 1s ease-in-out forwards';
    intro2.style.animation = 'fadeIn 1s ease-in-out 1s forwards';
    intro3.style.animation = 'fadeIn 1s ease-in-out 2s forwards';
  }, []);

  return (
    <div>
    <section className="intro-sec">
      <div className="intro-text">
        <h1 className="intro1">Hello!</h1>
        <h3 className="intro2"> I'm Nor, I'm a dedicated frontend developer</h3>
        <h4 className="intro3">And I would really love to be your intern</h4>
      </div>
      <div className="intro-img">
        <img src={selfie} alt="A picture of myself" className='introimg' />
      </div>
    </section>

    <hr 
        style={{
          backgroundColor: 'white',
          color: 'white',
          borderColor: 'white',
          height: '2px',
          marginTop: "10px",
          marginBottom: "50px"
        }}
      />

    <section className='me'>
      <p>
      I am 28 years old, residing in Malling with my wife and our beloved pets.<br/> 
      Programming is one of the activities that truly immerses me in a state of flow. <br/><br/>

      I also have a passion for photography, often capturing moments during my walks with our canine companion.<br/> 
      Once I've taken a collection of great shots, I enjoy delving into the art of photo editing.<br/><br/>

      When it's time to unwind, you can usually find me either on the couch with a PlayStation controller in hand<br/> 
      or strumming away on my guitar.<br/><br/>

      Beyond my interests, I'm deeply rooted in my role as a family person, which makes me a dedicated team player at heart.<br/>
      I'm eager to bring my skills and enthusiasm to any collaborative project.
      </p>
    </section>
    </div>

    
  );
}