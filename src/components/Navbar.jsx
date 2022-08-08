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
        <li>
          <Link className='hover:text-[#59CE8F] duration-300' to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        {/* About */}
        <li>
          <Link className='hover:text-[#59CE8F] duration-300' to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        {/* Skills */}
        <li>
          <Link className='hover:text-[#59CE8F] duration-300' to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        {/* Work */}
        <li>
          <Link className='hover:text-[#59CE8F] duration-300' to="works" smooth={true} duration={500}>
            Works
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link className='hover:text-[#59CE8F] duration-300' to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      

      {/* Hamburger */}
      <div className='md:hidden z-10'>
        {nav ? <FaBars size={22} className='cursor-pointer' onClick={handleClick} /> : <FaTimes size={22} className='cursor-pointer' onClick={handleClick}/>}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#0A192F] flex flex-col justify-center items-center md:hidden'}>
        <li className='py-6 text-4xl'>

          {/* Home */}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        {/* About */}
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        {/* Skills */}
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        {/* Work */}
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        {/* Contact */}
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/ronaldmlam/' target="_blank">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/ronaldlamdev' target="_blank">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]'>
            <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300' href='/'>
              Email <HiOutlineMail size={30}/>
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar