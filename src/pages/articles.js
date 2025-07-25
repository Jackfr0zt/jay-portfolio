import { React, useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import article1 from '../../public/images/articles/pagination-component-in-reactjs.jpg';
import article2 from '../../public/images/articles/create-loading-screen-in-react-js.jpg';
import article3 from '../../public/images/articles/form-validation-in-reactjs-using-custom-react-hook.png';
import article4 from '../../public/images/articles/smooth-scrolling-in-reactjs.png';
import article5 from '../../public/images/articles/create-modal-component-in-react-using-react-portals.png';
import article6 from '../../public/images/articles/todo-list-app-built-using-react-redux-and-framer-motion.png';
import article7 from '../../public/images/articles/What-is-Redux-with-easy-explanation.png';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
      x.set(event.pageX);
      y.set(-10); // adjust Y for positioning
    }
  }

  function handleMouseLeave() {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <h2 className="capitalize text-lg md:text-xl font-semibold group-hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-50 md:w-96 h-auto hidden absolute rounded-lg"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 sm:p-6 bg-[#f5f5f5] dark:bg-[#1b1b1b] border border-solid border-[#1b1b1b] dark:border-[#f5f5f5] rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-[#1b1b1b] dark:bg-[#f5f5f5] rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl sm:text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-[#B63E96] dark:text-[#58E6D9] font-semibold">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5 }, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="relative w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 py-6 my-4 rounded-xl
        bg-[#f5f5f5] dark:bg-[#1b1b1b] text-[#1b1b1b] dark:text-[#f5f5f5]
        border border-solid border-[#1b1b1b] dark:border-[#f5f5f5] border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-[#B63E96] dark:text-[#58E6D9] font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>Jay | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden dark:text-[#f5f5f5]">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-12 sm:mb-16 text-center text-3xl md:text-5xl"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 mins read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              time="10 mins read"
              link="/"
              img={article2}
            />
            <FeaturedArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              summary="Create a reusable custom hook in ReactJS to manage form inputs, handle validation, and track errors, enabling cleaner, more maintainable, and scalable form handling."
              time="15 mins read"
              link="/"
              img={article3}
            />
            <FeaturedArticle
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              summary="Implement smooth scrolling in ReactJS using CSS scroll-behavior, scrollIntoView with refs, or the react-scroll library to enhance navigation and user experience."
              time="12 mins read"
              link="/"
              img={article4}
            />
          </ul>

          <h2 className="font-bold text-3xl md:text-4xl w-full text-center my-12 md:my-16 mt-24 md:mt-32">
            All Articles
          </h2>

          <ul className="w-full">
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="May 04, 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="May 24, 2023"
              link="/"
              img={article6}
            />
            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="July 12, 2023"
              link="/"
              img={article7}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // no dynamic props yet
  };
}
export default ArticlesPage;