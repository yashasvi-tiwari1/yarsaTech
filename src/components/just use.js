// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { SearchIcon } from "lucide-react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
//
// // function Navbar() {
//   const showNav = document.querySelector(".show-nav");
//   const closeNav = document.querySelector(".close-nav");
//   const nav = document.querySelector(".nav");
//
//   closeNav.addEventListener("click", () => {
//     nav.classList.remove("right-0");
//     nav.classList.add("right-[-50%]");
//   });
//
//   showNav.addEventListener("click", () => {
//     nav.classList.remove("right-[-50%]");
//     nav.classList.add("right-0");
//   });
//
//   return (
//     <nav
//       className="bg-white border-gray-500
//             h-max drop-shadow-sm"
//     >
//       <div className="nav md:flex  flex flex-col shadow-md w-[50%] h-full right-0 bg-white px-4 md:h-auto md:w-auto md:flex-row md:static md:duration-500 md:shadow-none relative mx-auto lg:max-w-7xl  md:items-center  justify-between md:px-4">
//         <button className="close-nav relative top-0 right-0 text-right text-3xl md:hidden">
//           <XMarkIcon />{" "}
//         </button>
//         <div className="logo md:flex items-center md:py-5 ">
//           <img src="/assets/logo.png" alt="this is logo" className="h-16" />
//           <h4 className="text-xl "> Yarsa Tech</h4>
//         </div>
//         <div className="items-center relative justify-center space-y-8 md:flex md:space-x-8 md:space-y-0   left-0 ">
//           <NavbarLink name="Home" href="/" />
//           <NavbarLink name="ProductDetails" href="/product" />
//           <NavbarLink name="Career" href="/job" />
//           <NavbarLink name="Contactus" href="/contact" />
//         </div>
//         <div className="flex mr-0 flex-wrap ">
//           <SearchIcon className="w-6 h-6 absolute ml-2 mt-1 z-10  text-gray-700" />
//           <input
//             type="text"
//             placeholder="Search product..."
//             className="   border-gray-300  rounded-lg border-2 focus:ring-blue-500 text-sm w-56 text-gray-900 relative text-center  p-1  "
//           />
//         </div>
//         <button className="show-nav text-3xl cursor-pointer">
//           <Bars3Icon />
//         </button>
//       </div>
//     </nav>
//   );
// }
//
// interface NavbarLinkProps {
//   href: string;
//   name: string;
// }
// function NavbarLink({ href, name }: NavbarLinkProps) {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//   return (
//     <Link
//       href={href}
//       className={`${
//         isActive ? "text-custom-blue " : "text-gray-500  hover:text-custom-blue"
//       }`}
//     >
//       {name}
//     </Link>
//   );
// }
// export default Navbar;
