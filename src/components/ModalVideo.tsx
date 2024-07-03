"use client";

import React from "react";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "keep-react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import "./Components.css";
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
  };
  return (
    <>
      <Modal className="bg-transparent" isOpen={isOpen} onClose={closeModal}>
        <ModalBody className="flex w-[40rem] flex-col bg-transparent dark:bg-transparent">
          <div
            onClick={closeModal}
            className=" text-white w-full flex justify-end text-end hover hover:cursor-pointer"
          >
            <RxCross1 className="text-[#EBCFA7]" />
          </div>
          <ModalContent className="my-2 text-center">
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
          </ModalContent>
          <ModalFooter>
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
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalVideo;
