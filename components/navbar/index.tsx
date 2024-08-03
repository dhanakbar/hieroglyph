import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import _ from "lodash";

import { AddressBook, List, PaintBrush, Path, X } from "@phosphor-icons/react";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const scroll = useScroll();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const path = usePathname();
  const menus = [
    {
      isActive: path === "/",
      path: "/",
      name: "Home",
      icon: null,
    },
    {
      isActive: path === "/journey",
      path: "/journey",
      name: "Journey",
      icon: <Path size={24} className="text-primary-500" />,
    },
    {
      isActive: path === "/portfolio",
      path: "/portfolio",
      name: "Portfolio",
      icon: <PaintBrush size={24} className="text-primary-500" />,
    },
    {
      isActive: path === "/contact",
      path: "/contact",
      name: "Contact",
      icon: <AddressBook size={24} className="text-primary-500" />,
    },
  ];

  return (
    <>
      <div
        className={`text-primary-500 cursor-pointer fixed top-0 z-10 xl:hidden w-full px-10 h-24 flex justify-end items-center ${
          scroll && "backdrop-blur-sm"
        }`}
      >
        <List size={36} onClick={() => setShowMenu(!showMenu)} />
      </div>
      <nav
        className={`fixed shadow-lg xl:shadow-none top-0 right-0 transition-all duration-300 ease-in-out ${
          showMenu ? "w-1/2" : "w-0"
        } xl:w-full xl:py-4 py-16 xl:flex xl:justify-center xl:h-fit h-screen z-20 bg-background-100 overflow-hidden`}
      >
        <X
          size={36}
          className="text-primary-500 cursor-pointer absolute top-8 right-10 z-10 xl:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="flex text-lg xl:gap-8 mt-8 xl:mt-0 flex-col xl:flex-row gap-8">
          {_.map(menus, (menu, idx) => (
            <Link
              key={idx}
              className={`${
                path === menu.path
                  ? "font-semibold text-[#fff] bg-[url('/images/wood-menu.png')] bg-contain bg-no-repeat bg-center xl:w-[120px] h-9"
                  : "text-primary-200"
              } cursor-pointer text-center flex justify-center items-center`}
              href={menu.path}
            >
              {menu.isActive ? menu.name : menu.icon}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
