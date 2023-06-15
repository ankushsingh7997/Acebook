import { MoreVert } from "@mui/icons-material"
import "./post.css"


function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/profile/person1.jpg" alt="" />
                <span className="postUsername">tom fake</span>
                <span className="postDate">5 mins ago</span>
               </div>
               <div className="postTopRight">
                <MoreVert/>
               </div>

            </div>
            <div className="postCenter">
                <span className="postText">Hay! this is me</span>
                <img className="postImg" src="assets/post/post1.jpg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
              <img className=" likeIcon" src="assets/like.png" alt="" />
                   <img className=" likeIcon" src="assets/heart.png" alt="" />
                   <span className="postLikeCounter">32 people like it</span>

              </div>
              <div className="postBottomRight">
                <span className="postCommentText">11 comments</span>
              </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Post