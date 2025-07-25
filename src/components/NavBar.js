import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "./Logo";
import  {TwitterIcon,DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";



const CustomLink = ({ href, title, className=""}) => {
    const router = useRouter();

    return (
        <Link  href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-[#1b1b1b] 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-[#f5f5f5]
            `}>&nbsp;</span>
        </Link>
    )

}


const CustomMobileLink = ({ href, title, className="", toggle}) => {
    const router = useRouter();
    const handleClick = () =>{
        toggle();
        router.push(href)
    }

    return (
        <button  href={href} className={`${className} relative group text-[#f5f5f5] dark:text-[#1b1b1b] my-2`} onClick={handleClick} >
            {title}

            <span className={`
            h-[1px] inline-block bg-[#f5f5f5]
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-[#1b1b1b]
            `}>&nbsp;</span>
        </button>
    )

}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <header className="w-full px-32 py-12 font-medium flex items-center justify-between dark:text-[#f5f5f5] bg-[#f5f5f5] dark:bg-[#1b1b1b] relative">

       <button className="flex flex-col justify-center items-center lg:hidden absolute top-8 right-30" onClick={handleClick}
         aria-label="Toggle menu">
            <span className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out bg-[#1b1b1b] dark:bg-[#f5f5f5]
            ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
             <span className={`block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-in-out bg-[#1b1b1b] dark:bg-[#f5f5f5]
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out bg-[#1b1b1b] dark:bg-[#f5f5f5]
            ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        <div className="w-full justify-between items-center hidden lg:flex">
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/articles" title="Articles" className='ml-4' />
               
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
                > <TwitterIcon /> </motion.a>

                <motion.a href="https://github.com/Jackfr0zt" target = {"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
                > <GithubIcon /></motion.a>

                <motion.a href="https://www.linkedin.com/in/jay-amper-a39a90312/" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
                > <LinkedInIcon /> </motion.a>

                <motion.a href="https://pinterest.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 bg-[#f5f5f5] rounded-full"
                > <PinterestIcon /> </motion.a>

                <motion.a href="https://Dribble.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3"
                > <DribbbleIcon /> </motion.a>


                <button
                 onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                 aria-label="Toggle Dark Mode"
                 
                 className={`ml-3 flex items-center justify-center rounded-full p-1 transition duration-300 hover:bg-gray-500 dark:hover:bg-gray-700
                 ${mode === "light" ? "bg-[#1b1b1b] text-[#f5f5f5]" : "bg-[#f5f5f5] text-[#1b1b1b]"}
                 `}>
                {mode === "dark" ? (
                <SunIcon className="fill-[#1b1b1b] dark:fill-[#f5f5f5]" />
                 ) : (
                <MoonIcon className="fill-[#1b1b1b] dark:fill-[#f5f5f5]" />
                 )}
                </button>
            </nav>
        </div>
        {
            isOpen ?
            <motion.div
            initial={{scale:0, opacity:0}}
            animate={{scale:1,opacity:1}}
            className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-[#1b1b1b]/90 dark:bg-[#f5f5f5]/75 rounde-lg backdrop-blur-md py-32">
            <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
               
            </nav>
            <nav className='flex items-center justify-center flex-wrap mt-2'>
                <motion.a href="https://twitter.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 sm:mx-1"
                > <TwitterIcon /> </motion.a>

                <motion.a href="https://github.com/Jackfr0zt" target = {"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 bg-[#f5f5f5] rounded-full dark:bg-[#1b1b1b] sm:mx-1"
                > <GithubIcon /></motion.a>

                <motion.a href="https://www.linkedin.com/in/jay-amper-a39a90312/" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 sm:mx-1"
                > <LinkedInIcon /> </motion.a>

                <motion.a href="https://pinterest.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 bg-[#f5f5f5] rounded-full dark:bg-[#1b1b1b] sm:mx-1"
                > <PinterestIcon /> </motion.a>

                <motion.a href="https://Dribble.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3 sm:mx-1"
                > <DribbbleIcon /> </motion.a>


                <button
                 onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                 aria-label="Toggle Dark Mode"
                 
                 className={`ml-3 flex items-center justify-center rounded-full p-1 transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500
                 ${mode === "light" ? "bg-[#1b1b1b] text-[#f5f5f5]" : "bg-[#f5f5f5] text-[#1b1b1b]"}
                 `}>
                {mode === "dark" ? (
                <SunIcon className="fill-[#1b1b1b] dark:fill-[#f5f5f5]" />
                 ) : (
                <MoonIcon className="fill-[#1b1b1b] dark:fill-[#f5f5f5]" />
                 )}
                </button>
            </nav>
        </motion.div>
        : null
        }
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
        </header>
    )
}
export async function getStaticProps() {
  return {
    props: {}, // no dynamic props yet
  };
}
export default NavBar;