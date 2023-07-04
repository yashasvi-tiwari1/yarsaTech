import React, { ReactElement, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "@tech/globalConnect/apiContent";
import Image from "next/image";
import { useRouter } from "next/router";
import SiteLayout from "@tech/layouts/site-layout";
import About from "@tech/pages/about";

function Warranty({ product }: any) {
  const navigate = useRouter();
  const { id } = navigate.query;

  const [products, setProducts] = useState<any>();

  useEffect(() => {
    axios
      .get(
        `${BASEURL}/items/products/9?fields=*.product_category_id.name,images.images_id.*.image_category_id.name`
      )
      .then((response) => {
        setProducts(response.data?.data);
      })
      .catch((error) => {});
  }, []);

  const images: any = products?.images;
  return (
    <>
      <div className="md:px-16 px-8 md:py-16 py-8 flex justify-center ">
        {images?.map((image: any) => {
          const img = image.images_id.image;
          const category = image.images_id.categories;

          return category.map((cate: any) => {
            if (cate.image_category_id?.name === "warranty") {
              return (
                <Image
                  key={image.id}
                  src={`${BASEURL}/assets/${img}`}
                  alt={"warranty image"}
                  height={500}
                  width={500}
                />
              );
            }
          });
        })}

        {/*<Image*/}
        {/*    height={296}*/}
        {/*    width={296}*/}
        {/*    src={`${BASEURL}/assets/${product.images?.[0]?.images_id?.image}`}*/}
        {/*    className="w-[296px] h-[296px] object-contain "*/}
        {/*    alt=""*/}
        {/*/>*/}
      </div>
    </>
  );
}

Warranty.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default Warranty;
