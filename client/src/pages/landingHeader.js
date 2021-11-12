import React  from 'react'
import { Link, useLocation } from 'react-router-dom'
import './landingheader.css'

 

const LandingHeader = () => {
 
    const navLinks = [
        { label: 'About',  path: '/about'},
        { label: 'Privacy',  path: '/privacy'},
        { label: 'Sign in',  path: '/login'},
        { label: 'Join now',  path: '/register'},
        
         
     ]

     

    const { pathname } = useLocation()

    const isActive = (pn) => {
        if(pn === pathname) return 'active'

    }



 return (

                
    <div>
             <div className="header bg-white" style={{border: 'none', boxShadow: 'none'}}>  
             <nav className="navbar navbar-expand-lg navbar-dark
              bg-white justify-content-between align-middle">
             <Link  to="/" className="logo">
             <h1 className="navbar-brand p-0 m-0 text-info"
             onClick={() => window.scrollTo({top: 0})}>
             .hussle
             </h1>
             </Link>

            <div className="menu">
            <ul className="navbar-nav flex-row">
            {
            navLinks.map((link, index) => (
                <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
              <Link className="nav-link" to={link.path}>
                <div className="p-2 text-info" style={{}}>
                  {link.label}
                </div>
                 
              </Link>
               </li>
            )) 
        }
        </ul>
        </div>

            
         </nav>
         </div>

         
    </div>
 
     
 )

}

export default LandingHeader