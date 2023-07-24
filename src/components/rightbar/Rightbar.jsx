import React, {  useContext, useEffect, useState } from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContex } from '../../context/AuthContext'
import { Add, Remove } from '@mui/icons-material' 




export const Rightbar = ({user}) => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser}=useContext(AuthContex)
  
  

  

  const HomeRightbar=()=>{
    return(
      <>
       <div className="birthdayContainer">

<img src="assets/gift.png" alt="" className="birthdayImg" />
<span className="birthdayText">
   <b>udisha sharma</b> and <b>3 other friends </b>have birthday today</span>
</div>
<img src="assets/ad.png" alt="" className="rightbarAd" />
<h4 className="rightbarTitle">Online Friends</h4>
<ul className="rightbarFriendList">
{Users.map(item=><Online key={item.id} user={item}/>) 
}
</ul>
</>)

}

const ProfileRightbar=()=>{
  const[followed,setFollow]=useState(false);
  useEffect(()=>{
    setFollow(currentUser.followers.includes(user?._id)) 
  },[currentUser,user._id])

  const[friends,setFriends]=useState([])
  
  const navigate=useNavigate()
  const handleFollow=async()=>{
     try{
           if(followed) await axios.put(`http://localhost:4000/api/user/${currentUser._id}/unfollow`,{userId:user._id})
           else await axios.put(`http://localhost:4000/api/user/${currentUser._id}/follow`,{userId:user._id})
           setFollow(!followed)
     }
     catch(err)
     {
      console.log(err)
     }
     
  }
 
  useEffect(()=>{
  const getFriends=async()=>{
   try{
        const friendlist= await axios.get('http://localhost:4000/api/user/friends/'+user._id)
       
       setFriends(friendlist.data)
   }
   catch(err)
   {
   console.log(err)
   }

  }
  if(user._id) getFriends();
  

  },[user._id])
  return (
    <>{user.username!==currentUser.username && (
      <button className="rightvarFollowButton" onClick={handleFollow}>
      {followed?"unfollow":'follow'} 
      {followed?<Remove/>:<Add/>}
      </button>
    )}
    <h4 className='rightbarTitle'>User unformation</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">{user.from}</span>
      </div>
      <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">{user.relationship===1 ? "single":user.relationship===2 ?"Married":"-"}</span>
      </div>

    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      {friends&&friends.map(
        (friend)=>(
          <div onClick={()=>{navigate(`/profile/${friend.username}`)}} key={friend._id} className="rightbarFollowing">
          <img src={friend.profilePicture?friend.profilePicture:PF+'profile/noAvatar.png'} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFowllowingName">
            {friend.username}
          </span>
        </div>
        )
      )}
     
      
    </div>
    </>

  )

}
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ?<ProfileRightbar/> : <HomeRightbar/>}
        
      </div>
    </div>
  )
}
