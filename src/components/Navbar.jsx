import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleNav = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none', 
      color :isActive ? '#5F9EA0' : '#C70039',
      textUnderlineOffset: "6px",
    }
  }
  return (
    <nav>
        <NavLink style={styleNav} to='/'> Home </NavLink>
        <NavLink style={styleNav} to='/about'> about </NavLink>
        <NavLink style={styleNav} to='/categories'> Categories </NavLink>
        <NavLink style={styleNav} to='/register'> Register </NavLink>
    </nav>
  )
}
export  default Navbar;