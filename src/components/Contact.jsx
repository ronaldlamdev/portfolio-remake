import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0A192F] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/5bde4b85-e0e2-4f8f-b532-30a8cf667b7c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold underline underline-offset-[6px] pb-5 decoration-[#59CE8F] decoration-4 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300'>
            Submit the form below or shoot me an email
          </p>
        </div>
        <input className='bg-[#CCD6F6] p-2' type="text" placeholder="Name" name="name" />
        <input className='my-4 p-2 bg-[#CCD6F6]' type="email" placeholder="Email" name="email" />
        <textarea name='message' rows="10" placeholder="Message" className='bg-[#ccd6f6] p-2' />
        <button className='text-white border-2 hover:bg-[#59CE8F] hover:border-[#59CE8F] duration-300 px-4 my-8 mx-auto py-3 flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact