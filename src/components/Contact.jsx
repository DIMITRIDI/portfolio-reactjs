import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineMail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_zeugpna', 'template_1t2tfcw', form.current, 'inQccfrmbvGS5WnBN')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });

      e.target.reset();
   };

   return (
      <section id='contact'>
         <h4>Get In Touch</h4>
         <h2>Contact Me</h2>
         <div className="container contact__container">
            <div className="contact__options">
               <article className="contact__option">
                  <MdOutlineMail className="contact__option-icon"/>
                  <h4>Email</h4>
                  <h5>d.a16@yandex.ru</h5>
                  <a href="mailto:d.a16@yandex.ru" target="_blank" rel="noreferrer">Send a message</a>
               </article>
               <article className="contact__option">
                  <FaTelegram className="contact__option-icon"/>
                  <h4>Telegram</h4>
                  <h5>https://t.me/DIMITRIDIS</h5>
                  <a href="https://t.me/DIMITRIDIS" target="_blank" rel="noreferrer">Send a message</a>
               </article>
               <article className="contact__option">
                  <BsWhatsapp className="contact__option-icon"/>
                  <h4>WhatsApp</h4>
                  <h5>+7 (920) 085-03-05</h5>
                  <a href="https://api.whatsapp.com/send?phone=79200850305" target="_blank" rel="noreferrer">Send a message</a>
               </article>
            </div>
            <form ref={form} onSubmit={sendEmail} >
               <input type="text" name="name" placeholder="Your Full Name" required/>
               <input type="email" name="email" placeholder="Your Email" required/>
               <textarea type="text" name="message" rows="7" placeholder="Your Massage" required></textarea>
               <button type="submit" className="btn btn-primary" >Send Message</button>
            </form>
         </div>
      </section>
   )
}

export default Contact;