import React from 'react';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className='bg-[#272727] rounded-t-3xl md:rounded-3xl flex w-11/12 max-w-7xl flex-col items-center justify-center my-6 py-6 px-4 sm:px-8 shadow-2xl'>
      <hr className='w-full border-gray-700 my-4' />

      <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 font-montserrat py-4'>
        {/* Left Column: Bio & Logo */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
          <img src={logo} alt='Jannat Logo' className='h-9 md:h-10 w-auto object-contain mb-3' />
          <p className='text-gray-300 text-sm md:text-base leading-relaxed max-w-lg'>
            Full-Stack Developer with 1.5+ years of experience building backend-heavy web applications using Python (Django REST Framework) and React.js. Skilled in secure RESTful APIs, RBAC, microservices-style architecture, AWS deployment, Docker containerization, and AI/automation pipelines using LangChain and OpenAI GPT-4.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className='w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left'>
          <h4 className='text-xl text-gray-300 font-bold mb-3'>Navigation</h4>
          <div className='flex flex-wrap md:flex-col justify-center gap-2.5 sm:gap-3 text-sm md:text-base'>
            <a href='#home' className='text-gray-400 hover:text-white transition-colors'>
              Home
            </a>
            <a href='#project' className='text-gray-400 hover:text-white transition-colors'>
              Projects
            </a>
            <a href='#experience' className='text-gray-400 hover:text-white transition-colors'>
              Experience
            </a>
            <a href='#skills' className='text-gray-400 hover:text-white transition-colors'>
              Skills
            </a>
            <a href='#publications' className='text-gray-400 hover:text-white transition-colors'>
              Publications
            </a>
            <a href='#contact' className='text-gray-400 hover:text-white transition-colors'>
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Column: Contact info */}
        <div className='w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left'>
          <h4 className='text-xl text-gray-300 font-bold mb-3'>Contact</h4>
          <div className='flex flex-col items-center md:items-start gap-2.5 text-sm md:text-base'>
            <a
              href='tel:+919372465221'
              className='text-gray-400 hover:text-white transition-colors'
            >
              +91 9372465221
            </a>
            <a
              href='mailto:jannatiqbalsk@gmail.com'
              className='text-gray-400 hover:text-white transition-colors break-all'
            >
              jannatiqbalsk@gmail.com
            </a>
          </div>
        </div>
      </div>

      <hr className='w-full border-gray-700 my-4' />

      <div className='text-xs sm:text-sm text-gray-400 font-montserrat text-center py-2'>
        Copyright © {new Date().getFullYear()} Jannat Iqbal Shaikh | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;