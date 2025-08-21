"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import chair from "../../../assets/chair.png";
import chair2 from "../../../assets/office chair.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="bg-[#F08B51] py-10 md:h-[550px] lg:h-[720px]">
            <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row space-y-3 gap-5 items-center justify-between h-full">
              {/* Text */}
              <div className="flex-1 justify-center space-y-2">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                  Your Perfect Chair Awaits
                </h1>
                <p className="text-xl font-bold">
                  Discover our premium collection of chairs designed to blend comfort with elegance for every space.
                </p>
                <button className="px-3 py-2 bg-[#239BA7] text-xl font-bold rounded-2xl">
                  Shop Now
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src={chair}
                  alt="chair"
                  width={500}
                  height={500}
                  className="object-contain  rounded-full"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#BB6653] py-10 md:h-[550px] lg:h-[720px]">
            <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row space-y-3 gap-5 items-center justify-between h-full">
              {/* Text */}
              <div className="flex-1 justify-center space-y-2">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                  Sit in Style, Comfort 
                </h1>
                <p className="text-xl font-bold">
                  From cozy corners to office setups, find the chair that complements your lifestyle.
                </p>
                <button className="px-3 py-2 bg-[#239BA7] text-xl font-bold rounded-2xl">
                  Browse Collection
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src={chair2}
                  alt="chair"
                  width={500}
                  height={500}
                  className="object-contain  rounded-full"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>






      </Swiper>
    </>
  );
}
