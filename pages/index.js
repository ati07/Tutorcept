import Head from 'next/head'
import Banner from '../component/Banner'
import CurriculumSlider from '../component/CurriculumSlider'
import Footer from '../component/Footer'
import Header from '../component/Header'
import HowItWorks from '../component/HowItWorks'
import Testing from '../component/Testing'
import WhyUs from '../component/WhyUs'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Tutorcept</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>        
     <Header/>
     <Banner/>
     <HowItWorks/>
     <WhyUs/>
     <CurriculumSlider/>
     {/* <Testing/> */}
     <Footer/>
     
    </div>
  )
}
