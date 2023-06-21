import { Inter } from "next/font/google";
import Navbar from "@tech/components/navbar";
import { NextPageWithLayout } from "@tech/pages/_app";
import React, { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Herosection from "@tech/components/herosection";
import Card from "@tech/components/card";
import Motivation from "@tech/components/motivation";
import Layout from "@tech/components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconArrowsUp } from "@tabler/icons-react";
import TopButton from "@tech/components/TopButton";
import Contactus from "@tech/components/contactus";

// const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Layout>
        <Herosection />
        <Card />
        <TopButton />
        <Motivation />
          <Contactus/>
      </Layout>
      <ToastContainer />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default Home;
