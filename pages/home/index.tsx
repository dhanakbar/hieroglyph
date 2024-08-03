import React, { useState } from "react";
import { Cloud, Layout } from "@/components";
import { LuUser2 as User, LuDownload as Download } from "react-icons/lu";
import Image from "next/image";

import ProfileImage from "@/public/images/profile.png";
import ProfileImageOri from "@/public/images/profile-ori.png";
import { profile } from "console";

const HomePage = () => {
  const [isProfile, setProfile] = useState<boolean>(true);
  return (
    <Layout title="Hieroglyph">
      <Cloud customClass="bg-[url('/images/cloud-1.png')] w-[40%] h-[20%] left-[50%] top-[5%] min-[375px]:top-[10%] xl:left-[60%]" />
      <Cloud customClass="bg-[url('/images/cloud-2.png')] w-[50%] h-[20%] left-[10%] top-[32%] min-[375px]:top-[42%] xl:top-[55%] xl:left-[30%]" />
      <section className={`text-primary-600 mt-[72px]`}>
        <div className="bg-[url('/images/ghibli-house.jpg')] bg-cover bg-no-repeat bg-center bg-neutral-200 xl:px-16 xl:py-32 px-8 py-8 md:h-[820px] flex justify-between xl:justify-between md:gap-8 gap-2 items-center xl:mx-32 mx-4 rounded-[30px] md:rounded-[56px] xl:flex-row flex-col-reverse translatex-1/">
          <div>
            <h1 className="xl:text-6xl xl:text-left text-4xl text-center">
              Hi, I am <span className="font-bold text-neutral-50">Dhan</span>,
              A{" "}
              <span className="font-bold text-primary-600">
                Frontend Developer
              </span>{" "}
              and
              <span className="font-bold text-error-500"> UI/UX Designer</span>
            </h1>
            <p className="xl:text-2xl text-base xl:text-left textt text-center my-4">
              Developer and designer. Specialize in Web Frontend Development and
              UI/UX Design
            </p>
            <div className="flex xl:flex-row flex-col gap-4 items-center">
              <button className="bg-primary-600 border border-primary-600  text-base px-3 py-2 text text-neutral-50 flex gap-2 items-center rounded font-semibold xl:w-fit w-full justify-center">
                <User size={18} />
                About Me
              </button>
              <button className="border-2 text-base px-3 py-2 text text-primary-600 flex gap-2 items-center rounded font-semibold xl:w-fit w-full justify-center">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>
          <Image
            className="w-[80%] sm:w-[50%] md:w-[50%] min-[1024px]:w-[35%] xl:w-auto"
            alt="profile"
            src={isProfile ? ProfileImage : ProfileImageOri}
            onMouseEnter={() => setProfile(false)}
            onMouseLeave={() => setProfile(true)}
          />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
