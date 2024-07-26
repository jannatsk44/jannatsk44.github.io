import React from 'react'
import Navbar from './Navbar'
import Mainpage from './sections/Mainpage'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Publications from './sections/Publications.jsx'
import HireMe from './sections/HireMe.jsx'
import Footer from './sections/Footer.jsx'

function Home() {
  return (
    <div id='home' className='bg-[#BBEAFF] w-full flex flex-col items-center justify-center'>
        <Navbar/> 
        <Mainpage/>
        <Projects/>
        <Experience/>
        <Skills/>
        <Publications/>
        <HireMe/>
        <Footer/>
    </div>
  )
}

export default Home