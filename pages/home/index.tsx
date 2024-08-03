import React, { useEffect, useRef, useState } from "react";
import { Cloud, Hero, Layout, Preload } from "@/components";
import Image from "next/image";
import { gsap } from "gsap";

import ProfileImage from "@/public/images/profile.png";
import ProfileImageOri from "@/public/images/profile-ori.png";

const HomePage = () => {
  const [isProfile, setProfile] = useState<boolean>(true);
  const [isIntro, setIsintro] = useState<boolean>(true);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(introRef.current, { duration: 1, scale: 1, opacity: 1 })
      .to(introRef.current, { duration: 1, scale: 1.5, opacity: 0 })
      .to(mainRef.current, { duration: 0, css: { display: "block" } })
      .to(mainRef.current, { duration: 1, opacity: 1, scale: 1 });

    gsap.set(mainRef.current, { opacity: 0, scale: 0.8 });
    return () => {
      setTimeout(() => {
        setIsintro(false);
      }, 4000);
    };
  }, []);

  return (
    <Layout title="Hieroglyph">
      {/* {isIntro && <Preload />} */}
      <section ref={mainRef} className={`text-primary-600 p-4 xl:p-16 h-dvh`}>
        <div className="bg-[url('/images/ghibli-house.jpg')] bg-cover bg-no-repeat bg-center bg-neutral-200 xl:px-16 xl:py-32 px-8 h-full flex justify-between xl:justify-between md:gap-8 gap-2 items-center rounded-[30px] xl:rounded-[56px] xl:flex-row flex-col-reverse translatex-1/">
          <Cloud customClass="bg-[url('/images/cloud-1.png')] w-[40%] h-[20%] left-[60%] top-[5%] min-[375px]:top-[0px] xl:left-[70%] xl:top-[10%]" />
          <Cloud customClass="bg-[url('/images/cloud-2.png')] w-[50%] h-[20%] left-[20%] top-[32%] min-[375px]:top-[36%] xl:top-[65%] xl:left-[40%]" />
          <Hero />
          <Image
            className="w-[80%] sm:w-[50%] md:w-[50%] min-[1024px]:w-[35%] xl:w-auto"
            alt="profile"
            src={isProfile ? ProfileImage : ProfileImageOri}
            onMouseEnter={() => setProfile(false)}
            onMouseLeave={() => setProfile(true)}
          />
        </div>
      </section>
      {/* <section className="h-screen w-screen"></section> */}
    </Layout>
  );
};

export default HomePage;
