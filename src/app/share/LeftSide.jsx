import React from "react";
import { BiComment } from "react-icons/bi";

export default function LeftSide() {
  return (
    <div className="pt-10 w-full md:w-1/5">
      {/* Tagloud Section */}
      <div className=" mt-5 px-5">
        <div className="mb-10">
          <h4 className="text-2xl  mt-5 mb-3 uppercase">recent posts</h4>
          <hr className="w-1/5" />
        </div>
        {/* card sections */}
        <div>
          {/* card 1 */}
          <div className="flex items-start gap-2 py-5 border-b-[1px] border-gray-300">
            <h1 className="text-3xl italic">1.</h1>
            <div>
              <h1 className="text-lg  cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex items-start gap-2 py-5 border-b-[1px] border-gray-300">
            <h1 className="text-3xl italic">2.</h1>
            <div>
              <h1 className="text-lg  cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex items-start gap-2 py-5 border-b-[1px] border-gray-300">
            <h1 className="text-3xl italic">3.</h1>
            <div>
              <h1 className="text-lg  cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flex items-start gap-2 py-5 border-b-[1px] border-gray-300">
            <h1 className="text-3xl italic">4.</h1>
            <div>
              <h1 className="text-lg  cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="flex items-start gap-2 py-5">
            <h1 className="text-3xl italic">5.</h1>
            <div>
              <h1 className="text-lg  cursor-pointer">
                Traveling Tends to Magnify All Huma....
              </h1>
              <div className="flex justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p className="ms-5">26k Views</p>
              </div>
            </div>
          </div>
        </div>
        {/* Menu sections */}
        <div>
          <ul className="flex-row items-center justify-center">
            <hr />
            <li className="text-xl p-3 uppercase  hover:text-primary">
              all sections
            </li>
            <hr />
            <li className="text-xl   p-3   hover:text-primary">The World +</li>
            <hr />
            <li className="text-xl p-3  hover:text-primary">Politics</li>
            <hr />
            <li className="text-xl p-3   hover:text-primary">Business +</li>
            <hr />
            <li className="text-xl p-3 hover:text-primary">Techonology</li>
            <hr />
            <li className="text-xl p-3   hover:text-primary">Science</li>
            <hr />
            <li className="text-xl p-3   hover:text-primary">Health</li>
            <hr />
            <li className="text-xl p-3   hover:text-primary">Sport</li>
            <hr />
            <li className="text-xl p-3  hover:text-primary">Travel</li>
            <hr />
          </ul>
        </div>
        {/* Comments */}
        <div>
          <div className="mb-10">
            <h4 className="text-2xl  mt-5 mb-3 uppercase">comments</h4>
            <hr className="w-1/5" />
          </div>
          {/* card 1 */}
          <div className="flex flex-row items-start justify-center gap-x-2 mb-10">
            <div>
              <BiComment className="text-lg mx-2 mt-5" />
            </div>
            <div>
              <h1 className="text-sm hover:text-primary cursor-pointer">
                Anybody who has survived his childhood has enough information
                about life to last him the rest of his days.
              </h1>
              <div className="flex gap-x-2 mt-2 md:mt-5 justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p>26k Views</p>
              </div>
            </div>
          </div>
          <hr />
          {/* card 2 */}
          <div className="flex flex-row mt-5 items-start justify-center gap-x-2 mb-10">
            <div>
              <BiComment className="text-lg mx-2 mt-5" />
            </div>
            <div>
              <h1 className="text-sm hover:text-primary cursor-pointer">
                Anybody who has survived his childhood has enough information
                about life to last him the rest of his days.
              </h1>
              <div className="flex gap-x-2 mt-2 md:mt-5 justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p>26k Views</p>
              </div>
            </div>
          </div>
          <hr />
          {/* card 3 */}
          <div className="flex flex-row mt-5 items-start justify-center gap-x-2 mb-10">
            <div>
              <BiComment className="text-lg mx-2 mt-5" />
            </div>
            <div>
              <h1 className="text-sm hover:text-primary cursor-pointer">
                Anybody who has survived his childhood has enough information
                about life to last him the rest of his days.
              </h1>
              <div className="flex gap-x-2 mt-2 md:mt-5 justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p>26k Views</p>
              </div>
            </div>
          </div>
          <hr />
          {/* card 4 */}
          <div className="flex flex-row mt-5 items-start justify-center gap-x-2 mb-10">
            <div>
              <BiComment className="text-lg mx-2 mt-5" />
            </div>
            <div>
              <h1 className="text-sm hover:text-primary cursor-pointer">
                Anybody who has survived his childhood has enough information
                about life to last him the rest of his days.
              </h1>
              <div className="flex gap-x-2 mt-2 md:mt-5 justify-start items-center text-sm text-[#b5c8dd] ">
                <p>25 April</p>
                <p>26k Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
