import React from 'react'
 
import { useSelector, useDispatch } from 'react-redux'
import './Feed.css'
import InputOption from "./InputOption.js"
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar';

const Feed = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
     <div className="feed">
 
             <div>
                 <div className="feedheader my-3 d-flex">
                    <Avatar src={auth.user.avatar} size="big-avatar" /> 

                     <button className="feedBtn flex-fill"
                     onClick={() => dispatch({ type:GLOBALTYPES.FEED, payload: true })}>
                       Start a post 
                       </button>

              </div>
               



        </div>
           
    </div>
);

     
}

export default Feed
