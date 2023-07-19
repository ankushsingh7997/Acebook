import React,{useRef} from 'react'
import "./register.css"
import { registerCall } from '../../apiCalls'
import {useNavigate} from 'react-router-dom'

export const Register=()=> {
  const username=useRef()
  const email=useRef()
  const password=useRef()
  const confirmPassword=useRef()
  const navigate=useNavigate()

  const handleClick= async (e)=>{
    e.preventDefault()
    
    if(password.current.value!==confirmPassword.current.value) confirmPassword.current.setCustomValidity('password does not match')
    else
    {
      
      const res={username:username.current.value,email:email.current.value,password:password.current.value}
      // api call
      const result=await registerCall(res);
      

      // after registration navigate to login page
      result.status? navigate('/login'):console.log(new Error('regestration fail'))
      
    

  } 

}

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
    <form className="loginBox" onSubmit={handleClick}>
        <input ref={username} placeholder='username' required className="loginInput"/>
        <input ref={email} type='email' placeholder='Email' required className="loginInput"/>
        <input ref={password} minLength='6' type='password' placeholder='Password' required className="loginInput"/>
        <input ref={confirmPassword} type='password' placeholder='Confirm Password' required className="loginInput"/>
        <button type='submit' className="loginButton">Sign Up</button>
       
        <button className="loginRegisterButton">Log into Account</button>
    </form>
  </div>

  </div>

    </div>
  )
}

