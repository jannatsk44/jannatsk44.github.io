import React from 'react';
import Skillbar from '../Skillbar';

function Skills() {
  return (
    <section id='skills' className='w-11/12 max-w-6xl min-h-fit py-8 md:py-14 px-4 sm:px-8 md:px-14 rounded-[35px] md:rounded-[50px] bg-[#9ca3af] my-10 md:my-16 shadow-2xl flex flex-col'>
      <h2 className='w-full text-3xl sm:text-4xl md:text-5xl font-lufga font-semibold mb-8 md:mb-12 text-center md:text-right text-white'>
        My <span className='text-butonOrange'>Skills</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full'>
        <Skillbar title='Backend Development' skills='Python, Django REST Framework, RESTful APIs, RBAC, Node.js' efficiency='88' />
        <Skillbar title='Frontend Development' skills='React.js, JavaScript, Tailwind CSS, Redux Toolkit' efficiency='90' />
        <Skillbar title='Cloud & DevOps' skills='AWS, Docker, Linux, Git & Version Control' efficiency='78' />
        <Skillbar title='Databases' skills='MySQL, Relational Schema Design, Vector DB (Astra DB)' efficiency='82' />
        <Skillbar title='AI & Automation' skills='LangChain, OpenAI GPT-4, RAG Pipelines, n8n' efficiency='80' />
        <Skillbar title='Other' skills='Microservices Architecture, Java Servlets, JDBC, Three.js' efficiency='72' />
      </div>
    </section>
  );
}

export default Skills;