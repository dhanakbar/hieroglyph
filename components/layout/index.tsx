import React from "react";
import Head from "next/head";

import Navbar from "../navbar";

import { LayoutType } from "@/types/components/layout_type";

const Layout = ({ children, title }: LayoutType) => {
  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
