import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (

    <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text text-white border-t-[1px] border-b-[1px] border-zinc-400 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[15vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 -mt-10 font-semibold pr-20'>We are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[15vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 -mt-10 font-semibold pr-20'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee 