import React from "react";
import Image from "next/image";
{
  /* eslint-disable @next/next/no-html-link-for-pages */
}

import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconPhoneOutgoing,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 end-0 border-t text-black dark:text-white">
      <div className="md:flex space-y-6 flex-wrap justify-between px-8 container md:px-16 py-5">
        <div className="">
          <div className="flex items-center mt-3">
            <Link href="/" className="flex items-center">
            <Image
                height={64}
                width={64}
                src="/assets/logo.png"
                className="mr-3 dark:invert w-14 h-14 -ml-2"
                alt="Yarsa Tech"
            />
            <h2 className="font-semibold">Yarsa Tech</h2>
            </Link>
          </div>
          <div className="mt-3 flex gap-2 items-center">
            <IconMail className="h-6" />
            mail@yarsa.tech
          </div>
          <div className="mt-2 flex gap-2 items-center">
            <IconPhoneOutgoing className="h-6" />
            9800959042
          </div>
        </div>
        <div>
          <span className="font-semibold w-max"> Company </span>
          <div className="mt-3 flex flex-col">
            <a href="/about" className="hover:text-blue-600 w-max">
              About
            </a>
            <a href="/career" className="hover:text-blue-600 w-max">
              Career
            </a>
            <a href="/news" className="hover:text-blue-600 w-max">
              News/Update
            </a>
          </div>
        </div>
        <div>
          <span className="font-semibold"> Policies </span>
          <div className="mt-3">
            <a href="/privacyPolicy" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="/termsOfService" className="hover:text-blue-600 ">
              <p className="w-max">Terms of Service</p>
            </a>
            <a href="/thirdPartyServices" className="hover:text-blue-600">
              <p className="w-max">Third Party Services</p>
            </a>
          </div>
        </div>

          <div className="space-y-4">
            <div>
              <a href="/team" className="hover:text-blue-600">
                <p className="w-max">Our Team</p>
              </a>
            </div>
            <div>
          <span className="font-semibold">Follow Us </span>
          <div className="flex  flex-wrap  mt-2 gap-3">
            <a href="https://www.facebook.com/yarsatechnologies">
              <IconBrandFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/yarsatech">
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
            <IconBrandGithub className="w-6 h-6" />
          </div>
            </div>
          </div>
        </div>
      <div className="text-center p-4 border-t">
        © 2021 - 2023 Yarsa Tech. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
