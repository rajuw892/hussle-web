import React from 'react'
import Feed from '../components/home/Feed'
import Posts from '../components/home/Posts'
import {  useSelector } from 'react-redux'
import Loading from '../images/Loading.gif'
import RightSideBar from '../components/home/RightSideBar'
import LeftSideBar from '../components/home/LeftSideBar'
 

const Home = () => {

    const { homePosts, auth } = useSelector(state => state)
    
    

     

    

    
     
    return (
        <div className="home row mx-0">
            <div className="col">
                    <LeftSideBar />
                </div> 
            <div className="col-md-6">

                

                {
                    auth.user.usertype === 'student'
                    ?  ''
                    : <Feed />
                }
             
                
               
            
              {
                homePosts.loading
                ? <img src={Loading} alt="loading" className="d-block mx-auto" />
                :homePosts.result === 0 
                    ? <h2 className="text-center">No Post</h2> 
                    : <Posts />
              }
            
 
          </div> 

            <div className="col-md-4">
                <RightSideBar />
            </div>
            
        </div>
    )
}

export default Home
