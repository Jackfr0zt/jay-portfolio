import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center'>
            <MotionLink href="/"
            className='w-16 h-16 bg-[#1b1b1b] text-[#f5f5f5] flex items-center justify-center rounded-full
             text-2xl font-bold border border-solid border-transparent dark:border-[#f5f5f5]' whileHover={{
                backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition:{duration:1, repeat: Infinity}
            }}
             
             >JA</MotionLink>
        </div>
    );
}

export default Logo;