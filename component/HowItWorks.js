import Image from 'next/image'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HowItWorks() {
    useEffect(()=> {
        AOS.init({duration:3000});
    })
    return (
        <div className='howitworks flex flex-col align-center bg-[#f3f5f7] border-2 w-full h-[900px]'>
            <div className='flex justify-center w-full h-auto mt-20 text-3xl font-semibold align-center'>
                <h1 className='text-4xl font-bold text-[#1e56a0] uppercase'>How Tutorcept Works</h1>
            </div>
            <div className='lg:flex justify-around mt-10 item-center lg:px-[40px]'>
                <div data-aos="fade-right" className='bg-[#fff] shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/request.jpg'
                    width={300}
                    height={300}
                    />
                    <h1 className='mt-5 text-4xl opacity-70 uppercase'>1. Request</h1>
                    <p>Tell us what you need help with and our smart matching system will connect you with an online tutor. Sign up for a free trial using a debit/credit card.</p>
                </div>
                <div data-aos="fade-down" className='bg-[#fff] relative top-14 shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/Tutor.jpg'
                    width={300}
                    height={300}
                    />
                    <h1 className='mt-5 text-4xl opacity-70 uppercase'>2. Learn</h1>
                    <p>Get live 1-on-1 help in our advanced
lesson space. Use a virtual whiteboard,
audio/video chat, screen sharing, text
editor and much more.</p>
                </div>

                <div data-aos="fade-left"className='bg-[#fff] relative top-24 shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/review1.jpg'
                    width={300}
                    height={300}
                    />
                    <h1 className='mt-5 text-4xl opacity-70 uppercase'>3. Review</h1>
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
