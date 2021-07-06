import Image from 'next/image'
import {useState,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HowItWorks() {
    const [stop,setStop] = useState()
    useEffect(()=> {
        AOS.init({duration:3000,
            once: true});
    })
    return (
        <div className='howitworks flex flex-col align-center bg-[#f3f5f7] border-2 w-full h-[900px]'>
            <div className='flex justify-center w-full h-auto mt-16 text-3xl font-semibold align-center'>
                <h1 className='text-4xl font-bold text-[#316ab4] uppercase'>How Tutorcept Works</h1>
            </div>
            <div className='lg:flex justify-around mt-10 item-center lg:px-[40px]'>
                <div data-aos="fade-right" className='bg-[#fff] shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/request.jpg'
                    width={350}
                    height={275}
                    />
                    <h1 className='mt-5 text-4xl uppercase opacity-70'>1. Request</h1>
                    <p>Tell us what you need help with and our smart matching system will connect you with an online tutor. Sign up for a free trial using a debit/credit card.</p>
                </div>
                <div data-aos="fade-down" className='bg-[#fff] relative top-14 shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/Tutor.jpg'
                    width={350}
                    height={275}
                    />
                    <h1 className='mt-5 text-4xl uppercase opacity-70'>2. Learn</h1>
                    <p>Get live 1-on-1 help in our advanced
lesson space. Use a virtual whiteboard,
audio/video chat, screen sharing, text
editor and much more.</p>
                </div>

                <div data-aos="fade-left"className='bg-[#fff] relative top-24 shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/review2.jpg'
                    width={350}
                    height={275}
                    />
                    <h1 className='mt-5 text-4xl uppercase opacity-70'>3. Review</h1>
                    <p>After the lesson is completed, both the
tutor and student have the opportunity to
rate each other, maintaining the quality of
our community.</p>
                </div>
                
            </div>
        </div>
    )
}


export default HowItWorks
