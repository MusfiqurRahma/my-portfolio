import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor:'black'}}>
             <Container>
            <Row>
            <Col xs={12} md={4}>
              <p className='dev-by'>Designed And Developed by M Rohoman</p>
           </Col>
           <Col xs={12} md={4} className='dev-by'>
              Copyright &copy;2021,MR
           </Col>
           <Col xs={12} md={4}>
              <div>
               <a href="dd">
                <i class="fab fa-github"></i>          
               </a>
                <a href="dd">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="dd">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;