import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://i.ibb.co/hRLWSgJ/mac-1.png" },
    { url: "https://i.ibb.co/4RYwhDB/mac-3.png" },
    { url: "https://i.ibb.co/M11yV17/mac-2.png" },
];
  
const MacBook = () => {
    return (
        <div>
        <h1 style={{ color: 'white',marginTop:'20px',marginBottom:'20px',fontFamily:'poppins',fontWeight:'900'}}>Projects Details</h1>
        <Container>
            <SimpleImageSlider
        width={1100}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        />
        </Container>
        <div style={{color:'white',marginTop:'20px'}}>
        <h4 style={{fontFamily:'poppins'}}>Name: Mac Book Pro</h4>
        <h5 style={{fontFamily:'poppins'}}>All about an apple brand's Mac Book website</h5>
        <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i>August,21</h5>
        </div>
        <div>
        <a style={{margin:'8px'}} target='blank' href="https://i-mac-pro-new.netlify.app/">
            <i class="fas fa-globe"></i>    
             Live Site Link
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/imac-book-pro">
        <i class="fab fa-github"></i>   
            GitHub Link
        </a>
        </div>
        <div style={{color:'white'}}>
            <h3 style={{ marginTop: '15px', fontFamily: 'poppins' }}>Features</h3> <hr style={{border:'5px solid white'}}/>
            <h6 style={{fontFamily:'poppins'}}>•Mac book pro website.</h6>
            <h6 style={{fontFamily:'poppins'}}>•Javascript functionality with cart list</h6>
            <h6 style={{fontFamily:'poppins'}}>•Have a special system like Promo Code,If you know the promo code you will get 20% discount.</h6>
        </div>
    </div>   
    );
};

export default MacBook;