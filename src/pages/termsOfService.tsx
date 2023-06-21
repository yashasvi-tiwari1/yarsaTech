import { ReactElement } from "react";
import SiteLayout from "@tech/layouts/site-layout";
import Layout from "@tech/components/Layout";
import { IconChevronRight, IconHome } from "@tabler/icons-react";
import TopButton from "@tech/components/TopButton";

function TermsOfService() {
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
            <span>Terms of Service</span>
          </div>
          <TopButton />
          <div className="flex-col md:p-16 p-4  text-justify  md:text-md">
            <p className="mb-4">
              <i className="font-semibold text-lg">
                Last Update on 17 March 2022
              </i>
            </p>
            <p>
              Please read these Terms of Service ("Terms") carefully before
              using our website, www.yarsa.tech (the "Website"). These Terms
              govern your access to and use of the Website operated by Yarsa
              Tech ("Yarsa Tech," "we," "us," or "our"). By accessing or using
              the Website, you agree to be bound by these Terms. If you do not
              agree with any part of these Terms, you may not access or use the
              Website.
            </p>
            <p className="font-semibold mt-6 text-lg">1. Website Use</p>
            <p className="font-semibold mt-2 mb-3 text-lg">1.1 Eligibility</p>
            <p>
              You must be at least 13 years old to access or use our Website. By
              using the Website, you represent and warrant that you meet this
              eligibility requirement.
            </p>
            <p className="font-semibold mt-6 mb-3 text-lg">1.2 User Accounts</p>
            <p>
              Some features of the Website may require you to create an account.
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You agree to provide accurate and complete information
              when creating your account and to promptly update any information
              that may change.
            </p>
            <p className="font-semibold mb-3 mt-6 text-lg">
              1.3 Prohibited Conduct
            </p>
            <ul className="list-disc space-y-2">
              <span>When using the Website, you agree not to:</span>
              <li> Violate any applicable laws or regulations</li>
              <li> Infringe upon the rights of others</li>
              <li>Engage in unauthorized or unlawful activities</li>
              <li>Interfere with or disrupt the Website's functionality</li>
              <li>
                Attempt to gain unauthorized access to the Website or any
                related systems or networks
              </li>
              <li>
                Use the Website to transmit any viruses, malware, or other
                harmful code
              </li>
              <li>
                Engage in any activity that may negatively affect the experience
                of other users or the operation of the Website
              </li>
            </ul>
            <p className="mt-6 mb-3 font-semibold text-lg">
              2. Non-Personal Information
            </p>
            <p>
              The Website and its content, including but not limited to text,
              graphics, images, logos, and software, are the property of Yarsa
              Tech or its licensors and are protected by intellectual property
              laws. You may not reproduce, modify, distribute, or display any
              part of the Website or its content without our prior written
              consent.
            </p>
            <p className="font-semibold text-lg mb-2 mt-6">
              3. Third-Party Links
            </p>
            <p>
              The Website may contain links to third-party websites that are not
              owned or controlled by Yarsa Tech. We have no control over and
              assume no responsibility for the content, privacy policies, or
              practices of these third-party websites. You acknowledge and agree
              that Yarsa Tech shall not be liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with the use of any third-party websites.
            </p>
            <p className="text-lg font-semibold mt-6 mb-3">
              4.Disclaimer of Warranties
            </p>
            <p>
              The Website is provided on an "as is" and "as available" basis,
              without any warranties of any kind, whether express or implied.
              Yarsa Tech does not warrant that the Website will be
              uninterrupted, error-free, or free of viruses or other harmful
              components. You use the Website at your own risk.
            </p>
            <p className="font-semibold text-lg mt-6 mb-3">
              5. Limitation of Liability
            </p>
            <p>
              To the maximum extent permitted by law, Yarsa Tech and its
              affiliates, officers, directors, employees, agents, and partners
              shall not be liable for any direct, indirect, incidental, special,
              consequential, or exemplary damages, including but not limited to
              damages for loss of profits, goodwill, data, or other intangible
              losses, resulting from your use of the Website.
            </p>
            <p className="text-lg mb-3 mt-6 font-semibold">
              6. Indemnification
            </p>
            <p>
              You agree to indemnify and hold Yarsa Tech and its affiliates,
              officers, directors, employees, agents, and partners harmless from
              any claims, liabilities, damages, losses, and expenses (including
              reasonable attorneys' fees) arising out of or in connection with
              your use of the Website or violation of these Terms.
            </p>
            <p className="font-semibold text-lg mt-6 mb-3">
              7. Modifications to the Website and Terms
            </p>
            <p>
              Yarsa Tech reserves the right to modify or discontinue the
              Website, temporarily or permanently, without notice. We may also
              revise these Terms from time to time by posting the updated
              version on the Website.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
TermsOfService.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
export default TermsOfService;
