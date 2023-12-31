import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Mode from "@tech/components/mode";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 border dark:bg-gray-900 h-max">
      <div className="container md:px-16 px-8 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            height={64}
            width={64}
            src="/assets/logo.png"
            className="mr-3 dark:invert w-14 h-14"
            alt="Yarsa Tech"
          />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
            Yarsa Tech
          </span>
        </Link>
        <div className="block sm:hidden">
          <Mode />
        </div>
        <div className="flex md:hidden">
          <button
            name="menu"
            data-collapse-toggle="navbar-search"
            type="button"
            className="button inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="flex nav-links flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 content-center">
            <NavbarLink name="Home" href="/" />
            <NavbarLink name="Product" href="/ourProducts" />
            <NavbarLink name="Career" href="/career" />
            <NavbarLink
              name="Shop"
              href="https://www.yarsabazar.com/vendors/yarsa-tech-pvt-ltd-cdb-4b17-4273-98d4-9e288850551b"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Mode />
        </div>
      </div>
    </nav>
  );
}

interface NavbarLinkProps {
  href: string;
  name: string;
}

function NavbarLink({ href, name }: NavbarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-blue-600 dark:text-white "
          : "dark:text-gray-400 text-gray-500  hover:text-black dark:hover:text-blue-600"
      }`}
    >
      {name}
    </Link>
  );
}

export default Navbar;
