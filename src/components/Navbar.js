import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div className='navbar'>
      <h2>Digi Learn</h2>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/lectures">Lecturers</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contactus">Contact</NavLink>
        <button><NavLink to="/login">Login</NavLink></button>
        
    </div>
  )
}

export default NavBar