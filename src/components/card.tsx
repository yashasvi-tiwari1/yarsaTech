import React, { useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Image from "next/image";
import axios from "axios";
import { BASEURL } from "@tech/globalConnect/apiContent";
import { useRouter } from "next/router";

// const products: ProductDetails[] = [
//   {
//     imageName: "/assets/water.png",
//     title: "Water Level Controller",
//     description:
//       "Automate water tank monitoring and control to eliminate the need for manual checks and prevent overflow. ",
//   },
//   {
//     imageName: "/assets/soundbox.png",
//     title: "Audio QR",
//     description:
//       "Instant payment confirmation by voice for eSewa Transactions.Peace of mind for merchants and customers.",
//   },
//   {
//     imageName: "/assets/router.png",
//     title: "Router UPS",
//     description:
//       "Yarsa Tech is working tirelessly, building an awesome, easily-installed piece of power backup hardware.",
//   },
//   {
//     imageName: "/assets/light.png",
//     title: "Automatic Light Controller",
//     description:
//       "It tracks luminosity variables, switching lamps on/off effortlessly without manual intervention.",
//   },
//   {
//     imageName: "/assets/Smartwatch.png",
//     title: "Automatic Smart Watch",
//     description:
//       " This automatic smart watch track health, manage communications without carrying phones.",
//   },
//   {
//     imageName: "/assets/roti.png",
//     title: "Automatic Roti Maker",
//     description:
//       "It used to prepares homemade rotis with a one-touch operation and ensuring consistent results.",
//   },
// ];
function Card() {
  const [products, setProducts] = React.useState([]);
  const navigate = useRouter();

  useEffect(() => {
    axios
      .get(
        `${BASEURL}/items/products?fields=*.product_category_id.name,images.images_id.image`
      )
      .then((response) => {
        setProducts(response.data?.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className=" container md:px-16 md:py-16 p-8 md:p-12 full-width">
      <div className=" md:text-4xl p-1 text-2xl text-center  font-semibold ">
        <p> Our Products </p>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        wrapperClass="md:py-8 py-4"
        breakpoints={{
          // Responsive breakpoints
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product: any) => {
          return (
            <SwiperSlide key={product.name} className="p-2">
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
const ProductCard = ({ product }: any) => {
  const navigate = useRouter();
  return (
    <div className=" rounded-lg shadow-sm border overflow-hidden flex flex-col border-b-2 w-full">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={`${BASEURL}/assets/${product.images?.[0]?.images_id?.image}`}
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className="h-50 flex flex-col p-4">
        <p className="text-xl font-semibold ">{product.name}</p>
        <p className="mt-2 text-left">{product.description}</p>
        <button
          onClick={() => {
            navigate.push({
              pathname: "/productDetails",
              query: { id: product.id },
            });
          }}
          className="bg-custom-blue w-max mt-4 px-4 py-2 text-sm rounded-2xl text-white"
        >
          Know more
        </button>
      </div>
    </div>
  );
};
export default Card;
