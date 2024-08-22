import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import PlayEyes from './components/PlayEyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll'


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-200 text-black'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <PlayEyes/>
      <Featured/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App