import React, { useContext, useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from '../../dummyData'
import axios from 'axios'
import { AuthContex } from '../../context/AuthContext'

export const Feed = ({username}) => {
  const[posts,setPosts]=useState([]);
  const {user}=useContext(AuthContex)

  useEffect(()=>{
    const getFeed=async()=>{
      const postData=username?await axios.get("http://localhost:4000/api/posts/profile/"+username) : await axios.get(`http://localhost:4000/api/posts/${user._id}/gettimeline`)
      setPosts(postData.data.posts.sort((p1,p2)=>{
       return new Date(p2.createdAt)-new Date(p1.createdAt)
      }))
      }
    getFeed();

  },[username,user._id]);
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((post)=>(
             <Post key={post._id} post={post}/>
        ))}
        
        
      </div>
      
       </div>
  )
}
