
import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react';
import LiIcon from './LiIcon';


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <LiIcon reference={ref} />
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
        target='_blank' className='text-[#B63E96] dark:text-[#58E6D9] capitalize'
        >@{company}</a></h3>
        <span className='capitalize font-medium text-black/75 dark:text-[#f5f5f5]'>
            {time} | {address}  
        </span>
        <p className='font-medium w-full'>
            {work}
        </p>
    </motion.div>
  </li>
    
}  

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    }
  );
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className='my-64'>
     <h2 className='font-bold text-4xl sm:text-6xl lg:text-8xl mb-10 sm:mb-20 w-full text-center'>
        Experience
      </h2>
      <motion.div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-[#1b1b1b] origin-top dark:bg-[#f5f5f5]'
        style={{ scaleY }}/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 py-6'>
            <Details 
            position="Web Developer" company="PrinceTech" companyLink="https://princetech.com"
            time="2019-2021" address="Makati City, Philippines"
            work="Designs, builds, and maintains responsive websites and web applications using coding languages and frameworks, ensuring functionality, performance, and user experience across all devices."
            />
        </ul>
         <ul className='w-full flex flex-col items-start justify-between ml-4 py-6'>
            <Details 
            position="Technical Support" company="TeleTalk" companyLink="https://teletalk.com"
            time="2022-2022" address="Cagayan de Oro City, Philippines"
            work="Supported customers with basic technical support for current and past software releases. Assisted clients with general support for hardware, peripherals, network connections, and external software. Escalated help desk tickets to Level 2 / Tier 2 support when outside the scope of L1/T1 technician support."
            />
        </ul>
         <ul className='w-full flex flex-col items-start justify-between ml-4 py-6'>
            <Details 
            position="WordPress Developer" company="Upwork" companyLink="https://upwork.com"
            time="2021-2024" address="Remote"
            work="A WordPress developer builds, customizes, and maintains WordPress websites for performance, security, and functionality."
            />
        </ul>
      </motion.div>
    </div>
  )
}

export default Experience
