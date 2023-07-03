import React from 'react'
import "./profile.css"
import Topbar from '../topbar/Topbar'
import { Sidebar } from '../sidebar/Sidebar'
import { Feed } from '../feed/Feed'
import { Rightbar } from '../rightbar/Rightbar'


export const Profile=()=> {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
   <>
   <Topbar/>
   <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">

             <img src={`${PF}/post/post2.jpg`} alt="" className="profileCoverImg" />
          <img src={`${PF}/profile/person1.jpg`} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">

                <h4 className='profileInfoName'>Lauren devine</h4>
                <span className='profileInfoDesc'>my discription</span>
            </div>

         
        </div>
        <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
        </div>
    </div>
   </div>
   </>
  )
}

