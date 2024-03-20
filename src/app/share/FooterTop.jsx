import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import thumb1 from "@/images/thumb-1.jpg";
import thumb2 from "@/images/thumb-2.jpg";
import thumb3 from "@/images/thumb-3.jpg";
import thumb4 from "@/images/thumb-4.jpg";
import thumb5 from "@/images/thumb-5.jpg";
import thumb6 from "@/images/thumb-6.jpg";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export default function FooterTop() {
  return (
    <div className="w-full md:w-4/5 ms-auto px-5 md:px-0 ">
      <div className="grid grid-cols-1  md:border-t-[1px]   md:border-l-[1px] md:border-gray-300 py-10 md:grid-cols-2 lg:grid-cols-3">
        {/* cart 1 */}

        <div className="flex md:gap-x-3 justify-center">
          <ul className="text-start">
            <div className="mb-5 md:mb-10">
              <h4 className="text-2xl mt-5 mb-3 uppercase">archives</h4>
              <hr className="w-1/5" />
            </div>

            <ul className={`${nunito.className}`}>
              <li className="border-b-[1px] py-3 text-lg border-gray-200 transition duration-300 ease-in-out hover:text-primary hover:transform hover:scale-105">
                January 2020 (11)
              </li>
              <li className="border-b-[1px] py-3 text-lg border-gray-200 transition duration-300 ease-in-out hover:text-primary hover:transform hover:scale-105">
                February 2020 (10)
              </li>
              <li className="border-b-[1px] py-3 text-lg border-gray-200 transition duration-300 ease-in-out hover:text-primary hover:transform hover:scale-105">
                March 2020 (28)
              </li>
              <li className="border-b-[1px] py-3 text-lg border-gray-200 transition duration-300 ease-in-out hover:text-primary hover:transform hover:scale-105">
                April 2020 (20)
              </li>
              <li className="border-b-[1px] py-3 text-lg border-gray-200 transition duration-300 ease-in-out hover:text-primary hover:transform hover:scale-105">
                May 2020 (52)
              </li>
              <li className="border-b-[1px] py-3 text-lg border-gray-200 transition duration-300 ease-in-out hover:text-primary hover:transform hover:scale-105">
                June 2020 (23)
              </li>
            </ul>
          </ul>
        </div>

        {/* cart 2 */}

        <ul className="text-start">
          <div className="mb-10">
            <h4 className="text-2xl mt-5 mb-3  uppercase">latest tweets</h4>
            <hr className="w-1/5" />
          </div>
          <li>
            <FaTwitter className="text-[#55acee] inline-block mr-2" /> Buy
            Ultranews - <br /> HTML template <br /> on
            <span className="italic text-[#12CAF8] font-medium">
              @ThemeForest{" "}
            </span>{" "}
            Apr 9, 2024
          </li>
          <li className="mt-10">
            <FaTwitter className="text-[#55acee] inline-block mr-2" />{" "}
            EmBe — All You Need to build a <br /> WordPress Magazine, News
            portal <br />
            or Blog site
            <span className="italic text-[#12CAF8] font-medium">
              @ThemeForest{" "}
            </span>{" "}
            <br /> Jan 31, 2024
          </li>
          <li className="mt-10">
            <FaTwitter className="text-[#55acee] inline-block mr-2" /> Hewo -
            Modern Newspaper <br /> HTML Template{" "}
            <span className="italic text-[#12CAF8] font-medium">
              @ThemeForest{" "}
            </span>{" "}
            Jan 31, <br /> 2024
          </li>
        </ul>

        {/* cart 3 */}
        <div>
          <div className="mb-10">
            <h4 className="text-2xl mt-5 mb-3  uppercase">latest tweets</h4>
            <hr className="w-1/5" />
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-5">
            <div className="relative rounded-md w-full  overflow-hidden">
              <Image
                className="transition-transform  hover:scale-110"
                src={thumb1}
                alt="Image"
              />
            </div>
            <div className="relative rounded-md w-full  overflow-hidden">
              <Image
                className="transition-transform  hover:scale-110"
                src={thumb2}
                alt="Image"
              />
            </div>
            <div className="relative rounded-md w-full  overflow-hidden">
              <Image
                className="transition-transform hover:scale-110"
                src={thumb3}
                alt="Image"
              />
            </div>
            <div className="relative rounded-md w-full  overflow-hidden">
              <Image
                className="transition-transform  hover:scale-110"
                src={thumb4}
                alt="Image"
              />
            </div>
            <div className="relative rounded-md w-full  overflow-hidden">
              <Image
                className="transition-transform  hover:scale-110"
                src={thumb5}
                alt="Image"
              />
            </div>
            <div className="relative rounded-md w-full  overflow-hidden">
              <Image
                className="transition-transform  hover:scale-110"
                src={thumb6}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
