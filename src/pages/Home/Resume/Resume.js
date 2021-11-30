import React from 'react';
import { Button,} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Resume.css';
import reesume from '../../../Image/Resume-New (2).pdf';

const Resume = () => {
    // const resume = {
    //     href: 'https://drive.google.com/file/d/1fBIZN2h_fp-Z2moR8pk-vo-0xTFhvcYz/view?usp=sharing',
    //     target: "_blank",
    //   };
    return (
        <div style={{backgroundColor:'#110e19'}}>
            <Navigation></Navigation>
            <div className='resume-container'>
            {/* <Button style={{ background: "#5F1DAA",marginTop:'50px' }} className="p-3 rounded border-0">
              <a {...resume} download={resume} className="text-decoration-none text-white">
                <i className="fa fa-download" aria-hidden="true"></i> Download Resume
              </a>
          </Button> <br /> <br /> */}
          <a href={reesume} target="_blank" rel="noopener noreferrer" download>
        <Button style={{marginTop:'50px'}}>
         <i className="fas fa-download"/>
             Download File
         </Button>
            </a>
            </div>
        </div>
    );
};

export default Resume;