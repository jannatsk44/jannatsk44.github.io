import React, { useState } from 'react';
import logo from '../assets/logo.png';
import PhoneMessage from '../assets/PhoneMessage.png'

function Navbar() {
  const [activeLink, setActiveLink] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-11/12 flex bg-navbg sticky top-4 z-40 text-white text-xl md:text-lg sm:text-sm justify-between mt-4 mb-8 p-[5px] rounded-full text-center'>
      <div className='md:hidden w-2/5 flex justify-between'>
        <a
          href='#home'
          onClick={() => handleSetActiveLink('#home')}
          className={`p-4 lg:p-3 md:p-2 w-1/4 text-center ${activeLink === '#home' ? 'bg-gray-400 rounded-full text-center' : ''}`}
        >
          Home
        </a>
        <a
          href='#project'
          onClick={() => handleSetActiveLink('#project')}
          className={`p-4 w-1/4 ${activeLink === '#project' ? 'bg-gray-400 rounded-full text-center' : ''}`}
        >
          Projects
        </a>
        <a
          href='#experience'
          onClick={() => handleSetActiveLink('#experience')}
          className={`p-4 w-1/4 ${activeLink === '#experience' ? 'bg-butonOrange rounded-full text-center' : ''}`}
        >
          Experience
        </a>
      </div><div className='sm:flex hidden w-1/5'>
        <button onClick={toggleMenu} className='bg-gray-400 text-4xl tracking-wide ml-3 p-1'>
          ☰
        </button>
        {menuOpen && (
          <div className='absolute top-16 left-0 bg-navbg p-4 rounded-lg'>
            <a
              href='#home'
              onClick={() => handleSetActiveLink('#home')}
              className={`block p-2 ${activeLink === '#home' ? 'bg-gray-400 rounded-full' : ''}`}
            >
              Home
            </a>
            <a
              href='#project'
              onClick={() => handleSetActiveLink('#project')}
              className={`block p-2 ${activeLink === '#project' ? 'bg-gray-400 rounded-full' : ''}`}
            >
              Projects
            </a>
            <a
              href='#experience'
              onClick={() => handleSetActiveLink('#experience')}
              className={`block p-2 ${activeLink === '#experience' ? 'bg-gray-400 rounded-full' : ''}`}
            >
              Experience
            </a>
            <a
              href='#skills'
              onClick={() => handleSetActiveLink('#skills')}
              className={`block p-2 ${activeLink === '#skills' ? 'bg-gray-400 rounded-full' : ''}`}
            >
              Skills
            </a>
            <a
              href='#publications'
              onClick={() => handleSetActiveLink('#publications')}
              className={`block p-2 ${activeLink === '#publications' ? 'bg-gray-400 rounded-full' : ''}`}
            >
              Publications
            </a>
            <a
              href='#contact'
              onClick={() => handleSetActiveLink('#contact')}
              className={`block p-2 ${activeLink === '#contact' ? 'bg-gray-400   rounded-full' : ''}`}
            >
              Hire me
            </a>
          </div>
        )}
      </div>
      <div className='w-1/5 flex items-center justify-center'>
        <img src={logo} alt='' className='w-1/4 sm:w-5/6' />
      </div>
      <div className='w-1/5 items-center hidden sm:flex justify-center'>
        <img src={PhoneMessage} alt='' className='w-1/4 sm:w-2/3 ' />
      </div>
      <div className='sm:hidden w-2/5 flex text-white justify-between'>
        <a
          href='#skills'
          onClick={() => handleSetActiveLink('#skills')}
          className={`p-4 w-1/4 ${activeLink === '#skills' ? 'bg-butonOrange rounded-full text-center' : ''}`}
        >
          Skills
        </a>
        <a
          href='#publications'
          onClick={() => handleSetActiveLink('#publications')}
          className={`p-4 w-1/4 ${activeLink === '#publications' ? 'bg-butonOrange rounded-full text-center' : ''}`}
        >
          Publications
        </a>
        <a
          href='#contact'
          onClick={() => handleSetActiveLink('#contact')}
          className={`p-4 w-1/4 ${activeLink === '#contact' ? 'bg-butonOrange rounded-full text-center' : ''}`}
        >
          Hire me
        </a>
      </div>
      
    </div>
  );
}

export default Navbar;
