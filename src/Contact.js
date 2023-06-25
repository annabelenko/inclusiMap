import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dwdlx8a', 'template_stq05ff', form.current, 'vwSMuTzBSMtEfiXj6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
      
  
    return (
    <div>
         <div className='text-center bg-backgroundC font-bold py-12 text-oliveGreen '>

        <h1 className='text-4xl italic '>Have questions? Reach out to us!</h1>
        <form className='text-xl pt-8' ref={form} onSubmit={sendEmail}>
      
            <label>Your Name</label>
            <br/>
            <input type="text" name="user_name" required/>
            <br/><br/>

            <label>Your Email Address </label>
            <br/>
                <input type="email" name="user_email" required />
            
            <br/><br/>

            <label>Your Message</label>
            <br/>
                <textarea name="message" required />
            <br/><br/>

            <button type='submit' value="Send" className='bg-oliveGreen text-white px-12 py-2 m-4 rounded-full'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact