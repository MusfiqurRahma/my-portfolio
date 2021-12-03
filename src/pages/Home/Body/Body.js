import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical';
import './Body.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const styleColor = {
    color: 'white',
    fontFamily: 'poppins',
}

const Body = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease',
          loop:Infinity
        })
      },[])
    return (
         <div className='body-container'>
            <Container>
            <Row>
               <Col sm={12} md={7} style={{marginTop:'15%'}}>
                  <h2 style={{color:'#ffffff',fontFamily:'poppins',padding:'15px'}}>Hey 😍 !</h2>
                        <h1 style={{color:'white',fontFamily:'poppins'}}>I'M <span style={{color:'#a14dc4'}}>MD MUSFIQUR ROHOMAN</span></h1>
                        <h1 style={{color:'#a14dc4',fontFamily:'poppins'}}>
                            <Typical
                            loop={Infinity}
                            steps={[
                            "Web Developer",
                            2000, 
                            "Javascript Lover",
                            2000, 
                            "Frontend Developer",
                            2000, 
                            "Enthusiastic Developer",
                            2000, 
                            "Deep Learner",
                            2000, 
                        ]}
                        /></h1>
                   </Col>
                    <Col sm={12} md={5} style={{marginTop:'5%'}}>
                <img height="500" width="400" data-aos="zoom-in-up" src="https://i.ibb.co/m96sqbx/202011-01-removebg-preview.png" alt=""/>
               </Col>
                </Row>
                <Row style={{marginTop:'20%'}}>
                    <Col sm={12} md={5} style={{marginTop:'-4%'}}>
                       <img data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" style={{borderRadius:'50%',boxShadow:'0 2px 10px 2px #c770f0'}} className='my-img' width='450' src="https://i.ibb.co/y5t15fj/IMG-8739-removebg-previewww.png" alt="" />
                    </Col>
                    <Col sm={12} md={7} data-aos="flip-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                            <h1 style={styleColor}>LET ME
                                <span style={{ color: '#c770f0' }}>   INTRODUCE </span>
                             MYSELF</h1>
                        <h5 style={styleColor}>Programming is my passion</h5>
                        <br />

                        <h5 style={styleColor}>I'm very comfortable in such technology like
                            <span style={{ color: '#c770f0' }}> Javascript,React,MongoDB,Node.js,Express
                            </span>
                        </h5>
                        <br />

                        <h5 style={styleColor}>I'm too much interested in<span
                            style={{ color: '#c770f0' }}> Web Technologies </span> 
                               and also in areas related to
                            <span style={{ color: '#c770f0' }}> Deep Learning and Natural Launguage Processing.
                            </span>
                        </h5>
                        <h5 style={styleColor}>Everyday I try to apply my passion for developing with
                            <span style={{ color: '#c770f0' }}>  Node.js </span>  
                               and 
                             <span style={{ color: '#c770f0' }}> Modern Javascript Library and Frameworks
                            </span> like
                            <span style={{ color: '#c770f0' }}> React.js and varieties packages</span> also.
                        </h5>        
                   </Col>
                </Row>
            </Container>
            <div style={{ marginTop: '15%',marginBottom:'15%' }}>
            <h1 style={styleColor} data-aos="fade-up"
              data-aos-duration="3000">FOLLOW ME ON</h1>
                <h5 style={styleColor}>Feel free to <span style={{ color: '#a85fcc'}}>connect</span> with me.</h5>
                <a href="https://github.com/MusfiqurRahma">
                <i class="fab fa-github github"></i>          
               </a>
                <a href="https://www.linkedin.com/in/md-musfiqur-rohoman-b88650219/">
                    <i className="fab fa-linkedin linkedIn"></i>
                </a>
                <a href="https://web.facebook.com/musfiq074/">
                  <i className="fab fa-facebook-square facebook"></i>
                </a>
                <a href="https://www.instagram.com/mus_fi_que/">
                <i class="fab fa-instagram instagram"></i>
                </a>
            </div>
        </div>
    );
};

export default Body;