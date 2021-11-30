import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pcImg from '../../../Image/graphicstock-student-sitting-at-the-table-with-laptop-student-using-laptop-for-education-man-working-on-laptop-and-writing-notes-educational-technology-concept-vector-flat-design-illustration-square-l.png';
import myImg from '../../../Image/Portfolio-removebg-preview.png'
import Typical from 'react-typical';
import './Body.css';
import Zoom from 'react-reveal/Zoom';
import Wobble from 'react-reveal/Wobble';

const styleColor = {
    color:'white'
}

const Body = () => {
    return (
         <div className='body-container' style={{backgroundColor:'#110e19',height:'290vh'}}>
            <Container>
            <Row>
               <Col sm={12} md={7} style={{marginTop:'15%'}}>
                  <h2 style={{color:'#ffffff'}}>Hey!</h2>
                        <h1 style={{color:'white'}}>I'M <span style={{color:'#a14dc4'}}>MD MUSFIQUR ROHOMAN</span></h1>
                        <h1 style={{color:'#a14dc4'}}>
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
                    <Col sm={12} md={5} style={{marginTop:'8%'}}>
                    <Zoom>
                <img height="400" width="400" src={pcImg} alt=""/>
                 </Zoom>
               </Col>
                </Row>
                <Row style={{marginTop:'20%'}}>
                    <Col sm={12} md={5}>
                       <img style={{borderRadius:'50%',boxShadow:'0 2px 10px 2px #c770f0'}} className='my-img' width='450' src={myImg} alt="" />
                    </Col>
                    <Col sm={12} md={7}>
                        <Wobble>
                            <h1 style={styleColor}>LET ME
                                <span style={{ color: '#c770f0' }}>   INTRODUCE </span>
                             MYSELF</h1>
                        <h5 style={styleColor}>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h5>
                        <br />

                        <h5 style={styleColor}>I am fluent in classics like
                            <i style={{ color: '#c770f0' }}> Javascript,React,MongoDb,Node.js,Express
                            </i>
                        </h5>
                        <br />

                        <h5 style={styleColor}>My field of Interest's are building new <i
                            style={{ color: '#c770f0' }}>Web Technologies and Products </i> 
                               and also in areas related to
                            <i style={{ color: '#c770f0' }}> Deep Learning and Natural Launguage Processing.
                            </i>
                        </h5>
                        <h5 style={styleColor}>Whenever possible, I also apply my passion for developing products with
                            <i style={{ color: '#c770f0' }}> Node.js </i>  
                               and 
                             <i style={{ color: '#c770f0' }}> Modern Javascript Library and Frameworks
                            </i> like
                            <i style={{ color: '#c770f0' }}> React.js and varities packages.</i>
                        </h5> 
                     </Wobble>         
                   </Col>
                </Row>
            </Container>
            <div style={{marginTop:'25%'}}>
            <h1 style={styleColor}>FIND ME ON</h1>
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