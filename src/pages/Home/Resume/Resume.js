import React from 'react';
import { Button,} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Resume.css';


const Resume = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='resume-container'>
            <a href='Resume-new(2).pdf' download='Resume-new(2).pdf'>
            <Button>Download Resume</Button>
            </a>
            </div>
        </div>
    );
};

export default Resume;