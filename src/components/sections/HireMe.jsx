import React, { useState,useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp, IoCallSharp } from "react-icons/io5";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';


function HireMe() {

  const { ref: hireRef, inView: hireInView, entry } = useInView({
    threshold: 0.1,
  });



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailData = {
      from_name: formData.name,
      to_name: 'Your Name',  
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    emailjs.send('service_7oaqwco', 'template_t5ignkn', formData, 'fGihurpvM174dFEif')
          .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again.');
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id='contact' className='w-full h-dvh sm:h-auto bg-[#9ca3af] rounded-[50px] py-10 font-lufga '>
      <label className='w-10/12 opacity-100 z-10 text-5xl font-lufga font-semibold ml-20 sm:text-4xl sm:ml-5 sm:my-5 my-10 text-butonOrange'>Hire <span className='text-[#ffffff]'>Me</span></label>
      <div className='w-full flex sm:flex-col  sm:gap-4 sm:mt-4 mt-14'>
        <div className='w-1/2 sm:grid sm:ml-7 sm:w-11/12 sm:grid-cols-3 flex flex-col gap-8 sm:gap-2'>
          <a href = 'https://github.com/jannatsk44' target="_blank" rel="noopener noreferrer"className={`${hireInView ? 'move-up' : ''} sm:w-11/12 w-full flex items-center gap-5 sm:gap-1 ml-20 sm:ml-0`} ref={hireRef}>
            <label className='cursor-pointer text-butonOrange'><FaGithub className='size-16 sm:size-6' /></label>
            <label className='cursor-pointer text-[#344054] text-2xl sm:text-xs font-semibold'>jannatsk44</label>
          </a>
          <a href = 'https://www.linkedin.com/in/jannat-shaikh-476b3a255/' target="_blank" rel="noopener noreferrer"className={` ${hireInView ? 'move-up2' : ''} sm:w-11/12 w-full sm:w-11/12 flex items-center gap-5 sm:gap-1 ml-20 sm:ml-0`}>
            <label className='cursor-pointer text-butonOrange'><FaLinkedin className='size-16 sm:size-6' /></label>
            <label className='cursor-pointer text-[#344054] text-2xl sm:text-xs font-semibold'>jannatsk44</label>
          </a>
          <a href = 'mailto:jannatiqbalsk@gmail.com' target="_blank" rel="noopener noreferrer"className={`sm:w-11/12 w-full sm:hidden flex items-center gap-5 sm:gap-1 ml-20 sm:ml-0 ${hireInView?'move-up3':''} `} >
            <label className='cursor-pointer text-butonOrange'><IoMailSharp className='size-16 sm:size-6' /></label>
            <label className='cursor-pointer text-[#344054] text-2xl sm:text-xs font-semibold'>jannatiqbalsk@gmail.com</label>
          </a>
          <a href = 'https://x.com/Jannatsk44' target="_blank" rel="noopener noreferrer"className={`${hireInView ? 'move-up4' : ''} sm:w-11/12 w-full flex items-center gap-5 sm:gap-1 ml-20 sm:ml-0`}>
            <label className='cursor-pointer text-butonOrange'><BsTwitterX className='size-16 sm:size-6' /></label>
            <label className='cursor-pointer text-[#344054] text-2xl sm:text-xs font-semibold'>jannatsk44</label>
          </a>
          <a href = 'mailto:jannatiqbalsk@gmail.com' target="_blank" rel="noopener noreferrer"className={`${hireInView ? 'move-up5' : ''} sm:w-11/12 sm:col-span-2 hidden w-full sm:flex items-center gap-5 sm:gap-1 ml-20 sm:ml-2`}>
            <label className='cursor-pointer text-butonOrange'><IoMailSharp className='size-16 sm:size-6' /></label>
            <label className='cursor-pointer text-[#344054] text-2xl sm:text-xs font-semibold '>jannatiqbalsk@gmail.com</label>
          </a>
          <a href = 'tel:+91 9372465221' target="_blank" rel="noopener noreferrer"className={`${hireInView ? 'move-up5' : ''} sm:w-11/12 w-full flex items-center gap-5 sm:gap-1 ml-20 sm:-ml-7`}>
            <label className='cursor-pointer text-butonOrange'><IoCallSharp className='size-16 sm:size-6' /></label>
            <label className='cursor-pointer text-[#344054] text-2xl sm:text-xs font-semibold whitespace-nowrap '>+91 9372465221</label>
          </a>
          
        </div>
        <div className='w-1/2 sm:w-full flex flex-col items-center justify-center'>
          <form className='w-11/12 sm:w-full flex flex-col items-center justify-center gap-10 sm:gap-6' onSubmit={handleSubmit}>
            <div className='w-full flex flex-col gap-6 sm:gap-3 items-center justify-center'>
              <input
                className={`w-10/12 sm:w-[88%] h-14 rounded-2xl shadow-xl ${hireInView ? 'move-up' : ''}  border-[#344054] border-[1px] text-2xl sm:text-xs pl-5`}
                placeholder='Your Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className={`w-10/12 sm:w-[88%] h-14 rounded-2xl shadow-xl ${hireInView ? 'move-up2' : ''}  border-[#344054] border-[1px] text-2xl sm:text-xs pl-5`}
                placeholder='Your Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className={`w-10/12 sm:w-[88%] h-14 rounded-2xl ${hireInView ? 'move-up3' : ''}  shadow-xl border-[#344054] border-[1px] text-2xl sm:text-xs pl-5`}
                placeholder='Subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                rows={3}
                className={`w-10/12 sm:w-[88%] pt-3 rounded-2xl ${hireInView ? 'move-up4' : ''}  shadow-xl border-[#344054] border-[1px] sm:h-24 text-2xl sm:text-xs pl-5`}
                placeholder='Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button className={`bg-butonOrange  glowing-button2 ${hireInView ? 'move-up5' : ''} text-white text-xl font-semibold rounded-full sm:text-base p-5`}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
