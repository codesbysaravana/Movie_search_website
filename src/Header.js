import React from 'react'
import { FaLaptop } from 'react-icons/fa'

const Header = ({ title }) => {
  return (
    <header className='Header'>
        <h1>{title}</h1>
        <FaLaptop/>
    </header>
  )
}

export default Header