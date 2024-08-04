import Image from "next/image";
import React from "react";
import Logo from "@/public/favicon.ico";

const Footer = () => {
  return (
    <section className="p-4 xl:px-[10%] xl:py-10 grid gap-5 md:gap-0 md:grid-cols-3 xl:grid-cols-4 bg-primary-600 text-neutral-950 font-light bg-[url('/images/footer.png')] bg-top bg-cover text-center md:text-left">
      {/* <Image src={Logo} alt="" className="w-4" /> */}
      <div>
        <h4 className="font-semibold">About</h4>
        <ul className="mt-2">
          <li>About Me</li>
          <li>Journey</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Projects</h4>
        <ul className="mt-2">
          <li>Web App</li>
          <li>Web Design</li>
          <li>Mobile Design</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Services</h4>
        <ul className="mt-2">
          <li>Web App</li>
          <li>Web Design</li>
          <li>Mobile Design</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Contact</h4>
        <ul className="mt-2">
          <li>maulanaakbar.ramadhan@gmail.com</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
