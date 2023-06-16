import React from 'react'
import "./profile.css"
import Topbar from '../topbar/Topbar'
import { Sidebar } from '../sidebar/Sidebar'
import { Feed } from '../feed/Feed'
import { Rightbar } from '../rightbar/Rightbar'


function Profile() {
  return (
   <>
   <Topbar/>
   <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">

             <img src="assets/post/post2.jpg" alt="" className="profileCoverImg" />
          <img src="assets/profile/person1.jpg" alt="" className="profileUserImg" />
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

export default Profile