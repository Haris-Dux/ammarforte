"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css"

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease" });
  }, []);
  return (
    <>
      {/* HEADING SECTION */}
      <section className="text-center w-[100%] px-4 lg:px-0 pt-10">
        <span className="block text-2xl font-extrabold opacity-40 mb-1">
          04
        </span>
        <h4 className="playfair block text-4xl font-semibold mb-1">
          Our
          <span className="text-[#9f8054]"> Projects</span>
        </h4>
      </section>

      {/* FIRST PROJECT */}
      <section className="project-1 w-full px-0 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 sm:px-4 py-10 lg:pt-14 md:flex-row flex-col items-center">
          <div  data-aos="zoom-in" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 group overflow-hidden rounded-lg">
            <Image
              width={600}
              height={600}
              alt="hero"
              className="object-cover object-center rounded-lg h-[14rem] sm:h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/m.webp?v=1719843374"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-10 flex px-5 sm:px-0 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-xl font-semibold opacity-50 mb-1">
                    Gujranwala
                  </span>
                  <h4 className="playfair backdrop:block text-3xl sm:text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">
                      Brands Village Gujranwala
                    </span>
                  </h4>
            

                  <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                    Brand Village Gujranwala is the only the Iconic Project of
                    Gujranwala City with facilities like high speed elevators,
                    secure and spacious car parking space, clean environment,
                    Wi-Fi, banking services & ATMs, foreign exchange, Prayer
                    rooms, toilets, Parent&apos;s room, wheelchair access, fire
                    alarm and fighting system.
                  </p>

                  <Link
                    href="/gujranwala"
                    className="font-semibold text-[#A57F4D]"
                  >
                    See details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto px-4">
        <p className="h-px w-full bg-gray-700 opacity-50"></p>
      </section>

      {/* SECOND PROJECT */}
      <section className="project-2 w-full px-0 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 sm:px-4 py-10 lg:pt-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex px-5 sm:px-0 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-start w-[100%]">
              <span className="block text-xl font-semibold opacity-50 mb-1">
                Quetta
              </span>
              <h4 className="playfair backdrop:block text-3xl sm:text-4xl mb-4">
                <span className="playfair text-[#9f8054]">
                  Brands Village Quetta
                </span>
              </h4>

              <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                Brands Village is not specified to just a single location, there
                will be multiple brands villages launching all across Pakistan.
                Brands Village undoubtedly offers the ultimate entertainment and
                shopping destination where your senses will get excited as you
                walk through more than 50 international & local brands.
              </p>

              <Link href="/quetta" className="font-semibold text-[#A57F4D]">
                See details
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 group overflow-hidden rounded-lg">
            <Image
              width={600}
              height={600}
              alt="hero"
              className="object-cover object-center rounded-lg h-[14rem] sm:h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/bvQ.webp?v=1719843373"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto px-4">
        <p className="h-px w-full bg-gray-700 opacity-50"></p>
      </section>

      {/* THIRD PROJECT */}
      <section className="project-3 w-full px-0 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 sm:px-4 py-10 lg:pt-14 md:flex-row flex-col items-center">
          <div data-aos="zoom-out" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 group overflow-hidden rounded-lg">
            <Image
              width={600}
              height={600}
              alt="hero"
              className="object-cover object-center rounded-lg h-[14rem] sm:h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cloud_apartments.webp?v=1719844179"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 sm:px-0 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-xl font-semibold opacity-50 mb-1">
                    Murree
                  </span>
                  <h4 className="playfair backdrop:block text-3xl sm:text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">
                      Clouds Casa Murree
                    </span>
                  </h4>

                  <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                    A Land Developer group operating countrywide since last 15
                    years through its subsidiary SECP registered companies of
                    Project planning, Construction, Marketing and Sales,
                    adopting best practices of Project Management and
                    Sustainable Development.
                  </p>

                  <button className="font-semibold text-[#A57F4D]">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-3">
          <Link
            href="/projects"
            className="px-10 py-4 uppercase text-[#A57F4D] underline underline-offset-8 text-xl"
          >
            View All Projects
          </Link>
        </button>
      </section>
    </>
  );
};

export default Project;
