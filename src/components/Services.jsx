import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../Style';
import { SectionWrapper } from '../hoc';
import { servicesWork } from '../constants/inedx';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, description, technologies, features }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
      >
        {/* Icon */}
        <div className="w-full flex justify-center">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Title & Description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] text-center">
            {title}
          </h3>
          <p className="mt-3 text-secondary text-[14px] text-center">
            {description}
          </p>
        </div>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mt-4">
            <h4 className="text-white font-semibold text-[16px]">Technologies:</h4>
            <ul className="mt-2 list-disc list-inside text-secondary text-[14px]">
              {technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mt-4">
            <h4 className="text-white font-semibold text-[16px]">Service Features:</h4>
            <ul className="mt-2 list-disc list-inside text-secondary text-[14px]">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Offer</p>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are the services I provide, showcasing my expertise in various
          areas and my ability to deliver results tailored to your needs.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {servicesWork.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "");
