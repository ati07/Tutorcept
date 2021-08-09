import {useRouter} from 'next/router'
function Message({message}) {
    const router = useRouter()
    return (
        <div className='flex flex-col h-[300px] w-full text-center justify-center items-center'>
            <p className='text-4xl text-gray-500 font-medium w-[1000px]'>{message}</p>
            <div className='mt-5 w-[200px] h-[100px] rounded-lg cursor-pointer shadow-lg'>
                <button className='bg-[#2854cebb] text-white w-full text-xl h-full rounded-lg ' onClick={()=>router.push('/')}>
                    Go To Home
                </button>
            </div>
        </div>
    )
}

export default Message
