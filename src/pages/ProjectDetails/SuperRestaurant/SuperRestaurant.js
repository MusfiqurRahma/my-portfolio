import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://i.ibb.co/3S0YQnz/super-1.png" },
    { url: "https://i.ibb.co/58W3Rq1/super-2.png" },
    { url: "https://i.ibb.co/njtFzFP/Super-3.png" },
];

const SuperRestaurant = () => {
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
        <h4 style={{fontFamily:'poppins'}}>Name: Super Duper Restaurant</h4>
        <h5 style={{fontFamily:'poppins'}}>Amazing Food Related Website</h5>
        <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i> September,21</h5>
        </div>
        <div>
        <a style={{margin:'8px'}} target='blank' href="https://super-duper-restaurant.netlify.app/">
            <i class="fas fa-globe"></i>    
             Live Site Link
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/super-duper-restaurant">
        <i class="fab fa-github"></i>   
            Github Link
        </a>
        </div>
        <div style={{color:'white'}}>
            <h3 style={{ marginTop: '15px', fontFamily: 'poppins' }}>Features</h3> <hr style={{border:'5px solid white'}}/>
            <h6 style={{fontFamily:'poppins'}}>•If you search, you will find the food of your choice.</h6>
            <h6 style={{fontFamily:'poppins'}}>•If you want, you can take complete details about the food.</h6>
            <h6 style={{fontFamily:'poppins'}}>•And by clicking on the button on YouTube, you can also know about the food on YouTube.</h6>
        </div>
    </div>
    );
};

export default SuperRestaurant;