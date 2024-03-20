import Image from "next/image";
import React from "react";
import thumb1 from "@/images/thumb-1.jpg";
export default function LeftSide() {
  return (
    <div className="md:pt-10 w-full md:w-1/5">
      {/* Tagloud Section */}
      <div className=" mt-5 px-5">
        <div className="mb-10">
          <h4 className="text-2xl  mt-5 mb-3 uppercase">recent posts</h4>
          <hr className="w-1/5" />
        </div>
        {/* card sections */}
        <div>
          {/* card 1 */}
          <div className="flex items-start gap-x-2  pb-5 mb-2 border-b-[1px] border-gray-300">
            <h1 className="text-6xl italic">1.</h1>
            <div>
              <h1 className="text-xl hover:text-primary cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex items-start gap-x-2  pb-5 border-b-[1px] mb-2 border-gray-300">
            <h1 className="text-6xl italic">2.</h1>
            <div>
              <h1 className="text-xl hover:text-primary cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex items-start gap-x-2 pb-5 mb-2 border-b-[1px] border-gray-300">
            <h1 className="text-6xl italic">3.</h1>
            <div>
              <h1 className="text-xl hover:text-primary cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flex items-start gap-x-2 pb-5 mb-2 border-b-[1px] border-gray-300">
            <h1 className="text-6xl italic">4.</h1>
            <div>
              <h1 className="text-xl hover:text-primary cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="flex items-start gap-x-2 pb-5 ">
            <h1 className="text-6xl italic">5.</h1>
            <div>
              <h1 className="text-xl hover:text-primary cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="mt-5">
          <div>
            <div className="mb-5">
              <div className="mb-10">
                <h4 className="text-2xl mt-5 mb-3 uppercase">advertise</h4>
                <hr className="w-1/5" />
              </div>
              <p>Contact us if you want to set a banner here</p>
            </div>
            <Image className="" src={thumb1} alt="thumb" />
          </div>
        </div>
      </div>
    </div>
  );
}
