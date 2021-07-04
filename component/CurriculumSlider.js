import React, { useRef, useState } from "react";
import Image from 'next/image';
import {Button} from '@material-ui/core'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(()=> {
    AOS.init({duration:3000,
      once: true});
  })
    const board = ['/Board/UP.jpg','/Board/Bihar.jpg','/Board/CBSE.jpg','/Board/IB.jpg',
                    '/Board/ICSE.jpg','/Board/IGCSE.jpg','/Board/NIOP.jpg']
  return (
    <div className="c_slider  justify-center items-center bg-[#d6dce2] w-full h-[1000px] mt-[-150px]">
      <div className="grid grid-cols-12 gap-4 px-4 mt-52">
        
      <div data-aos="fade-right" className="col-span-6">
      <Image src='/Indian Boards.png' width={700} height={600} alt='board'/>
      </div>
      <div  data-aos="fade-left" className="col-span-6">
      <Image src='/Indian Boards.png' width={700} height={600} alt='board'/>
      
      </div>
      <div data-aos="fade-right" className='col-span-2 col-start-5'>
      <Button variant="contained" color="primary">
        And Many More...
      </Button>
      </div>
      <div  data-aos="fade-left" className='col-span-2 col-start-11'>
      <Button variant="contained" color="primary">
        And Many More...
      </Button>
      </div>
      </div>
      {/* <div className="grid grid-cols-6 gap-4">
        {board.map((img,i)=>(
          <div key={i} className="col-span-2">
          <Image src={img} width={250} height={200} alt='board'/>
          </div>
        ))}

      </div>
      <div className="grid grid-cols-6 gap-4">
        {board.map((img,i)=>(
          <div key={i} className="col-span-2">
          <Image src={img} width={250} height={200} alt='board'/>
          </div>
        ))}

      </div>
       */}
      
      {/* <Pentagon/> */}
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
