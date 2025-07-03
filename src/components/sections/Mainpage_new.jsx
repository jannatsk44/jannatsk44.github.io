import React from 'react'
import elipse from '../../assets/brain.png'
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import '../../App.css'


function Mainpage() {
  return (
    <div className='w-full flex flex-col '>
        <div className='w-full flex flex-col items-center justify-center px-4'>
           
            <div className='text-2xl md:text-xl sm:text-lg mobile:text-base font-semibold inline-block rounded-full border-2 border-black px-4 py-2 font-lufga mb-4'>Hello!</div>
            <label className='w-full text-center text-5xl lg:text-4xl md:text-3xl sm:text-2xl mobile:text-xl font-semibold font-urbanist px-4'>I'm <span className='text-butonOrange typing-demo inline-block -mb-2'>Jannat Iqbal Shaikh,</span><br/>Full-Stack AI Developer</label>
            
        </div>
        <div className='w-full flex md:flex-col md:items-center md:gap-8'>
            <div className='w-1/4 md:w-full sm:w-1/5 sm:h-auto h-[70vh] md:h-auto flex items-center justify-center md:order-2'>
                <a href='https://drive.google.com/file/d/1vJ_FhJwvY_sK_2v2VyuRUpKO5O76Qpe-/view?usp=sharing'  target="_blank" rel="noopener noreferrer" className='w-1/2 md:w-auto sm:w-[100px] sm:-mt-20 md:mt-0 sm:-mr-14 md:mr-0 sm:leading-none sm:text-[10px] md:text-base ml-2 md:ml-0 rounded-full bg-butonOrange p-3 md:px-6 md:py-3 sm:p-2 glowing-button text-white text-center cursor-pointer font-semibold text-2xl md:text-lg mobile:text-base whitespace-nowrap'>View Resume</a>
            </div>
            <div className='w-2/4 md:w-full sm:w-3/5 flex items-end justify-center relative md:order-1 md:h-64 sm:h-48 mobile:h-40'>
                <img src={elipse} alt='' className='absolute w-3/5 md:w-1/2 sm:w-2/3 mobile:w-3/4 object-contain sm:top-[41.5%] md:top-auto bottom-0 scale-stuff glowing-brain'/>        
            </div>
            <div className='w-1/4 md:w-full sm:w-1/5 h-[70vh] md:h-auto sm:h-auto flex items-center justify-center md:order-3'>
              <a href='#contact' className='w-1/2 md:w-auto rounded-full glowing-button bg-butonOrange sm:p-2 md:px-6 md:py-3 p-3 sm:w-[100px] sm:-mt-20 md:mt-0 sm:-ml-14 md:ml-0 sm:text-[10px] md:text-base sm:leading-none text-white text-center cursor-pointer font-semibold text-2xl md:text-lg mobile:text-base mr-2 md:mr-0'>Contact Me</a>
            </div>
        </div>
    </div>
  )
}

export default Mainpage
