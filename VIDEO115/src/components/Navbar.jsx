import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                 <NavLink className={(e)=>{return e.isActive?"red": ""}}  to="/"> Home </NavLink>
                 <NavLink className={(e)=>{return e.isActive?"red": ""}}  to="/login"> Login </NavLink>
                 <NavLink className={(e)=>{return e.isActive?"red": ""}}  to="/contact"> Contact </NavLink>
            </ul>
        </nav>      
    </div>
  )
}

export default Navbar
