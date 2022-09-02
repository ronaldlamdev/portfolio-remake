import React from 'react';
import QC2020 from '../assets/project-images/qc2020thumbnail.jpg';
import Restaurant from '../assets/project-images/restaurantsite.jpg';
import Travel from '../assets/project-images/travel.jpg';
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
              <p className='absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center hover:bg-black/80 hover:opacity-100'>
                Created with React and Tailwind CSS
              </p>
            </div>
            <div className='p-6 text-center relative w-full h-full'>
              <h2 className='text-2xl duration-300'>Quarantine Cup 2020</h2>
              {/* <div className='w-full h-full absolute top-[50%] left-0 flex justify-evenly items-center'>
                <button>Repo</button>
                <button>LIVE</button>
              </div> */}
            </div>
          </div>

          {/* Restaurant */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Restaurant}/>
              <p className='absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center hover:bg-black/80 hover:opacity-100'>
                Created with React and Tailwind CSS
              </p>
            </div>
            <div className='p-6 text-center'>
              <h2 className='text-2xl duration-300 '>Restaurant Site</h2>
            </div>
          </div>

          {/* Travel */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Travel}/>
              <p className='absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center hover:bg-black/80 hover:opacity-100'>
                Created with React and Tailwind CSS
              </p>
            </div>
            <div className='p-6 text-center'>
              <h2 className='text-2xl duration-300 '>Travel Site</h2>
            </div>
          </div>

          {/* Ecommerce */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Ecommerce}/>
              <p className='absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center hover:bg-black/80 hover:opacity-100'>
                Created with React and SASS
              </p>
            </div>
            <div className='p-6 text-center'>
              <h2 className='text-2xl duration-300 '>Ecommerce Site</h2>
            </div>
          </div>

          {/* Easybank */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm ' src={Easybank}/>
              <p className='absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center hover:bg-black/80 hover:opacity-100'>
                Created with React Router DOM V6 and Tailwind CSS
              </p>
            </div>
            <div className='p-6 text-center'>
              <h2 className='text-2xl duration-300 '>Easybank</h2>
            </div>
          </div>

          {/* Advice Generator */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center relative shadow-xl'>
              <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Advice}/>
              <p className='absolute top-0 text-3xl font-semibold left-0 w-full h-full opacity-0 duration-300 flex text-center items-center hover:bg-black/80 hover:opacity-100'>
                Created with Vanilla HTML, CSS, and JS
              </p>
            </div>
            <div className='p-6 text-center'>
              <h2 className='text-2xl duration-300 '>Advice Generator</h2>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work