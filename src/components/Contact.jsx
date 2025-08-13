import React from 'react';
import { useState ,useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../Style';
import Earth from './canvas/Earth';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { linkedIn } from '../assets';
import { facebook } from '../assets';
import { khmsat } from '../assets';
import emailjs from '@emailjs/browser';

import EarthCanvas from './canvas/Earth';
const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [load, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_n6zbha4",
        "template_ahol33o",
        {
          from_name: form.name,
          to_name: "Yosef",
          from_email: form.email,
          to_email: "yoosefelbooz@gmail.com",
          message: form.message,
        },
         "Es3UPA2i09dR9pwKL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}> Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <div className='flex flex-row gap-5'>
<a
            href='https://www.linkedin.com/in/yosefelbooz/'
            className="  w-[50px] h-[50px] rounded-full flex justify-center items-center  cursor-pointer">
            <img src={linkedIn} 
            alt="github"
            className=" object-cover rounded-full"
            /> 
          </a>
          <a
            href='https://www.facebook.com/yosef.hesham.386587'
            className="  w-[50px] h-[50px] rounded-full flex justify-center items-center  cursor-pointer">
            <img src={facebook} 
            alt="github"
            className=" object-cover rounded-full"
            /> 
          </a>
                    <a
            href='https://khamsat.com/user/yosefelbooz'
            className="  w-[50px] h-[50px] rounded-full flex justify-center items-center  cursor-pointer">
            <img src={khmsat} 
            alt="github"
            className=" object-cover rounded-full"
            /> 
          </a>
          </div>
          <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className=' text-white font-medium mb-4'>Your Name</span>
              <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className=' bg-tertiary py-4 px-6
               placeholder:text-secondary text-white
               rounded-lg outlined-none border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className=' text-white font-medium mb-4'>Your Email</span>
              <input 
              type="email" 
              name='email'
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className=' bg-tertiary py-4 px-6
               placeholder:text-secondary text-white
               rounded-lg outlined-none border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className=' text-white font-medium mb-4'>Your Message</span>
              <textarea 
              rows="7"
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=' bg-tertiary py-4 px-6
               placeholder:text-secondary text-white
               rounded-lg outlined-none border-none font-medium'/>
            </label>
              <button type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              onClick={handleSubmit}
              >
              {load?'Sending...':'send'}
              </button>
          </form>
        </motion.div>
        <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />

        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")