import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
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
    <div className="h-[500px] w-full bg-[#b8e0be7a] border-2 pt-10">
      <Swiper  navigation={true} className="mySwiper">
      {[1,2,3,4,5,6,7,8,9].map((slides,i)=>(
          
        <SwiperSlide key={i}>
          <div className='h-[300px] px-12 flex flex-col items-center justify-center'>
            <div>
              <h1 className='text-2xl'>Student says about us</h1>
            </div>
            <div className='h-[100px] flex justify-center items-center'
            ><FormatQuoteIcon style={{
                transform:'rotate(180deg)' }}/>
            lorem12zsdfgvsergaegaergeatrg aerg ar g aer g
            lorem12zsdfgvsergaegaergeatrg aerg ar g aer g<FormatQuoteIcon /></div>
            <div className='flex items-center justify-center'>
              <Image src="/free-Logo.png" width={50} height={50} alt="Avatar" />
              <div className='flex flex-col pl-2 text-left'>
              <h1 className='text-md'>Atiurrahman</h1>
              <p className='text-sm'>Btech Mechanical engimnerering</p>
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
