"use client";
import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'



const HireMe = () => {
  return (
    <div className='fixed left-4 
    bottom-4 flex items-center justify-center overflow-hidden'>
    <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className='fill-[#1b1b1b] animate-spin-slow dark:fill-[#f5f5f5]' /> 
    <Link href="mailto:jayamper712@gmail.com" className='flex items-center justify-center
    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1b1b1b] text-[#f5f5f5] shadow-md 
    border border-solid border-[#1b1b1b] w-20 h-20 rounded-full font-semibold hover:bg-[#f5f5f5] hover:text-[#1b1b1b]
     dark:bg-[#f5f5f5] dark:text-[#1b1b1b] hover:dark:bg-[#1b1b1b] hover:dark:text-[#f5f5f5]
     hover:dark:border-[#f5f5f5]'>
      Hire Me
    </Link>
    </div>   
    </div>
  )
} 
export async function getStaticProps() {
  return {
    props: {}, // no dynamic props yet
  };
}
export default HireMe
