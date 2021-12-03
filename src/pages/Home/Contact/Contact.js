import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail_message','template_9uit4tj', e.target,'user_IADsHNXPUioaOa2AS2PwQ')
            .then((result) => {
                Swal.fire({
                    title: 'Message Send Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
    return (
       <>
        <div className='form-container'>
            <Container>
            <h1 style={{color:'white',marginTop:'5%',padding:'70px'}}>Write To Me</h1>
            <Row>
              <Col xs={12} md={4}>
                <img
                  style={{marginTop:'-28%'}}
                  width='450'
                  src="https://i.ibb.co/4PPw09m/man-working-computer-laptop-flat-design-businessman-table-character-work-manager-vector-illustration.png" alt="" />
              </Col>
              <Col xs={12} md={8}>
              <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Name'/> 
            <input type="email" name="email" placeholder='Your Email' />
            <textarea rows="4" cols="50" name="message" placeholder='Your Message' />
            <input className='send-btn' type="submit" value="Send Mail" /> 
              </form> 
              </Col>
             </Row>
            </Container>
       </div> </>
    );
};

export default Contact;
