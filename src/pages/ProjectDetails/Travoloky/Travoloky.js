import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://i.ibb.co/WFZcXjd/Travoloky-1.png" },
    { url: "https://i.ibb.co/Y7CHTm0/Travoloky2.png" },
    { url: "https://i.ibb.co/KzgRNff/travoloky-3.png" },
  ];
const Travoloky = () => {
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
        <h4 style={{fontFamily:'poppins'}}>Name: Travoloky Gladiators</h4>
        <h5 style={{fontFamily:'poppins'}}>Full-Stack Travelers Website</h5>
        <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i> November,21-(Present)</h5>
        </div>
        <div>
        <a style={{margin:'8px'}} target='blank' href="https://traveloky-gladiators.web.app/">
            <i class="fas fa-globe"></i>    
             Live Site Link
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/new-travoloky-gladiators-client">
        <i class="fab fa-github"></i>   
            Client Site
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/new-travoloky-gladiatos-server">
        <i class="fab fa-github"></i>   
             Server Site
        </a>
        </div>
        <div style={{color:'white'}}>
            <h3 style={{ marginTop: '15px', fontFamily: 'poppins' }}>Features</h3> <hr style={{border:'5px solid white'}}/>
            <h6 style={{fontFamily:'poppins'}}>•This is a traveler's website..</h6>
            <h6 style={{fontFamily:'poppins'}}>•You can see your orders if you want. And also could delete your orders If you change your decision.</h6>
            <h6 style={{fontFamily:'poppins'}}>•You can add new packages if you want. You have been given that access.</h6>
        </div>
    </div>   
    );
};

export default Travoloky;