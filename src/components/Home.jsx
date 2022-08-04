import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='bg-[#0A192F] w-full h-screen'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 ml-[0.275rem] text-3xl'>Hi</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6] py-3'>Ronald Lam</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892B0]'>I'm a Front-End Developer.</h2>
        <p className='text-[#8892B0] py-4 max-w-[700px] ml-[0.275rem]'>I'm a front-end developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I'm focused on building front end designs
          for web applications. Eventually, I want to learn backend to become a full-stack developer.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home