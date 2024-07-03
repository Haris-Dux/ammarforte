import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="aboutSectionbg ">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[60vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-[#EBCFA7] tracking-normal">
                  Brands Village Sialkot
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
                <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen h-auto bg-[#1B1B1B] ">
        <div className=" bg-[#1B1B1B] max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-14 md:flex-row  flex-col items-start min-h-[auto] ">
          <div className="text-start w-[100%] px-3 ">
            <video
              controls
              muted
              loop
              autoPlay
              playsInline
              className="w-[100%]"
            >
              <source src="/brandsvillage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#1B1B1B]">
        {/* IMAGES  */}
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 py-10 lg:px-0 lg:py-14 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className="space-y-5">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className=" h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk1.webp?v=1719949159"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk2.webp?v=1719949160"
              />
            </div>
            <div className="space-y-5">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className=" h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk3.webp?v=1719949160"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk4.webp?v=1719949160"
              />
            </div>
            <div className="space-y-5">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className=" h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk5.webp?v=1719949159"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk6.webp?v=1719949159"
              />
            </div>
            <div className="space-y-5">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className=" h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk7.webp?v=1719949159"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[full] w-[full] sm:h-[18rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/sk8.webp?v=1719949159"
              />
            </div>
          </div>
        </div>
        {/* CONTENT  */}
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-14 md:flex-row  flex-col items-start min-h-[auto] ">
          <div className="text-start w-[100%] px-3 ">
            <h4 className="playfair backdrop:block text-3xl sm:text-5xl mb-7">
              <span className="playfair text-[#9f8054]">
                Brands Village Sialkot
              </span>
            </h4>
            <p className="font-normal text-md text-gray-100 mb-6 tracking-wide">
              The most project of Sialkot, located at Khawaja Safdar Road on the
              central point of Cantt and City. It has revolutionized the
              shopping experience of people of Sialkot and adjoining areas.
              Brand Village Sialkot is the only the Iconic Project of Sialkot
              City with facilities like high speed elevators, secure and
              spacious car parking space, clean environment, Wi-Fi, banking
              services & ATMs, foreign exchange, Prayer rooms, toilets,
              Parent&apos;s room, wheelchair access, fire alarm and fighting
              system. Brands Village encompasses the most popular National and
              International Retail Brands, Cash & Carry, Joyland, Food court and
              Rooftop Restaurants, Corporate offices, local marketsand many
              more.
            </p>
            <p className="font-normal text-md text-gray-100 mb-6 tracking-wide">
              Brands Village is not specified to just a single location, there
              will be multiple brands villages launching all across Pakistan.
              Brands Village undoubtedly offers the ultimate entertainment and
              shopping destination where your senses will get excited as you
              walk through more than 50 international & local brands. Catch up
              with family and friends while you dig into the variety of
              delicious cuisine to tantalize your taste buds. Not just this, but
              enjoy the latest movies at our world class cinema or reward your
              kids with an exciting day at fun city.
            </p>
            <p className="font-normal text-md text-gray-100 mb-6 tracking-wide">
              Brands Village also provides its visitors with advanced facilities
              like secure and ample car parking space, clean environment, Wi-Fi,
              banking services & ATMs, foreign exchange, Prayer rooms, toilet &
              Parent&apos;s room, wheelchair access, fire warning service, smoke
              evacuation system etc. Brands Village features include health &
              fitness and several other services, all offered under at one
              place. Brands Village is one wholesome experience which you
              don&apos;t want to miss specially with your friends and family. It
              couldn&apos;t have been a better experience than this, that too,
              across whole nation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
