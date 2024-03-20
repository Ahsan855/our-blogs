"use client";
import { FaTwitter } from "react-icons/fa";
import { ImMenu, ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });

import Link from "next/link";
import gsap from "gsap";
export default function DeskTopMenu({
  isOpenMenu,
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

    if (isOpenMenu) {
      gsap.to(menu, { duration: 0.1, x: 0, opacity: 1 });
    } else {
      gsap.to(menu, { duration: 0.1, x: "-100%", opacity: 0 });
    }
  }, [isOpenMenu]);
  return (
    <div>
      {isOpenMenu ? (
        <ImCross
          onClick={() => toggleMenuOpen("menu")}
          className="text-white text-4xl cursor-pointer p-2 focus:outline-none"
        />
      ) : (
        <ImMenu
          onClick={() => toggleMenuOpen("menu")}
          className="text-white text-4xl p-2 cursor-pointer focus:outline-none"
        />
      )}
      {isOpenMenu && (
        <div
          className="menu border-t-[1px] border-white transition-transform ease-in-out transform origin-right-left duration-700 absolute right-0 md:mt-6  md:top-[70px]  space-y-2 px-10 py-10 bg-primary text-white w-full md:w-4/5 overflow-y-auto h-[100vh] "
          style={{ transform: "translateX(100%)", opacity: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 ">
            {/* ul list 1 */}
            <div>
              <div className="mb-10">
                <h4 className="text-2xl  mt-5 mb-3  mr-24 uppercase">Home</h4>
                <hr className="w-1/5" />
              </div>
              <ul className="text-start">
                <li>
                  <Link href="/">Home default</Link>
                </li>
                <li>
                  <Link href="/">Home page two</Link>
                </li>
                <li>
                  <Link href="/">Home page three</Link>
                </li>
              </ul>
            </div>
            {/* ul list 2 */}
            <div>
              <div className="mb-10">
                <h4 className="text-2xl  mt-5 mb-3  mr-24 uppercase">
                  {" "}
                  Archive
                </h4>
                <hr className="w-1/5" />
              </div>

              <ul className="text-start">
                <li>
                  <Link href="/">Default</Link>
                </li>
                <li>
                  <Link href="/">List layout</Link>
                </li>
                <li>
                  <Link href="/">Grid layout</Link>
                </li>
                <li>
                  <Link href="/">Big thumbnail</Link>
                </li>
              </ul>
            </div>
            {/* ul list 3 */}
            <div>
              <div className="mb-10">
                <h4 className="text-2xl  mt-5 mb-3  mr-24 uppercase">Pages</h4>
                <hr className="w-1/5" />
              </div>

              <ul className="text-start">
                <li>
                  <Link href="/">Elements</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Srarch</Link>
                </li>
                <li>
                  <Link href="/">Author</Link>
                </li>
                <li>
                  <Link href="/">404</Link>
                </li>
              </ul>
            </div>
            {/* ul list 4 */}
            <div>
              <div className="mb-10">
                <h4 className="text-2xl  mt-5 mb-3  mr-24 uppercase">Single</h4>
                <hr className="w-1/5" />
              </div>

              <ul className="text-start">
                <li>
                  <Link href="/">Standard</Link>
                </li>
                <li>
                  <Link href="/">Video</Link>
                </li>
                <li>
                  <Link href="/">Audio</Link>
                </li>
                <li>
                  <Link href="/">Gallery</Link>
                </li>
                <li>
                  <Link href="/">Quote</Link>
                </li>
                <li>
                  <Link href="/">Image</Link>
                </li>
                <li>
                  <Link href="/">No sidebar</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${nunito.className} grid grid-cols-1 md:grid-cols-4`}
          >
            {/* ul list 1 */}
            <div className="flex gap-x-10">
              <ul className="text-start">
                <div className="mb-10">
                  <h4 className="text-2xl  mt-5 mb-3  mr-24 uppercase">
                    Contact
                  </h4>
                  <hr className="w-1/5" />
                </div>
                <li className="text-xl font-medium">Address</li>
                <li>123 Main Street</li>
                <li>New York, NY 10001</li>
                <ul className="text-start mt-10">
                  <li className="text-xl font-medium">Hours</li>
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
            {/* ul list 1 */}
            <div className="flex gap-x-10">
              <ul className="text-start">
                <div className="mb-10">
                  <h4 className="text-2xl  mt-5 mb-3  mr-24 uppercase">
                    latest tweets
                  </h4>
                  <hr className="w-1/5" />
                </div>
                <li className="text-xl font-medium">
                  <FaTwitter className="text-[#55acee] inline-block mr-2" /> By
                  Ultranews - <br /> HTML template on <br />{" "}
                  <span className="italic">@ThemeForest </span> Apr 9, <br />{" "}
                  2024
                </li>
                <li className="mt-10">
                  <FaTwitter className="text-[#55acee] inline-block mr-2" />{" "}
                  EmBe--- All You Need <br />
                  to build a Magazine, <br /> News portal or Blog site
                </li>
                <li>
                  <span className="italic">@ThemeForest </span> Jan 31, <br />{" "}
                  2024
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
