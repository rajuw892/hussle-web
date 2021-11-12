import React, { useState, useEffect} from 'react'
import './info.css'
import EditProfile from './EditProfile'
import FollowBtn from '../FollowBtn'
import Followers from './Followers'
import Following from './Following'
import Avatar from '../Avatar'
import { Link } from 'react-router-dom'
import { useHistory} from 'react-router-dom'
import { MESS_TYPES} from '../../redux/actions/messageAction'


const Info = ({id, auth, profile, dispatch}) => {
     
    
     
    const history = useHistory()

    const [userData, setUserData] = useState([])
    const [onEdit, setOnEdit] = useState(false)

    const [showFollowers, setShowFollowers] = useState(false)
    const [showFollowing, setShowFollowing] = useState(false)

    const [search, setSearch] = useState('')
    const [searchUsers, setSearchUsers] = useState([])

    


    const handleAddUser = (user) => {
        setSearch('')
        setSearchUsers([])
        dispatch({type: MESS_TYPES.ADD_USER, payload: {...user, text: '', media: []}})
         
        return history.push(`/message/${user._id}`)
    }
     

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        } else {
            
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])



    return (
        <div id="info" className="card mt-2 col-md-8" style={{marginLeft: '5%', marginRight: '5%'}}>
        {
          userData.map(user => (

              <div className="info_container mt-3" key={user._id}>
              <div>
              <Avatar src={user.avatar} size="super-avatar"/>
              </div>
              <hr style={{marginBottom: '1px', marginTop: '-50px'}}/>
              <div className="info_content">
                 <div className="info_content_title">

                 <h2 className="card-title font-weight-bold mt-5 ml-3">{user.fullname}</h2>
                 {
                     user._id === auth.user._id
                     ?  <button className="btn btn-outline-info"
                    onClick={() => setOnEdit(true)}>
                    Edit Profile</button>

                    : <FollowBtn  user={user} />
                       
                 }
                
                {  user._id === auth.user._id
                   ?   ''
                   :  <Link to = {`/message/${user._id}`} >
                      <button className="btn btn-outline-info" onClick={() => handleAddUser(user)}>Message</button>
                      </Link>

                }
                 
                   
                 

                     
                 </div>

                  <p className="m-0 ml-3">{user.headline}</p>
                  <h6 className="m-0 ml-3">{user.address}</h6>
                  <a className="m-0 ml-3" href={user.website} target ="_blank" rel="noreferrer">
                      {user.website}
                  </a>

                 <div className="follow_btn mt-3">
                     <span className="ml-3 mr-4" onClick={() => setShowFollowers(true)}>
                         {user.followers.length} Followers
                     </span>
                     <span className="ml-4" onClick={() => setShowFollowing(true)}>
                         {user.following.length} Following
                     </span>



                 </div>

                  

                </div>
                
                {
                    onEdit && <EditProfile setOnEdit={setOnEdit} />
                }

                {
                    showFollowers && 
                    <Followers
                    users={user.followers}
                    setShowFollowers={setShowFollowers}
                    />
                }

                {
                    showFollowing && 
                    <Following
                    users={user.following}
                    setShowFollowing={setShowFollowing}
                    />
                }

              </div>
              
          ))
         
        }

      
            
        </div>
        
    )
}

export default Info