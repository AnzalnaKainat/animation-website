import React from 'react'
import Eye from './Eye'


const Contact = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full h-full p-20 flex flex-col justify-center items-center text-center font-["Founders_Grotesk_X-condensed"] uppercase bg-[#CDEA68]'>
       
        <div className="contactheading relative leading-none font-semibold text-[14vw] md:text-[9vw]">
       
        <h1>Ready</h1>
        <h1>to start</h1>
        <h1>the project?</h1>
        <Eye/>
        </div>

        <div className="buttons ">

          <button className="flex gap-2 sm:gap-10 items-center px-6 sm:px-10 py-3 sm:py-6 bg-zinc-900 mt-6 sm:mt-10 rounded-full text-white text-sm sm:text-base uppercase">
            Start a project
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
            <p className='text-[12px] font-medium mt-5'>or</p>
            <button className="flex gap-2 sm:gap-10 items-center px-6 sm:px-10 py-3 sm:py-6 border-[1px] border-zinc-900 mt-3 sm:mt-5 rounded-full text-zinc-900 text-sm sm:text-base uppercase">
            Hello@ochi.design
            <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
          </button>
          
        </div>
    </div>
  )
}

export default Contact