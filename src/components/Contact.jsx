import React from 'react'
import Eye from './Eye'


const Contact = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full h-full p-20 flex flex-col justify-center items-center text-center font-["Founders_Grotesk_X-condensed"] uppercase bg-[#CDEA68]'>
       
        <div className="contactheading relative leading-none font-semibold text-[9vw]">
       
        <h1>Ready</h1>
        <h1>to start</h1>
        <h1>the project?</h1>
        <Eye/>
        </div>

        <div className="buttons text-[1vw] mt-11 uppercase ">
            <button className="flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 rounded-full text-white">
            Start a project
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
            <p className='text-[1vw] mt-5'>or</p>
            <button className="flex gap-10 items-center uppercase px-10 py-6 border-[1px] border-zinc-900 mt-3 rounded-full text-zinc-900">
            Hello@ochi.design
            <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
          </button>
        </div>
    </div>
  )
}

export default Contact