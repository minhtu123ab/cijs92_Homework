import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <NavLink className={"opp"} to={"/"}>All</NavLink>
            <NavLink className={"opp"} to={"/active"}>Active</NavLink>
            <NavLink className={"opp"} to={"/completed"}>Completed</NavLink>
        </ul>
    </div>
  )
}

export default Navbar