import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileUser } from '../../redux/actions/profileAction'

const EditDetail = ({setOnEditDetail}) => {
    const initState = {
        school: '', degree: '', schoolyear: '', universityname: '', universitydegreename: '', universityyear: ''
    }
    const [userData, setUserData] = useState(initState)
    const { school, degree, schoolyear, universityname, universitydegreename, universityyear } = userData

    

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
            onClick={() => setOnEditDetail(false)}>
                Close
            </button>

            <form onSubmit={handleSubmit} style={{marginTop: '8%'}}>

            <div className="form-group">
                    <label htmlFor="college">School</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="school"
                        name="school" value={school} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {school.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Field Of Study</label>
                    <input type="text" name="degree" value={degree}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Year</label>
                    <input type="text" name="schoolyear" value={schoolyear}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="universityname">College</label>
                    <input type="text" name="universityname" value={universityname}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="universitydegreename">Field Of Study</label>
                    <input type="text" name="universitydegreename" value={universitydegreename}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="universityyear">Year</label>
                    <input type="text" name="universityyear" value={universityyear}
                    className="form-control" onChange={handleInput} />
                </div>

                 
            

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditDetail