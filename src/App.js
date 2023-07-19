
import React,{useContext} from 'react'

import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Profile } from "./components/profile/Profile";
import {AuthContex} from './context/AuthContext'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// const router = createBrowserRouter([
  
//   {
//     path: "/login",
//     element: <Login/>,
    
//   },
//   {
//     path: "/",
//     element: <Home/>,
    
//   },
//   {
//     path: "/profile/:username",
//     element: <Profile/>,
    
//   },
//   {
//     path: "/register",
//     element: <Register/>,
    
//   },
  
// ]);



  
function App() {
  const{user} =useContext(AuthContex);
  
 
  return (
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={user?<Home/>:<Login/>}/>
    <Route path="/login" element={user ? <Navigate to='/'/>:<Login/>}/>
    <Route path="/profile/:username" element={<Profile/>}/>
    <Route path="/register" element={user ? <Navigate to='/'/>:<Register/>}/>
  </Routes>
  </BrowserRouter>
 
  )

    
  
}

export default App;






