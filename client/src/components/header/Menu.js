import React  from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import  './header.css'
import HomeIcon from "@material-ui/icons/Home"  
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import ChatIcon from "@material-ui/icons/Chat";
import './Menu.css'
import '../avatar.css'
import Avatar from '../Avatar'
import NotifyModal from '../NotifyModal'


function Menu() {
    const navLinks = [
        { label: 'Home', icon: <HomeIcon/>, path: '/'},
        { label: 'Messaging', icon: <ChatIcon/>, path: '/message'},
        { label: 'My network', icon: <SupervisorAccountIcon/>, path: '/mynetwork'},
         
        


    ]

    const { auth, notify } = useSelector(state => state)
    const dispatch = useDispatch()

    const { pathname } = useLocation()

    const isActive = (pn) => {
        if(pn === pathname) return 'active'

    }



    return (
        <div className="menu">
        <ul className="navbar-nav flex-row">
        {
            navLinks.map((link, index) => (
                <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
              <Link className="nav-link" to={link.path}>
                <div className="ui-icon">
                  {link.icon}
                </div>
                 
              </Link>
               </li>
            )) 
        }

        <li  className="nav-item dropdown">
          <span className="nav-link position-relative" href="#" id="navbarDropdown"
           role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

             <span className="material-icons" style={{color: notify.data.length > 0 ? '#008B45' : ''}}>
                notifications
             </span>
             <span>{notify.data.length}</span>

           </span>

           <div className="dropdown-menu" aria-labelledby="navbarDropdown"
           style={{transform: 'translateX(50px)'}}>
               <NotifyModal />
             </div>

     </li>
           
            
        <li  className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
           role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <Avatar src={auth.user.avatar} size="medium-avatar" />
           </span>

         <div className="dropdown-menu" aria-labelledby="navbarDropdown">

         <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>

         <Link className="dropdown-item" to="/settings">Settings</Link>

         <div className="dropdown-divider"></div>
         <Link className="dropdown-item" to="/"
         onClick={() => dispatch(logout())}>
         Logout
         </Link>
         </div>
     </li>
         
         </ul>
          
</div>


    )
}

export default Menu
