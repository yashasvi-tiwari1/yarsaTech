import React, { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Layout from "@tech/components/Layout";
import { IconChevronRight, IconHome } from "@tabler/icons-react";

function PrivacyPolicy() {
  return (
    <Layout>
      <div className="md:py-24 py-8 md:px-16 px-8 container">
        <span className="text-2xl font-semibold text-blue-600">
          Privacy Policy
        </span>
        <div className="border">
          <div className="border-b  gap-4 flex flex-wrap p-4 ">
            <a href="/">
              <IconHome />
            </a>
            <IconChevronRight />
            <span>Privacy Policy</span>
          </div>
          <div className="flex-col md:p-16 p-4  text-justify  md:text-md">
            <p className="mb-4">
              <i className="font-semibold text-lg">
                Last Update on 17 March 2022
              </i>
            </p>
            <p>
              At Yarsa Tech, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              how we collect, use, disclose, and safeguard your information when
              you visit our website, www.yarsa.tech (the "Website"). By
              accessing or using our Website, you signify that you have read,
              understood, and agree to our collection, storage, use, and
              disclosure of your personal information as described in this
              Privacy Policy. We collect both personal and non-personal
              information when you use our services. Please read this privacy
              policy carefully to learn more about the information we collect
              from you when you use our services. First of all, we want you to
              understand the differences between personal and non-personal
              information.
            </p>
            <p className="font-semibold mt-6 text-lg">
              1. Information We Collect
            </p>
            <p className="font-semibold mt-2 mb-3 text-lg">
              1.1 Personal Information
            </p>
            <p>
              When you visit our Website, we may collect certain personally
              identifiable information from you, such as your name, email
              address, phone number, and any other information you voluntarily
              provide to us.
            </p>
            <p className="font-semibold mt-6 mb-3 text-lg">
              1.2 Non-Personal Information
            </p>
            <p>
              We may also collect non-personal information about you
              automatically when you visit our Website. This may include your IP
              address, browser type, operating system, referring URLs, and other
              technical information.
            </p>
            <p className="font-semibold mt-6 mb-2 text-lg">
              Use of Information
            </p>
            <p className="font-semibold mb-3 text-lg">
              2.1 Personal Information
            </p>
            <ul className="list-disc space-y-2">
              We may use the personal information we collect from you to:
              <li className="mt-2"> Provide and improve our services</li>
              <li> Respond to your inquiries or requests</li>
              <li>
                Send you administrative information, such as updates or
                notifications related to our services
              </li>
              <li>
                Send you marketing and promotional communications (only with
                your consent)
              </li>
              <li>
                Monitor and analyze trends, usage, and activities on our Website
              </li>
              <li>Personalize your experience on our Website</li>
            </ul>
            <p className="mt-6 mb-3 font-semibold text-lg">
              2.2 Non-Personal Information
            </p>
            <ul className="list-disc space-y-2">
              <span>
                We may use non-personal information for various purposes, such
                as:
              </span>
              <li>Analyzing trends and statistics</li>
              <li>Enhancing our Website and services</li>
              <li>Diagnosing technical issues</li>
              <li>Customizing the user experience</li>
            </ul>
            <p className="font-semibold text-lg mb-2 mt-6">
              3. Sharing of Information
            </p>
            <p className="font-semibold text-lg mb-3"> 3.1 Service Providers</p>
            <p>
              We may disclose your information to third-party service providers
              who perform services on our behalf. These service providers are
              contractually obligated to protect your information and may only
              use it for the purpose of providing services to us.
            </p>
            <p className="text-lg font-semibold mt-6 mb-3">
              3.2 Legal Requirements
            </p>
            <p>
              We may disclose your information if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              government agency).
            </p>
            <p className="font-semibold text-lg mt-6 mb-3">
              3.3 Business Transfers
            </p>
            <p>
              If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets, your information may be transferred as part
              of that transaction. We will notify you via email and/or a
              prominent notice on our Website of any change in ownership or uses
              of your personal information.
            </p>
            <p className="text-lg mb-3 mt-6 font-semibold">4.Data Security</p>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, use,
              disclosure, alteration, or destruction. However, no data
              transmission over the internet or storage system can be guaranteed
              to be 100% secure. If you have reason to believe that your
              interaction with us is no longer secure, please contact us
              immediately.
            </p>
            <p className="font-semibold text-lg mt-6 mb-3">
              5. Third-Party Links
            </p>
            <p>
              Our Website may contain links to third-party websites that are not
              operated by us. We have no control over and assume no
              responsibility for the content, privacy policies, or practices of
              those websites. We encourage you to review the privacy policies of
              any third-party websites you visit.
            </p>
            <p className="font-semibold text-lg mb-3 mt-6">
              6. Children's Privacy
            </p>
            <p>
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children
              under 13. If we discover that we have inadvertently collected
              personal information from a child under 13, we will take
              reasonable steps to delete such information.
            </p>
            <p className="font-semibold mt-6 mb-3 text-lg">
              7. Changes to the Privacy Policy
            </p>
            <p>
              We may update this Privacy Policy from time to time, and any
              changes will be posted on this page. It is your responsibility to
              review this Privacy Policy periodically for any updates.
            </p>
            <p className="font-semibold mt-6 mb-3 text-lg">8. Contact Us</p>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at
              insert
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default PrivacyPolicy;
