import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300'>

      {/* Logo */}
      <div>
        <a href='/'>
          <span className='text-5xl font-semibold text-[#59CE8F] pl-2'>
            RL
          </span>
        </a>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>

        {/* Home */}
          <Link className='hover:text-[#59CE8F] duration-300 px-6 cursor-pointer' to="home" smooth={true} duration={500}>
            Home
          </Link>

        {/* About */}
          <Link className='hover:text-[#59CE8F] duration-300 px-6 cursor-pointer' to="about" smooth={true} duration={500}>
            About
          </Link>

        {/* Skills */}
          <Link className='hover:text-[#59CE8F] duration-300 px-6 cursor-pointer' to="skills" smooth={true} duration={500}>
            Skills
          </Link>

        {/* Work */}
          <Link className='hover:text-[#59CE8F] duration-300 px-6 cursor-pointer' to="works" smooth={true} duration={500}>
            Works
          </Link>

        {/* Contact */}
          <Link className='hover:text-[#59CE8F] duration-300 px-6 cursor-pointer' to="contact" smooth={true} duration={500}>
            Contact
          </Link>
      </ul>
      

      {/* Hamburger */}
      <div className='md:hidden z-10'>
        {nav ? <FaBars size={22} className='cursor-pointer' onClick={handleClick} /> : <FaTimes size={22} className='cursor-pointer hover:text-[#59CE8F] duration-300' onClick={handleClick}/>}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'hidden' : 'absolute top-0 right-0 h-screen w-full bg-[#0e1946] flex flex-col justify-center items-center md:hidden'}>
        
        {/* Home */}
        <Link className='hover:text-[#59CE8F] duration-300 py-6 text-4xl cursor-pointer' onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>

        {/* About */}
        <Link className='hover:text-[#59CE8F] duration-300 py-6 text-4xl cursor-pointer' onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>

        {/* Skills */}
        <Link className='hover:text-[#59CE8F] duration-300 py-6 text-4xl cursor-pointer' onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>


        {/* Work */}
        <Link className='hover:text-[#59CE8F] duration-300 py-6 text-4xl cursor-pointer' onClick={handleClick} to="works" smooth={true} duration={500}>
          Work
        </Link>


        {/* Contact */}
        <Link className='hover:text-[#59CE8F] duration-300 py-6 text-4xl cursor-pointer' onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>

      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/ronaldmlam/' target="_blank">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-white' href='https://github.com/ronaldlamdev' target="_blank">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]'>
            <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-white' href='/'>
              Email <HiOutlineMail size={30}/>
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-white' href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar