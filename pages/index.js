import Head from 'next/head'
import {useEffect} from 'react'
import Banner from '../component/Banner'
import CurriculumSlider from '../component/CurriculumSlider'
import Footer from '../component/Footer'
import Header from '../component/Header'
import HowItWorks from '../component/HowItWorks'
import Testing from '../component/Testing'
import WhyUs from '../component/WhyUs'
import TopHeader from '../component/TopHeader'
import Testemonial from '../component/Testemonial'
import Timer from '../component/Timer'
export default function Home() {
  useEffect(()=>{
    // localStorage.clear();
  })
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Tutorcept</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      {/* <TopHeader/>      */}
      <Header cr={false}/>
     <Banner Title="Comming Soon"/>
     
     <HowItWorks/>
     <Timer/>
     <WhyUs/>
     <CurriculumSlider/>
     {/* <Testing/> */}
     
     <Testemonial/>
     <div className='mt-[-90px] w-full'>
       <Footer/>
     </div>
     
    </div>
  )
}
