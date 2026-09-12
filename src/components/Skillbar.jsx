import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skillbar({ title, skills, efficiency }) {
  const { ref: innerBarRef, inView: barInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div className='w-full flex flex-col font-montserrat tracking-tight gap-1.5'>
      <div className='w-full flex items-center justify-between'>
        <label className='text-gray-900 text-lg sm:text-xl font-bold truncate pr-2'>
          {title}
        </label>
        <span className='text-gray-900 text-lg sm:text-xl font-bold'>
          {efficiency}%
        </span>
      </div>
      <div className='w-full text-gray-800 text-sm sm:text-base font-semibold'>
        {skills}
      </div>
      <div className='w-full bg-gray-600/40 rounded-full h-4 sm:h-5 overflow-hidden shadow-inner'>
        <div
          ref={innerBarRef}
          className='bg-butonOrange h-full rounded-full transition-all duration-1000 ease-out shadow-md'
          style={{ width: barInView ? `${efficiency}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

export default Skillbar;

