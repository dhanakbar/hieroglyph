import React, { useEffect, useRef, useState } from "react";
import { Cloud, Hero, Layout, Preload } from "@/components";
import Image from "next/image";
import { gsap } from "gsap";

import ProfileImage from "@/public/images/profile.png";
import ProfileImageOri from "@/public/images/profile-ori.png";
import About from "@/public/images/about.png";
import About1 from "@/public/images/about-2.png";

const HomePage = () => {
  const [isProfile, setProfile] = useState<boolean>(true);
  const [isAbout, setAbout] = useState<boolean>(true);
  const [isIntro, setIsintro] = useState<boolean>(true);

  const mainRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLImageElement | null>(null);
  const aboutPRef = useRef<HTMLParagraphElement | null>(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(mainRef.current, { duration: 4, css: { display: "block" } }).to(
      mainRef.current,
      { duration: 1, opacity: 1, scale: 1 }
    );

    gsap.set(mainRef.current, { opacity: 0, scale: 0.8 });

    return () => {
      setTimeout(() => {
        setIsintro(false);
      }, 4000);
    };
  }, []);

  return (
    <Layout title="Hieroglyph">
      {isIntro && <Preload />}
      <section ref={mainRef} className={`text-primary-600 p-4 xl:p-16 h-svh`}>
        <div className="bg-[url('/images/ghibli-house.jpg')] bg-cover bg-no-repeat bg-center bg-neutral-200 xl:px-16 xl:py-32 p-8 h-full flex justify-between xl:justify-between md:gap-8 gap-2 items-center rounded-[30px] xl:rounded-[56px] xl:flex-row flex-col-reverse translatex-1/">
          <Cloud
            config={{
              x: "-200px",
              duration: 2,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut",
            }}
            customClass="bg-[url('/images/cloud-1.png')] w-[40%] h-[20%] left-[60%] top-[5%] min-[375px]:top-[0px] xl:left-[70%] xl:top-[10%]"
          />
          <Cloud
            config={{
              x: "-100px",
              duration: 1,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut",
            }}
            customClass="bg-[url('/images/cloud-2.png')] w-[50%] h-[20%] left-[20%] top-[32%] min-[375px]:top-[36%] xl:top-[65%] xl:left-[40%]"
          />
          <Hero />
          <Image
            className="w-[80%] sm:w-[50%] md:w-[40%] min-[1024px]:w-[30%] xl:w-auto"
            alt="profile"
            src={isProfile ? ProfileImage : ProfileImageOri}
            onMouseEnter={() => setProfile(false)}
            onMouseLeave={() => setProfile(true)}
            priority
          />
        </div>
      </section>
      <section className="h-screen p-4 xl:p-10">
        <h1 className="text-center text-4xl font-medium text-primary-600">
          About Me
        </h1>
        <div className="mt-4 flex items-center flex-col md:flex-row gap-4 xl:gap-8">
          <Image
            ref={aboutRef}
            className="w-[60%] md:w-[30%]"
            alt="About"
            src={isAbout ? About : About1}
            onMouseEnter={() => setAbout(false)}
            onMouseLeave={() => setAbout(true)}
          />
          <p ref={aboutPRef} className="font-light relative z-10 leading-7">
            Welcome to my web portfolio! I&apos;m Dhan, a recent graduate with a
            GPA of 3.76 in 2023. I&apos;ve spent over a year working as a
            Frontend Developer and six months as a UI/UX Designer. I love
            creating user-friendly websites and digital experiences through
            clean code and thoughtful design. My journey in tech has been
            incredibly rewarding, allowing me to collaborate with talented teams
            and tackle challenging projects that push the boundaries of
            creativity. I am passionate about learning new technologies and
            continuously improving my skills. In my free time, I enjoy
            contributing to open-source projects and exploring innovative design
            trends. Let&apos;s connect and create something amazing together!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
