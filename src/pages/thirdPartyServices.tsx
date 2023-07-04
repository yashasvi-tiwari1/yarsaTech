import { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Layout from "@tech/components/Layout";
import { IconChevronRight, IconHome } from "@tabler/icons-react";

function ThirdPartyServices() {
  return (
    <Layout>
      <div className="md:py-24 py-8 md:px-16 px-8 container">
        <span className="text-2xl font-semibold text-blue-600">
          Third Party Services
        </span>
        <div className="border">
          <div className="border-b  gap-4 flex flex-wrap p-4 ">
            <a href="/">
              <IconHome />
            </a>
            <IconChevronRight />
            <span>Third Party Services</span>
          </div>

          <div className="flex-col md:p-16 p-4  text-justify  md:text-md">
            <p className="mb-4">
              <i className="font-semibold text-lg">
                Last Update on 17 March 2022
              </i>
            </p>
            <p>
              www.yarsa.tech may utilize third-party services to enhance the
              functionality and user experience of our website. These
              third-party services may collect, process, and store certain
              information. We strive to ensure that any third-party services we
              use comply with applicable privacy and data protection laws.
              However, we have no control over the policies, practices, or
              security measures of these third-party services. Therefore, we
              recommend reviewing their respective privacy policies and terms of
              service before using or interacting with them.
            </p>
            <p className="font-semibold mt-6 text-lg mb-3">
              1. Analytics Services
            </p>

            <p>
              We may use analytics services, such as Google Analytics, to gather
              information about the usage of our website. These services help us
              analyze website traffic, track user behavior, and generate
              statistical reports.
            </p>
            <p className="font-semibold mt-6 mb-3 text-lg">
              2. Social Media Plugins
            </p>
            <p>
              Our website may incorporate social media plugins or buttons that
              allow you to connect and interact with various social media
              platforms. These plugins may collect information about your
              interaction with them and may be subject to the privacy policies
              of the respective social media platforms.
            </p>
            <p className="font-semibold mt-6 mb-3 text-lg">
              3. Payment Processors
            </p>
            <p>
              If you make a purchase or payment through our website, we may use
              third-party payment processors to facilitate the transaction.
              These payment processors may collect and process your payment
              information in accordance with their own privacy policies and
              terms of service.
            </p>
            <p className="mt-6 mb-3 font-semibold text-lg">
              4. Content Delivery Networks (CDNs)
            </p>
            <p>
              We may utilize CDNs to improve the performance and delivery of our
              website's content. CDNs may store and serve content on our behalf,
              and they may collect certain technical information about your
              interaction with the content.
            </p>
            <p className="font-semibold text-lg mb-2 mt-6">
              5. Advertising Networks:
            </p>
            <p>
              We may partner with advertising networks to display advertisements
              on our website. These networks may use cookies and other tracking
              technologies to collect information about your browsing activities
              across different websites to provide you with targeted
              advertisements.
            </p>
            <p>
              Please note that while we strive to work with reputable
              third-party services, we are not responsible for the actions or
              policies of these third parties. Your use of any third-party
              services is subject to their respective terms of service and
              privacy policies. We recommend reviewing the privacy policies and
              terms of service of any third-party services you interact with on
              www.yarsa.tech to understand how they handle your personal
              information and protect your privacy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
ThirdPartyServices.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default ThirdPartyServices;
