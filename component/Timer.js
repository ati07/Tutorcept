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
    return (
        <div className="bg-blue-500 flex justify-center items-center h-[300px] w-full">
            <div className="bg-white h-[50px] grid grid-cols-12 w-[400px] px-10">
            {/* <Clock endTime={1618237200000} /> */}
            <div className='col-span-3 text-2xl pt-1 text-center border-2'>{timerDays}</div>
            <div className='col-span-1 text-2xl pt-1 text-center'>:</div>
            <div className='col-span-2 text-2xl pt-1 text-center border-2'>{timerHours}</div>
            <div className='col-span-1 text-2xl pt-1 text-center'>:</div>
            <div className='col-span-2 text-2xl pt-1 text-center border-2'>{timerMinutes}</div>
            <div className='col-span-1 text-2xl pt-1 text-center'>:</div>
            <div className='col-span-2 text-2xl pt-1 text-center border-2'>{timerSeconds}</div>
            </div>
        </div>
    )
}


export default Timer
