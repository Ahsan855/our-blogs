import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 px-5">
      <h1 className="text-2xl md:text-4xl font-medium mb-4">Privacy Policy</h1>
      <h2 className=" mb-10 md:mb-20">
        Home <IoIosArrowForward className="inline-block" /> Privacy Policy
      </h2>

      <div>
        <div className="text-[#555] mt-10">
          <p className="text-xl mb-5">
            Gamers Varse is a blog website that provides the latest gaming news
            and reviews. We also send newsletters every weekend to our
            subscribers. We are committed to protecting the privacy of our users
            data. This privacy policy explains how we collect, use, and share
            user data.
          </p>

          <p className="text-xl">
            Seated in one of the leather{" "}
            <span className="shadow-md text-primary py-1 cursor-pointer">
              banquettes
            </span>{" "}
            beneath the romantic stained-glass dome designed by Gustave Eiffel,
            it’s impossible not to have a pinch-me-I’m-in-Paris moment.
          </p>
        </div>
      </div>
    </div>
  );
}
