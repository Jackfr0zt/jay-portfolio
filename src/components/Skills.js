import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="hidden sm:flex items-center justify-center rounded-full font-semibold
      bg-[#1b1b1b] text-[#f5f5f5] py-3 px-6 shadow-md cursor-pointer 
      dark:text-[#1b1b1b] dark:bg-[#f5f5f5] absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const mobileSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'NextJS',
    'PHP',
    'Web Design',
    'WordPress',
    'Elementor',
  ];

  return (
    <>
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-20 sm:mt-32 w-full text-center">
        Skills
      </h2>

      {/* Circle layout for desktop */}
      <div
        className="hidden sm:flex bg-[repeating-radial-gradient(rgba(0,0,0,0.4)_2px,_#f5f5f5_5px,_#f5f5f5_100px)] 
        dark:bg-[repeating-radial-gradient(rgba(255,255,255,0.5)_2px,_#1b1b1b_8px,_#1b1b1b_100px)]
        w-full h-[90vh] items-center justify-center relative rounded-full"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
          bg-[#1b1b1b] text-[#f5f5f5] p-8 shadow-lg cursor-pointer 
          dark:text-[#1b1b1b] dark:bg-[#f5f5f5]"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-27vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-11vw" />
        <Skill name="Javascript" x="24vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="WordPress" x="0vw" y="-18vw" />
        <Skill name="Elementor" x="-23vw" y="13vw" />
      </div>

      {/* Stack layout for mobile */}
      <div className="sm:hidden w-full mt-12 px-4 flex flex-wrap justify-center gap-4">
        {mobileSkills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-[#1b1b1b] text-[#f5f5f5] dark:bg-[#f5f5f5] dark:text-[#1b1b1b]"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default Skills;
