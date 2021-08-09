import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import WhiteHeader from "../component/WhiteHeader";
import Footer from "../component/Footer";

const About = () => {
    const router =useRouter()
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setShow(false);
  };
  const submit = () => {
    router.push('/completeprofile')
    // if (!email.includes("@")) {
    //   setShow(true);
    //   console.log("INsideIF");
    // }
  };
  console.log(email);
  return (
    <div className="flex flex-col items-center justify-center h-auto m-auto lg:md:flex lg:md:items-center lg:md:justify-center">
      <WhiteHeader/>
      <div className="grid lg:md:m-0 w-full lg:md:h-[600px] h-auto grid-cols-12 gap-4 lg:px-5 lg:md:mt-[100px] mt-[50px] lg:md:mb-[80px]">
        {/* <div className='lgshape w-[100px] h-[100px] bg-red-400'></div> */}

        {/* <div className='animate-spin lgsquare w-[100px] h-[100px] bg-gray-400'></div> */}
        <div className='w-0 h-0 md:w-auto lg:md:mt-[100px] lg:md:m-0 md:col-span-7 md:col-start-1 lg:col-span-6'>
          <Image src='/about.jpg' className='' width={800} height={600} alt='ABoutImage'/>
        </div>
        <div className="flex justify-center w-full h-auto col-span-12 lg:md:flex lg:md:justify-center md:col-span-4 lg:col-span-6 rounded-2xl">
          <div className="grid lg:md:h-[400px] h-auto px-5 py-2 text-center grid-col-12">
            <div className="col-span-12 pb-5">
                <h1 className='text-6xl font-medium text-gray-500'>About Us</h1>
            </div>
            <div className="col-span-12 text-justify text-base">
                <p>
                Tutorcept was founded with the sole objective of helping students achieve their full potential. Our honest and dedicated tutors strive to maximize academic potential and promote student’s success in a safe and welcoming environment. <br/><br/>

The pandemic has re-shaped the whole teaching-learning process across the globe. Students, tutors, and even parents have become well acquainted with the great success of online tutoring. Despite all the perks online tutoring offers, it lacks some vital elements of traditional brick-and-mortar schools. We aim to fill the void and make virtual tutoring come very close in efficiency and even go beyond the walls of the classroom. We desire to nurture a long-lasting impact of education and student-tutor relations beyond their prescribed courses via our platform breaking all the bounds of distances. We have taken an oath to harness the potential of online tutoring in all spheres of education and make it fruitful for the upcoming digital citizens of earth.<br/><br/>

Our goal is to provide affordable tutoring services to all students without sacrificing the quality of service. Our research and development team work on curating the best offers one deserves.<br/><br/>

The whole world has seen a shift towards digitalization leaving behind education which is indeed the backbone of civilization. We pledge to push tutoring services into the era of virtualization. To achieve this utopian vision- we solicit your unconditional cooperation and moral support.

                </p>
            </div>
                  
          </div>
        </div>
      </div>
      {/* <div className="lgcircle relative top-0 w-[300px] h-[300px] bg-blue-400"></div> */}
    <Footer/>
    </div>
  );
};

export default About;
