import React from 'react';
import '../../App.css';
import { useInView } from 'react-intersection-observer';

function Experience() {
    const { ref: exRef, inView: exInView } = useInView({
        threshold: 0.1,
    });
    
    return (
        <div ref={exRef} id='experience' className='w-full h-[90vh] sm:h-auto my-10 flex flex-col font-lufga'>
            <label className='w-full opacity-100 z-10 text-5xl font-lufga font-semibold text-center sm:text-4xl my-10 text-black'>
                My <span className='text-gray-400'>Experience</span>
            </label>

            <div className={`w-full flex justify-evenly ${exInView ? 'in-view' : ''}`}>
                <div className='w-2/6 flex flex-col gap-[90px] sm:gap-20'>
                    <div className={`w-full flex flex-col gap-2  ${exInView ? 'movedown' : ''}`}>
                        <label className='text-2xl sm:text-sm font-bold'>Iqra Technology Pvt. Ltd.</label>
                        <label className='text-xl sm:text-xs'>Nov 2024 - Present</label>
                    </div>
                    <div className={`w-full flex flex-col gap-2 ${exInView ? 'movedown2' : ''}`} style={{ animationDelay: "1.3s" }}>
                        <label className='text-2xl sm:text-sm font-bold'>Tech Vyassa IT Software Solutions</label>
                        <label className='text-xl sm:text-xs'>Dec 2023 - Jun 2024</label>
                    </div>
                    <div className={`w-full flex flex-col gap-2 ${exInView ? 'movedown3' : ''}`} style={{ animationDelay: "2.5s" }}>
                        <label className='text-2xl sm:text-sm font-bold'>NanoBios Lab, IIT Bombay</label>
                        <label className='text-xl sm:text-xs'>Dec 2023 - May 2024</label>
                    </div>
                    
                </div>

                <div className='w-1/6 flex flex-col sm:-ml-2 items-center justify-start'>
                    <div className={`flex items-center justify-center size-14 sm:size-10 rounded-full p-1 bg-white border-4 sm:border-[3px] border-black border-dashed ${exInView ? 'makevisible' : ''}`}>
                        <div className='size-10 sm:size-6 rounded-full bg-[#9ca3af] text-[#9ca3af]'>.......</div>
                    </div>
                    
                    <svg width="3" height="100" className=''>
                        <line x1="1.5" y1="0" x2="1.5" y2="8" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.1s" }} />
                        <line x1="1.5" y1="10" x2="1.5" y2="18" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.2s" }} />
                        <line x1="1.5" y1="20" x2="1.5" y2="28" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.3s" }} />
                        <line x1="1.5" y1="30" x2="1.5" y2="38" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.4s" }} />
                        <line x1="1.5" y1="40" x2="1.5" y2="48" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.5s" }} />
                        <line x1="1.5" y1="50" x2="1.5" y2="58" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.6s" }} />
                        <line x1="1.5" y1="60" x2="1.5" y2="68" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.7s" }} />
                        <line x1="1.5" y1="70" x2="1.5" y2="78" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.8s" }} />
                        <line x1="1.5" y1="80" x2="1.5" y2="88" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "0.9s" }} />
                        <line x1="1.5" y1="90" x2="1.5" y2="98" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "1s" }} />
                        <line x1="1.5" y1="100" x2="1.5" y2="108" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "1.1s" }} />
                        <line x1="1.5" y1="110" x2="1.5" y2="118" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment' : ''}`} style={{ animationDelay: "1.2s" }} />
                    </svg>

                    <div className={`flex items-center justify-center size-14 sm:size-10 rounded-full p-1 bg-white border-4 sm:border-[3px] border-black border-dashed ${exInView ? 'makevisible2' : ''}`} style={{ animationDelay: "1.3s" }}>
                        <div className='size-10 sm:size-6 rounded-full bg-[#4f4f4f] text-[#4f4f4f]'>.......</div>
                    </div>

                    <svg width="3" height="100" className=''>
                        <line x1="1.5" y1="0" x2="1.5" y2="8" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "1.4s" }} />
                        <line x1="1.5" y1="10" x2="1.5" y2="18" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "1.5s" }} />
                        <line x1="1.5" y1="20" x2="1.5" y2="28" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "1.6s" }} />
                        <line x1="1.5" y1="30" x2="1.5" y2="38" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "1.7s" }} />
                        <line x1="1.5" y1="40" x2="1.5" y2="48" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "1.8s" }} />
                        <line x1="1.5" y1="50" x2="1.5" y2="58" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "1.9s" }} />
                        <line x1="1.5" y1="60" x2="1.5" y2="68" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "2s" }} />
                        <line x1="1.5" y1="70" x2="1.5" y2="78" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "2.1s" }} />
                        <line x1="1.5" y1="80" x2="1.5" y2="88" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "2.2s" }} />
                        <line x1="1.5" y1="90" x2="1.5" y2="98" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "2.3s" }} />
                        <line x1="1.5" y1="100" x2="1.5" y2="108" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "2.4s" }} />
                        <line x1="1.5" y1="110" x2="1.5" y2="118" stroke="black" strokeWidth="3" className={`${exInView ? 'dash-segment2' : ''}`} style={{ animationDelay: "2.5s" }} />
                    </svg>

                    <div className={`flex items-center justify-center sm:size-10 size-14 rounded-full p-1 bg-white border-4 sm:border-[3px] border-black border-dashed ${exInView ? 'makevisible3' : ''}`} style={{ animationDelay: "2.5s" }}>
                        <div className='size-10 sm:size-6 rounded-full bg-[#9ca3af] text-[#9ca3af]'>.......</div>
                    </div>
                </div>

                <div className='w-2/6 flex flex-col gap-10  sm:gap-9'>
                    <div className={`w-full flex flex-col gap-0  ${exInView ? 'movedown' : ''}`}>
                        <label className='text-2xl sm:text-sm font-bold'>Fullstack AI Developer</label>
                        <label className='text-lg sm:text-[11px] sm:leading-3'>
                            Led full-stack AI development with React and DRF. AI Coding Assistant and GPT-based chatbot with RAG using LangChain and Cassandra. Added feedback-driven training.
                        </label>
                    </div>
                    <div className={`w-full flex flex-col gap-0 ${exInView ? 'movedown2' : ''}`} style={{ animationDelay: "1.3s" }}>
                        <label className='text-2xl sm:text-xs sm:mt-4 sm:whitespace-nowrap font-bold'>Full Stack Developer</label>
                        <label className='text-lg sm:text-[11px] sm:leading-3'>
                            Developed a software for Criminal Face Detection from CCTV cameras known as CAMSAFE. Worked on Frontend using React js, Tailwind, python and Django.
                        </label>
                    </div>
                    <div className={`w-full flex flex-col gap-0 ${exInView ? 'movedown3' : ''}`} style={{ animationDelay: "2.5s" }}>
                        <label className='text-2xl sm:text-xs sm:whitespace-nowrap font-bold'>Front-End Developer</label>
                        <label className='text-lg sm:text-[11px] sm:leading-3'>
                            Worked on 6 medical projects. Developed Frontend using React js, Tailwind and python. Integrated Django APIs using Axios.
                        </label>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Experience;
 