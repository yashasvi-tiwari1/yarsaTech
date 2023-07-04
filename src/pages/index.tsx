import { Inter } from "next/font/google";
import Navbar from "@tech/components/navbar";
import { NextPageWithLayout } from "@tech/pages/_app";
import React, { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Herosection from "@tech/components/herosection";
import Motivation from "@tech/components/motivation";
import Layout from "@tech/components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconArrowsUp } from "@tabler/icons-react";
import Contactus from "@tech/components/contactus";
import dynamic from "next/dynamic";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });
const Card = dynamic(() => import("../components/card"));

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Yarsa Tech</title>
        <meta
          name="description"
          content="Check out Yarsa Tech Products. Visit our local store and for expert advice."
          key="desc"
        />
      </Head>
      <Layout>
        <Herosection />
        <Card />
        <Motivation />
        <Contactus />
      </Layout>
      <ToastContainer />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default Home;
