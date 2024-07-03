"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import WordPullUp from "./magicui/word-pull-up";

const StatsSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease" });
  }, []);
  return (
    <>
      <section className="bg-[#f9f9f9] py-20 flex flex-wrap w-[100%] px-5 lg:px-0">
        {/* HEADING SECTION */}
        <div className="text-center w-[100%]">
          <span className="block text-2xl font-extrabold opacity-40 mb-1">
            02
          </span>
          <h4 className="block text-2xl mb-1 font-semibold">
            <span className="text-[#9f8054] font-semibold">Ammar Forte</span>{" "}
            Stats
          </h4>
          <WordPullUp
            className="font-medium text-lg sm:text-xl"
            words="Showcasing Our Exceptional Projects and Satisfied Clients"
          />
        
        </div>
        {/* ICONS SECTION */}
        <div className="mt-4 flex justify-center items-center flex-wrap gap-4 sm:gap-10 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* 1 */}
          <div
            data-aos="fade-right"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              src={"https://themezinho.net/hompark/images/icon-benefits01.png"}
            />

            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Successful Projects
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="font-semibold sm:font-extrabold text-[40px] sm:text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={3} end={85} />
              </span>
            </div>
          </div>
          {/* 2 */}
          <div
            data-aos="fade-up"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center mt-0 lg:mt-28"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              src={"https://themezinho.net/hompark/images/icon-benefits02.png"}
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2 ">
              Properties Sold
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="font-semibold sm:font-extrabold text-[40px] sm:text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={3} end={150} />
              </span>{" "}
              <h6 className="font-semibold">+</h6>
            </div>
          </div>
          {/* 3 */}
          <div
            data-aos="fade-up"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              src={
                "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/fast-time.png?v=1719953504"
              }
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Years of Experience
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="sm:font-extrabold font-semibold text-[40px] sm:text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={3} end={20} />
              </span>
            </div>
          </div>
          {/* 4 */}
          <div
            data-aos="fade-up"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center mt-0 lg:mt-28"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              src={
                "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/award.png?v=1719953346"
              }
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Awards Won
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="sm:font-extrabold font-semibold text-[40px] sm:text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={3} end={25} />
              </span>
            </div>
          </div>
          {/* 5 */}
          <div
            data-aos="fade-left"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              src={"https://themezinho.net/hompark/images/icon-benefits05.png"}
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Satisfied Clients
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="sm:font-extrabold font-semibold text-[40px] sm:text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={2} end={109} />
              </span>{" "}
              <h6 className="font-semibold">+</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
