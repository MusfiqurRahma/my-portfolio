import React  from 'react';
import './Projects.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import barMainImg from '../../../Image/projects ss/Bar house profile.PNG';
import travolokyProfile from '../../../Image/projects ss/Travoloky-profile.PNG';
import healthProfile from '../../../Image/projects ss/Health Care Profile.PNG';
import languageSchool from '../../../Image/projects ss/Smart Language School.PNG';
import superHeroProfile from '../../../Image/projects ss/super hero profile.png';
import macBookPro from '../../../Image/projects ss/mack-book.jpg';
import superRestaurantProfile from '../../../Image/projects ss/super-duper-restaurant.jpg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';


const Projects = () => {
   return (
     <div style={{ background: '#110e19' }}>
       <Navigation></Navigation>
       <h1 style={{color:'white',marginTop:'40px',marginBottom:'50px'}}>My Best Works</h1> 
       <Container>
        <VerticalTimeline>
           <VerticalTimelineElement>
             <img width='400' height='220' src={barMainImg} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Bar House</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>Full-Stack Craft Wooden House Selling Website</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Material Ui</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>MongoDb</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Node JS</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Express JS</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Firebase</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Heroku</button> <br/>
             <Link to='/barHouse'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
           </VerticalTimelineElement>
           
  <VerticalTimelineElement>
  <img width='400' height='220' src={travolokyProfile} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Travoloky Gladiators</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>A Travel Related Website.This can be helpful for those who like to travel.</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React Bootstrap</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>MongoDb</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Node JS</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Express JS</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Firebase</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Heroku</button>
             <br/>
             <Link to='/travoloky'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
  </VerticalTimelineElement>
           
  <VerticalTimelineElement>
  <img width='400' height='220' src={healthProfile} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Health Care Hospital</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>This is a Health Care related website.It can be helpful for those people who are physically ill.</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React Bootstrap</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>CSS 3</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>FakeDb</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Firebase</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Heroku</button>
             <br/>
             <Link to='/healthCare'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
           </VerticalTimelineElement>
           
  <VerticalTimelineElement>
  <img width='400' height='220' src={languageSchool} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Smart Language School</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>This is a language learning website. Those who are interested in learning different native languages ​​can avail the benefits from here.</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>React Bootstrap</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>CSS 3</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>FakeDb</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Netlify</button>
             <br/>
             <Link to='/smartSchool'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
           </VerticalTimelineElement>
           
  <VerticalTimelineElement>
  <img width='400' height='220' src={superHeroProfile} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Our Super Heroes</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>A website of the peacekeeping mission of the Bangladesh Army.</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Vanilla Javascript</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}> Bootstrap</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>CSS 3</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>FakeDb</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Netlify</button>
             <br/>
             <Link to='/superHeroes'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
           </VerticalTimelineElement>
           
  <VerticalTimelineElement>
  <img width='400' height='220' src={macBookPro} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Mac Book Pro</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>Apple MacBook's Shopping Cart Related Website.</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Vanilla Javascript</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>HTML 5</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}> Bootstrap</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>CSS 3</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Netlify</button>
             <br/>
             <Link to='/macBook'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
           </VerticalTimelineElement>
           
  <VerticalTimelineElement>
  <img width='400' height='220' src={superRestaurantProfile} alt="" />
    <h3 className="vertical-timeline-element-title" style={{fontFamily:'poppins'}}>Super Duper Restaurant</h3>
    <h6 className="vertical-timeline-element-subtitle"style={{fontFamily:'poppins'}}>A website full of excellent food.</h6>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>Vanilla Javascript</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>HTML 5</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}> Bootstrap</button>
    <button style={{backgroundColor:'#439a18',border:'1px solid #439a18',margin:'5px',color:'white',fontFamily:'poppins'}}>CSS 3</button>
             <button style={{ backgroundColor: '#439a18', border: '1px solid #439a18', margin: '5px', color: 'white', fontFamily: 'poppins' }}>Netlify</button>
             <br/>
             <Link to='/superRestaurant'>
             <Button className='projects-btn'>See Details</Button>
             </Link>
           </VerticalTimelineElement>
           
</VerticalTimeline>
          </Container>
        </div>
    );
};

export default Projects;