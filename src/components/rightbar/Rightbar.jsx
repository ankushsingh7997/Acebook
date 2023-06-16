import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
export const Rightbar = () => {
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
</ul></>)}

const ProfileRightbar=()=>{
  return (
    <>
    <h4 className='rightbarTitle'>User unformation</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">London</span>
      </div>
      <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Abcde</span>
      </div>
      <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>

    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/profile/person1.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/profile/person2.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/profile/person3.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/profile/person4.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/profile/person5.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/profile/person6.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/profile/person7.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFowllowingName">
          John Snow
        </span>
      </div>
    </div>
    </>

  )

}
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightbar/>
        {/* <HomeRightbar/> */}
      </div>
    </div>
  )
}
