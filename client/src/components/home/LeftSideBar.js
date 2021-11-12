import React from 'react'
import { useSelector} from 'react-redux'
import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import Avatar from '../Avatar'
import './LeftSideBar.css'

  


const LeftSideBar = () => {
    const { auth } = useSelector(state => state)
     
    return (
        <div className="sidebar my-4">
             
             <div className="sidebar__top">
                 <Avatar src={auth.user.avatar} size="left-avatar"/>
                 
            
                 <h2>{auth.user.fullname}</h2>
                 <h4>{auth.user.headline}</h4>
             </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                   <p>Followers</p>
                   <p className="sidebar_statNumber">{auth.user.followers.length}</p>
                </div>
                <div className="sidebar__stat">
                    
                <p>Following</p>
                   <p className="sidebar_statNumber">{auth.user.following.length}</p>

                </div>
            </div>
           
            
              
         
                                
                           
                       
                   
                    
            


        </div>
    )
}

export default LeftSideBar