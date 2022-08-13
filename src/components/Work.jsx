import React from 'react';
import { projects } from '../projects/project';

const Work = () => {
  return (
    <div name="works" className='bg-[#0A192F] md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold underline underline-offset-[6px] decoration-[#59CE8F] decoration-4'>Works</p>
          <p className='py-6 text-xl'>Check out some of my work</p>
        </div>

        {/* Container */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto'>
          {projects.map((project, index) => (
            <div className='flex flex-col justify-center items-center w-full' key={index}>
              <div className='max-w-[400px] w-full flex justify-center'>
                <a className='shadow-xl' href={project.live_site} target="_blank">
                  <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={project.thumbnail}/>
                </a>
              </div>
              <div className='p-6 text-center'>
                <a href={project.repo} target="_blank">
                  <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>{project.title}</h2>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work