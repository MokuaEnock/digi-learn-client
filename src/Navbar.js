import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/lectures">Lecturer</NavLink>
        <NavLink to="/students">Students</NavLink>
        <button><NavLink to="/login">Login</NavLink></button>
        
    </div>
  )
}

export default NavBar