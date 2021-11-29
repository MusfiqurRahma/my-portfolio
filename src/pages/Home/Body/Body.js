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
         <div className='body-container' style={{backgroundColor:'#15151c',height:'220vh'}}>
            <Container>
            <Row>
               <Col sm={12} md={7}>
                  <h2 style={{color:'#ffffff'}}>Hi There!</h2>
                        <h1 style={{color:'white'}}>I'M <span style={{color:'#a14dc4'}}>MD MUSFIQUR ROHOMAN</span></h1>
                        <h1 style={{color:'#a14dc4'}}>
                            <Typical
                            loop={Infinity}
                            steps={[
                            "Javascript Lover",
                            4000, 
                            "Full Stack Developer",
                            4000, 
                            "MERN Stack Developer",
                            4000, 
                            "Enthuastic Developer",
                            4000, 
                            "Deep Learner",
                            4000, 
                        ]}
                        /></h1>
               </Col>
                    <Col sm={12} md={5}>
                    <Zoom>
                <img height="400" width="400" src={pcImg} alt=""/>
                 </Zoom>
               </Col>
                </Row>
                <Row style={{marginTop:'15%'}}>
                    <Col sm={12} md={6}>
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
                    <Col sm={12} md={6}>
                        <img src={myImg} alt="" />
                   </Col>
                </Row>
            </Container>
            <div style={{marginTop:'6%'}}>
            <h1 style={styleColor}>FIND ME ON</h1>
                <h5 style={styleColor}>Feel free to <span style={{ color: '#c072ee' }}>connect</span> with me.</h5>
               <a href="dd">
                <i class="fab fa-github github"></i>          
               </a>
                <a href="dd">
                    <i className="fab fa-linkedin linkedIn"></i>
                </a>
                <a href="dd">
                  <i className="fab fa-facebook-square facebook"></i>
                </a>
                <a href="dd">
                <i class="fab fa-instagram instagram"></i>
                </a>
           </div>
        </div>
    );
};

export default Body;