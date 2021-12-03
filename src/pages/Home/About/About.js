import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../Image/about.aee0f771.png';
import Zoom from 'react-reveal/Zoom';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';


const About = () => {

   useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 1000,
          easing: 'ease',
        loop:Infinity
      })
    },[])
    return (
        <div>
            <Container>
             <Row style={{marginTop:'10%',padding:'50px'}}>
             <Col xs={12} md={6} data-aos="zoom-in-up">
             <h1 style={{color:'white',fontFamily:'poppins',fontWeight:'900'}}>Know Who I'AM</h1>
            <h5 style={{color:'white',fontFamily:'poppins',fontWeight:'500'}}>Hi Guys, I'm Musfiqur Rohoman from Manikganj, Dhaka,Bangladesh.I'm a junior frontend Web Developer.</h5>
            <h5 style={{color:'white',fontFamily:'poppins',fontWeight:'500'}}>Apart from coding, some other activities that I love to do!</h5>
                <h5  style={{color:'white',fontFamily:'poppins',fontWeight:'500'}}>➼ Singing  </h5>
                <h5  style={{color:'white',fontFamily:'poppins',fontWeight:'500'}}>➼ Travelling</h5>
                   <h5 style={{ color: 'white', fontFamily: 'poppins', fontWeight: '500' }}>➼ Swimming </h5>
                  <Link to='/resume'><button className='about-btn'>Resume</button></Link> 
                  <Link to='/contact'><button className='about-btn'>Contact</button></Link> 
             </Col>
            <Col xs={12} md={6}>
                <img height='300' src={aboutImg} alt="" />        
             </Col>
                </Row>
             <h1 style={{ color: 'white',fontFamily:'poppins',fontWeight:'900',marginTop:'5%'}}>My Core Skills</h1>
             <hr style={{color:'white'}}/>
                <Zoom>
                <Row style={{gap:'30px',}}>
                    <Col xs={4} md={2}>
                     <Card style={{ width: '12rem' }}>
                    <Zoom>
                    <Card.Img style={{height:'184px'}} variant="top" src="https://i.ibb.co/g3mWS7y/1280px-React-icon-svg.png" />
                     </Zoom>
                    <Card.Body>
                    <Card.Title>React</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={4} md={2}>
                    <Card style={{ width: '12rem' }} >
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/wC63cY9/456-4562295-library-of-javascript-icon-graphic-freeuse-png-files.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Javascript</Card.Title>
                    </Card.Body>
                    </Card>  
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img style={{height:'182px'}} variant="top" width='100' src="https://i.ibb.co/18pjzzZ/logo.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Material UI</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img style={{height:'182px'}} variant="top" src="https://i.ibb.co/2PKDyVb/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellan.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>HTML 5</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img style={{height:'182px'}} variant="top" src="https://i.ibb.co/8496M3X/919826.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>CSS 3</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/vhq9dJV/bootstrap-logo.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Bootstrap</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/hC2NkKR/images.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Node JS</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/F8jfSYb/images-1.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Express JS</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img style={{height:'190px'}} variant="top" src="https://i.ibb.co/0Dpv4Rm/385-3850455-mongo-database-hd-png-download.jpg" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>MongoDB</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/XVrXZyC/event-cover-5388.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>React Bootstrap</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img style={{height:'143px'}} variant="top" src="https://i.ibb.co/F4mVh4c/1611674.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Firebase</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                    <Card.Img style={{ height: '143px' }} variant="top" src="https://i.ibb.co/gFdk09v/netlify-logo.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>Netlify</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/rwxs776/heroku8748.jpg" /></Zoom>                    
                    <Card.Body>
                    <Card.Title>Heroku</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img variant="top" src="https://i.ibb.co/Wx53yH4/visual-studio-code7642.jpg" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>VS Code</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Zoom>
                                <Card.Img style={{height:'143px'}} variant="top" src="https://i.ibb.co/dfMN9ss/768px-Ei-sc-github-svg.png" />
                                </Zoom>
                    <Card.Body>
                    <Card.Title>GitHub</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={4} md={2}>
                            <Card style={{ width: '12rem',marginBottom:'15px' }}>
                            <Zoom>
                                <Card.Img style={{height:'140px'}} variant="top" src="https://i.ibb.co/LrgkHWp/figma.jpg" />
                            </Zoom>
                    <Card.Body>
                    <Card.Title>Figma</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                </Row>
                </Zoom>
            </Container>
        </div>
    );
};
export default About;