import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/jay pic.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Jay | About Page</title>
        <meta name="description" content="Jay's portfolio about page" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-[#f5f5f5]">
        <Layout className="pt-12 sm:pt-16 px-4 sm:px-8">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl !text-center mb-12 sm:mb-16"
          />

          <div className="grid w-full grid-cols-1 xl:grid-cols-8 gap-8 md:gap-12">
            {/* BIOGRAPHY */}
            <div className="order-2 xl:order-1 xl:col-span-3 flex flex-col items-start justify-start text-justify">
              <h2 className="mb-4 text-base sm:text-lg font-bold uppercase text-black/75 dark:text-[#f5f5f5]">
                Biography
              </h2>
              <p className="font-medium text-sm sm:text-base">
                Hi, I'm Jay, a web developer and UI/UX designer with a passion for creating beautiful,
                functional, and user-centered digital experiences. With 4 years of experience in the field,
                I am always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <p className="my-4 font-medium text-sm sm:text-base">
                I believe that design is about more than just making things look pretty – it's about solving problems and
                creating intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium text-sm sm:text-base">
                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence
                and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            {/* PROFILE IMAGE */}
            <div className="order-1 xl:order-2 xl:col-span-3 relative rounded-2xl border-2 border-solid border-[#1b1b1b] bg-[#f5f5f5] p-4 sm:p-6 dark:bg-[#1b1b1b] dark:border-[#f5f5f5]">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#1b1b1b] dark:bg-[#f5f5f5]" />
              <Image
                src={profilePic}
                alt="Jay"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>

            {/* STATISTICS */}
            <div className="order-3 xl:col-span-2 flex flex-col sm:flex-row xl:flex-col items-center justify-between gap-6">
              <div className="flex flex-col items-center xl:items-end">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-sm sm:text-base md:text-lg font-medium capitalize text-black/75 dark:text-[#f5f5f5]">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-center xl:items-end">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-sm sm:text-base md:text-lg font-medium capitalize text-black/75 dark:text-[#f5f5f5]">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-center xl:items-end">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-sm sm:text-base md:text-lg font-medium capitalize text-black/75 dark:text-[#f5f5f5]">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          {/* SKILLS / EXPERIENCE / EDUCATION */}
          <div className="mt-16">
            <Skills />
            <Experience />
            <Education />
          </div>
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

export default About;