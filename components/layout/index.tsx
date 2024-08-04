import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../navbar";

import { LayoutType } from "@/types/components/layout_type";
import Footer from "../Footer";

const Layout = ({ children, title }: LayoutType) => {
  return (
    <main className="overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
