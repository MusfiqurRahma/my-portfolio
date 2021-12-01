import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://i.ibb.co/F4ch5b3/Health-Care-pro.png" },
    { url: "https://i.ibb.co/5cMdNDv/Health-Care-3.png" },
    { url: "https://i.ibb.co/Y36RjBm/Health-Care-2.png" },
  ];

const HealthCare = () => {
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
        <h4 style={{fontFamily:'poppins'}}>Name: Health Care Hospital</h4>
        <h5 style={{fontFamily:'poppins'}}>Health Care Service related Website.</h5>
        <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i> October,21</h5>
        </div>
        <div>
        <a style={{margin:'8px'}} target='blank' href="https://health-care-hospital-abfea.web.app/">
            <i class="fas fa-globe"></i>    
             Live Site Link
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/health-care-hospital">
        <i class="fab fa-github"></i>   
            GitHub Link
        </a>
        </div>
        <div style={{color:'white'}}>
            <h3 style={{ marginTop: '15px', fontFamily: 'poppins' }}>Features</h3> <hr style={{border:'5px solid white'}}/>
            <h6 style={{fontFamily:'poppins'}}>•A home page with different routes. Like as About, Services, Contact, Doctors.</h6>
            <h6 style={{fontFamily:'poppins'}}>•You will be able to log in with Google and also can create a new account if you want.</h6>
            <h6 style={{fontFamily:'poppins'}}>•If you want to know about the service details, you must log in or register here.</h6>
        </div>
    </div>   
    );
};

export default HealthCare;