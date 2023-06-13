import { ReactElement, useEffect, useState } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Layout from "@tech/components/Layout";
import axios from "axios";
import { string } from "prop-types";
import { BASEURL } from "@tech/globalConnect/apiContent";
import Image from "next/image";
import TopButton from "@tech/components/TopButton";

function Career() {
  const [job, setJob] = useState({ jobs_image: string, title: string });

  useEffect(() => {
    axios.get(`${BASEURL}/items/jobs?sort=-id&limit=1`).then((response) => {
      setJob(response.data?.data[0]);
    });
  }, []);
  return (
    <Layout>
      <div className="text-center text-custom-black md:py-24 container p-8 space-y-14 md:px-32 dark:text-white">
        <p className=" md:text-5xl text-2xl font-semibold tracking-wide">
          <span className="text-custom-blue dark:text-blue-600">Jobs</span> at
          Yarsa Tech
        </p>
        <p className="md:text-xl md:tracking-wide max-w-2xl mx-auto">
          Sometimes, what you're looking for is not what you really need. So
          feel free to contact us anyway, even if you don't exactly meet the
          qualifications.
        </p>
        <p className="md:text-3xl max-w-2xl mx-auto text-2xl md:tracking-wide font-semibold ">
          {job.title}
        </p>
        <TopButton />
        <Image
          height={200}
          width={600}
          src={`${BASEURL}/assets/${job.jobs_image}`}
          alt="hire us"
          className=" rounded-3xl md:w-9/12 w-full ml-auto mr-auto"
        />
      </div>
    </Layout>
  );
}
Career.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default Career;
