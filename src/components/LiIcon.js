import React from 'react'
import { motion, useScroll, useSpring} from 'framer-motion';

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  const springPath = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 20,
  restDelta: 0.01,
});

  return (
    <figure className='absolute left-0 stroke-[#1b1b1b] dark:stroke-[#f5f5f5]'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="50" cy="50" r="20" className='stroke-[#B63E96] dark:stroke-[#58E6D9] stroke-5 fill-none'/> 
            <motion.circle cx="50" cy="50" r="20" className='stroke-[5px] fill-[#f5f5f5] dark:fill-[#1b1b1b]'
            style={{ pathLength: springPath }}
            /> 
            <circle cx="50" cy="50" r="10" className='animate-pulse stroke-1 fill-[#B63E96] dark:fill-[#58E6D9]'/> 
        </svg>
    </figure>
  )
}
export async function getStaticProps() {
  return {
    props: {}, // no dynamic props yet
  };
}
export default LiIcon
