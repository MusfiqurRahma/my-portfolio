import React, { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Blog.css';

const Blogs = () => {
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
            <Navigation></Navigation>
            <h1 data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" style={{ color: 'white', marginTop: '15%' }}>I'am Coming Soon With Some Special Blogs !!!</h1> <hr style={{color:'white',width:'50%',margin:'auto',border:'3px solid white'}}/>
        </div>
    );
};

export default Blogs;