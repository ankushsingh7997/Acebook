import React, { useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from '../../dummyData'
import axios from 'axios'

export const Feed = () => {
  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    const getFeed=async()=>{
      const postData=await axios.get("http://localhost:4000/api/posts/6486362229cdfba919d75883/gettimeline")
      setPosts(postData.data.posts)
      


     }
    getFeed();

  },[posts]);
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
