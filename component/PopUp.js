// import Clock from "../react-flip-clock-count-down";
import {useState, useEffect,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Countdown from "react-countdown";
import Link from "next/link";
import { FaCommentsDollar } from 'react-icons/fa';
function PopUp() {
    const [timerDays, setTimerDays]=useState('00')
    const [timerHours, setTimerHours]=useState('00')
    const [timerMinutes, setTimerMinutes]=useState('00')
    const [timerSeconds, setTimerSeconds]=useState('00')
    useEffect(()=> {
      AOS.init({duration:3000,
          once: true});
  },[])
    const [join,setJoin] = useState(false)
    const enter=()=>{
        setJoin(true)
    }
    const close=()=>{
        setJoin(false)

    }
    //getting lecture data
    const [data,setData] = useState('')
    const [sTime,setSTime] = useState('00')

    // const [Y,setY] = useState('00')
    // const [M,setM] = useState('00')
    // const [D,setD] = useState('00')

    useEffect(() => {
        if (localStorage.getItem("PersonalDetail")) {
          const user = JSON.parse(localStorage.getItem("PersonalDetail"));
          setUser(user);
        }
        if(localStorage.getItem("AllLectures")){
          const allLectures = JSON.parse(localStorage.getItem("AllLectures"));
          setData(allLectures);
        }
      }, []);
      useEffect(()=> {
        if(data){
            console.log("data",data[0].scheduledUpTime)
            setSTime(data[0].scheduledUpTime)
    //         const dt = data[0].scheduledUpTime.split('T')
    //   const date = dt[0].split('-')
    //   const Y= date[0]
    //   console.log("Y",parseInt(Y))
    //   setY(Y)

    //   const M = date[1]
    //   console.log("M",parseInt(M))

    //   setM(M)
    //   const D = date[2]
    //   console.log("D",parseInt(D))

    //   setD(D)
  
    //   const sTime = dt[1].split(':')
    //   console.log("sTime",sTime)
        }
      },[data])
    

    let interval = useRef()
    const startTimer = ()=>{
        
        // console.log('YMD',Y,M,D)
        // const countDownDate = new Date('August 20, 2021 14:00:00').getTime();
        const countDownDate1 = new Date(sTime).getTime();
        // console.log('countdown',countDownDate)
        // console.log('countdown1',countDownDate1)

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDownDate1 - now;

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
        if( ( timerSeconds < 10 || timerSeconds < '10' ) && (timerMinutes === 0 || timerMinutes === '00')){
            if((timerHours === 0 || timerHours === '00') && (timerDays === 0 || timerDays === '00')){
               setShow(true);
            console.log("inside") 
            }else{
                setShow(false);
            }
            
        }else{
            setShow(false);
        }
        // console.log("timerSeconds",timerSeconds)
        // console.log("timerMinutes",timerMinutes)
        // console.log("Outside")
        // console.log("timerHours",timerHours)
        // console.log("timerDays",timerDays)

        return ()=>{
            clearInterval(interval.current);

        }
    })
    // useEffect(()=>{
        
    // },[timerSeconds])
    // #1e56a0
    
    return (
        <div data-aos="zoom-in" className="flex flex-col justify-center rounded-3xl p-4 items-center lg:md:h-[300px] lg:md:w-[400px] h-auto w-[250px]  bg-[#473f3c6e] border-2">
            <div className="lg:md:text-2xl text-lg text-white pb-5 mt-5 text-center">
                <p className="uppercase font-semibold">
                  {/* {data?data[0].title:'No Lecture'} */}
                  No Event
                </p>
            </div>
            <div className="text-white lg:md:h-[50px] grid grid-cols-12 lg:md:w-[400px] h-[25px] w-[300px] px-10 mt-5 pb-3">
            {/* <Clock endTime={1618237200000} /> */}
            <div className='flex flex-col col-span-3 pt-1 text-2xl font-bold text-center border-2'>{timerDays}<span className='text-sm font-light text-white'>  Days</span> </div>
            <div className='flex flex-col col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerHours}<span className='text-sm font-light text-white'>  Hrs</span> </div>
            <div className='flex flex-col col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerMinutes}<span className='text-sm font-light text-white'>Mins  </span> </div>
            <div className='col-span-1 pt-1 text-2xl text-center'>:</div>
            <div className='flex flex-col col-span-2 pt-1 text-2xl font-bold text-center border-2'>{timerSeconds}<span className='text-sm font-light text-white'> Secs </span> </div>
            </div>
            <div className='lg:md:mt-12 mt-12'>
                {show?
                <Link href=''>
                {/* <a href='https://zoom.us/j/6152607417?pwd=bzVMSTNiWTlTQXZHTmhrVmY1em41UT09' target="_blank" rel="noreferrer"> */}
                <button onClick={()=>console.log("clicked")} className='hover:bg-green-500 bg-[#1e56a0] uppercase w-[200px] p-2 h-[50px] cursor-pointer rounded-lg opacity-100 hover:opacity-100 text-white'>
                Join the Room
            </button>
            {/* </a> */}
            </Link>
                
                :<button onMouseEnter={enter} onMouseOut={close} className='hover:bg-green-500 bg-[#1e56a0] cursor-not-allowed uppercase w-[200px] p-2 h-[50px] rounded-lg opacity-100 hover:opacity-100 text-white'>
                    {join?'Join the Room':'Wait till time up'}
                </button>}
            </div>
        </div>
    )
}


export default PopUp
