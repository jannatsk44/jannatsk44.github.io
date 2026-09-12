import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMailSharp, IoCallSharp } from 'react-icons/io5';
import { BsTwitterX } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';

function HireMe() {
  const { ref: hireRef, inView: hireInView } = useInView({
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_7oaqwco', 'template_t5ignkn', formData, 'fGihurpvM174dFEif')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send the message. Please try again.');
        }
      );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section
      ref={hireRef}
      id='contact'
      className='w-11/12 max-w-6xl min-h-fit bg-[#9ca3af] rounded-[35px] md:rounded-[50px] py-10 md:py-16 px-6 sm:px-10 md:px-16 font-lufga my-10 md:my-16 shadow-2xl'
    >
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-lufga font-semibold mb-8 md:mb-12 text-butonOrange'>
        Hire <span className='text-white'>Me</span>
      </h2>

      <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14'>
        {/* Social Links Column */}
        <div className='w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6'>
          <a
            href='https://github.com/jannatsk44'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-4 group p-2 rounded-xl transition-all ${
              hireInView ? 'move-up' : ''
            }`}
          >
            <div className='size-12 sm:size-14 rounded-full bg-butonOrange text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md'>
              <FaGithub className='size-6 sm:size-7' />
            </div>
            <span className='text-gray-900 text-lg sm:text-xl font-bold group-hover:text-black'>
              jannatsk44
            </span>
          </a>

          <a
            href='https://www.linkedin.com/in/jannat-shaikh-476b3a255/'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-4 group p-2 rounded-xl transition-all ${
              hireInView ? 'move-up2' : ''
            }`}
          >
            <div className='size-12 sm:size-14 rounded-full bg-butonOrange text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md'>
              <FaLinkedin className='size-6 sm:size-7' />
            </div>
            <span className='text-gray-900 text-lg sm:text-xl font-bold group-hover:text-black'>
              jannat-shaikh-476b3a255
            </span>
          </a>

          <a
            href='mailto:jannatiqbalsk@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-4 group p-2 rounded-xl transition-all ${
              hireInView ? 'move-up3' : ''
            }`}
          >
            <div className='size-12 sm:size-14 rounded-full bg-butonOrange text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md'>
              <IoMailSharp className='size-6 sm:size-7' />
            </div>
            <span className='text-gray-900 text-lg sm:text-xl font-bold group-hover:text-black break-all'>
              jannatiqbalsk@gmail.com
            </span>
          </a>

          <a
            href='https://x.com/Jannatsk44'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-4 group p-2 rounded-xl transition-all ${
              hireInView ? 'move-up4' : ''
            }`}
          >
            <div className='size-12 sm:size-14 rounded-full bg-butonOrange text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md'>
              <BsTwitterX className='size-5 sm:size-6' />
            </div>
            <span className='text-gray-900 text-lg sm:text-xl font-bold group-hover:text-black'>
              @Jannatsk44
            </span>
          </a>

          <a
            href='tel:+919372465221'
            className={`flex items-center gap-4 group p-2 rounded-xl transition-all ${
              hireInView ? 'move-up5' : ''
            }`}
          >
            <div className='size-12 sm:size-14 rounded-full bg-butonOrange text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md'>
              <IoCallSharp className='size-6 sm:size-7' />
            </div>
            <span className='text-gray-900 text-lg sm:text-xl font-bold group-hover:text-black'>
              +91 9372465221
            </span>
          </a>
        </div>

        {/* Contact Form Column */}
        <div className='w-full lg:w-1/2'>
          <form
            className='w-full flex flex-col gap-4 sm:gap-5'
            onSubmit={handleSubmit}
          >
            <input
              required
              className={`w-full h-12 sm:h-14 rounded-2xl shadow-md border border-gray-700 bg-white/95 px-4 sm:px-5 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-butonOrange ${
                hireInView ? 'move-up' : ''
              }`}
              placeholder='Your Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              required
              type='email'
              className={`w-full h-12 sm:h-14 rounded-2xl shadow-md border border-gray-700 bg-white/95 px-4 sm:px-5 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-butonOrange ${
                hireInView ? 'move-up2' : ''
              }`}
              placeholder='Your Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              required
              className={`w-full h-12 sm:h-14 rounded-2xl shadow-md border border-gray-700 bg-white/95 px-4 sm:px-5 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-butonOrange ${
                hireInView ? 'move-up3' : ''
              }`}
              placeholder='Subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              required
              rows={4}
              className={`w-full py-3 rounded-2xl shadow-md border border-gray-700 bg-white/95 px-4 sm:px-5 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-butonOrange resize-none ${
                hireInView ? 'move-up4' : ''
              }`}
              placeholder='Message'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type='submit'
              className={`w-full sm:w-auto px-8 py-3.5 bg-butonOrange hover:bg-gray-700 glowing-button2 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 self-center lg:self-start ${
                hireInView ? 'move-up5' : ''
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HireMe;

