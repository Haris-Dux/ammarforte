"use client";

import React from "react";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import "./Components.css";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Link from "next/link";

const ModalVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50"
        >
          <div className="relativ w-full max-w-lg max-h-ful rounded-md shadow dark:bg-gray-700 mx-auto">
            {/* ------------- HEADER ------------- */}
            <div className="flex text-[#EBCFA7] items-center justify-end pr-2 cursor-pointer ">
              <RxCross1 onClick={closeModal} />
            </div>

            {/* ------------- BODY ------------- */}
            <div className="p-2 md:p-2">
              <video
                controls
                muted
                loop
                autoPlay
                playsInline
                className="w-[100%]"
              >
                <source src="/BrandsVillage Gujrawala Voice Over Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="w-[100%] flex justify-center items-center">
              <Link
                href="/sialkot"
                onClick={closeModal}
                className="bg-transparent hover:bg-transparent text-[#EBCFA7] flex justify-center items-center"
              >
                View Details
                <RiArrowRightDoubleFill
                  width={16}
                  height={16}
                  className="arrow1"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>

   
  );
};

export default ModalVideo;
