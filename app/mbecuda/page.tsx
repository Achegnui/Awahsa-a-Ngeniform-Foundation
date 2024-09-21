"use client";
// import React, { useEffect, useState } from "react";
import Whole from "../public/assets/whole.jpg";
import Link from "next/link";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { Navigation, Pagination } from "swiper";
import "swiper/css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { Navigation, Pagination } from "swiper";
import { items } from "../../utils/data";
const responsiveSettings = [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 300,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];
const Mbecuda = () => {
  //   const [screenSize, setScreenSize] = useState("");

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const width = window.innerWidth;

  //       if (width < 768) {
  //         setScreenSize("sm");
  //       } else if (width < 1024) {
  //         setScreenSize("lg");
  //       } else if (width < 1280) {
  //         setScreenSize("xl");
  //       } else {
  //         setScreenSize("2xl");
  //       }
  //     };

  //     window.addEventListener("resize", handleResize);
  //     handleResize();

  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);
  return (
    <div className="h-full pt-28">
      <h1
        className={`flex justify-center text-6xl md:text-7xl mb-3 font-bold text-orange-900 `}
      >
        The Awahsa'a Ngeniform Foundation (AN)
      </h1>

      <div className="bg-white flex justify-center items-center md:w-1/2 mx-4 md:mx-auto my-auto ">
        <p className="p-5 text-4xl">
          The Awahsa’a Ngeniform Foundation (AN) seeks to support excellence and
          leadership in youth livelihoods, scholarship, culture, and community
          development with a focus on at-risk youth in fragile and conflict
          contexts.
        </p>
      </div>
      {/* <div className="mt-10">
        <Slide
          slidesToScroll={2}
          slidesToShow={2}
          indicators={true}
          arrows={true}
          responsive={responsiveSettings}
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-white flex flex-col justify-center items-center mx-4 md:mx-auto my-auto shadow-4xl border border-b border-gray-400 rounded-md">
                  <div>
                    <Image
                      src={item?.img}
                      alt="App Look"
                      width={0}
                      height={0}
                      className="md:w-60 w-5/6"
                    />
                  </div>

                  <p className="p-5">{item.name}</p>
                  <p>{item.description}</p>

                  <button className="bg-orange-700 text-white text-lg px-6 py-1 rounded-xl mb-2">
                    <Link href="#">Join Us</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </Slide>
      </div> */}
    </div>
  );
};

export default Mbecuda;
