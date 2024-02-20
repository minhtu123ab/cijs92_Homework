import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <div className='header-nav'>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/phone"}>Phone</NavLink>
    <NavLink to={"/laptop"}>Laptop</NavLink>
    <NavLink to={"/tablet"}>Tablet</NavLink>
    <NavLink to={"/product"}>Product</NavLink>
  </div>
    </div>
  )
}

export default Header