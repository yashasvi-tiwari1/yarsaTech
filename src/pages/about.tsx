import React, { ReactElement, useCallback, useEffect, useState } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Layout from "@tech/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { BASEURL } from "@tech/globalConnect/apiContent";
import Team from "@tech/pages/team";
import axios from "axios";
import { useRouter } from "next/router";

function About() {
  let navigate;
  const [products, setProducts] = useState([]);
  const fetchProducts = useCallback(() => {
    axios
      .get(
        `${BASEURL}/items/products?fields=*.product_category_id.name,images.images_id.image`
      )
      .then((response) => {
        setProducts(response.data?.data);
      })
      .catch((error) => {});
  }, [BASEURL]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Layout>
      <div className="container p-8 md:py-32 md:px-32">
        <div className="flex flex-col justify-center sm:space-y-10 ">
          <p className="text-2xl md:text-6xl font-bold text-center mb-6">
            We are Yarsa Tech
          </p>
          <span className="sm:text-2xl text-lg font-medium flex max-w-3xl mx-auto text-center">
            We are a team of young and motivated people based all around Nepal.
            We are headed for a common goal of improving national economy
            through our products and services.
          </span>

          <Link
            href="team/"
            className="rounded-md text-white text-lg bg-custom-blue py-3 px-5 tracking-wider mt-5 md:mt-10 mx-auto text-center w-max hover:bg-blue-800"
          >
            {" "}
            Who we are
          </Link>
        </div>
        <div className=" flex flex-col mx-auto pt-8 md:pt-32">
          <span className="max-w-2xl mx-auto sm:text-2xl text-lg text-center font-medium flex ">
            We are the makers of the tech product's that world needs.{" "}
          </span>
          <div className=" flex justify-center">
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:pt-10 p-5 ">
              {products.map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </div>
          <div className="md:flex justify-center md:pt-32  gap-6">
            <div className=" dark:border-2 rounded-md p-8 dark:bg-blue-600/75  bg-blue-400 shadow-2xl ">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/mission.png"
                  alt="mission icon"
                  height={50}
                  width={50}
                />
                <p className="text-2xl font-semibold">MISSION</p>
              </div>
              <p className="pb-6 pt-4">
                Yarsa Tech's mission is to empower businesses with innovative
                technology solutions, driving growth and efficiency. We strive
                to be a trusted partner, solving complex challenges and creating
                a positive impact.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/vision.png"
                  alt="mission icon"
                  height={50}
                  width={50}
                />
                <p className="text-2xl font-semibold">VISION</p>
              </div>
              <p className="pt-4">
                Yarsa Tech envisions a future where cutting-edge technology
                seamlessly integrates into every aspect of life, enhancing
                productivity, connectivity, and sustainability. We aim to lead
                as a global provider of transformative tech solutions, driving
                positive change and shaping a better world.
              </p>
            </div>

            <div className=" flex flex-col gap-4 pt-4 md:pt-0">
              <div className=" dark:border-2 p-4 rounded-md w-full bg-green-600/75 shadow-2xl ">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/goal.png"
                    alt="mission icon"
                    height={50}
                    width={50}
                  />
                  <p className="text-2xl font-semibold">GOALS</p>
                </div>
                <p className="pt-4">
                  Focus on delivering exceptional user experiences and providing
                  solutions that meet and exceed customer expectations.
                </p>
              </div>
              <div className=" dark:border-2 p-4  rounded-md w-full dark:bg-gray-600/75 bg-gray-400  shadow-2xl ">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/values.png"
                    alt="mission icon"
                    height={50}
                    width={50}
                  />
                  <p className="text-2xl font-semibold">VALUES</p>
                </div>
                <p className="pt-4">
                  We value innovation as the driving force behind our tech
                  product company, constantly pushing boundaries, exploring
                  possibilities,& challenging the status quo to create impactful
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const ProductCard = ({ product }: any) => {
  const navigate = useRouter();

  return (
    <div className="text-center   flex flex-col items-center">
      <div className="pb-10 sm:pb-0">
        <Image
          height={500}
          width={500}
          onClick={() => {
            navigate.push({
              pathname: "/productDetails",
              query: { id: product.id },
            });
          }}
          src={`${BASEURL}/assets/${product.images?.[0]?.images_id?.image}`}
          className="w-40 h-40 object-center overflow-hidden  rounded-lg object-contain  border-2 border-spacing-3 border-custom-blue p-4 cursor-pointer hover:scale-75  ease-in-out duration-500 "
          alt="yarsa tech product "
        />
      </div>
      <p className="text-md font-bold pt-2 ">{product.name} </p>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default About;
