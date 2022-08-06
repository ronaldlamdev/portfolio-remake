import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0A192F] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[800px] w-full grid grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold underline underline-offset-[6px] decoration-pink-600 decoration-4'>
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-4xl font-bold sm:text-right'>
            <p>Hi, I'm Ronald, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I discovered my passion for coding when I created my first static website in college as an
              assignment. I was a senior Accounting major at the time and I knew I wanted to make a career change
              in tech. However, I did not want to change majors to Computer Science and repeat 4 years of college 
              when I was about to graduate. 
              I currently work full time now as an Accounts Payable Clerk, but everyday after work, I dedicate at least 2 hours
              into learning and practicing coding. I hope to to make a career change into tech soon and I look forward to  
              working together in the forseeable future. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About