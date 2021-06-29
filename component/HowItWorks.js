import Image from 'next/image'
function HowItWorks() {
    return (
        <div className='howitworks flex flex-col align-center bg-[#f3f5f7] border-2 w-full h-[900px]'>
            <div className='flex justify-center w-full h-auto mt-20 text-3xl font-semibold align-center'>
                <h1 className='text-4xl font-bold'>How Tutorcept Works</h1>
            </div>
            <div className='lg:flex justify-around mt-10 item-center lg:px-[40px]'>
                <div className='bg-[#fff] shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/Tutor.jpg'
                    width={200}
                    height={200}
                    />
                    <h1 className='mt-10'>1. Request</h1>
                    <p>Tell us what you need help with and our smart matching system will connect you with an online tutor. Sign up for a free trial using a debit/credit card.</p>
                </div>
                <div className='bg-[#fff] relative top-14 shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/Tutor.jpg'
                    width={200}
                    height={200}
                    />
                    <h1 className='mt-10'>2. Learn</h1>
                    <p>Get live 1-on-1 help in our advanced
lesson space. Use a virtual whiteboard,
audio/video chat, screen sharing, text
editor and much more.</p>
                </div>
                <div className='bg-[#fff] shadow-2xl lg:p-[30px] p-[10px] rounded-xl text-center lg:w-[350px] w-52'>
                    <Image src='/Tutor.jpg'
                    width={200}
                    height={200}
                    />
                    <h1 className='mt-10'>3. Review</h1>
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
