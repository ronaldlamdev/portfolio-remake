import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import TailwindCSS from '../assets/tailwind.png';
import SASS from '../assets/sass.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0A192F] text-gray-300 w-full h-screen'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-4xl font-bold underline underline-offset-[6px] decoration-pink-600 decoration-4'>
            Skills
          </p>
          <p className='py-4'>
            These are the technologies I've worked with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactJS} />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailwindCSS} />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={SASS} />
            <p className='my-4'>SASS</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} />
            <p className='my-4'>Git</p>
          </div>
          <div className='shadow-md py-4 rounded-md border shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills