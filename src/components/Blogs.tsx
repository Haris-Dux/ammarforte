import Image from "next/image";
import Link from "next/link";
import React from "react";
import WordPullUp from "./magicui/word-pull-up";

const Blogs = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-4 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <span className="block text-2xl font-extrabold opacity-40 mb-1">
            05
          </span>
          <h4 className="block text-2xl mb-1 font-semibold">
            <span className="text-[#9f8054] font-semibold">Realestate</span>{" "}
            Blog&apos;s
          </h4>
          {/* <p className="mt-1 text-gray-600">
            Dive into our latest thoughts and insights!
          </p> */}
          <WordPullUp
            className="font-medium text-lg sm:text-xl"
            words="Dive into our latest thoughts and insights!"
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/blogs/1"
            className="group hover:bg-gray-100 rounded-xl p-0 sm:p-2 lg:p-5 transition-all"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="w-full object-cover rounded-xl h-48 sm:h-60"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kenny-eliason-mGZX2MOPR-s-unsplash.webp?v=1719930504"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 line-clamp-2">
              Thinking of selling? Visualize a well-maintained house with a
              freshly painted door, a manicured lawn bursting with colorful
              flowers.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>

          <Link
            href="/blogs/2"
            className="group hover:bg-gray-100 rounded-xl p-0 sm:p-2 lg:p-5 transition-all"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="w-full object-cover rounded-xl h-48 sm:h-60"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/naomi-hebert-MP0bgaS_d1c-unsplash.webp?v=1719930550"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 line-clamp-2">
              Considering becoming a landlord? Picture a classic red brick
              apartment building with three floors and inviting balconies.
              Rental properties offer the potential .
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>

          <Link
            href="/blogs/3"
            className="group hover:bg-gray-100 rounded-xl p-0 sm:p-2 lg:p-5 transition-all"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="w-full object-cover rounded-xl h-48 sm:h-60"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kara-eads-L7EwHkq1B2s-unsplash.jpg?v=1719931109"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 line-clamp-2">
              Empowering yourself with real estate knowledge is key to
              navigating this exciting market. Whether you&apos;re a first-time
              homebuyer or a seasoned investor.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blogs;
