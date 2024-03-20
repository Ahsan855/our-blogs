"use client";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import DeskTopMenu from "./AllMenu/DeskTopMenu";
import SmallMenu from "./AllMenu/SmallMenu";
import SearchTap from "./AllMenu/SearchTap";
import HomeMenu from "./AllMenu/HomeMenu";
import logo from "@/images/lazer_logo_white.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="z-[100] relative">
      <div className="bg-primary fixed w-full top-0 px-5 md:px-10 md:py-5">
        <div className="flex items-center justify-between flex-row-reverse md:flex-row md:justify-between">
          {/* social media */}
          <div className="cursor-pointer md:block hidden text-2xl  text-white  ">
            <div className="flex items-center gap-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
              <TfiInstagram />
            </div>
          </div>

          {/*Small divice menu DropdownMenu */}
          <div className="flex items-center gap-x-2">
            <SmallMenu />
            <div className="md:hidden block">
              <ThemeToggle />
            </div>
          </div>

          {/* Logo*/}

          <div className="text-white text-center">
            <Link href="/">
              {/* Responsive logo */}
              <Image src={logo} alt="Logo" className="h-8 md:h-16 w-auto" />
            </Link>
          </div>

          <div className="flex items-center md:gap-x-5">
            <HomeMenu />
            <div className="md:block hidden">
              <SearchTap
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
                setIsOpenMenu={setIsOpenMenu}
              />
            </div>
            {/* desktop menu bar */}
            <DeskTopMenu
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={setIsOpenMenu}
              setSearchOpen={setSearchOpen}
            />
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
