import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-1'>
      <div className='textstructure mt-48 sm:mt-48 px-6 sm:px-10 md:px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className='masker '>
            <div className='w-fit flex items-center overflow-hidden'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='mr-[1vw] rounded-md w-[9vw] h-[5vw] bg-red-500'
                ></motion.div>
              )}
              <h1 className='uppercase text-[8vw] sm:text-[7.5vw] leading-[7vw] sm:leading-[6.5vw] font-["Founders_Grotesk_X-Condensed"] font-bold'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t-[1px] border-zinc-400 mt-20 flex flex-col sm:flex-row justify-between py-5 px-6 '>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className='text-base sm:text-md font-regular tracking-tight leading-none mb-6 sm:mb-0'>
            {item}
          </p>
        ))}
        <div className='start flex items-center gap-4 sm:gap-5'>
          <div className="px-3 sm:px-4 py-2 border-[1px] border-zinc-600 rounded-full font-regular text-sm sm:text-md uppercase">
            Start the project
          </div>
          <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
