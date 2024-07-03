import Image from "next/image";
import Link from "next/link";
import React from "react";
import BoxReveal from "./magicui/box-reveal";

const Intro = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-6 md:flex-row flex-col items-center min-h-[40vh]">
          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="image w-full">
              <Image
                alt="hero"
                width={800}
                height={800}
                className="object-cover object-center w-full h-[30rem] sm:h-[30rem] lg:h-[45rem]"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Side_Banner_1.png?v=1720025895"
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-10 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-xl font-semibold opacity-50 mb-1">
                    Gujranwala
                  </span>

                  <BoxReveal boxColor={"#9f8054"} duration={0.5}>
                    <h4 className="playfair backdrop:block text-3xl sm:text-4xl mb-4">
                      <span className="playfair text-[#9f8054]">
                        Brands Village Gujranwala
                      </span>
                    </h4>
                  </BoxReveal>
                  <BoxReveal boxColor={"#9f8054"} duration={0.5}>
                    <p className="font-normal text-md max-w-lg text-[#252525] mb-3">
                      Brand Village Gujranwala is the only the Iconic Project of
                      Gujranwala City with facilities like high speed elevators,
                      secure and spacious car parking space, clean environment,
                      Wi-Fi, banking services & ATMs, foreign exchange, Prayer
                      rooms, toilets, Parent&apos;s room, wheelchair access,
                      fire alarm and fighting system.
                    </p>
                  </BoxReveal>

                  <BoxReveal boxColor={"#9f8054"} duration={0.5}>
                    <p className="font-normal text-md max-w-lg text-[#252525] mb-8">
                      Brands Village is not specified to just a single location,
                      there will be multiple brands villages launching all
                      across Pakistan. Brands Village undoubtedly offers the
                      ultimate entertainment and shopping destination where your
                      senses will get excited as you walk through more than 50
                      international & local brands.
                    </p>
                  </BoxReveal>

                  <Link href="/quetta" className="mt-2 hover_button card">
                    See details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
