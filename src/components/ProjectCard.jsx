import React from 'react'

function ProjectCard({title, content, link}) {
  
  return (


    <div className='w-[350px] sm:w-[160px] sm:h-[235px] h-[400px] flex flex-col bg-[#757575] bg-opacity-70 z-10 rounded-[30px] text-white  hover:transform  transition-all ease-in-out delay-100 hover:scale-110  sm:hover:scale-100 hover:scroll-smooth my-5 sm:m-0 mx-5'>
        <div className='code h-2/6 text-3xl sm:text-xs text-center bg-opacity-100 sm:leading-4 sm:pb-1 z-20 font-bold py-3 sm:px-1 px-6'>
        {title}
        </div>
        <hr className='text-white z-10 bg-opacity-100 h-3/6 sm:h-0 sm:-mt-4' />
        <div className='desc h-3/6 bg-opacity-100 text-justify text-md py-3 sm:text-[10.5px] sm:py-1 sm:tracking-tighter sm:leading-3 sm:px-2 px-6'>
          {content}
        </div>
        <div className='button h-1/6 w-full flex items-center justify-center bg-opacity-100'>
          <a href={link} target="_blank" rel="noopener noreferrer"  className='bg-butonOrange text-center text-white text-xl mb-10 mt-6 p-3 sm:p-2 sm:mb-3 font-semibold rounded-full sm:rounded-xl sm:text-xs w-1/2'>View Code</a>
        </div>
    </div>
  )
}

export default ProjectCard
