import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../navbar";

import { LayoutType } from "@/types/components/layout_type";
import { List } from "@phosphor-icons/react";

const Layout = ({ children, title }: LayoutType) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
