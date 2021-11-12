import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileUser } from '../../redux/actions/profileAction'

const EditExperience = ({setOnEditExperience}) => {
    const initState = {
         companyname: '', jobtitle: '', jobdate: '', pastcompanyname: '', pastjobtitle: '', pastjobdate: ''
    }
    const [userData, setUserData] = useState(initState)
    const { companyname, jobtitle, jobdate, pastcompanyname, pastjobtitle, pastjobdate } = userData

    

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])


    

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData, auth}))
    }

    return (
        <div className="edit_bio">
            <button className="btn btn-danger btn_close"
            onClick={() => setOnEditExperience(false)}>
                Close
            </button>

            <form onSubmit={handleSubmit} style={{marginTop: '7%'}}>
            <div className="form-group">
                    <label htmlFor="college">Company Name</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="school"
                        name="companyname" value={companyname} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {companyname.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Job Title</label>
                    <input type="text" name="jobtitle" value={jobtitle}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Date</label>
                    <input type="text" name="jobdate" value={jobdate}
                    className="form-control" onChange={handleInput} />
                </div>
                 <div>Previous Empolyment</div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="pastcompanyname" value={pastcompanyname}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="company">Job Title</label>
                    <input type="text" name="pastjobtitle" value={pastjobtitle}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="company">Date</label>
                    <input type="text" name="pastjobdate" value={pastjobdate}
                    className="form-control" onChange={handleInput} />
                </div>

               

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditExperience