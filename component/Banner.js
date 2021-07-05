import Imaage from 'next/image'
function Banner({Title}) {
    // bg-[rgba(26,23,23,.49)]
    return (
        <div className="banner flex justify-center align-center bg-banner h-[600px] .bg-center w-full object-cover">
            <div className="w-full text-center">
                <h1 className='mt-56 text-white text-8xl '>Simplifying Concepts <br/></h1>
                <h1 className='mt-5 text-5xl text-white'>By Online Tutoring...</h1>
            </div>
        </div>
    )
}

export default Banner
