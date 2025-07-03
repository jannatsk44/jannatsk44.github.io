import React from 'react'
import elipse from '../../assets/brain.png'
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import '../../App.css'


function Mainpage() {
  return (
    <div className='w-full flex flex-col '>
        <div className='w-full flex flex-col items-center justify-center'>
           
            <div className='text-2xl sm:text-xl font-semibold inline-block rounded-full border-2 border-black px-4 font-lufga mb-4'>Hello!</div>
            <label className='w-full text-center text-5xl sm:text-2xl font-semibold font-urbanist'>I’m <span className='text-butonOrange typing-demo inline-block -mb-2'>Jannat Iqbal Shaikh, </span><br/>Full-Stack AI Developer</label>
            
        </div>
        <div className='w-full flex'>
            <div className='w-1/4 sm:w-1/5 sm:h-auto h-[70vh] flex items-center justify-center'>
                <a href='https://drive.google.com/file/d/1vJ_FhJwvY_sK_2v2VyuRUpKO5O76Qpe-/view?usp=sharing'  target="_blank" rel="noopener noreferrer" className='w-1/2 sm:w-[100px] sm:-mt-20 sm:-mr-14 sm:leading-none sm:text-[10px] ml-2 rounded-full bg-butonOrange p-3 sm:p-2 glowing-button text-white text-center cursor-pointer font-semibold text-2xl whitespace-nowrap'>View Resume</a>
            </div>
            <div className='w-2/4 sm:w-3/5 flex items-end justify-center relative'>
                <img src={elipse} alt='' className='absolute w-3/5 object-contain sm:top-[41.5%] bottom-0 scale-stuff glowing-brain'/>        
            </div>
            <div className='w-1/4 sm:w-1/5 h-[70vh] sm:h-auto  flex items-center justify-center'>
              <a href='#contact' className='w-1/2 rounded-full  glowing-button bg-butonOrange sm:p-2 p-3 sm:w-[100px]  sm:-mt-20 sm:-ml-14 sm:text-[10px] sm:leading-none text-white text-center cursor-pointer font-semibold text-2xl mr-2'>Contact Me</a>
            </div>
        </div>
    </div>
  )
}

export default Mainpage
