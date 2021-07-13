// import Clock from "../react-flip-clock-count-down";
import {useState, useEffect,useRef} from 'react'
import Countdown from "react-countdown";
function Timer() {
    const [timerDays, setTimerDays]=useState('00')
    const [timerHours, setTimerHours]=useState('00')
    const [timerMinutes, setTimerMinutes]=useState('00')
    const [timerSeconds, setTimerSeconds]=useState('00')

    let interval = useRef()
    const startTimer = ()=>{
        const countDownDate = new Date('May 30, 2022 00:00:00').getTime();
        
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
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        },1000)
    }
    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current);

        }
    })
    // #1e56a0
    return (
        <div className="flex justify-center items-center h-[300px] w-full bg-timerbg timerbg">
            <div className="text-white h-[50px] grid grid-cols-12 w-[400px] px-10">
            {/* <Clock endTime={1618237200000} /> */}
            <div className='flex flex-col col-span-3 pt-1 text-2xl font-bold text-center border-2'>{timerDays}<span className='text-sm font-light text-white'>  Days</span> </div>
            <div className='flex flex-col col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerHours}<span className='text-sm font-light text-white'>  Hrs</span> </div>
            <div className='flex flex-col col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerMinutes}<span className='text-sm font-light text-white'>Mins  </span> </div>
            <div className='col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerSeconds}<span className='text-sm font-light text-white'> Secs </span> </div>
            </div>
        </div>
    )
}


export default Timer
