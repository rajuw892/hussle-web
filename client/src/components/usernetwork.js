import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserCard from './UserCard'
import FollowBtn from './FollowBtn'
import LoadIcon from '../images/Loading.gif'
import connectionsReducer from '../redux/reducers/connectionsReducer'
import { getConnections } from '../redux/actions/connectionsAction'
import './usernetwork.css'
const UserNetwork = () => {
    const { auth, connections } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="card my-4">
                 <div className="card-body">
                 <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-secondary">People You may know</h5>
                    {
                    !connectionsReducer.loading && 
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                        onClick={ () => dispatch(getConnections(auth.token)) } />

                }
                    
                 </div>
                     {
                         connections.loading
                         ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                         : <div className="connections">
                            {
                                connections.users.map(user => (
                                    <UserCard key={user._id} user={user}>
                                      <FollowBtn user={user} /> 
                                    </UserCard>
                                ))
                            }
                            </div> 
                     }         
                                   
                </div>

                                  

                                      

                                    
                                    
                                  
                              
        </div> 
        </div>
    )
}

export default UserNetwork
