import React from 'react'
import Skillbar from '../Skillbar'

function Skills() {
  return (
    <div id='skills' className='w-full flex flex-col sm:h-auto sm:pb-10 h-[90vh] rounded-[50px] bg-[#9ca3af]'>
        <label className='w-full opacity-100 z-10 text-5xl font-lufga font-semibold my-10 pr-16 sm:pr-5  sm:text-4xl text-right text-white'>My <span className='text-butonOrange'>Skills</span></label>
        <div className='grid grid-cols-2 sm:grid-cols-1 sm:gap-5 gap-20 px-16 sm:px-5'>
            <Skillbar title='Programming Languages' skills='C, C++, Java, Python' efficiency='80'/>
            <Skillbar title='Web development' skills='HTML, CSS, Javascript, PHP' efficiency='90'/>
            <Skillbar title='Framework and Libraries' skills='React JS, Django' efficiency='75'/>
            <Skillbar title='Databases' skills='MySQL, MsSQL, PostGres, SqLite' efficiency='80'/>
            <Skillbar title='Operating system' skills='Windows, Mac OS, Ubuntu, Kali Linux, Cent OS' efficiency='85'/>
            <Skillbar title='Others' skills='Git, AWS, VPS Management' efficiency='70'/>         
        </div>
    </div>
  )
}

export default Skills