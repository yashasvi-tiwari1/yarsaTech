import { IconSearch } from "@tabler/icons-react";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Image from "next/image";
import axios from "axios";
import { BASEURL } from "@tech/globalConnect/apiContent";
import { useRouter } from "next/router";
import TopButton from "@tech/components/TopButton";
import Layout from "@tech/components/Layout";
import {toast} from "react-toastify";
import error = toast.error;

function OurProducts() {
  let navigate;
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState<any>();
  const [search, setSearch] = useState<any>("");

  const fetchProducts = useCallback(() => {
    axios
        .get(
            `${BASEURL}/items/products?fields=*.product_category_id.name,images.images_id.image`
        )
        .then((response) => {
          setProducts(response.data?.data);
        })
        .catch((error) => {
        });
  }, [BASEURL])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);

  const Search =(e:any)=> {

    setSearch(e.target.value);

  }
    useEffect(()=> {
      if(search==='') {
        fetchProducts();
      }
      axios.get(`${BASEURL}/items/products?filter[name][_contains]=${search}&fields=*.product_category_id.name,images.images_id.*.image_category_id.name`)
          .then((response) => {
            setProducts(response.data?.data);
          }).catch((error) => {
      });
    },[search])


  return (
    <Layout>
      <div className="px-8 md:px-16 py-5 md:py-10 container mx-auto">
        <div className="md:flex justify-between">
          <p className="text-xl hidden sm:block md:text-3xl px-10 bold bg pt-2">
            Our Products
          </p>
          <div className="relative px-10 items-center flex flex-col">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none md:mb-2 " >
              <IconSearch className="text-gray-500 dark:text-white  w-6 h-6 ml-8 md:ml-14 md:mt-0.5 " />
              <span className="sr-only">Search icon</span>
            </div>
            <TopButton/>
              <input
              type="text"
              id="search_navbar"
              className="block pl-12 ml-0.5 dark:text-white  w-72  p-2  sm:pl-16 text-md text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
              onChange={Search}
              placeholder="Search Product..."
            />

          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 md:p-10 p-5">
          {products.map((product: any) => {
            return (
              <div key={product.name}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
OurProducts.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
const Card = ({ product }: any) => {
  const navigate = useRouter();
  return (
    <div>
      <div className="border-2  rounded-2xl card-color bg-bg-card cursor-pointer transition-transform  duration-500 hover:scale-110 ease-in-out ">
        <div className=" overflow-hidden items-center flex justify-center">
          <Image
            height={400}
            width={400}
            onClick={() => {
              navigate.push({
                pathname: "/productDetails",
                query: { id: product.id },
              });
            }}
            src={`${BASEURL}/assets/${product.images?.[0]?.images_id?.image}`}
            className=" w-[281px] h-[231px] object-contain "
            alt="yarsa tech product "
          />
        </div>
        <div className="bg-card-color  shadow-md w-full  px-3 py-2 text-center rounded-b-2xl dark:text-black hover:bg-gray-300">
          <button
              className="font-semibold"
            onClick={() => {
              navigate.push({
                pathname: "/productDetails",
                query: { id: product.id },
              });
            }}
          >
            {product.name}
          </button>
        </div>
      </div>
    </div>
  );
};
export default OurProducts;
