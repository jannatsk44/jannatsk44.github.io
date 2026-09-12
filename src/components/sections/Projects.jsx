import React from 'react';
import ProjectCard from '../ProjectCard';
import bg from '../../assets/BG.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomDots from '../CustomDots';
import { LuMoveUpRight } from 'react-icons/lu';

function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <CustomDots dots={dots} />,
    customPaging: () => <div className='dot'></div>,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id='project' className='relative w-11/12 max-w-7xl rounded-[35px] md:rounded-[50px] overflow-hidden my-10 md:my-16 py-8 md:py-14 px-4 sm:px-8 lg:px-12 bg-black/60 shadow-2xl'>
      {/* Background Graphic */}
      <img
        src={bg}
        className='absolute inset-0 w-full h-full object-cover rounded-[35px] md:rounded-[50px] opacity-70 -z-10 pointer-events-none'
        alt='Projects Background'
      />

      {/* Header Row */}
      <div className='w-full flex items-center justify-between z-10 mb-6 md:mb-10 px-2'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-lufga font-semibold text-white'>
          My <span className='text-gray-300'>Projects</span>
        </h2>
        <a
          href='https://github.com/jannatsk44?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 bg-butonOrange hover:bg-gray-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 shadow-lg hover:scale-105'
        >
          View All <LuMoveUpRight className='text-lg' />
        </a>
      </div>

      {/* Slider Container */}
      <div className='w-full z-10 pb-6 -mx-2 sm:-mx-3 md:-mx-4'>
        <Slider {...settings}>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='AI Resume Extractor (n8n & GPT-4)'
              content='Built a resume-parsing pipeline using n8n, OpenAI GPT-4, Astra DB, Google Sheets, and Regex to extract structured fields (name, email, skills, education, experience) from uploaded resumes using semantic vector search and field-specific prompt-based extraction.'
              link='https://github.com/jannatsk44'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='AI-Powered Meeting Summarizer (ReactJS & DRF)'
              content='Developed an AI-powered Meeting Assistant using ReactJS and Django DRF, integrating GPT to auto-summarize meetings, transcribe audio, store recordings, and extract action items with assigned team members and deadlines.'
              link='https://github.com/jannatsk44/ai-meeting-assistant'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='AI Chatbot with RAG & Feedback Loop'
              content='Full-stack AI chatbot answering queries from website URLs, uploaded documents, and text input using Django REST Framework, React.js, LangChain, and OpenAI GPT-4. Implemented RBAC for data input and real-time analytics on chatbot accuracy.'
              link='https://aitrainingassistant.iqratechnology.com/'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='AI Coding Training Assistant'
              content='Intelligent coding assistant built with Python and GPT integration for solving programming questions, providing hints, and debugging support. Features time tracking, activity logs, and admin tools for content management and usage analytics.'
              link='https://github.com/jannatsk44/ai-chatbot'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='Lost Laptop Tracking System (MAC Address)'
              content='A laptop tracking system using MAC address designed to track and recover lost or stolen laptops via network interface identification. Published as a research paper in Cybersecurity, Privacy & Networks eJournal under SSRN.'
              link='https://github.com/pillaiganeshmohan/Lost-Laptop-Tracking-System-Using-MAC-Address'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='Camsafe - Facial Recognition & Alert System'
              content='A web app based on a facial detection model that detects registered faces and alerts the system administrator in real-time with email notifications and WebSockets. Built during internship at Tech Vyassa IT Solutions.'
              link='https://github.com/pillaiganeshmohan/Camsafe'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='Stock Price Prediction (Machine Learning)'
              content='Stock Price Prediction ML web app built with Flask and LSTM networks to predict future stock prices based on 3-month historical market trends with interactive actual vs. predicted data visualizations.'
              link='https://github.com/pillaiganeshmohan/Stock-Price-Prediction'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='EMeds - Medicine Reviewing App'
              content='Android medicine review app enabling users to make informed medication choices, create profiles, search for drugs, and view community ratings from other users on the same medication.'
              link='https://github.com/pillaiganeshmohan/eMeds'
            />
          </div>
          <div className='px-2.5 sm:px-3 md:px-4 py-3'>
            <ProjectCard
              title='PovertyCure - Charity Platform'
              content='A charity web application built with HTML, CSS, JavaScript, PHP, and MySQL where users can donate goods, clothes, and funds for different causes with transparent tracking and donation management.'
              link=''
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Projects;