import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useEffect, useState } from "react"
import axios from "axios";
import {format} from "timeago.js"
import { useNavigate } from "react-router-dom";

function Post({post}) {
    const[like,setLike]=useState(post.likes.length);
    const[isLiked,setIsLiked]=useState(false);
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const[user,setUser]=useState({});
    const navigate=useNavigate();


    const likeHandler=()=>{
      setLike(!isLiked?like+1:like-1)
      setIsLiked(!isLiked)

    }
    
    useEffect(()=>{
      const fetchUser=async()=>{
        const userData=await axios.get(`http://localhost:4000/api/user?userId=${post.userId}`)
        setUser(userData.data.data)
       }
       fetchUser();
  
    },[post.userId]);


    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                <img className="postProfileImg" src={user.profilePicture||PF+"profile/noAvatar.png"} alt="" onClick={()=>{navigate(`/profile/${user.username}`)}} />
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{format(post.createdAt)}</span>
               </div>
               <div className="postTopRight">
                <MoreVert/>
               </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
              <img className=" likeIcon" src={`${PF}like.png`} alt="" onClick={likeHandler} />
                   <img className=" likeIcon" src={`${PF}heart.png`} alt="" onClick={likeHandler}/>
                   <span className="postLikeCounter">{like} people liked it</span>

              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Post