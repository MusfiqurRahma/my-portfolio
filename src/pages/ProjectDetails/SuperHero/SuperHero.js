import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://i.ibb.co/9WqLY8T/hero-1.png" },
    { url: "https://i.ibb.co/Y2tbCnf/hero-2.png" },
    { url: "https://i.ibb.co/LdvtCgt/hero-3.png" },
  ];
const SuperHero = () => {
    return (
        <div>
        <h1 style={{ color: 'white',marginTop:'20px',marginBottom:'20px',fontFamily:'poppins',fontWeight:'900'}}>Projects Details</h1>
        <Container>
            <SimpleImageSlider
        width={1100}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        />
        </Container>
        <div style={{color:'white',marginTop:'20px'}}>
        <h4 style={{fontFamily:'poppins'}}>Name: Our Super Heroes</h4>
        <h5 style={{fontFamily:'poppins'}}> Bravy United Nations Peacekeeping Team</h5>
        <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i> September,21</h5>
        </div>
        <div>
        <a style={{margin:'8px'}} target='blank' href="https://our-super-heroes.netlify.app//">
            <i class="fas fa-globe"></i>    
             Live Site Link
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/our-super-heroes">
        <i class="fab fa-github"></i>   
            GitHub Link
        </a>
        </div>
        <div style={{color:'white'}}>
            <h3 style={{ marginTop: '15px', fontFamily: 'poppins' }}>Features</h3> <hr style={{border:'5px solid white'}}/>
            <h6 style={{fontFamily:'poppins'}}>•It's all about our Super Heroes.</h6>
            <h6 style={{fontFamily:'poppins'}}>•If you want then u can add your choiceable army to cart.</h6>
            <h6 style={{fontFamily:'poppins'}}>•Here everyone's name, surname, salary is given separately through the system</h6>
        </div>
    </div> 
    );
};

export default SuperHero;