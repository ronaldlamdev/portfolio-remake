import React from 'react';
import { projects } from '../projects/project';

const Work = () => {
  return (
    <div name="works" className='bg-[#0A192F] w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold underline underline-offset-[6px] decoration-[#59CE8F] decoration-4'>Work</p>
          <p className='py-6 text-xl'>Check out some of my work</p>
        </div>

        {/* Container */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div className='flex flex-col justify-center items-center w-full' key={index}>
              <div className='max-w-[400px] w-full relative flex justify-center group'>
                <img className='w-full rounded-md group-hover:opacity-30 duration-300' src={project.thumbnail}/>
                <div className='absolute p-4 text-white top-[25%] flex justify-center items-center text-center opacity-0 group-hover:opacity-100 duration-300'>
                  <p className='text-2xl'>{project.tech}</p>
                </div>
              </div>
              <div className='p-6 relative w-full text-center'>
                <h2 className='text-2xl'>{project.title}</h2>
                <div></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work