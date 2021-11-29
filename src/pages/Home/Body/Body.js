import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pcImg from '../../../Image/graphicstock-student-sitting-at-the-table-with-laptop-student-using-laptop-for-education-man-working-on-laptop-and-writing-notes-educational-technology-concept-vector-flat-design-illustration-square-l.png'
import Typical from 'react-typical';
import './Body.css';
import Zoom from 'react-reveal/Zoom';
import Wobble from 'react-reveal/Wobble';

const Body = () => {
    return (
         <div className='body-container'>
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
                            "Ethuastic Developer",
                            4000, 
                            "Deep Learner",
                            4000, 
                        ]}
                        /></h1>
               </Col>
                    <Col sm={12} md={5}>
                    <Zoom>
                <img height="300" width="400" src={pcImg} alt=""/>
                 </Zoom>
                   {/* <img style={{height:'120%'}} src={pcImg} alt="" />        */}
               </Col>
                </Row>
                <Row style={{marginTop:'30%'}}>
                    <Col sm={12} md={7}>
                    <Wobble>
                    <h1>LET ME
                            <span style={{ color: '#c770f0' }}>INTRODUCE</span>
                            MYSELF</h1>

                        <h4>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h4>
                        <br />

                        <h4>I am fluent in classics like
                            <i style={{ color: '#c770f0' }}>Javascript,React,MongoDb,Node.js,Express
                            </i>
                        </h4>
                        <br />

                        <h4>My field of Interest's are building new <i
                            style={{ color: '#c770f0' }}>Web Technologies and Products</i>
                            and also in areas related to
                            <i style={{ color: '#c770f0' }}>Deep Learning and Natural Launguage Processing.
                            </i>
                        </h4>
                        <h4>Whenever possible, I also apply my passion for developing products with
                            <i style={{ color: '#c770f0' }}>Node.js</i>
                            and
                            <i style={{ color: '#c770f0' }}>Modern Javascript Library and Frameworks
                            </i> like
                            <i style={{ color: '#c770f0' }}>React.js and varities packages.</i>
                        </h4> 
                     </Wobble>                      
                    </Col>
                   <Col sm={12} md={5}>sm=4</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Body;