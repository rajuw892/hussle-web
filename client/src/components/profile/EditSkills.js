import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'

const EditSkills = ({setOnEditSkills}) => {
    const initState = {
         skills: ''
    }
    const [userData, setUserData] = useState(initState)
    const { skills } = userData

    

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
            onClick={() => setOnEditSkills(false)}>
                Close
            </button>

            <form onSubmit={handleSubmit} style={{marginTop: '15%'}}>

                <div className="form-group">
                    <label htmlFor="skills">Add Skills</label>
                    <textarea name="skills" value={skills} cols="25" rows="3"
                    className="form-control" onChange={handleInput} />

                    <small className="text-danger d-block text-right">
                        {skills.length}/350
                    </small>
                </div>

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditSkills