import React,{useContext, useRef} from 'react'
import "./login.css"
import { loginCall } from '../../apiCalls';
import { AuthContex } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';


export const Login=()=> {
  const email=useRef();
  const password=useRef();
  const {user,isFetching,error,dispatch}=useContext(AuthContex)

  const handleClick=(e)=>{
    e.preventDefault()
   loginCall({email:email.current.value,password:password.current.value},dispatch)
}
console.log(user)
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
        <input ref={email} type='email' placeholder='Email' required className="loginInput"/>
        <input ref={password} required minLength='6' type='password' placeholder='Password' className="loginInput"/>
        <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress  color="success" size="20px"/>: "Log In"}</button>
        <span className="loginForgot">forgot Password</span>
        <button className="loginRegisterButton">{isFetching ? <CircularProgress  color="success" size="20px"/>: "Create a new account"}</button>
        
    </form>
  </div>

  </div>

    </div>
  )
}

