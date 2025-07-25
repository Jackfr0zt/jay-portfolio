import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react';
import LiIcon from './LiIcon';


const Details = ({type, time, place, info   }) => {
    const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <LiIcon reference={ref} />
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-black/75 dark:text-[#f5f5f5]'>
            {time} | {place}  
        </span>
        <p className='font-medium w-full'>
            {info}
        </p>
    </motion.div>
  </li>
    
}  

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
        
    });

    const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-4xl sm:text-6xl lg:text-8xl mb-10 sm:mb-20 w-full text-center'>
        Education
      </h2>
      <motion.div ref={ref} className='w-[75%] mx-auto relative'>
      <motion.div style={{scaleY}} className='absolute left-9 top-0 w-[4px] h-full bg-[#1b1b1b] dark:bg-[#f5f5f5] origin-top'/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-6 py-6 space-y-8">
          <Details 
          type="Bachelor of Science In Information Technology" 
          time="2013-2018" 
          place="University of Science And Technology of Southern Philippines"
          info="Relevant IT courses include Computer Science, Networking, Database Management, Programming, Web Development, Cybersecurity, Cloud Computing, Data Science, Software Engineering, and IT Project Management."/>
          <Details 
          type="High School Diploma" 
          time="2008-2012" 
          place="Canitoan National High School"
          info="Relevant high school courses include Math, Science, English, Social Studies, IT, PE, Arts, Foreign Language, and Business."/>
        </ul>      
      </motion.div>
    </div>
  )
}

export default Education
