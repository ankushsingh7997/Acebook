import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../dummyData'
export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((posts)=>(
             <Post key={posts.id} post={posts}/>
        ))}
        
        
      </div>
      
       </div>
  )
}
