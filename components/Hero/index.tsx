import { Download, User } from "@phosphor-icons/react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className="xl:text-6xl xl:text-left text-3xl text-center">
        Hi 👋, I am <span className="font-semibold text-neutral-50">Dhan</span>,{" "}
        <br />A{" "}
        <span className="font-semibold text-warning-300">
          Frontend Developer
        </span>{" "}
        <br />
        and
        <span className="font-semibold text-error-500"> UI/UX Designer</span>
      </h1>
      <p className="xl:text-2xl md:text-base text-sm xl:text-left textt text-center mt-4">
        <span className="font-semibold">A Developer and Designer</span>.
        Specialize in Web Frontend Development and UI/UX Design
      </p>
      <div className="flex xl:flex-row flex-col xl:gap-4 gap-2 items-center mt-10">
        <button className="bg-primary-600 border border-primary-600 px-8 md:text-xl text-sm px-3 py-4 text text-neutral-50 flex gap-2 items-center rounded font-normal xl:w-fit w-full justify-center">
          <User size={18} />
          About Me
        </button>
        <button className="border-2 md:text-xl text-sm px-8 py-4 text-primary-600 flex gap-2 items-center rounded font-normal xl:w-fit w-full justify-center">
          <Download size={18} />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
