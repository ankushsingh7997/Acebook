import React, { useContext, useRef, useState } from 'react'
import "./share.css"
import { PermMedia,Label,Room,EmojiEmotions, Cancel } from '@mui/icons-material'
import { AuthContex } from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {
  const {user}=useContext(AuthContex)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const desc=useRef();
  const [file,setFile]=useState(null)
  
  const submitHandler=async (e)=>{
    e.preventDefault();
    if(!file&&!desc.current.value) alert('pass something to upload')
    else
    {
    const formData=new FormData();
    formData.append("userId",user._id)
    if(desc.current.value) formData.append("desc",desc.current.value)
    if(file) formData.append("image", file, file.name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    
   try
   {
    await axios.post('http://localhost:4000/api/posts/'+user._id,formData,config);
    desc.current.value=null
    setFile(null)
    // window.location.reload()
   }
   catch(err)
   {
   console.log(err)
   }
  }
    
  }
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
         <img className="shareProfileImg" src={user.profilePicture?user.profilePicture:PF+'profile/noAvatar.png'} alt="" />

         <input ref={desc} placeholder={`What is in your mind ${user.username} ?`} className="shareInput" />

        </div>
        <hr className='shareHr'/>
        {file &&(<div className='shareImgContainer'>
          <img className='shareImg' src={URL.createObjectURL(file)} alt="" />
          <Cancel className='shareCancelImg' onClick={()=>setFile(null)} />


        </div>)}

        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
           
          <label htmlFor='file' className="shareOption">
              <PermMedia htmlColor="tomato" className='shareIcon'/>
              <span className="shareOptionText">Photo or video</span>
              <input type="file" id='file' accept='.png,.jpeg,.jpg' onChange={(e)=>{setFile(e.target.files[0])}} style={{display:"none"}} />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className='shareIcon'/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className='shareIcon'/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className='shareIcon'/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type='submit'>Share</button>
        </form>

      </div>
    </div>
  )
}
