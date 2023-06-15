import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
export const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}
