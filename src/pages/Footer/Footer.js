import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#1e1d33'}}>
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
                <i className="fab fa-github git"></i>          
               </a>
                <a href="dd">
                    <i className="fab fa-linkedin linkedInn"></i>
                </a>
                <a href="dd">
                  <i className="fab fa-facebook-square fb"></i>
                </a>
              </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;