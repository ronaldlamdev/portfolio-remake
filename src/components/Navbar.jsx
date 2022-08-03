import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300'>

      {/* Logo */}
      <div>
        <a href='/'>
          <span className='text-5xl font-semibold text-pink-600 pl-2'>
            RL
          </span>
        </a>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      

      {/* Hamburger */}
      <div className='md:hidden z-10'>
        {nav ? <FaBars size={22} className='cursor-pointer' onClick={handleClick} /> : <FaTimes size={22} className='cursor-pointer' onClick={handleClick}/>}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#0A192F] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar