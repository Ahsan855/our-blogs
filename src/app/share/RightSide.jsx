// import Image from "next/image";
import Image from "next/image";
import React from "react";
import author from "@/images/author.jpg";

import { BsArrowRight } from "react-icons/bs";
import { Nunito } from "next/font/google";
import BlogList from "../blogs/page";

// import Link from "next/link";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export default function RightSide() {
  return (
    <div className="pt-10 w-full md:w-1/4 px-5">
      <div className="text-center ">
        <Image
          className="rounded-full w-1/2 mx-auto"
          src={author}
          alt="author"
        />
        <h1 className="text-2xl font-medium mb-5 mt-5 text-center">
          Hello, Im Robert
        </h1>
        <p className="text-center">
          Writing comes from reading, and reading is the finest teacher of how
          to write. Read every day.
        </p>
        <button className="uppercase mt-20 text-primary bg-gray-200 px-3 py-2 rounded-full">
          Contact ME
        </button>
      </div>
      {/* Popular Section */}
      <div className="border-t-[1px] mt-5 md:mt-10 pt-10  border-gray-300">
        <div className="mb-10">
          <h4 className="text-2xl text-center md:text-start mt-5 mb-3 uppercase">
            popular
          </h4>
          <hr className="w-1/5" />
        </div>
        <BlogList />
      </div>
      {/* NewsLetter Section */}
      <div className="border-t-[1px] border-b-[1px] mt-5 md:mt-10 py-10 border-gray-300">
        <div className="mb-10">
          <h4 className="text-2xl  mt-5 mb-3 uppercase">newsletter</h4>
          <hr className="w-1/5" />
        </div>

        <div>
          <p className="text-xl mb-4">
            Heaven fruitful doesnt over les idays <br /> appear creeping
          </p>

          <div className="relative mr-5">
            <input
              type="text"
              id="inputField"
              name="inputField"
              className="w-full border border-gray-400 rounded-md py-2 px-3  focus:outline-none focus:border-blue-500"
              placeholder="Email Address"
            />

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <BsArrowRight className="w-16 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
      {/* Tagloud Section */}
      <div className=" border-b-[1px] mt-5 py-5 border-gray-300">
        <div className="mb-10">
          <h4 className="text-2xl  mt-5 mb-3 uppercase">tagcloud</h4>
          <hr className="w-1/5" />
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gray-200 font-light  hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            Beautiful
          </button>
          <button className="bg-gray-200 font-light hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            New York
          </button>

          <button className="bg-gray-200 font-light hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            Droll
          </button>
          <button className="bg-gray-200 font-light  hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            Intimate
          </button>
          <button className="bg-gray-200 font-light hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            Loving
          </button>

          <button className="bg-gray-200 font-light hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            Travel
          </button>
          <button className="bg-gray-200 font-light hover:text-primary cursor-pointer  px-2 py-1 rounded-full">
            Fighting
          </button>
        </div>
      </div>
      {/* Contact Section */}
      <div className=" mt-5 md:mt-10 xxl:pb-44 pb-10">
        <div className="mb-5">
          <h4 className="text-2xl  mt-5 mb-3 uppercase">contact</h4>
          <hr className="w-1/5" />
        </div>
        <div>
          <ul className={nunito.className}>
            <li className="text-xl font-medium text-black">Address</li>
            <li>123 Main Street</li>
            <li>New York, NY 10001</li>
            <ul className="text-start mt-5">
              <li className="text-xl font-medium text-black">Hours</li>
              <li>
                Monday—Friday: 9:00AM–
                <br />
                5:00PM
              </li>
              <li>
                Saturday & Sunday: 11:00AM– <br />
                3:00PM
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
