import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen  pt-1'>
        <div className='textstructure mt-48 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                return <div className='masker '>
                        <div className='w-fit flex items-center overflow-hidden'>
                        {index === 1 && (
                        <motion.div initial={{width: 0}}
                         animate={{width: "9vw"}}
                         transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                         className='mr-[1vw] rounded-md w-[9vw] h-[5vw] bg-red-500'></motion.div>
                        )}
                        <h1 className='uppercase text-[7.5vw] leading-[6.5vw] font-["Founders_Grotesk_X-Condensed"] font-bold'>{item}</h1>
                        </div>
                        </div>
            })}
            
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
            <p className='text-md font-regular tracking-tight leading-none'>
             {item}
            </p>)}
            <div className='start flex items-center gap-5'>
             <div className="px-4 py-2 border-[1px] border-zinc-600 rounded-full font-regular text-md uppercase">Start the project</div>
             <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full'>
                <span className='rotate-[45deg]'>
                 <FaArrowUpLong/>
                </span>
             </div>
        </div>
        </div>
        
    </div>
  )
}

export default LandingPage