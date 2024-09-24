import NavBar from '../NavBar/Navbar'
import '../Contact/contact.css';
import React, { useRef } from 'react';
// import background from "../../assets/img/fond.png";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m4rhf3k', 'template_o634ojg', form.current, 'NnfNDot47ZQUGInw-')
      .then((result) => {
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
     
  };
  return (
    // <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
    // backgroundSize: ' 100% 100%',
    // height: '140vh',
    // boxSizing:'border-box',
    // }}>
    <div className ="Contact">
        <h1 class="title">Me contacter
      </h1>
      <NavBar/>
      <br/>
      <p>Envoyez moi un email</p>
      <div class="form">
        
    	<form ref={form} onSubmit={(sendEmail)}>
      <br/>
      <label>Nom</label>
      
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <textarea name="message" cols="40" rows="10"/>
      <input type="submit" value="send" />
      
    </form>
  </div>
  <div class="wavesA">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" stroke="white" fill="none" stroke-width ="0.2"/>
        <use xlinkHref="#gentle-wave" x="48" y="3" stroke="white" fill="none" stroke-width ="0.2"/>
        <use xlinkHref="#gentle-wave" x="48" y="5" stroke="white" fill="none" stroke-width ="0.2"/>
        <use xlinkHref="#gentle-wave" x="48" y="7" stroke="white" fill="none" stroke-width ="0.2"/>
        <use xlinkHref="#gentle-wave" x="48" y="8" stroke="white" fill="none" stroke-width ="0.2"/>
        </g>
        </svg>
        </div>
        </div>
      // </div>
      
  )
}

export default Contact