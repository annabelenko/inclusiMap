import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        message: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'SERVICE ID',
          'TEMPLATE ID',
          toSend,
          'User ID'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };  
  
      
  
    return (
    <div>
         <div className='text-center bg-backgroundC font-bold py-12 text-oliveGreen '>

        <h1 className='text-4xl italic '>Have questions? Reach out to us!</h1>
        <form className='text-xl pt-8' action=''>
            <label>Your Name</label>
            <br/>
            <input type="text" />
            <br/><br/>

            <label>Your Email Address </label>
            <br/>
                <input type="email" />
            
            <br/><br/>

            <label>Your Message</label>
            <br/>
                <input type="text" />
            <br/><br/>

            <button type='submit' className='bg-oliveGreen text-white px-12 py-2 m-4 rounded-full' onClick={handleChange}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact