import React from 'react';
import '../../App.css';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Iqra Technology',
    period: 'Nov 2024 – Present',
    role: 'Software Engineer',
    description:
      'Client: Amlak Finance, UAE — Developed enterprise MERN stack apps for document management & digital workplace in fintech. Built secure RESTful APIs with RBAC, QR-based document verification, and owned AWS deployment & production support.',
    color: '#374151',
  },
  {
    company: 'Iqra Technology',
    period: 'Sep 2025 – Mar 2026',
    role: 'Full-Stack Developer',
    description:
      'Client: Edit Solutions, Sweden — Engineered backend services using Java Servlets, JDBC, and RBAC for an enterprise construction management platform. Designed relational DB schemas, automated notifications, PDF generation, and a browser-based 3D BIM viewer (Three.js + Web-IFC).',
    color: '#4f4f4f',
  },
  {
    company: 'Iqra Technology',
    period: 'Nov 2024 – Aug 2025',
    role: 'Full-Stack Developer (Internal Products)',
    description:
      'Built AI-powered apps using Python, Django REST Framework, LangChain, and RAG pipelines. Created chatbot systems with React.js, vector databases, and contextual retrieval. Containerized and deployed on Docker/Linux.',
    color: '#6b7280',
  },
  {
    company: 'NanoBios Lab, IIT Bombay',
    period: 'Dec 2023 – May 2024',
    role: 'Frontend Intern',
    description:
      'Built React.js UIs with Tailwind CSS, integrated 100+ REST APIs via Axios, delivered 6 feature-rich web apps across 90+ pages, and implemented state management using Redux Toolkit.',
    color: '#9ca3af',
  },
];

function Experience() {
  const { ref: exRef, inView: exInView } = useInView({ threshold: 0.05 });

  return (
    <section ref={exRef} id='experience' className='w-11/12 max-w-6xl my-10 md:my-16 flex flex-col font-lufga'>
      <h2 className='w-full text-3xl sm:text-4xl md:text-5xl font-lufga font-semibold text-center my-8 md:my-12 text-black'>
        My <span className='text-gray-400'>Experience</span>
      </h2>

      {/* Desktop & Tablet Timeline (>= 640px) */}
      <div className={`hidden sm:flex w-full justify-between items-start gap-4 ${exInView ? 'in-view' : ''}`}>
        {/* Left Column: Company & Date */}
        <div className='shrink-0 flex flex-col gap-16 md:gap-20 text-right pr-3'>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1.5 ${exInView ? (i === 0 ? 'movedown' : i === 1 ? 'movedown2' : i === 2 ? 'movedown3' : 'movedown3') : ''}`}
              style={i >= 2 ? { animationDelay: `${1.3 + (i - 1) * 1.2}s` } : i === 1 ? { animationDelay: '1.3s' } : {}}
            >
              <h3 className='text-lg md:text-2xl font-bold text-gray-900'>{exp.company}</h3>
              <span className='text-sm md:text-base text-gray-500 font-medium'>{exp.period}</span>
            </div>
          ))}
        </div>

        {/* Center Column: Animated Dotted Line & Nodes */}
        <div className='shrink-0 w-10 md:w-12 flex flex-col items-center justify-start'>
          {experiences.map((exp, i) => (
            <React.Fragment key={i}>
              <div
                className={`flex items-center justify-center size-10 md:size-12 rounded-full p-1 bg-white border-4 border-black border-dashed ${exInView ? (i === 0 ? 'makevisible' : i === 1 ? 'makevisible2' : 'makevisible3') : ''}`}
                style={i >= 2 ? { animationDelay: `${1.3 + (i - 1) * 1.2}s` } : i === 1 ? { animationDelay: '1.3s' } : {}}
              >
                <div className='size-7 md:size-8 rounded-full' style={{ backgroundColor: exp.color }}></div>
              </div>
              {i < experiences.length - 1 && (
                <svg width='3' height='80' className='my-0.5'>
                  {[...Array(10)].map((_, j) => (
                    <line
                      key={j}
                      x1='1.5' y1={j * 8} x2='1.5' y2={j * 8 + 6}
                      stroke='black' strokeWidth='3'
                      className={exInView ? (i === 0 ? 'dash-segment' : 'dash-segment2') : ''}
                      style={{ animationDelay: `${(i === 0 ? 0.1 : 1.4) + j * 0.1}s` }}
                    />
                  ))}
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right Column: Role & Description */}
        <div className='flex-1 flex flex-col gap-8 md:gap-14 text-left pl-4'>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 ${exInView ? (i === 0 ? 'movedown' : i === 1 ? 'movedown2' : 'movedown3') : ''}`}
              style={i >= 2 ? { animationDelay: `${1.3 + (i - 1) * 1.2}s` } : i === 1 ? { animationDelay: '1.3s' } : {}}
            >
              <h3 className='text-base md:text-xl font-bold text-gray-900'>{exp.role}</h3>
              <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Timeline (< 640px) */}
      <div className='flex sm:hidden flex-col gap-6 px-2'>
        {experiences.map((exp, i) => (
          <div key={i} className='flex gap-4 items-start'>
            <div className='flex flex-col items-center shrink-0'>
              <div
                className='size-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md'
                style={{ backgroundColor: exp.color }}
              >
                {i + 1}
              </div>
              {i < experiences.length - 1 && <div className='w-0.5 h-full bg-gray-300 my-1 min-h-[20px]'></div>}
            </div>
            <div className='flex-1 pb-4'>
              <span className='text-xs font-semibold text-gray-500'>{exp.period}</span>
              <h3 className='text-base font-bold text-gray-900'>{exp.role}</h3>
              <h4 className='text-sm font-semibold text-gray-700'>{exp.company}</h4>
              <p className='text-xs text-gray-600 leading-relaxed mt-1'>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;