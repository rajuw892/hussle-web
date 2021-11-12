import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
 
import LoadIcon from '../../images/Loading.gif'
import suggestionsReducer from '../../redux/reducers/suggestionsReducer'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className="my-4">
             

            <div className="d-flex justify-content-between align-items-center my-2" style={{paddingRight: '100px'}}>
                <h5 className="text-secondary">Suggestions For You</h5>
                {
                    !suggestionsReducer.loading && 
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                        onClick={ () => dispatch(getSuggestions(auth.token)) } />

                }
                
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions" style={{paddingRight: '70px'}}>
                   {
                       suggestions.users.map(user => (
                           <UserCard key={user._id} user={user} >
                               <FollowBtn user={user} />
                           </UserCard>
                       ))
                   }
                   <div style={{opacity: 0.5}}>
                   <small>
                       &copy; 2021 HUSSLE BY BRANDON
                   </small>
                   </div>
                 </div>
            }


        </div>
    )
}

export default RightSideBar
