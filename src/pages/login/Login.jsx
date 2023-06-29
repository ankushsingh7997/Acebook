import React from 'react'
import "./login.css"

function Login() {
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
        <input placeholder='Email' className="loginInput"/>
        <input placeholder='Password' className="loginInput"/>
        <button className="loginButton">Login</button>
        <span className="loginForgot">forgot Password</span>
        <button className="loginRegisterButton">Create a new account</button>
    </div>
  </div>

  </div>

    </div>
  )
}

export default Login