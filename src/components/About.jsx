import React from 'react';
import { Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../Style';
import {services} from "../constants/inedx";
import {fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc';
const ServiceCard =({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className=" w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className=' bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly
         items-center flex-col '
        >
          <img src={icon} alt="title" className=' w-16 h-16 object-contain'/>
          <h3 className=' text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
<>
<motion.div
Variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>
<motion.p 
variants={fadeIn(',',0.1,1)} className=' mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]'>
  I’m a MEAN Stack Developer who helps turn your ideas into web applications that work flawlessly, look amazing, and deliver real results. I combine fresh ideas, creative problem-solving, and a flexible approach to build applications that stand out in today’s crowded market.
For me, building your application should feel inspiring, not overwhelming. I transform your goals into a smooth, enjoyable process — adapting quickly to changes, overcoming challenges with smart solutions, and keeping you in the loop with clear, friendly communication.
The result? An application you love, a process you enjoy, and the peace of mind that everything is handled.
Let’s bring your vision to life — faster, smarter, and stress-free.
</motion.p>
<div className='mt-20 flex flex-wrap gap-10'>
    {services.map((services,index)=>(
      <ServiceCard  key={services.title} index={index} {...services}/>
    ))}
</div>
</>
  )
}

export default SectionWrapper( About ,"about")