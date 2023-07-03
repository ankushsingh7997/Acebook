import React from 'react'
import "./register.css"

export const Register=()=> {
  return (
    <div className='login'>
  <div className="loginWrapper">
  <div className="loginleft">
   <h3 className="loginLogo">mysocialbook</h3>
   <span className="loginDesc">
    Connect with friends and the world around you in mysocialbook
   </span>

  </div>
  <div className="loginright">
    <div className="loginBox">
        <input placeholder='username' className="loginInput"/>
        <input placeholder='Email' className="loginInput"/>
        <input placeholder='Password' className="loginInput"/>
        <input placeholder='Confirm Password' className="loginInput"/>
        <button className="loginButton">Sign Up</button>
       
        <button className="loginRegisterButton">Log into Account</button>
    </div>
  </div>

  </div>

    </div>
  )
}

