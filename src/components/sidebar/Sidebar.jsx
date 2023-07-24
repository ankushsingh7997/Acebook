import React from 'react'
import "./sidebar.css"
import {RssFeed } from '@mui/icons-material'

export const Sidebar = () => {
     
  return (
    <div className='sidebar'>
     <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
             <RssFeed className='sidebarIcon'/>
             <span className="sidebarListItemText">Feed</span>

        </li>
        

        </ul>
        <button className="sidebarButton">showMore</button>
        <hr className='sidebarHr'/>
        
        
    </div></div>
    
  )
}
