import React from 'react'

const Cards = () => {
  return (
    <div className=' w-full h-screen flex gap-3 items-center px-20'>
        <div className="cardcontainer h-[60vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-6 text-xs text-[#CDEA68] border-[#CDEA68]'>&copy; 2019-2024</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
            <div className="card relative rounded-xl w-1/2 h-full bg-zinc-800 flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-6 text-xs text-zinc-100 border-zinc-100 uppercase'>Rating 5.0 on clutch</button>
            </div>
            <div className="card relative rounded-xl w-1/2 h-full bg-zinc-800 flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-6 text-xs text-zinc-100 border-zinc-100 uppercase'>Business bootcamp alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards