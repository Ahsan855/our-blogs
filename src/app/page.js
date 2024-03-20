"use client";

import HomePage from "./home/page";
import CarouselHome from "./share/CarouselHome";
import FooterTop from "./share/FooterTop";
import LeftSide from "./share/LeftSide";

export default function Home() {
  return (
    <div className="w-full mx-auto ">
      <CarouselHome />

      <div className="flex md:flex-row mt-5 border-t-[1px] border-gray-300 flex-col  md:items-start justify-between ">
        <LeftSide />
        <HomePage />
      </div>
      <FooterTop />
    </div>
  );
}
