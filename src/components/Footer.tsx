import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-[#ECECFB] bg-black">
        <div className="max-w-7xl mx-auto">
          {/* FOOTER UPPER PART  */}
          <div className="pt-16 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            {/* LOGO & HEADING */}
            <div className="sm:col-span-2">
              <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-white xl:text-2xl">
                <Image
                  width={600}
                  height={600}
                  className="mr-3 w-12"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/ammmar.png?v=1719436690"
                  alt="logo"
                />
                Ammar Forte
              </h1>
              <p className="max-w-md text-[1rem] mt-3">
                Ammar Forte is your one-stop shop for all your real estate
                needs. We’re a team of passionate experts dedicated to guiding
                you towards success, whether you’re buying, selling, or
                investing.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-xl font-semibold text-white">Quick Link</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  href="/"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  Projects
                </Link>
              </div>
            </div>

            {/* PROJECTS */}
            <div>
              <p className="text-xl font-semibold text-white">Useful Links</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  href="/sialkot"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  Brands Village Sialkot
                </Link>
                <Link
                  href="/quetta"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  Brands Village Queeta
                </Link>
                <Link
                  href="/gujranwala"
                  className="text-gray-50 transition-colors duration-300 hover:underline hover:text-[#A57F4D]"
                >
                  Brands Village Gujranwala
                </Link>
              </div>
            </div>

            {/* PRODUCT & CATEGORIES */}
            <div>
              <p className="text-xl font-semibold text-white">Contact Info</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                {/* PHONE NUMBER */}
                <a
                  href="tel:+92-332-2222929"
                  className="flex items-center gap-2"
                >
                  <FaPhone /> +92 332 2222929
                </a>

                {/* SOCIAL LINKS */}
                <div className="links pt-2 flex items-center justify-start gap-2.5">
                  <a
                    href="https://www.facebook.com/ammarforte1"
                    target="_blank"
                    className=""
                  >
                    <FaFacebookF className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a
                    href="https://www.instagram.com/ammarforte/?hl=en"
                    target="_blank"
                    className=""
                  >
                    <FaInstagram className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ammarforte/?originalSubdomain=pk"
                    target="_blank"
                    className=""
                  >
                    <FaLinkedinIn className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCDcFBh8I_tyoriNew2QpJYg"
                    target="_blank"
                    className=""
                  >
                    <FaYoutube className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                </div>

                {/* PAYMENT METHOLDS */}
                <div className="paymentMethods pt-2 flex items-center justify-start gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299"
                    alt=""
                  />
                  <Image
                    width={100}
                    height={100}
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530"
                    alt=""
                  />
                  <Image
                    width={100}
                    height={100}
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529"
                    alt=""
                  />
                  <Image
                    width={100}
                    height={100}
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM PART  */}
        <div className="text-sm py-4 sm:py-5 px-4 md:px-10 border-t bg-[#A57F4D] text-center text-white">
          <p>Copyrights © 2024 All Rights Reserved by Ammar Forte</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
