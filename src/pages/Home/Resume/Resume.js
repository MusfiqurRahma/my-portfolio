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
        <div>
        <Navigation></Navigation>
            <div className='resume-container'>
            {/* <Button style={{ background: "#5F1DAA",marginTop:'50px' }} className="p-3 rounded border-0">
              <a {...resume} download={resume} className="text-decoration-none text-white">
                <i className="fa fa-download" aria-hidden="true"></i> Download Resume
              </a>
          </Button> <br /> <br /> */}
          <h1 style={{color:'white',marginTop:'6%',fontFamily:'poppins',fontWeight:'900'}}>You can download my resume from here if you want.</h1>
          <a href={reesume} target="_blank" rel="noopener noreferrer" download>
        <Button style={{marginTop:'50px',backgroundColor:'#a14dc4',fontFamily:'poppins'}}>
         <i className="fas fa-download"/>
            Download File
         </Button>
            </a>
            </div>
        </div>
    );
};
export default Resume;