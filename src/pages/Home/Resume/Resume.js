import React from 'react';
import { Button,} from 'react-bootstrap';
import './Resume.css';
import reesume from '../../../Image/Resume-New (2).pdf';

const Resume = () => {
    return (
        <div>
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