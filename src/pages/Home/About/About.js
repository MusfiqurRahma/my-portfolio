import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import aboutImg from '../../../Image/about.aee0f771.png';
import Bounce from 'react-reveal/Bounce';
import Swing from 'react-reveal/Swing';
import './About.css';


const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
            <Row className='mt-5'>
             <Col xs={12} md={6}>
             <h1 style={{color:'white'}}>Know Who I'AM</h1>
            <h5 style={{color:'white'}}>Hi Everyone, I am Musfiqur Rohoman from Manikganj, Dhaka,Bangladesh.I am a junior frontend Web Developer.</h5>
            <h5 style={{color:'white'}}>Apart from coding, some other activities that I love to do!</h5>
                <h5  style={{color:'white'}}>Swimming</h5>
                <h5  style={{color:'white'}}>Singing</h5>
                <h5  style={{color:'white'}}>Travelling</h5>
             </Col>
            <Col xs={12} md={6}>
                <img height='300' src={aboutImg} alt="" />        
             </Col>
                </Row>
                <h1 style={{color:'white'}}>My Core Skills</h1>
                <Bounce top>
                <Row style={{gap:'20px'}}>
                    <Col xs={12} md={2}>
                     <Card style={{ width: '12rem' }}>
                    <Swing>
                    <Card.Img style={{height:'184px'}} variant="top" src="https://i.ibb.co/g3mWS7y/1280px-React-icon-svg.png" />
                     </Swing>
                    <Card.Body>
                    <Card.Title>React</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={12} md={2}>
                    <Card style={{ width: '12rem' }} >
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/wC63cY9/456-4562295-library-of-javascript-icon-graphic-freeuse-png-files.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Javascript</Card.Title>
                    </Card.Body>
                    </Card>  
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img style={{height:'182px'}} variant="top" width='100' src="https://i.ibb.co/18pjzzZ/logo.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Material UI</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img style={{height:'182px'}} variant="top" src="https://i.ibb.co/2PKDyVb/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellan.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>HTML 5</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img style={{height:'182px'}} variant="top" src="https://i.ibb.co/8496M3X/919826.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>CSS 3</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/vhq9dJV/bootstrap-logo.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Bootstrap</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/hC2NkKR/images.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Node JS</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/F8jfSYb/images-1.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Express JS</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img style={{height:'190px'}} variant="top" src="https://i.ibb.co/0Dpv4Rm/385-3850455-mongo-database-hd-png-download.jpg" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>MongoDB</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/XVrXZyC/event-cover-5388.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>React Bootstrap</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img style={{height:'143px'}} variant="top" src="https://i.ibb.co/F4mVh4c/1611674.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Firebase</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                    <Card.Img style={{ height: '143px' }} variant="top" src="https://i.ibb.co/gFdk09v/netlify-logo.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>Netlify</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/rwxs776/heroku8748.jpg" /></Swing>                    
                    <Card.Body>
                    <Card.Title>Heroku</Card.Title>
                    </Card.Body>
                    </Card>
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img variant="top" src="https://i.ibb.co/Wx53yH4/visual-studio-code7642.jpg" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>VS Code</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                                <Swing>
                                <Card.Img style={{height:'143px'}} variant="top" src="https://i.ibb.co/dfMN9ss/768px-Ei-sc-github-svg.png" />
                                </Swing>
                    <Card.Body>
                    <Card.Title>GitHub</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                    <Col xs={6} md={2}>
                            <Card style={{ width: '12rem' }}>
                            <Swing>
                                <Card.Img style={{height:'140px'}} variant="top" src="https://i.ibb.co/LrgkHWp/figma.jpg" />
                            </Swing>
                    <Card.Body>
                    <Card.Title>Figma</Card.Title>
                    </Card.Body>
                    </Card> 
                 </Col>
                </Row>
                </Bounce>
            </Container>
        </div>
    );
};
export default About;