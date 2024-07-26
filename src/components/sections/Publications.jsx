import React from 'react'
import { LuMoveUpRight } from "react-icons/lu";
import '../../App.css'

function Publications() {
  return ( 
    <div id='publications' className='w-full flex flex-col sm:h-auto mb-14 h-[80vh] items-center'>
         <label className='w-full opacity-100 z-10 text-5xl font-lufga font-semibold text-center my-10 sm:text-4xl text-black'>My <span className='text-butonOrange'>Publications</span></label>
         <div className=' w-[350px] sm:w-[225px] sm:h-[225px] h-[350px] bg-[#25B4F4] rounded-3xl flex flex-col items-center justify-between px-4 pt-4'>
            <label className='w-full text-3xl sm:text-xl font-bold text-center'>Lost Laptop Tracking System Using MAC Address</label>
            <hr className='w-full text-black border-black'/>
            <label className='w-full text-xl sm:text-base'>A research paper published in Cybersecurity, Privacy, & Networks eJournal under SSRN Publications.</label>
            <div className='w-full flex justify-end'>
            <a href='https://dx.doi.org/10.2139/ssrn.4744393' target="_blank" rel="noopener noreferrer"  className='bg-butonOrange rounded-full size-20 sm:size-16 flex glowing-button2 items-center justify-center -mt-12 -mr-12 '><LuMoveUpRight  className='text-white size-16 sm:size-12 blink-arrow'/></a>
            </div>
         </div>
         
    </div>
  )
}

export default Publications