import React  from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import './header.css'
 

const Header = () => {
 

 return (

                
           <div className="header bg-dark">
             <nav className="navbar navbar-expand-lg navbar-dark
              bg-dark justify-content-between align-middle">
             <Link  to="/" className="logo">
             <h1 className="navbar-brand text-uppercase p-0 m-0"
             onClick={() => window.scrollTo({top: 0})}>
             Hussle
             </h1>
             </Link>

             <Search />

             <Menu /> 

             

            
         </nav>
        </div>
 
     
 )

}

export default Header