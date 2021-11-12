import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { resetPassword } from '../redux/actions/profileAction'
import './settings.css'

const Settings = () => {
  const initState = {
    password: '', cf_password: ''
  }
  
  const [userData, setUserData] = useState(initState)
  
  const { password, cf_password } = userData
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  const [typePass, setTypePass] = useState(false)
  const [typeCfPass, setTypeCfPass] = useState(false)


  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]:value })
  }

 


  const handleSubmit = e => {
    e.preventDefault()
    dispatch(resetPassword(userData, auth))
  }




  return (
    <form className="profile_info" onSubmit={handleSubmit}>

      <div className="form-group my-3">
        <label htmlFor="password">Password</label>

        <div className="pass">
          <input type={typePass ? "text" : "password"} 
          className="form-control" id="password"
          name="password" value={password}
          onChange={handleChangeInput}
          />

          <small onClick={() => setTypePass(!typePass)}>
            { typePass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <div className="form-group my-3">
        <label htmlFor="cf_password">Confirm Password</label>

        <div className="pass">
          <input type={typeCfPass ? "text" : "password"} 
          className="form-control" id="cf_password"
          name="cf_password" value={cf_password}
          onChange={handleChangeInput} 
           />

          <small onClick={() => setTypeCfPass(!typeCfPass)}>
            { typeCfPass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <button className="btn btn-dark w-100" type="submit">
        Update
      </button>
    </form>
  )
}

export default Settings