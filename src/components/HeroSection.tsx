"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import "./Components.css";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_1_1.webp?v=1720025136",
    alt: "image",
    name: "Cuesta Murree",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_3_1.webp?v=1720025135",
    alt: "image",
    name: "Clouds Casa Murree",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_2_1.webp?v=1720025135",
    alt: "image",
    name: "Brands Village Quetta",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_4_1.webp?v=1720025135",
    alt: "image",
    name: "Metropole Rawalpindi",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_5.webp?v=1720025135",
    alt: "image",
    name: "Qalandar City Lahore",
  },
];

const HeroSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(1); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(1); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(1); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <Slider ref={sliderRef} {...settings}>
          {data.map((data) => (
            <div key={data?.id}>
              <div className="relative w-full min-h-screen focus:outline-none">
                <Image
                  fill
                  className="absolute object-cover"
                  src={data?.image}
                  alt={data?.alt}
                />
                <div className="absolute px-3 sm:pl-[8rem]">
                  <div className="flex justify-start items-center min-h-screen">
                    <div className="social text-center hidden sm:block pt-24">
                      <div className="vertical pt-10 pb-16">
                        <p className="text-gray-50 font-semibold text-md tracking-wider transform rotate-90">
                          SOCIAL MEDIA
                        </p>
                      </div>

                      <p className="h-10 w-px bg-gray-50 text-center mx-auto"></p>

                      <div className="links pt-2 flex items-center justify-start flex-col gap-2.5">
                        <a
                          href="https://www.facebook.com/ammarforte1"
                          target="_blank"
                        >
                          <FaFacebookF className="text-white h-7 w-7 p-1.5" />
                        </a>
                        <a
                          href="https://www.instagram.com/ammarforte/?hl=en"
                          target="_blank"
                        >
                          <FaInstagram className="text-white h-7 w-7 p-1.5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/ammarforte/?originalSubdomain=pk"
                          target="_blank"
                        >
                          <FaLinkedinIn className="text-white h-7 w-7 p-1.5" />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCDcFBh8I_tyoriNew2QpJYg"
                          target="_blank"
                        >
                          <FaYoutube className="text-white h-7 w-7 p-1.5" />
                        </a>
                      </div>
                    </div>

                    <div className="content px-0 sm:px-20 lg:px-0 mt-0 lg:mt-0">
                      <h2 className="mb-8 text-6xl lg:text-6xl xl:text-7xl text-[#EBCFA7] font-medium pr-5">
                        {data.name}
                      </h2>
                      <p className="mb-10 pr-4 tracking-wide max-w-md sm:max-w-2xl xl:max-w-xl text-white text-sm sm:text-xl font-medium sm:font-normal">
                        Leveraging Decades of Experience to Elevate Your Real
                        Estate Journey!
                      </p>

                      <Link
                        href="tel:+92-332-2222929"
                        className="card w-[14rem] sm:w-[18rem] py-4 text-sm sm:text-md flex justify-center items-center tracking-widest border border-[#EBCFA7] text-white  hover:bg-[#A57F4D] hover:border-[#A57F4D] transition-colors duration-500"
                      >
                        GET A CONSULTATION <IoMdArrowDropright />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default HeroSection;
