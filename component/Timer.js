// import Clock from "../react-flip-clock-count-down";
import {useState, useEffect,useRef} from 'react'
import {useRouter} from 'next/router'
import Countdown from "react-countdown";
function Timer() {
    const router = useRouter()
    const [timerDays, setTimerDays]=useState('00')
    const [timerHours, setTimerHours]=useState('00')
    const [timerMinutes, setTimerMinutes]=useState('00')
    const [timerSeconds, setTimerSeconds]=useState('00')

    const [join,setJoin] = useState(false)
    const enter=()=>{
        setJoin(true)
    }
    const close=()=>{
        setJoin(false)

    }
    let interval = useRef()
    const startTimer = ()=>{
        const countDownDate = new Date('August 7, 2021 17:30:00').getTime();
        
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60*24) /( 1000*60*60)));
            const  minutes = Math.floor((distance % (1000 *60* 60)) / (1000*60));
            const seconds = Math.floor((distance %(1000*60)) / 1000)

            if(distance < 0){
                    clearInterval(interval.current);
            }else{
                // setTimerDays(days)
                // setTimerHours(hours)
                // setTimerMinutes(minutes)
                // setTimerSeconds(seconds)
            }
        },1000)
    }
    const [show,setShow] = useState(false)
    useEffect(()=>{
        startTimer();
        if((timerSeconds === '00') && (timerMinutes === '00') && (timerHours === '00') && (timerDays === '05')){
            setShow(true);
            console.log("inside")
        }
        return ()=>{
            clearInterval(interval.current);

        }
    })
    // useEffect(()=>{
        
    // },[timerSeconds])
    // #1e56a0
    return (
        <div className="flex flex-col items-center h-[400px] w-full bg-timerbg timerbg">
            <div className="text-xl text-white pb-5 mt-20 text-center">
                <p>
                Get ready to witness a new era in online tutoring! Join us to know more about this exciting new venture! <br/> Tutorcept anxiously waits for your gracious presence.
                </p>
            </div>
            <div className="text-white h-[50px] grid grid-cols-12 w-[400px] px-10 mt-5 pb-3">
            {/* <Clock endTime={1618237200000} /> */}
            <div className='flex flex-col col-span-3 pt-1 text-2xl font-bold text-center border-2'>{timerDays}<span className='text-sm font-light text-white'>  Days</span> </div>
            <div className='flex flex-col col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerHours}<span className='text-sm font-light text-white'>  Hrs</span> </div>
            <div className='flex flex-col col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerMinutes}<span className='text-sm font-light text-white'>Mins  </span> </div>
            <div className='col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerSeconds}<span className='text-sm font-light text-white'> Secs </span> </div>
            </div>
            <div className='mt-14'>
                {!show?
                <button onClick={()=>router.push('/subscribe')} className='hover:bg-[#1e56a0] bg-green-500 hover:border-0 border-2 font-semibold uppercase w-[200px] p-2 h-[50px] rounded-lg opacity-100 hover:opacity-100 text-white'>
                Register Now
            </button>
                
                :<button onMouseEnter={enter} onMouseOut={close} className='hover:bg-[#1e56a0] bg-green-500 cursor-not-allowed uppercase w-[200px] p-2 h-[50px] rounded-lg opacity-100 hover:opacity-100 text-white'>
                    {!join?'Join the Room':'Wait till time up'}
                </button>}
            </div>
        </div>
    )
}


export default Timer
