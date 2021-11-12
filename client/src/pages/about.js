import React from 'react'
import LandingHeader from './landingHeader'
import './aboutt.css'
 
const About = () => {

    
  
     
    return (
        <div>
             <div>
                 <LandingHeader />
             </div>

             <div className="aboutus">
            
               <div className="abouthussle pt-4">  
              <h1 className="font-weight-light">About Hussle</h1>
              <p className="font-weight-light">Hussle is a networking platform where students can virtually interview and shadow professionals in STEM fields.</p>
              
            </div>
            <div  className="vision pt-4">
              <h1 className="font-weight-light">Vision</h1>
              <p className="font-weight-light">Our Vision is to close the gap disparity between what students learn in school and what they will experience in real life.</p>
            </div>
            <div className="mission pt-4">
                <h1 className="font-weight-light">Mission</h1>
                <p className="font-weight-light">Our Mission is to help people gain insight into various career paths and discover their true purpose in life.</p>
            </div>
            <div className="footer pt-4">

            </div>   
            </div>
        </div>
    )
}

export default About
