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
              <div className='max-w-[400px] w-full relative flex justify-center group'>
                <img className='w-full group-hover:opacity-30 duration-300' src={project.thumbnail}/>
                <div className='absolute p-4 text-white top-[25%] flex justify-center items-center text-center opacity-0 group-hover:opacity-100 duration-300'>
                  <p className='text-2xl'>{project.tech}</p>
                </div>
              </div>
              <div className='p-6 relative w-full text-center group'>
                <h2 className='text-2xl group-hover:opacity-0'>{project.title}</h2>
                <div className='absolute w-full flex justify-center items-center gap-9 left-0 top-0 p-6 text-2xl opacity-0 group-hover:opacity-100 duration-300'>
                  <button className='w-[80px] flex justify-center items-center px-3 py-2 rounded-md text-white group border-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                    <a href={project.repo} target="_blank">Repo</a>
                  </button>
                  <button className='w-[80px] flex justify-center items-center px-3 py-2 rounded-md text-white group border-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                    <a href={project.live_site} target="_blank">
                      Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work