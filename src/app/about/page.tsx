"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section className="aboutSectionbg">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[60vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span className="letterSpacing py-1 px-1.5 font-medium text-white bg-[#F0A202] text-[11px] lg:text-[13px]">
                  ABOUT
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  About Us
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="-mt-10 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end">
              <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward />
                About
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 lg:py-6 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* CEO SECTION */}
          <div className="py-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <span
                  style={{ letterSpacing: "0px" }}
                  className="py-1 pr-2 sm:pr-0 font-medium text-[#b58c57] text-[11px] lg:text-[16px]"
                >
                  When you choose Ammar Forte, you&apos;re choosing
                </span>
                <h2 className="mt-3 mb-3 sm:mb-5 text-4xl md:text-6xl font-semibold">
                  Our Vision
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm sm:text-md max-w-full">
                  Welcome to Ammaar Forte. As the CEO, I am thrilled to share
                  our vision with you. We are dedicated to transforming real
                  estate by offering premium shops in top commercial buildings,
                  developing vibrant new societies, and providing beautiful
                  homes. Our goal is to create spaces that inspire and support
                  communities. With a focus on quality, innovation, and customer
                  satisfaction, we aim to set new standards in the industry.
                  Thank you for trusting Ammaar Forte. Together, let&apos;s
                  build a brighter future.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="left_img group overflow-hidden"
            >
              <Image
                width={600}
                height={600}
                className="px-8 object-fill w-full"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/CEO.png?v=1719847292"
                alt="Image"
              />
            </div>
          </div>

          {/* FIRST CARD */}
          <div className="py-5 sm:py-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div
              className="left_img group overflow-hidden flex items-center"
            >
              <Image
                width={600}
                height={600}
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_1.webp?v=1719605230"
                alt="Image"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <span
                  style={{ letterSpacing: "1px" }}
                  className="py-1 px-1.5 font-medium text-[#b58c57] text-[11px] lg:text-[16px]"
                >
                  MISSION
                </span>
                <h2 className="mt-3 mb-3 sm:mb-5 text-4xl md:text-6xl font-semibold">
                  Our Mission
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm sm:text-md max-w-full">
                  At Ammaar Forte, our mission is to redefine the real estate
                  experience for our clients. We are committed to delivering
                  exceptional quality, innovative designs, and unparalleled
                  customer service. Our focus is on creating vibrant communities
                  where people can live, work, and thrive.
                </p>

                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm sm:text-md max-w-full">
                  We strive to offer a diverse range of properties, from premium
                  shops in top commercial buildings to beautiful homes in newly
                  developed societies. Our goal is to meet the unique needs of
                  each client, providing spaces that are not only functional but
                  also inspiring.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="py-6 sm:py-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <span
                  style={{ letterSpacing: "1px" }}
                  className="py-1 px-1.5 font-medium text-[#b58c57] text-[11px] lg:text-[16px]"
                >
                  ABOUT
                </span>
                <h2 className="mt-3 mb-3 sm:mb-5 text-4xl md:text-5xl font-semibold">
                  About Ammar Forte
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm sm:text-md max-w-full">
                  In 1978, fueled by a passion for helping families build their
                  dreams, Emran Jatoi founded Ammar Forte with a focus on
                  providing personalized service in Detroit&apos;s up-and-coming
                  neighborhoods. Over the years, the company has blossomed into
                  a respected regional leader, known for its unwavering
                  dedication to client satisfaction and expertise in navigating
                  diverse markets. Ammar Forte takes pride in its long-standing
                  relationships with clients, many of whom have become lifelong
                  partners, trusting the company to guide them through every
                  stage of their real estate journey.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="left_img group overflow-hidden"
            >
              <Image
                width={600}
                height={600}
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_3.webp?v=1719605230"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
