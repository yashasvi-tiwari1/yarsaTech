import Image from "next/image";

("use-client");
import React, { ReactElement, useEffect } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import dynamic from "next/dynamic";
// import Model from "@tech/components/model";
import Layout from "@tech/components/Layout";
import axios from "axios";
import {
  IconAccessPoint,
  IconBattery4,
  IconWifi,
  IconX,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { string } from "prop-types";
import { BASEURL } from "@tech/globalConnect/apiContent";
import TopButton from "@tech/components/TopButton";

const Model = dynamic(() => import("../components/model"), { ssr: false });

interface Item {
  icon: React.ReactNode;
  label: string;
}

interface DetailProps {
  title: string;
  subtitle: string;
  items: Item[];
}
const details: DetailProps[] = [
  {
    title: "Wi-fi Basic",
    subtitle: "Wi-fi Powered Box that needs continuous power.",
    items: [
      {
        icon: <IconWifi className="h-6 w-6 text-green-600" />,
        label: "Wifi Connectivity",
      },
      {
        icon: <IconX className="h-6 w-6 text-red-600" />,
        label: "No Battery Backup",
      },
      {
        icon: <IconX className="h-6 w-6 text-red-600" />,
        label: "No GSM Connectivity",
      },
    ],
  },
  {
    title: "Wi-fi Portable",
    subtitle: "Wi-fi Powered Box with battery backup for portability.",
    items: [
      {
        icon: <IconWifi className="h-6 w-6 text-green-600" />,
        label: "Wifi Connectivity",
      },
      {
        icon: <IconBattery4 className="h-6 w-6 text-green-600" />,
        label: "Battery Backup",
      },
      {
        icon: <IconX className="h-6 w-6 text-red-600" />,
        label: "No GSM Connectivity",
      },
    ],
  },
  {
    title: "GSM Portable",
    subtitle: "GSM Powered Box with battery backup for network reliability.",
    items: [
      {
        icon: <IconX className="h-6 w-6 text-red-600" />,
        label: "No Wifi Connectivity",
      },
      {
        icon: <IconBattery4 className="h-6 w-6 text-green-600" />,
        label: "Battery Backup",
      },
      {
        icon: <IconAccessPoint className="h-6 w-6 text-green-600" />,
        label: "GSM Connectivity",
      },
    ],
  },

  {
    title: "Hybrid Portable",
    subtitle:
      "GSM and Wi-fi Box with battery backup for reliability and portability.",
    items: [
      {
        icon: <IconWifi className="h-6 w-6 text-green-600" />,
        label: "Wifi Portable3",
      },
      {
        icon: <IconBattery4 className="h-6 w-6 text-green-600" />,
        label: "Battery Backup",
      },
      {
        icon: <IconAccessPoint className="h-6 w-6 text-green-600" />,
        label: "GSM Connectivity",
      },
    ],
  },
];

function ProductDetails() {
  const navigate = useRouter();

  const [products, setProducts] = React.useState<{
    name: string;
    quote: string;
    sub_quote: string;
    images: [];
    main_features: string;
    main_description: string;
    highlight: string;
    features: string;
    support_maintenance: string;
  }>({
    name: "",
    quote: "",
    sub_quote: "",
    images: [],
    main_features: "",
    main_description: "",
    highlight: "",
    features: "",
    support_maintenance: "",
  });
  useEffect(() => {
    const { id } = navigate.query;
    console.log('jhghjghjgjhgjhgjhg')
    axios
      .get(
        `${BASEURL}/items/products/${id}?fields=*.product_category_id.name,images.images_id.*.image_category_id.name`
      )
      .then((response) => {
        setProducts(response.data?.data);
      })
      .catch((error) => {});
  }, [navigate.query]);

  let images: [] = products.images;
  let product_features = products.features.split("-");
  let support_and_maintenance = products.support_maintenance.split("-");
  return (
    <Layout>
      <div className=" md:px-16 ">
        <div className="xl:flex text-custom-black container md:mb-24 mb-10">
          <div className="md:py-24 py-8 px-8 md:px-16 space-y-3 dark:text-white">
            <span className="md:text-6xl text-3xl  font-bold">
              {products.name}

              {products.name == "Audio QR" && (
                <sup className="md:text-2xl font-bold md:-top-10"> TM </sup>
              )}
            </span>
            <p className="md:mt-5 md:text-3xl  text-2xl ">{products.quote}</p>
            <p className="md:mt-5  md:text-2xl">{products.sub_quote}</p>
          </div>
          <div className="  md:w-1/2  ">
            {images.map((image: any, index: number) => {
              let img = image.images_id.image;
              let main_img: [] = image.images_id.categories;
              return main_img.map(
                (
                  cat: { image_category_id: { name: string } },
                  index: number
                ) => {
                  if (cat.image_category_id.name === "main") {
                    return (
                      <Image
                        height={400}
                        width={400}
                        src={`${BASEURL}/assets/${img}`}
                        alt="this is audioQR"
                        className=" md:w-[400px] md:h-[400px] w-[300px] h-[350px]  object-contain mx-auto "
                      />
                    );
                  }
                }
              );
            })}
          </div>
        </div>
        <TopButton />
        <div className=" md:space-y-6  px-8 md:text-center container">
          <p className="md:text-5xl text-2xl font-bold ">
            {products.main_features}
          </p>
          <p className="md:text-2xl max-w-2xl mx-auto">
            {products.main_description}
          </p>
        </div>
        <div className="bg-white dark:bg-transparent mx-auto container md:my-8 ">
          {images.map((image: any, index: number) => {
            let glb_img = image.images_id.image;
            let img_category: [] = image.images_id.categories;
            return img_category.map(
              (cat: { image_category_id: { name: string } }, index: number) => {
                if (cat.image_category_id.name === "glb") {
                  return <Model key={index} img={glb_img} />;
                }
              }
            );
          })}
        </div>
        <div className="md:space-y-6  container max-w-2xl mx-auto px-8">
          <p className=" md:text-5xl md:text-center font-bold text-2xl mt-10 ">
            Product Highlight
          </p>
          <p className="md:text-2xl max-w-2xl mx-auto">{products.highlight}</p>
        </div>
        <div className="max-w-2xl container mx-auto px-8 md:mt-24 mt-10 space-y-4">
          <p className="text-3xl font-bold mx-auto max-w-2xl ">Device Features</p>
          <div className=" md:text-xl  mx-auto max-w-2xl ">
            {product_features.map((feature) => {
              return <div>- {feature}</div>;
            })}
          </div>
        </div>
        <div className="md:mt-24 container mt-10 px-8  space-y-4">
          <p className="text-3xl font-bold max-w-2xl mx-auto ">Support and Maintenance</p>
          <div className="md:text-xl max-w-2xl mx-auto">
            {support_and_maintenance.map((support) => {
              return <div>- {support} </div>;
            })}
          </div>
        </div>
        <div className="md:my-24 bg-white dark:bg-black my-10 px-8 md:px-16 container  md:space-y-6">
          <p className="md:text-5xl text-2xl max-w-2xl mx-auto font-bold">
            Variants for Every Needs.
          </p>
          <div className="md:flex  gap-6 py-4 md:space-y-0 space-y-6">
            {details.map((detail, index: number) => {
              return <DetailCard key={index} detail={detail} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};

function
DetailCard({ detail }: { detail: DetailProps }) {
  return (
    <div className="p-5 w-full border-2 rounded-2xl shadow">
      <p className="font-semibold md:text-2xl">{detail.title}</p>
      <p className="mt-5">{detail.subtitle}</p>
      <div className="mt-5 space-y-8  h-max">
        {detail.items.map((item) => (
            <div className="flex gap-4 items-center">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
