import React from 'react'
import ProjectCard from '../ProjectCard'
import bg from '../../assets/BG.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomDots from '../CustomDots';
import { LuMoveUpRight } from "react-icons/lu";

function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => <CustomDots dots={dots} />,
    customPaging: i => <div className="dot"></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div id='project' className='w-full flex flex-col sm:pb-10 sm:h-auto h-dvh'>
        <img src={bg} className='absolute left-0 rounded-[50px] z-10 opacity-70 h-dvh sm:h-2/3 w-dvw' alt=''/>
        <div className='w-full flex sm:mt-5 items-center'>
          <label className='w-10/12 opacity-100 z-10 text-5xl font-lufga font-semibold ml-20 sm:ml-5 sm:text-4xl my-10 text-white'>My <span className='text-butonOrange'>Projects</span></label>
          <a href='https://github.com/jannatsk44?tab=repositories' target="_blank" rel="noopener noreferrer"  className='w-1/12 sm:w-1/3 sm:rounded-2xl h-fit flex items-center justify-center z-10 p-2 bg-butonOrange text-white font-semibold text-xl sm:text-sm sm:pl-2 sm:pr-2 sm:mr-3 rounded-full'>View All <LuMoveUpRight />
          </a>
        </div>
        <div className='w-full pl-20 xs:pl-2 sm:pl-5 opacity-100 sm:py-0 py-8 z-10'>
        <Slider {...settings}>
        <div>
            <ProjectCard title='Lost Laptop Tracking System Using MAC Address' content='A laptop tracking system using MAC address is a solution designed to help track and recover lost or stolen laptops. MAC address stands for Media Access Control address and it is a unique identifier assigned to network interfaces for communications on a network.' link='https://github.com/pillaiganeshmohan/Lost-Laptop-Tracking-System-Using-MAC-Address'/>
          </div> 
          <div>
            <ProjectCard title='Camsafe - Facial recognition and alert system' content='A web app based on facial detection model that detects face and alert the admin of the system. web-app serves the purpose of facial detection by detecting multiple registered users’ faces and location and alerts the admin on the system as well mail using websocket.' link='https://github.com/pillaiganeshmohan/Camsafe'/>
          </div> 
          <div>
            <ProjectCard title='Stock Price Prediction Web-App (Machine Learning)' content='Stock Price Prediction is an ML based project made using Flask that predicts stock price for certain companies. It predicts the stock price using LSTM by taking data of 3 months and predicts for next month accordingly. It generates the chart based on Actual vs predicted data.
' link='https://github.com/pillaiganeshmohan/Stock-Price-Prediction'/>
          </div> 

          <div>
            <ProjectCard title='EMeds - Medicine Reviewing app (Android App)' content='eMeds is an Android medicine review app that aims to help users make informed judgements about their medication choices. Users can create profiles, look for specific medications & view ratings from other users who have used the same medication.' link='https://github.com/pillaiganeshmohan/eMeds'/>
          </div>

          <div>
            <ProjectCard title='PovertyCure - A Charity Website (Web Development)' content='A charity website made to address poverty issues. It is made using HTML, CSS, AJAX, Javascript and PHP on which you can list clothes and things for donation. It is connected to mySQL database. One can also donate money for different causes as per their ability. 
' link='' />
          </div>
        </Slider>
        </div>
    </div>
  )
}

export default Projects