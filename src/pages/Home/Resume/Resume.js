import React from 'react';
import { Button,} from 'react-bootstrap';
import './Resume.css';
import reesume from '../../../Image/Resume-New (2).pdf';
import Particles from "react-tsparticles";

const Resume = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


    return (
      <div>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 5,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
           },
         },
        detectRetina: true,
         }}
           />
            <div className='resume-container'>
          <h1
            style={{ color: 'white', marginTop: '6%', fontFamily: 'poppins', fontWeight: '900',padding:'60px' }}>You can download my resume from here if you want.
          </h1>
          <a
            href={reesume}
            target="_blank"
            rel="noopener noreferrer"
            download>
            <Button
              style={{ backgroundColor: '#a14dc4', fontFamily: 'poppins' }}>
              <i
               className="fas fa-download" />
            Download File
            </Button>
            </a>
            </div>
        </div>
    );
};
export default Resume;