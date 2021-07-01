import React, { useRef, useState } from "react";
import Image from 'next/image'
import Flags from 'country-flag-icons/react/3x2'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay,Pagination, Navigation } from "swiper/core";
import Pentagon from "./Pentagon";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const CurriculumSlider = () => {
    const board = ['/Board/UP.jpg','/Board/Bihar.jpg','/Board/CBSE.jpg','/Board/IB.jpg',
                    '/Board/ICSE.jpg','/Board/IGCSE.jpg','/Board/NIOP.jpg']
  return (
    <div className="c_slider flex flex-col justify-center items-center bg-[#eaeced] w-full h-[1000px] mt-[-150px]">
      <Pentagon/>
      {/* <div className="flex flex-col justify-center items-center mt-[170px] h-[600px]">
        <div className='flex pb-5'>
            <Flags.IN title="India" className="w-[60px] px-2"/>
          <h1 className="flex text-4xl text-white uppercase">
          Indian Curriculum</h1>
        </div>
        <div className='slider w-[100%]'>
        <Swiper
        Autoplay={true}
        autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >{board.map((img,i)=>(
            <SwiperSlide key={i}><Image src={img} width={200} height={300} alt='imgboard'/></SwiperSlide>
        ))}
        </Swiper>
        </div>
        <div className='flex pb-5 mt-10 '>
        <Flags.US title="United States" className="w-[60px] px-2"/>
          <h1 className="text-4xl text-white uppercase">
          
              USA Curriculum</h1>
        </div>
        <Swiper
        autoplay={{
            "delay": 2500,
            "disableOnInteraction": false,
            reverseDirection:true
          }}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default CurriculumSlider;
