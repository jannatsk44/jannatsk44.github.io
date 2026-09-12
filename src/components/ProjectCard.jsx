import React from 'react';

function ProjectCard({ title, content, link }) {
  return (
    <div className='w-full h-[400px] sm:h-[420px] flex flex-col justify-between bg-[#3a3a3a]/80 backdrop-blur-md rounded-[28px] text-white p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-white/10'>
      {/* Title */}
      <div className='h-[75px] sm:h-[80px] flex items-center justify-center text-center font-bold text-lg sm:text-xl md:text-2xl leading-snug px-1'>
        {title}
      </div>

      <hr className='border-t border-white/20 my-2' />

      {/* Description */}
      <div className='flex-1 flex items-center text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed px-2 overflow-y-auto text-center sm:text-left'>
        <p className='line-clamp-5 sm:line-clamp-6'>{content}</p>
      </div>

      {/* Button */}
      <div className='pt-4 flex items-center justify-center'>
        {link ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-butonOrange hover:bg-gray-600 text-white font-semibold text-sm sm:text-base py-2.5 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg inline-block'
          >
            View Code
          </a>
        ) : (
          <span className='bg-gray-600/50 text-gray-300 font-medium text-xs sm:text-sm py-2 px-5 rounded-full inline-block'>
            Code Private
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

