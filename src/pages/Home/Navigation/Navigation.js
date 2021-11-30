import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logoImg from '../../../Image/letter-mr-logo-colorful-splash-background-combination-design-creative-industry-web-business-company-203791253-removebg-preview.png';
// import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar style={{backgroundColor:'#1e1d33'}} variant="light" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{height:'60px'}} src='https://i.ibb.co/x8Bycfk/letter-mr-logo-colorful-splash-background-combination-design-creative-industry-web-business-company.png' alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center navLeft">
                        <Nav className='text-primary'>
                            <Link className='text-light me-5 fw-bold nav-list'style={{textDecoration:'none'}} to="/home">Home</Link>
                            <Link className='text-light fw-bold me-5 nav-list' style={{textDecoration:'none'}} to="/about">About</Link>
                            <Link className='text-light fw-bold me-5 nav-list' style={{textDecoration:'none'}} to="/projects">Projects</Link>
                            <Link className='text-light fw-bold me-5 nav-list' style={{textDecoration:'none'}} to="/resume">Resume</Link>
                            <Link className='text-light fw-bold me-5 nav-list' style={{textDecoration:'none'}} to="/contact">Contact</Link>
                            <Link className='text-light fw-bold me-5 nav-list' style={{textDecoration:'none'}} to="/blog">Blog</Link>
                            </Nav>                           
                            </Navbar.Collapse>                   
                </Container>
            </Navbar>    
        </div>
    );
};

export default Navigation;