import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project2 from "../../public/images/projects/fashion-studio-website.jpg"
import project3 from "../../public/images/projects/nft-collection-website-cover-image.jpg"
import { motion } from "framer-motion"

const FrameImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl rounded-br-2xl
    border border-solid border-[#1b1b1b] bg-[#f5f5f5] shadow-2xl p-6 md:p-12 relative dark:bg-[#1b1b1b] dark:border-[#f5f5f5]'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-[#1b1b1b]
      rounded-br-3xl dark:bg-[#f5f5f5]' />

      <Link href={link} target="_blank" className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg mb-6 lg:mb-0'>
        <FrameImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
        />
      </Link>

      <div className='w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6'>
        <span className='text-[#B63E96] font-medium text-lg md:text-xl dark:text-[#58E6D9]'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 text-left text-2xl md:text-3xl font-bold dark:text-[#f5f5f5]'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-[#1b1b1b] dark:text-[#f5f5f5] text-sm md:text-base'>{summary}</p>
        <div className='mt-4 flex items-center gap-4'>
          <Link href={github} target="_blank" className='w-8'> <GithubIcon /> </Link>
          <Link href={link} target="_blank"
            className='rounded-lg bg-[#1b1b1b] text-[#f5f5f5] px-4 py-2 text-sm md:text-base font-semibold
            dark:bg-[#f5f5f5] dark:text-[#1b1b1b]'>
            Visit The Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-[#1b1b1b] bg-[#f5f5f5] p-4 sm:p-6 relative dark:border-[#f5f5f5] dark:bg-[#1b1b1b]'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-[#1b1b1b]
      rounded-br-3xl dark:bg-[#f5f5f5]' />
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FrameImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-[#B63E96] dark:text-[#58E6D9] font-medium text-lg md:text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl md:text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className='text-sm md:text-base font-semibold underline'>Visit</Link>
          <Link href={github} target="_blank" className='w-8'> <GithubIcon /> </Link>
        </div>
      </div>
    </article>
  )
}

const project = () => {
  return (
    <>
      <Head>
        <title>Jay | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-[#f5f5f5]'>
        <Layout className='pt-16 px-4 sm:px-8'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
          />
          <div className='grid grid-cols-12 gap-8 md:gap-12 lg:gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Projects
                title="Fashion Studio Website"
                img={project2}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Projects
                title="NFT Collection Website"
                img={project3}
                link="/"
                github="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default project
