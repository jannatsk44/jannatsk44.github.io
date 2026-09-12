import React from 'react';
import { LuMoveUpRight } from 'react-icons/lu';
import '../../App.css';

function Publications() {
  return (
    <section id='publications' className='w-11/12 max-w-6xl flex flex-col items-center my-10 md:my-16 font-lufga'>
      <h2 className='w-full text-3xl sm:text-4xl md:text-5xl font-lufga font-semibold text-center my-8 md:my-12 text-black'>
        My <span className='text-butonOrange'>Publications</span>
      </h2>
      <div className='w-full max-w-[420px] min-h-[300px] sm:min-h-[340px] bg-[#9ca3af] rounded-[30px] flex flex-col items-center justify-between p-6 sm:p-8 relative shadow-2xl my-4 mx-auto'>
        <h3 className='w-full text-2xl sm:text-3xl font-bold text-center text-gray-900 leading-snug'>
          Lost Laptop Tracking System Using MAC Address
        </h3>
        <hr className='w-full border-gray-800 my-4' />
        <p className='w-full text-base sm:text-lg text-gray-800 text-center sm:text-left leading-relaxed'>
          A research paper published in <em>Cybersecurity, Privacy, & Networks eJournal</em> under SSRN Publications.
        </p>
        <div className='w-full flex justify-end mt-4'>
          <a
            href='https://dx.doi.org/10.2139/ssrn.4744393'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Read publication'
            className='bg-butonOrange rounded-full size-16 sm:size-20 flex glowing-button2 items-center justify-center absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 shadow-xl hover:scale-110 transition-transform'
          >
            <LuMoveUpRight className='text-white size-8 sm:size-10 blink-arrow' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Publications;