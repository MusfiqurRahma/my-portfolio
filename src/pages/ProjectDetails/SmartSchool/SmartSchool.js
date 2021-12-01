import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://i.ibb.co/pfntf2z/School-1.png" },
    { url: "https://i.ibb.co/R3Cbpmf/school-2.png" },
    { url: "https://i.ibb.co/qs5thx5/school-3.png" },
  ];
const SmartSchool = () => {
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
        <h4 style={{fontFamily:'poppins'}}>Name: Smart Language School</h4>
        <h5 style={{fontFamily:'poppins'}}>Language Course Related Website</h5>
        <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i> October,21</h5>
        </div>
        <div>
        <a style={{margin:'8px'}} target='blank' href="https://smart-language-school.netlify.app/">
            <i class="fas fa-globe"></i>    
             Live Site Link
        </a>
        <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/smart-language-school">
        <i class="fab fa-github"></i>   
            GitHub Link
        </a>
        </div>
        <div style={{color:'white'}}>
            <h3 style={{ marginTop: '15px', fontFamily: 'poppins' }}>Features</h3> <hr style={{border:'5px solid white'}}/>
            <h6 style={{fontFamily:'poppins'}}>It's a teaching related website, they services the varieties courses..</h6>
            <h6 style={{fontFamily:'poppins'}}>•There's have many special and helping teacher.</h6>
            <h6 style={{fontFamily:'poppins'}}>•There's have a contact form.</h6>
        </div>
    </div>   
    );
};

export default SmartSchool;