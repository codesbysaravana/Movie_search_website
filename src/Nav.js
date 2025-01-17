import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
      <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Book Now</Link></li>
          <li><Link to="/about">About us</Link></li>
      </ul>
    </nav>
  )
}

export default Nav