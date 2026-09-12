import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import PhoneMessage from '../assets/PhoneMessage.png';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [activeLink, setActiveLink] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-11/12 max-w-6xl bg-navbg sticky top-3 md:top-4 z-50 text-white text-base lg:text-lg font-lufga mt-3 mb-6 md:mb-8 px-3 md:px-5 py-2 md:py-2.5 rounded-full shadow-2xl transition-all'>
      {/* Desktop & Laptop Nav */}
      <div className='hidden md:flex items-center justify-between w-full'>
        <div className='flex items-center justify-around w-5/12 gap-1 lg:gap-2'>
          <a
            href='#home'
            onClick={() => handleSetActiveLink('#home')}
            className={`px-3 lg:px-5 py-2 rounded-full transition-all duration-300 text-center text-sm lg:text-base font-medium ${
              activeLink === '#home' ? 'bg-[#374151] text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Home
          </a>
          <a
            href='#project'
            onClick={() => handleSetActiveLink('#project')}
            className={`px-3 lg:px-5 py-2 rounded-full transition-all duration-300 text-center text-sm lg:text-base font-medium ${
              activeLink === '#project' ? 'bg-[#374151] text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Projects
          </a>
          <a
            href='#experience'
            onClick={() => handleSetActiveLink('#experience')}
            className={`px-3 lg:px-5 py-2 rounded-full transition-all duration-300 text-center text-sm lg:text-base font-medium ${
              activeLink === '#experience' ? 'bg-[#374151] text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Experience
          </a>
        </div>

        <div className='w-2/12 flex items-center justify-center'>
          <a href='#home' onClick={() => handleSetActiveLink('#home')}>
            <img src={logo} alt='Jannat Logo' className='h-8 lg:h-9 w-auto object-contain hover:scale-105 transition-transform' />
          </a>
        </div>

        <div className='flex items-center justify-around w-5/12 gap-1 lg:gap-2'>
          <a
            href='#skills'
            onClick={() => handleSetActiveLink('#skills')}
            className={`px-3 lg:px-5 py-2 rounded-full transition-all duration-300 text-center text-sm lg:text-base font-medium ${
              activeLink === '#skills' ? 'bg-[#374151] text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Skills
          </a>
          <a
            href='#publications'
            onClick={() => handleSetActiveLink('#publications')}
            className={`px-3 lg:px-5 py-2 rounded-full transition-all duration-300 text-center text-sm lg:text-base font-medium ${
              activeLink === '#publications' ? 'bg-[#374151] text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Publications
          </a>
          <a
            href='#contact'
            onClick={() => handleSetActiveLink('#contact')}
            className={`px-3 lg:px-5 py-2 rounded-full transition-all duration-300 text-center text-sm lg:text-base font-medium ${
              activeLink === '#contact' ? 'bg-[#374151] text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Hire me
          </a>
        </div>
      </div>

      {/* Mobile & Tablet Nav Header */}
      <div className='flex md:hidden items-center justify-between w-full px-1'>
        <button
          onClick={toggleMenu}
          aria-label='Toggle navigation menu'
          className='p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none'
        >
          {menuOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
        </button>

        <a href='#home' onClick={() => handleSetActiveLink('#home')} className='flex items-center justify-center'>
          <img src={logo} alt='Jannat Logo' className='h-7 w-auto object-contain' />
        </a>

        <a
          href='#contact'
          onClick={() => handleSetActiveLink('#contact')}
          aria-label='Contact'
          className='p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors'
        >
          <img src={PhoneMessage} alt='Contact' className='w-5 h-5 object-contain' />
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 mt-3 mx-1 bg-navbg/95 backdrop-blur-lg border border-white/10 p-4 rounded-3xl shadow-2xl flex flex-col gap-2 z-50 animate-fadeIn'>
          <a
            href='#home'
            onClick={() => handleSetActiveLink('#home')}
            className={`block px-4 py-3 rounded-2xl text-center font-medium text-base transition-all ${
              activeLink === '#home' ? 'bg-[#374151] text-white font-semibold' : 'text-gray-200 hover:bg-white/10'
            }`}
          >
            Home
          </a>
          <a
            href='#project'
            onClick={() => handleSetActiveLink('#project')}
            className={`block px-4 py-3 rounded-2xl text-center font-medium text-base transition-all ${
              activeLink === '#project' ? 'bg-[#374151] text-white font-semibold' : 'text-gray-200 hover:bg-white/10'
            }`}
          >
            Projects
          </a>
          <a
            href='#experience'
            onClick={() => handleSetActiveLink('#experience')}
            className={`block px-4 py-3 rounded-2xl text-center font-medium text-base transition-all ${
              activeLink === '#experience' ? 'bg-[#374151] text-white font-semibold' : 'text-gray-200 hover:bg-white/10'
            }`}
          >
            Experience
          </a>
          <a
            href='#skills'
            onClick={() => handleSetActiveLink('#skills')}
            className={`block px-4 py-3 rounded-2xl text-center font-medium text-base transition-all ${
              activeLink === '#skills' ? 'bg-[#374151] text-white font-semibold' : 'text-gray-200 hover:bg-white/10'
            }`}
          >
            Skills
          </a>
          <a
            href='#publications'
            onClick={() => handleSetActiveLink('#publications')}
            className={`block px-4 py-3 rounded-2xl text-center font-medium text-base transition-all ${
              activeLink === '#publications' ? 'bg-[#374151] text-white font-semibold' : 'text-gray-200 hover:bg-white/10'
            }`}
          >
            Publications
          </a>
          <a
            href='#contact'
            onClick={() => handleSetActiveLink('#contact')}
            className={`block px-4 py-3 rounded-2xl text-center font-medium text-base transition-all ${
              activeLink === '#contact' ? 'bg-[#374151] text-white font-semibold' : 'text-gray-200 hover:bg-white/10'
            }`}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
