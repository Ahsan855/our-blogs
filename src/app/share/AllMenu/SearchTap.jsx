"use client";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

import { Nunito } from "next/font/google";
import gsap from "gsap";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export default function SearchTap({
  searchOpen,
  setSearchOpen,
  setIsOpenMenu,
}) {
  const toggleMenuOpen = (menu) => {
    if (menu === "search") {
      setSearchOpen((prevState) => !prevState);
      setIsOpenMenu(false);
    } else if (menu === "menu") {
      setSearchOpen(false);
      setIsOpenMenu((prevState) => !prevState);
    }
  };

  useEffect(() => {
    const menu = document.querySelector(".menu");

    if (searchOpen) {
      gsap.to(menu, { duration: 0.1, x: 0, opacity: 1 });
    } else {
      gsap.to(menu, { duration: 0.1, x: "-100%", opacity: 0 });
    }
  }, [searchOpen]);
  return (
    <div>
      <FaSearch
        onClick={() => toggleMenuOpen("search")}
        className="text-xl text-white cursor-pointer"
      />

      {searchOpen && (
        <div
          className="menu border-t-[1px] border-white  transition-transform ease-in-out transform origin-right-left duration-700 absolute right-0 md:top-[70px] md:mt-6 space-y-2  px-5 md:px-10 py-5 md:py-10 bg-primary  text-white w-full md:w-4/5 overflow-y-auto h-[100vh]"
          style={{ transform: "translateX(100%)", opacity: 0 }}
        >
          <div class="container mx-auto px-4">
            <h1 className="text-2xl md:text-4xl text-white py-10 font-bold">
              Sarch
            </h1>
            <div class="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-white h-10 px-4 pr-10 rounded-full text-sm focus:outline-none w-full"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-3 md:mr-10"
              >
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${nunito.className} py-10 px-5`}>
            <ul className="flex flex-wrap gap-x-5">
              <p>Suggested:</p>
              <li>Covid-19</li>
              <li>Health</li>
              <li>WFH </li>
              <li>UltraNet</li>
              <li>UltraNet</li>
              <li>Hospital</li>
              <li>Policies</li>
              <li>Energy</li>
              <li>Business</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
