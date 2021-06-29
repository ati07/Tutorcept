import Imaage from 'next/image'
function Banner() {
    // bg-[rgba(26,23,23,.49)]
    return (
        <div className="banner flex justify-center align-center bg-banner h-[600px] .bg-center w-full object-cover">
            <div className="w-full text-center">
                <h1 className='text-8xl text-white mt-48 '>Get better grades</h1>
                <h1 className='text-5xl text-white mt-5'>Instant online tutoring</h1>
            </div>
        </div>
    )
}

export default Banner
