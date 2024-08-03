import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import _ from "lodash";

import WoodImage from "@/public/images/wood-menu.png";
import { AddressBook, PaintBrush, Path } from "@phosphor-icons/react";

const Navbar = () => {
  const path = usePathname();
  const menus = [
    {
      isActive: path === "/",
      path: "/",
      name: "Home",
      icon: null,
    },
    {
      isActive: path === "/jurney",
      path: "/jurney",
      name: "Jurney",
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
    <div className="absolute top-0 left-0 w-full h-fit py-4 flex justify-center">
      <div className="flex text-lg gap-8">
        {_.map(menus, (menu) => (
          <Link
            className={`${
              path === menu.path
                ? "font-black text-[#fff] bg-[url('/images/wood-menu.png')] bg-contain bg-no-repeat bg-center w-[120px] h-9 "
                : "text-primary-200"
            } cursor-pointer text-center flex justify-center items-center`}
            href={menu.path}
          >
            {menu.isActive ? (
              <span className="my-auto">{menu.name}</span>
            ) : (
              menu.icon
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
