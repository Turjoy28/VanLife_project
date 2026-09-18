import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
       <nav className="host-nav">
           <NavLink 
             to="."
             end
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Dashboard
           </NavLink>
           <NavLink 
             to="income"
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Income
           </NavLink>
           <NavLink 
             to="review"
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Review
           </NavLink> 

            <NavLink 
             to="vans"
             className={({ isActive }) => isActive ? "active-link" : ""}
           >
             Vans
           </NavLink> 

       </nav>
       <Outlet/> 
    </div>
  )
}

export default HostLayout
