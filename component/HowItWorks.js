import Image from 'next/image'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import {Button} from '@material-ui/core'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HowItWorks() {
    const [stop,setStop] = useState()
    useEffect(()=> {
        AOS.init({duration:3000,
            once: true});
    })
    return (
        <div className='howitworks flex flex-col justify-center items-center bg-[#f3f5f7] w-full h-[700px]'>
            <div className='flex justify-center w-full font-semibold lg:text-3xl align-center'>
                <h1 className='lg:text-4xl text-2xl font-bold text-[#1e56a0]'>How Tutorcept Works</h1>
            </div>
            <div className='lg:flex lg:justify-evenly mt-10 lg:items-center lg:px-[20px]'>
                <div data-aos="fade-up" data-aos-delay="100" className='lg:p-[30px] p-[10px] text-center lg:w-[350px] w-52'>
                    <Image src='/request.jpg'
                    width={350}
                    height={275}
                    />
                    <h1 className='mt-5 text-3xl uppercase opacity-70'>1. Sign In</h1>
                    <p>Tell us what you need help with and our smart matching system will connect you with an online tutor. Sign up for a free trial using a debit/credit card.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500"  className='lg:p-[30px] p-[40px] text-center lg:w-[350px] w-52'>
                    <Image src='/Demo1.png'
                    width={350}
                    height={275}
                    />
                    
                    <h1 className='mt-5 text-3xl uppercase opacity-70'>2. Request A Demo</h1>
                    <p>Get live 1-on-1 help in our advanced
lesson space. Use a virtual whiteboard,
audio/video chat, screen sharing, text
editor and much more.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="1000"className='lg:p-[30px] text-center lg:w-[350px] w-52'>
                    <Image src='/review2.jpg'
                    width={350}
                    height={275}
                    />
                    <h1 className='mt-5 text-3xl uppercase opacity-70'>3. Review</h1>
                    <p>After the lesson is completed, both the
tutor and student have the opportunity to
rate each other, maintaining the quality of
our community.</p>
                </div>
                
            </div>
            <div data-aos="fade-up" className='border-2 border-[#1e56a0] flex text-[#1e56a0] hover:bg-[#1e56a0] hover:text-white text-center items-center justify-center w-[200px] h-[60px] uppercase bg-[#f3f5f7] rounded-full'>
                <Link href='/login'>
                    <a>
                <button className="uppercase"> Request a Demo</button>
                </a>
                </Link>
            </div>
        </div>
    )
}


export default HowItWorks
