import { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Contact from "@tech/pages/contact";
import Image from "next/image";

function News() {
  return (
    <div className="md:px-16 px-8 md:py-16 py-8 flex justify-center ">
      <div>
        <Image
          src="/assets/cons.webp"
          alt="under construction"
          height={500}
          width={500}
          className="rounded-lg h-max"
        />
      </div>
    </div>
  );
}

News.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default News;
