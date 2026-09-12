import React from 'react';
import elipse from '../../assets/brain.png';
import '../../App.css';

function Mainpage() {
  return (
    <div className='w-full max-w-7xl flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 pt-4 pb-8 md:pb-16'>
      {/* Title / Headline */}
      <div className='w-full flex flex-col items-center justify-center text-center mb-6 md:mb-10'>
        <div className='text-lg sm:text-xl md:text-2xl font-semibold inline-block rounded-full border-2 border-black px-4 md:px-6 py-1 font-lufga mb-3 md:mb-4 shadow-sm'>
          Hello!
        </div>
        <h1 className='w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-urbanist text-gray-900 leading-tight'>
          I’m <span className='text-butonOrange typing-demo font-bold'>Jannat Iqbal Shaikh,</span>
          <br />
          <span className='block mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800'>
            Full-Stack Developer · Python &amp; React.js
          </span>
        </h1>
      </div>

      {/* Hero Visuals & CTAs */}
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-4 md:mt-8 relative'>
        {/* Left CTA: View Resume */}
        <div className='w-full md:w-1/4 flex items-center justify-center md:justify-end md:pr-4 order-2 md:order-1'>
          <a
            href='https://drive.google.com/file/d/1mgYFfyEOUlVcHYxoqnDuqv1a1H-TuwSQ/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='w-48 sm:w-56 md:w-auto px-6 py-3 rounded-full bg-butonOrange glowing-button text-white text-center cursor-pointer font-semibold text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-105 shadow-xl'
          >
            View Resume
          </a>
        </div>

        {/* Center Graphic */}
        <div className='w-full md:w-2/4 flex items-center justify-center relative min-h-[260px] sm:min-h-[340px] md:min-h-[420px] order-1 md:order-2 py-4'>
          <img
            src={elipse}
            alt='AI Brain Graphic'
            className='w-4/5 max-w-[280px] sm:max-w-[360px] md:max-w-[440px] object-contain scale-stuff glowing-brain drop-shadow-2xl'
          />
        </div>

        {/* Right CTA: Contact Me */}
        <div className='w-full md:w-1/4 flex items-center justify-center md:justify-start md:pl-4 order-3'>
          <a
            href='#contact'
            className='w-48 sm:w-56 md:w-auto px-6 py-3 rounded-full glowing-button bg-butonOrange text-white text-center cursor-pointer font-semibold text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-105 shadow-xl'
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;

