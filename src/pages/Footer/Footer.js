import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#1e1d33'}}>
             <Container>
            <Row>
           <Col xs={12} md={12} className='dev-by'>
              Copyright &copy;2021,Designed and developed by &hearts; M.Rohoman
           </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;