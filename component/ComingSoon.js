import Link from 'next/link'
function ComingSoon({content}) {
    return (
        <div className="bg-white w-full h-[300px] grid-cols-12 grid px-20 mt-24">
            <div className="col-span-12 pt-16 text-center text-black">
                <h1 className="text-6xl">We appreciate your interest!</h1>
            </div>
            <div className="col-span-12 text-center text-black px-5 ">
               <h1 className="text-xl">
               We request you to have patience, very soon we will reveal our {content}.
                </h1>
            </div>
            <div className="col-span-12 text-center text-blue-600 px-5 h-[50px] ">
               <Link href='/'>
               <button className="text-xl text-white bg-blue-600 hover:bg-red-400 rounded-xl h-[50px] w-40">
                   Find More
                </button>
                </Link>
            </div>
        </div>
    )
}

export default ComingSoon
