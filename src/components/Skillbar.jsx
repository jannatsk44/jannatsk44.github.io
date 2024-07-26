import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Skillbar({ title, skills, efficiency }) {
  const { ref: innerBarRef, inView: barInView } = useInView({
    threshold: 0.1, 
  });

  


  return (
    <div className='w-full flex z-10 font-montserrat tracking-tighter flex-col'>
      <div className='w-full flex'>
        <label className='w-4/5 flex text-black text-2xl sm:text-lg  font-bold'>{title}</label>
        <label className='w-1/5 flex justify-end text-black text-2xl 
        sm:text-lg font-semibold'>{efficiency}%</label>
      </div>
      <div className='w-full flex text-[#444444] text-xl font-semibold sm:text-sm'>
        {skills}
      </div>
      <div className="w-full bg-[#757575] rounded-full h-5 dark:bg-gray-700">
        <div
          ref={innerBarRef}
          className={`bg-butonOrange h-5 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: barInView ? `${efficiency}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

export default Skillbar;
