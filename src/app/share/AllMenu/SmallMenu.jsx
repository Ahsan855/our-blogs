"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { CgMenuGridR } from "react-icons/cg";

import { ImCross } from "react-icons/im";
import SearchTap from "./SearchTap";
import gsap from "gsap";

export default function SmallMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const menu = document.querySelector(".menu");

    if (isOpen) {
      gsap.to(menu, { duration: 0.2, x: 0, opacity: 1 });
    } else {
      gsap.to(menu, { duration: 0.2, x: "-100%", opacity: 0 });
    }
  }, [isOpen]);
  return (
    <div className="flex items-center">
      <div className="block md:hidden">
        <SearchTap
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          setIsOpenMenu={setIsOpenMenu}
        />
      </div>
      <div className="block md:hidden">
        {isOpen ? (
          <ImCross
            onClick={toggleMenu}
            className="text-white text-4xl p-2 focus:outline-none"
          />
        ) : (
          <CgMenuGridR
            onClick={toggleMenu}
            className="text-white text-4xl p-2 focus:outline-none"
          />
        )}

        {isOpen && (
          <div
            className="menu absolute border-t-[1px] border-white right-0 w-full md:w-4/5 px-10 md:px-20 py-10 text-white mx-auto bg-primary"
            style={{ transform: "translateX(100%)", opacity: 0 }}
          >
            <>
              <Link href="/" className="block py-2 px-4 text-white">
                Home
              </Link>
              <Link href="/about" className="block py-2 px-4 text-white">
                About
              </Link>
              <Link href="/contact" className="block py-2 px-4 text-white">
                Contact
              </Link>

              <Link href="/signin" className="block py-2 px-4 text-white">
                Signin
              </Link>
            </>
          </div>
        )}
      </div>
    </div>
  );
}
