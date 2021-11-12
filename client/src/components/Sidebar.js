import { Avatar } from "@material-ui/core"
import React from 'react'
import { useSelector } from "react-redux";
import "./Sidebar.css";
function Sidebar() {

//sidebar of homepage    


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
             <div className="sidebar__top">
                 <img src="https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-5-1024x256.png" alt=""/>
                 <Avatar  className="sidebar__avatar">
                     U
                  </Avatar>  
                 <h2>Raju Raman</h2>
                 <h4>Software Engineer</h4>
             </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                   <p>who viewed you</p>
                   <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                   <p className="sidebar_statNumber">2,448</p>

                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("2021")}
                {recentItem("Compute Science")}
                {recentItem("Programming")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
