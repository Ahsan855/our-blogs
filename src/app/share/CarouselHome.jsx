"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import thumb1 from "@/images/thumb-3.jpg";
import thumb2 from "@/images/thumb-4.jpg";
import thumb3 from "@/images/thumb-6.jpg";
import thumb4 from "@/images/thumb-1.jpg";
import thumb5 from "@/images/thumb-2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHome = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Update settings based on window width
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 4; // Default for large screens

      if (screenWidth < 640) {
        newSlidesToShow = 1; // For small screens (phones)
      } else if (screenWidth < 1024) {
        newSlidesToShow = 2; // For tablets
      }

      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial state
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow]);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container mt-28 px-5">
      <Slider
        ref={sliderRef}
        {...settings}
        className="flex flex-row"
        key={slidesToShow} // Ensure re-render when slidesToShow changes
      >
        {[thumb1, thumb2, thumb3, thumb4, thumb5].map((thumb, index) => (
          <div key={index} className="p-4">
            <div className="flex items-start gap-x-3">
              <div className="relative rounded-md overflow-hidden">
                <Image
                  className="transition-transform rounded-md hover:scale-110"
                  src={thumb}
                  alt="Image"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h1 className="text-lg xl:text-xl hover:text-primary cursor-pointer">
                  A hardcore-punk provocateur looks back and laughs
                </h1>
                <div className="flex justify-start items-center text-sm text-[#b5c8dd]">
                  <p>25 April</p>
                  <p className="ms-5">26k Views</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHome;
