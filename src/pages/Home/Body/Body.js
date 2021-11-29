import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pcImg from '../../../Image/graphicstock-student-sitting-at-the-table-with-laptop-student-using-laptop-for-education-man-working-on-laptop-and-writing-notes-educational-technology-concept-vector-flat-design-illustration-square-l.png'
import Typical from 'react-typical'

const Body = () => {
    return (
         <div style={{backgroundColor:'green',height:'100vh'}}>
            <Container sm={12} md={6}>
            <Row>
               <Col>
                  <h2>Hi There!</h2>
                        <h2>I'M <span>MD MUSFIQUR ROHOMAN</span></h2>
                        <h3>
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
                        /></h3>
               </Col>
               <Col>
                   <img style={{height:'100%'}} src={pcImg} alt="" />       
               </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Body;