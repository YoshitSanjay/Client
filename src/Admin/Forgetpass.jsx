import React from 'react'
import AdminStyles from "./AdminStyles.module.css"
import { NavLink } from 'react-router-dom'

const Forgetpass = () => {
  return (
    <>
    <div className={AdminStyles.bread}>
      <div className={AdminStyles.wrapper}>
        <form action="">
          <h1>Forget Password</h1>
          <div className={AdminStyles.input}>
            <div className={AdminStyles.int}>
              <input type="email" placeholder='Email Address' required/>
              <i className="bi bi-envelope-at-fill"></i>
            </div>
            <button type='submit'>SUBMIT</button>
            <div className={AdminStyles.wrap}>
              <p>Remember your account <NavLink to='/Admin'>Sign Up</NavLink></p>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Forgetpass