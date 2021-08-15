import {useRouter} from 'next/router'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
function Message({message}) {
    const router = useRouter()
    return (
        <div className='flex flex-col h-[300px] w-full text-center justify-center items-center'>
            <p className='lg:md:text-4xl text-sm w-auto text-gray-800 shadow-lg font-medium lg:md:w-[1000px]'>
                <Fab style={{backgroundColor:'green',color:'white'}}>
                <CheckIcon/>
                </Fab>
                {message}</p>
            <div className='mt-5 w-[200px] h-[100px] rounded-lg cursor-pointer shadow-lg'>
                <button className='bg-[#2854cebb] text-white w-full text-xl h-full rounded-lg ' onClick={()=>router.push('/')}>
                    Go To Home
                </button>
            </div>
        </div>
    )
}

export default Message
