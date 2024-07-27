import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Mainpage from './sections/Mainpage';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Publications from './sections/Publications.jsx';
import HireMe from './sections/HireMe.jsx';
import Footer from './sections/Footer.jsx';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div id='home' className={`bg-[#BBEAFF] ${isLoading?'h-dvh':''} w-full flex flex-col items-center justify-center`}>
      {isLoading ? (<>
        <div className="loader"></div>
        <label className='text-2xl text-center text-butonOrange font-bold font-lufga'>Loading...</label>
      </>
      ) : (
        <>
          <Navbar/>
          <Mainpage/>
          <Projects/>
          <Experience/>
          <Skills/>
          <Publications/>
          <HireMe/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default Home;
