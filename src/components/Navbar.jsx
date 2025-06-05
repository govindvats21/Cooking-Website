import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='  flex justify-center items-center  gap-x-10 pt-8 pb-6 shadow-2xl font-medium'>
      <img src="images/" alt="" />

<NavLink className=  {(e)=> e.isActive ? "text-yellow-500" : ""} to="/">Home</NavLink>
<NavLink className={(e)=> e.isActive ? "text-yellow-500" : ""} to="/recipes">Recipes</NavLink>
<NavLink className={(e)=> e.isActive ? "text-yellow-500" : ""} to="/about">About</NavLink>

    </div>
  )
}

export default Navbar