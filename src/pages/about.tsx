import { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Contact from "@tech/pages/contact";
import Layout from "@tech/components/Layout";
import Image from "next/image";

function About() {
  return (
    <Layout>
      <div className="container p-8 md:py-24 md:px-32">
        <div className="md:flex gap-60 ">
          <div className="text-justify">
            <p className="text-2xl md:text-4xl mb-6">Company Mission</p>
            <span>
              Yarsa Tech's mission is to transform everyday technology
              experiences by developing innovative and reliable products. Their
              goal is to enhance convenience, efficiency, and sustainability in
              homes and businesses worldwide. They prioritize uninterrupted
              connectivity, energy-efficient lighting, and optimal water
              resource management. Yarsa Tech is committed to innovation,
              user-centric design, sustainability, and exceptional customer
              support. Their vision is to be a global leader in technological
              innovation, empowering individuals and organizations to embrace a
              connected, efficient, and sustainable future.
            </span>
          </div>
          <Image src="/assets/brain.png" alt="" height={200} width={200} />
        </div>
      </div>
    </Layout>
  );
}
About.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default About;
