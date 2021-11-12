import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditBio from './EditBio'
import EditDetails from './EditDetails'
import EditExperience from './EditExperience'
import EditSkills from './EditSkills'
import './About.css'


 



const About = () => {
     const { id } = useParams()
     const { auth, profile } = useSelector(state => state)
     const dispatch = useDispatch()

     const [userData, setUserData] = useState([])
     const [onEdit, setOnEdit] = useState(false)
     const [onEditDetail, setOnEditDetail] = useState(false)
     const [onEditExperience, setOnEditExperience] = useState(false)
     const [onEditSkills, setOnEditSkills] = useState(false)

     useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
     }, [id, auth.user, dispatch, profile.users])
 
    return (
        <div className="aboutprofile" style={{marginLeft: '5%'}}>
                <div className="card col-md-8.5 storyy">
                 <div className="card-body">
                              {
                                  userData.map(user => (
                                  <div className="story">
                                     <div>
                                      <h3>About</h3>
                                     </div>
                                     {
                                      user._id === auth.user._id   
                                     ? <span class="material-icons" onClick={() => setOnEdit(true)} style={{transform: 'translateY(-40px)', marginLeft: '96%', cursor: 'pointer'}}>
                                        edit
                                        </span>
                                     : ''
                                     }
                                     <p style={{wordBreak: 'break-all'}}>{user.story}</p>
                                     {
                                         onEdit && <EditBio user={user} setOnEdit={setOnEdit} />
                                     }
                                  </div>

                                  

                                      

                                    
                                    
                                  ))
                              }
                            </div>
             </div>

             <div className="card col-md-8.5 storyy">
             <div className="card-body">
                             {
                                  userData.map(user => (
                                  <div className="skills">
                                     <div>
                                      <h3>Skills</h3>
                                     </div>
                                     {
                                      user._id === auth.user._id   
                                     ?  <span class="material-icons" onClick={() => setOnEditSkills(true)} style={{transform: 'translateY(-40px)', marginLeft: '96%', cursor: 'pointer'}}>
                                        edit
                                       </span>
                                     : ''
                                     }
                                     <div>
                                     
                                     <div className="ski">
                                     <div>
                                     <span class="material-icons">
                                      work
                                     </span>
                                     </div> 
                                     <div style={{marginLeft: '20px'}}>
                            
                                     <p className="mb-0 text-dark" style={{wordBreak: 'break-all'}}>{user.skills}</p>
                                      
                        
                                     </div>
                                     </div>
                                     
                                     </div>
                                     {
                                         onEditSkills && <EditSkills user={user} setOnEditSkills={setOnEditSkills} />
                                     }
                                  </div>

                                  

                                      

                                    
                                    
                                  ))
                              }
             </div>
             </div>



             <div className="card col-md-8.5 storyy">
             <div className="card-body">
                             {
                                  userData.map(user => (
                                  <div className="Experience mb-1">
                                     <div>
                                      <h3 className="mb-0">Experience</h3>
                                     </div>
                                     {
                                      user._id === auth.user._id   
                                     ? <span class="material-icons" onClick={() => setOnEditExperience(true)} style={{transform: 'translateY(-40px)', marginLeft: '96%', cursor: 'pointer'}}>
                                     edit
                                    </span>
                                     : ''
                                     }
                                      <div className="exp">
                                     <div>
                                     <span class="material-icons">
                                      apartment
                                     </span>
                                     </div> 
                                     <div style={{marginLeft: '20px'}}>
                                     <h5 className="mb-0" style={{wordBreak: 'break-all'}}>{user.companyname}</h5>
                                     <p className="mb-0 text-dark" style={{wordBreak: 'break-all'}}>{user.jobtitle}</p>
                                     <p className="mb-0 text-muted" style={{wordBreak: 'break-all'}}>{user.jobdate}</p>
                        
                                     </div>
                                     </div>
                                     <hr/>

                                     <div className="exp">
                                     <div>
                                     <span class="material-icons">
                                      apartment
                                     </span>
                                     </div> 
                                     <div style={{marginLeft: '20px'}}>
                                     <h5 className="mb-0" style={{wordBreak: 'break-all'}}>{user.pastcompanyname}</h5>
                                     <p className="mb-0 text-dark" style={{wordBreak: 'break-all'}}>{user.pastjobtitle}</p>
                                     <p className="mb-0 text-muted" style={{wordBreak: 'break-all'}}>{user.pastjobdate}</p>
                        
                                     </div>
                                     </div>
                                     {
                                         onEditExperience && <EditExperience user={user} setOnEditExperience={setOnEditExperience} />
                                     }
                                  </div>

                                  

                                      

                                    
                                    
                                  ))
                              }
             </div>
             </div>

            

             <div className="card col-md-8.5 storyy">
             <div className="card-body">
                             {
                                  userData.map(user => (
                                  <div className="education mb-1">
                                     <div>
                                      <h3 className="mb-0">Education</h3>
                                     </div>
                                     {
                                      user._id === auth.user._id   
                                     ? <span class="material-icons" onClick={() => setOnEditDetail(true)} style={{transform: 'translateY(-40px)', marginLeft: '96%', cursor: 'pointer'}}>
                                       edit
                                      </span>
                                       
                                     : ''
                                     }
                                     <div className="edudetails">
                               <div>
                                     <span className="material-icons">
                                      school
                                      </span> 
                                      </div>
                                      <div style={{marginLeft: '20px'}}>
                                     <h5 className="mb-0"style={{wordBreak: 'break-all'}}>{user.universityname}</h5>
                                     <p className="mb-0 text-dark">{user.universitydegreename}</p>
                                     <p className="mb-0 text-muted">{user.universityyear}</p>
                        
                                     </div>
                              </div>
                                     <hr/>
                                     <div className="edudetails">
                                     <div>
                                     <span className="material-icons">
                                      school
                                      </span> 
                                      </div>
                                      <div style={{marginLeft: '20px'}}>
                                     <h5 className="mb-0" style={{wordBreak: 'break-all'}}>{user.school}</h5>
                                     <p className="mb-0 text-dark">{user.degree}</p>
                                     <p className="mb-0 text-muted">{user.schoolyear}</p>
                        
                                     </div>
                                     </div>
                                     
                              
                                     {
                                         onEditDetail && <EditDetails user={user} setOnEditDetail={setOnEditDetail} />
                                     }
                                  </div>

                                  

                                      

                                    
                                    
                                  ))
                              }
             </div>
             </div>

            
 

            
        </div> 
    )
}

export default About
