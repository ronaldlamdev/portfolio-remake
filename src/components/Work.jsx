import React from 'react'
import RestaurantThumbnail from '../assets/restaurant.jpg';
import TravelThumbnail from '../assets/travel.jpg';

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

          {/* Grid item */}
          <div style={{backgroundImage: `url(${RestaurantThumbnail})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Restaurant Site
              </span>
              <div>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${TravelThumbnail})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Travel Site
              </span>
              <div>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${RestaurantThumbnail})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Restaurant Site
              </span>
              <div>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${TravelThumbnail})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Travel Site
              </span>
              <div>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${RestaurantThumbnail})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Restaurant Site
              </span>
              <div>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${TravelThumbnail})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Travel Site
              </span>
              <div>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Work