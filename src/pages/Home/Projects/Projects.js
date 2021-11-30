import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing:'ease'
    })
  },[])
    return (
        <div>
        
        <div data-aos="fade-up" data-aos-anchor=".other-element">....... Projects</div>
        </div>
    );
};

export default Projects;