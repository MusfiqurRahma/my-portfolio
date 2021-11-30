import React from "react";
import {Container} from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.ibb.co/KFrsSVn/Bar-1-new.png" },
    { url: "https://i.ibb.co/X7Qmj6g/Bar-2.png" },
    { url: "https://i.ibb.co/jrS801g/bar-3.png" },
  ];

const BarHouse = () => {
    return (
        <div style={{ background: '#110e19', height: '140vh' }}>
            <h1 style={{ color: 'white',marginBottom:'20px',fontFamily:'poppins',fontWeight:'900'}}>Projects Details</h1>
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
            <h4 style={{fontFamily:'poppins'}}>Name: Bar House-Craft Wooden House</h4>
            <h5 style={{fontFamily:'poppins'}}>Full-Stack Craft Wooden House Selling Website</h5>
            <h5 style={{fontFamily:'poppins'}}><i class="fas fa-calendar-week"></i> November,21-(Present)</h5>
            </div>
            <div>
            <a style={{margin:'8px'}} target='blank' href="https://barhouse-craft-wooden-house.web.app/">
                <i class="fas fa-globe"></i>    
                 Live Site Link
            </a>
            <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/bar-house-craft-house-client">
            <i class="fab fa-github"></i>   
                Client Site
            </a>
            <a style={{margin:'8px'}} target='blank' href="https://github.com/MusfiqurRahma/bar-house-craft-house-server">
            <i class="fab fa-github"></i>   
                 Server Site
            </a>
            </div>
            <div style={{color:'white'}}>
            <h3 style={{marginTop:'15px',fontFamily:'poppins'}}>Features</h3>
                <h6 style={{fontFamily:'poppins'}}>•There are several separate sections on the site. You can also go to different pages through Navbar.</h6>
                <h6 style={{fontFamily:'poppins'}}>•If you’re logged in, a separate dashboard will be displayed for you. You will be able to give reviews if you want. And also will be able to see the products that you have ordered.</h6>
                <h6 style={{fontFamily:'poppins'}}>•If you are an admin, you’ll see a separate dashboard. You’ll see the required features for admin.</h6>
            </div>
        </div>   
    );
};
export default BarHouse;