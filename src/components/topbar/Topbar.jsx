import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../context/AuthContext';
export default function Topbar() {
  const navigate=useNavigate();
  const {user,dispatch}=useContext(AuthContex)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;


  const handleLogout=()=>{
    
    dispatch({type:'LOGOUT'})
    
  }
  return (
    <div className='topbarContainer'>
     <div className="topbarLeft">
      <span className='logo' onClick={()=>{navigate('/')}}>MySocialGram</span>
     </div>
     <div className="topbarCenter">
      <div className="searchbar">

        <SearchIcon className='searchIcon'/>
        <input placeholder="search friend, post videos" className="searchInput" />
      </div>
     </div>
     <div className="topbarRight">
     <div className="topbarLinks">
      <span className="topbarLink">Homepage</span>
      <span className="topbarLink">Timeline</span>

     </div>
     <div className="topbarIcons">
      
      <div className="topbarIconItem ">
      <PersonIcon />
       </div>
       <span className='logout' onClick={handleLogout}>Logout</span>
       
     
      
     </div>
     <img  src={user.profilePicture ?user.profilePicture:PF+'profile/noAvatar.png'} alt="" className='topbarImg' onClick={()=>{navigate(`/profile/${user.username}`)}} />
    

    </div>
    </div>
  )
}
