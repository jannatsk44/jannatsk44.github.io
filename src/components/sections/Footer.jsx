import React from 'react'
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className='bg-[#272727] rounded-2xl flex w-full flex-col items-center justify-center'>
         <hr className='w-[88%] h-2 text-white mt-8 mb-4'/>

<div className='w-[88%] flex font-montserrat'>
 <div className='w-3/5 sm:w-full flex flex-col sm:items-center'>
    <img src={logo} alt='' className='w-1/6 sm:w-1/4'/>
     <label className='w-11/12 sm:w-full sm:text-sm text-justify text-white text-2xl py-5'>
       I believe in myself. I work efficiently both as an individual contributor as well as along with a team. Besides the details given in my resume, I believe in character, values, vision, and action. I look for positivity in all things. I am a quick learner and believe in learning from my mistakes.
     </label>  
 </div>
 <div className='w-1/5 sm:hidden flex flex-col items-end justify-center'>
   <div className='w-3/4 flex flex-col gap-3'>
      <label className='text-2xl text-butonOrange font-semibold font-montserrat'>Links</label>
      <a href='#home' className='text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>Home</a>
      <a href='#experience' className='text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>Experiences</a>
      <a href='#project' className='text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>Projects</a>
      <a href='#skills' className=' text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>Skills</a>
      <a href='#publications' className='text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>Publications</a>
   </div>
 </div>
 <div className='w-1/5 sm:hidden flex flex-col space-y-4 '>
   <label className='text-2xl w-[85%] text-butonOrange font-semibold'>Contact Me</label>
   <div className='w-fit grid grid-cols-1 items-center gap-2'>
    <a href='tel:+91 9372465221' className='text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>
        +91 9372465221
    </a>
    <a href='mailto:jannatiqbalsk@gmail.com' className='text-white cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-butonOrange'>
        jannatiqbalsk@gmail.com
    </a>

   </div> 
 </div>
</div>
<hr className='w-[88%] h-2 text-white my-4'/>
<div className='text-sm sm:text-[9px] text-white font-montserrat mb-4'>
  Copyright © 2024 Jannat Iqbal Shaikh | All rights reserved
</div>
    </div>
  )
}

export default Footer