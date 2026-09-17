import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
       <nav className="host-nav">
           <NavLink 
             to="/host"
             end
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Dashboard
           </NavLink>
           <NavLink 
             to="/host/income"
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Income
           </NavLink>
           <NavLink 
             to="/host/review"
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Review
           </NavLink> 
       </nav>
       <Outlet/> 
    </div>
  )
}

export default HostLayout
