import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logoImg from '../../../Image/letter-mr-logo-colorful-splash-background-combination-design-creative-industry-web-business-company-203791253-removebg-preview.png';
// import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar style={{backgroundColor:'#005d70'}} variant="light" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{height:'60px'}} src='https://i.ibb.co/x8Bycfk/letter-mr-logo-colorful-splash-background-combination-design-creative-industry-web-business-company.png' alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center navLeft">
                        <Nav className='text-primary'>
                            <Link className='text-light me-5 fw-bold nav-list' to="/home">Home</Link>
                            <Link className='text-light fw-bold me-5 nav-list' to="/about">About</Link>
                            <Link className='text-light fw-bold me-5 nav-list' to="/projects">Projects</Link>
                            <Link className='text-light fw-bold me-5 nav-list' to="/resume">Resume</Link>
                            <Link className='text-light fw-bold me-5 nav-list' to="/contactMe">Contact</Link>
                            <Link className='text-light fw-bold me-5 nav-list' to="/blog">Blog</Link>
                            </Nav>                           
                            </Navbar.Collapse>                   
                </Container>
            </Navbar>    
        </div>
    );
};

export default Navigation;