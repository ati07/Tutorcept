import Image from 'next/image'
function HowItWorks() {
    return (
        <div className='howitworks flex flex-col align-center bg-[#f3f5f7] border-2 border-yellow-600 w-full h-[600px]'>
            <div className='flex justify-center w-full h-auto mt-10 text-3xl font-semibold align-center'>
                <h1>How Tutorcept works</h1>
            </div>
            <div className='flex mt-10'>
                <div className='text-center lg:px-[70px] px-3'>
                    <Image src='/Tutor.jpg'
                    width={200}
                    height={200}
                    />
                    <h1 className='mt-10'>1. Request</h1>
                    <p>Tell us what you need help with and our smart matching system will connect you with an online tutor. Sign up for a free trial using a debit/credit card.</p>
                </div>
                <div className='text-center lg:px-[70px] px-3'>
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
                <div className='text-center lg:px-[70px] px-3'>
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
