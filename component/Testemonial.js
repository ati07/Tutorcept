import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Testemonial() {
  return (
    <div className="h-[500px] w-full bg-[#bde2c3] border-2 pt-10">
      <Swiper navigation={true} loop={true} className="mySwiper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((slides, i) => (
          <SwiperSlide key={i}>
            <div className="h-[400px] px-12 flex flex-col items-center justify-center">
              <div className="bg-[#1e56a0] rounded-full h-[60px] w-[60px] flex justify-center items-center">
                <FormatQuoteIcon
                  style={{
                    transform: "rotate(180deg)",
                    // marginTop: "-15px",
                    color: "white",
                    fontSize: "50px",
                  }}
                />
              </div>
              <div className='mb-5'>
                <h1 className="lg:md:text-2xl text-lg">Your words of love for us</h1>
              </div>

              <div className="h-[150px] flex justify-center text-xs lg:md:text-4xl text-justify lg:md:w-[615px] w-auto lg:md:mt-[10px]">
                <p>Waiting anxiously to hear from you</p>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                  
                </p> */}
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/Free-Logo.png"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
                <div className="flex flex-col pl-2 text-left">
                  <h1 className="text-md">Your Name</h1>
                  {/* <p className="text-sm">Btech Mechanical Engineering</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
    </div>
  );
}
