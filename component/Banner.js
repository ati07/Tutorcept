import Imaage from 'next/image'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Banner({Title}) {
    // bg-[rgba(26,23,23,.49)]
    useEffect(()=> {
        AOS.init({duration:3000,
            once: true});
    })
    return (
        <div className="banner flex justify-center align-center bg-banner h-[600px] .bg-center w-full object-cover">
            <div className="w-full text-center">
                <h1 data-aos="zoom-in" className='lg:mt-56 mt-64 text-white lg:text-8xl text-5xl '>Simplifying Concepts... <br/></h1>
                <h1 data-aos="zoom-out" className='mt-5 lg:text-5xl text-3xl text-white'>Instant Online Tutoring</h1>
            </div>
        </div>
    )
}

export default Banner
