import React, { useEffect, useState } from 'react'
import "./profile.css"
import Topbar from '../topbar/Topbar'
import { Sidebar } from '../sidebar/Sidebar'
import { Feed } from '../feed/Feed'
import { Rightbar } from '../rightbar/Rightbar'
import axios from 'axios'
import { useParams } from 'react-router'


export const Profile=()=> {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const[user,setUser]=useState({});
    const username=useParams().username;

    useEffect(()=>{
        const fetchUser=async()=>{
          const userData=await axios.get(`http://localhost:4000/api/user?username=${username}`)
          setUser(userData.data.data)
         }
         fetchUser();
    
      },[username]);




  return (
   <>
   <Topbar/>
   <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">

             <img src={user.coverPicture||PF+"profile/noCover.jpg"} alt="" className="profileCoverImg" />
          <img src={user.profilePicture||PF+"profile/noAvatar.png"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">

                <h4 className='profileInfoName'>{user.username}</h4>
                <span className='profileInfoDesc'>{user.desc}</span>
            </div>

         
        </div>
        <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
        </div>
    </div>
   </div>
   </>
  )
}

