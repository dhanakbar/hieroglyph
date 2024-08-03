import React, { useEffect, useRef, useState } from "react";
import { Cloud, Hero, Layout, Preload } from "@/components";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import ProfileImage from "@/public/images/profile.png";
import ProfileImageOri from "@/public/images/profile-ori.png";
import About from "@/public/images/about.png";
import About1 from "@/public/images/about-2.png";

const HomePage = () => {
  const [isProfile, setProfile] = useState<boolean>(true);
  const [isAbout, setAbout] = useState<boolean>(true);
  const [isIntro, setIsintro] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = isIntro ? "hidden" : "auto"; // Disable scroll when isIntro is true
    setTimeout(() => {
      setIsintro(false);
    }, 5000);
    return () => {
      document.body.style.overflow = "auto"; // Reset on cleanup
    };
  }, [isIntro]);

  return (
    <>
      {isIntro && <Preload />}
      <Layout title="Hieroglyph">
        <motion.section
          className={`text-primary-600 p-4 xl:p-16 h-svh`}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          <div className="bg-[url('/images/ghibli-house.jpg')] bg-cover bg-no-repeat bg-center bg-neutral-200 xl:px-16 xl:py-32 p-8 h-full flex md:gap-8 items-center rounded-[30px] xl:rounded-[56px] xl:flex-row flex-col-reverse translatex-1/">
            <Hero />
            <Image
              className="w-[75%] sm:w-[60%] md:w-[40%] min-[1024px]:w-[30%] xl:w-auto mx-auto xl:ml-auto"
              alt="profile"
              src={isProfile ? ProfileImage : ProfileImageOri}
              onMouseEnter={() => setProfile(false)}
              onMouseLeave={() => setProfile(true)}
              priority
            ></Image>
          </div>
        </motion.section>
        <motion.section className="h-2/4 p-4 xl:p-10 md:mx-[10%]">
          <h1 className="text-center text-4xl font-medium text-primary-600">
            About Me
          </h1>
          <motion.div
            className="mt-4 flex items-center flex-col lg:flex-row gap-4 xl:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              className="w-[60%] lg:w-[100%]"
              alt="About"
              src={isAbout ? About : About1}
              onMouseEnter={() => setAbout(false)}
              onMouseLeave={() => setAbout(true)}
            />
            <motion.p
              className="font-light relative z-10 leading-7"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              {`" Welcome to my web portfolio👋! I'm Dhan, a recent graduate
              with a GPA of 3.76 in 2023. I've spent over a year working as
              a Frontend Developer and six months as a UI/UX Designer. I love
              creating user-friendly websites and digital experiences through
              clean code and thoughtful design. My journey in tech has been
              incredibly rewarding, allowing me to collaborate with talented
              teams and tackle challenging projects that push the boundaries of
              creativity. I am passionate about learning new technologies and
              continuously improving my skills. In my free time, I enjoy
              contributing to open-source projects and exploring innovative
              design trends. Let's connect and create something amazing
              together! "`}
            </motion.p>
          </motion.div>
        </motion.section>
      </Layout>
    </>
  );
};

export default HomePage;
