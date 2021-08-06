// import Clock from "../react-flip-clock-count-down";
import {useState, useEffect,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Countdown from "react-countdown";
function PopUp() {
    const [timerDays, setTimerDays]=useState('00')
    const [timerHours, setTimerHours]=useState('00')
    const [timerMinutes, setTimerMinutes]=useState('00')
    const [timerSeconds, setTimerSeconds]=useState('00')
    useEffect(()=> {
      AOS.init({duration:3000,
          once: true});
  })
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
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
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
        <div data-aos="zoom-in" className="flex flex-col justify-center rounded-3xl p-4 items-center h-[300px] w-[400px] bg-[#473f3c6e] border-2">
            <div className="text-2xl text-white pb-5 mt-5 text-center">
                <p className="uppercase font-semibold">
                  Join the Meetup
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
            <div className='mt-12'>
                {show?
                <button onClick={()=>console.log("clicked")} className='hover:bg-green-500 bg-[#1e56a0] uppercase w-[200px] p-2 h-[50px] rounded-lg opacity-100 hover:opacity-100 text-white'>
                Join the Room
            </button>
                
                :<button onMouseEnter={enter} onMouseOut={close} className='hover:bg-green-500 bg-[#1e56a0] cursor-not-allowed uppercase w-[200px] p-2 h-[50px] rounded-lg opacity-100 hover:opacity-100 text-white'>
                    {!join?'Join the Room':'Wait till time up'}
                </button>}
            </div>
        </div>
    )
}


export default PopUp
