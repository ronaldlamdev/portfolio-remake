import React from 'react';
import QC2020 from '../assets/project-images/qc2020thumbnail.jpg';
import Restaurant from '../assets/project-images/restaurantsite.jpg';
import Travel from '../assets/project-images/travel.jpg';
import Ecommerce from '../assets/project-images/ecommerce.jpg';
import OldPortfolio from '../assets/project-images/oldportfolio.jpg';
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
            <div className='max-w-[400px] w-full flex justify-center'>
              <a className='shadow-xl' href='https://ronaldlamdev.github.io/qc2020/' target="_blank">
                <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={QC2020}/>
              </a>
            </div>
            <div className='p-6 text-center'>
              <a href='https://github.com/ronaldlamdev/qc2020' target="_blank">
                <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>Quarantine Cup 2020</h2>
              </a>
            </div>
          </div>

          {/* Restaurant */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center'>
              <a className='shadow-xl' href='https://ronaldlamdev.github.io/restaurant-site/' target="_blank">
                <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Restaurant}/>
              </a>
            </div>
            <div className='p-6 text-center'>
              <a href='https://github.com/ronaldlamdev/restaurant-site' target="_blank">
                <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>Restaurant Site</h2>
              </a>
            </div>
          </div>

          {/* Travel */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center'>
              <a className='shadow-xl' href='https://ronaldlamdev.github.io/travel-site-react-tailwind/' target="_blank">
                <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Travel}/>
              </a>
            </div>
            <div className='p-6 text-center'>
              <a href='https://github.com/ronaldlamdev/travel-site-react-tailwind' target="_blank">
                <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>Travel Site</h2>
              </a>
            </div>
          </div>

          {/* Ecommerce */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center'>
              <a className='shadow-xl' href='https://ronaldlamdev.github.io/ecommerce-page/' target="_blank">
                <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Ecommerce}/>
              </a>
            </div>
            <div className='p-6 text-center'>
              <a href='https://github.com/ronaldlamdev/ecommerce-page' target="_blank">
                <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>Ecommerce Site</h2>
              </a>
            </div>
          </div>

          {/* First Portfolio*/}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center'>
              <a className='shadow-xl' href='https://ronaldlamdev.github.io/portfolio/' target="_blank">
                <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={OldPortfolio}/>
              </a>
            </div>
            <div className='p-6 text-center'>
              <a href='https://github.com/ronaldlamdev/portfolio' target="_blank">
                <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>First Portfolio</h2>
              </a>
            </div>
          </div>

          {/* Advice Generator */}
          
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-full flex justify-center'>
              <a className='shadow-xl' href='https://ronaldlamdev.github.io/advice-generator-app/' target="_blank">
                <img className='w-full hover:opacity-30 duration-300 rounded-sm' src={Advice}/>
              </a>
            </div>
            <div className='p-6 text-center'>
              <a href='https://github.com/ronaldlamdev/advice-generator-app' target="_blank">
                <h2 className='text-2xl hover:text-[#59CE8F] duration-300 '>Advice Generator</h2>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work