import React  from 'react'
import LandingHeader from './landingHeader'
import landing from '../images/landing.jpg'
import './landing.css'
 

 

const Landing = () => {

 return (               
    <div>
         <div>
          <LandingHeader />
        </div> 
          <div className="landing">
         <div className="heading">
            <h1 className="text-info">Hussle</h1>
            <p className="font-weight-bold text-dark w-55">
            Connect with professionals, gain insight into different careers,
            and discover your purpose.
            </p>
         </div>
         <div className="rightside">
             <img src={landing} alt="rightsideimage" style={{height: '650px', marginLeft: '2%'}}/>
         </div>
         </div>
    </div>
 
     
 )

}

export default Landing