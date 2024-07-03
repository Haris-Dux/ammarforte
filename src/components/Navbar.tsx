"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdPhonePortrait } from "react-icons/io";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "projects" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setState(false);
      window.scroll(0, 0);
    }
  };

  return (
    <nav className="navbar absolute top-0 bg-transparent border-b w-full md:text-sm md:border-none">
      <div
        className={`border-b border-[#EBCFA7] ${
          state ? "bg-black/95" : ""
        } items-center max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto md:flex px-4 xl:px-0`}
      >
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/ammmar.png?v=1719436690"
              alt="Float UI logo"
              className="w-20 lg:w-24"
            />
          </Link>
          <div className="md:hidden">
            <button className="text-white" onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-10 md:flex md:space-x-6 lg:space-x-10 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  onClick={handleLinkClick}
                  className="text-white text-center hover:text-gray-100 text-[0.9rem] lg:text-[0.95rem] font-semibold uppercase tracking-wide"
                >
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <div className="contact_details flex justify-center items-center gap-2 text-white">
              <div className="number_email text-center sm:text-right pb-6 sm:pb-0">
                <Link
                  href="tel:+92-332-2222929"
                  className="mb-2 sm:mb-0 text-[17px] font-medium block"
                >
                  +92 332 2222929
                </Link>
                <Link
                  href="mailto:info@ammarforte.com"
                  className="text-sm font-medium"
                >
                  info@ammarforte.com
                </Link>
              </div>
              <div className="icons hidden md:block">
                <IoMdPhonePortrait size={30} />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
