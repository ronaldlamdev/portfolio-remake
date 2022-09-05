import React from 'react';
import QC2020 from '../assets/project-images/qc2020thumbnail.jpg';
import Ecommerce from '../assets/project-images/ecommerce.jpg';
import Easybank from '../assets/project-images/easybank-thumbnail.jpg';
import Advice from '../assets/project-images/advicegenerator.jpg';


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

          {/* QC2020 */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full rounded-sm' src={QC2020}/>
              <p className='cursor-pointer text-white absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center bg-black/90 hover:opacity-100'>
                Created with React and Tailwind CSS
              </p>
            </div>
            <div className='p-6 text-center relative group w-full h-full'>
              <h2 className='text-2xl duration-300 group-hover:opacity-0'>Quarantine Cup 2020</h2>
              <div className='w-full h-full absolute top-0 text-xl left-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100'>
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://github.com/ronaldlamdev/qc2020' target="_blank">Repo</a>
                </button >
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://ronaldlamdev.github.io/qc2020/' target="_blank">LIVE</a>
                </button>
              </div>
            </div>
          </div>

          {/* Ecommerce */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Ecommerce}/>
              <p className='cursor-pointer text-white absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center bg-black/90 hover:opacity-100'>
                Created with React and SASS
              </p>
            </div>
            <div className='p-6 text-center relative group w-full h-full'>
              <h2 className='text-2xl duration-300 group-hover:opacity-0'>Ecommerce Site</h2>
              <div className='w-full h-full absolute top-0 text-xl left-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100'>
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://github.com/ronaldlamdev/ecommerce-page' target='_blank'>Repo</a>
                </button>
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://ronaldlamdev.github.io/ecommerce-page/' target="_blank">LIVE</a>
                </button>
              </div>
            </div>
          </div>

          {/* Easybank */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full h-full hover:opacity-30 duration-300 rounded-sm' src={Easybank}/>
              <p className='cursor-pointer text-white absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center bg-black/90 hover:opacity-100'>
                Created with React Router DOM V6 and Tailwind CSS
              </p>
            </div>
            <div className='p-6 text-center relative group w-full h-full'>
              <h2 className='text-2xl duration-300 group-hover:opacity-0'>Easybank</h2>
              <div className='w-full h-full absolute top-0 text-xl left-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100'>
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://github.com/ronaldlamdev/easybank' target="_blank">Repo</a>
                </button>
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://ronaldlamdev.github.io/easybank/' target="_blank">LIVE</a>
                </button>
              </div>
            </div>
          </div>

          {/* Advice Generator */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Advice}/>
              <p className='cursor-pointer text-white absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center bg-black/90 hover:opacity-100'>
                Created with Vanilla HTML, CSS, and JS
              </p>
            </div>
            <div className='p-6 text-center relative group w-full h-full'>
              <h2 className='text-2xl duration-300 group-hover:opacity-0'>Advice Generator</h2>
              <div className='w-full h-full absolute top-0 text-xl left-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100'>
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://github.com/ronaldlamdev/advice-generator-app' target='_blank'>Repo</a>
                </button >
                <button className='hover:text-white flex items-center text-white max-w-[170px] group border-2 px-6 py-3 my-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 cursor-pointer'>
                  <a href='https://ronaldlamdev.github.io/advice-generator-app/' target='_blank'>LIVE</a>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work