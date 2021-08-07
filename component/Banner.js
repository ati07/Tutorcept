import Imaage from 'next/image'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopUp from './PopUp'
// import Typewriter from 'typewriter-effect';
import TypeWriter from "react-typewriter";

function Banner({Title}) {
    // bg-[rgba(26,23,23,.49)]
    useEffect(()=> {
        AOS.init({duration:3000,
            once: true});
    })
    return (
        <div className="banner flex justify-center items-center bg-banner h-[600px] .bg-center w-full object-cover">
            <div className="w-full text-center">
                <h1  className='text-white lg:mt-[-30px] lg:text-8xl lg:pb-7 pb-10 text-4xl '>
                {/* <Typewriter
                options={{
                strings: ['Simplifying Concepts...', '...'],
                autoStart: true,
            // loop: true,
                }}
                    /> */}
                    <TypeWriter
                    typing={0.5}
                    >Simplifying Concepts...
                        
                        </TypeWriter>
                    
                     <br/></h1>
                {/* <h1 data-aos="zoom-out" className='mt-5 lg:text-5xl text-3xl text-white'>Instant Online Tutoring</h1> */}
                <div className='w-full flex justify-center items-center mt-6'>
                   <PopUp  /> 
                </div>
                
            </div>
        </div>
    )
}

export default Banner
