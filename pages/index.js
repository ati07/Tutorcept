import Head from 'next/head'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HowItWorks from '../Components/HowItWorks'
import WhyUs from '../Components/WhyUs'

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
     <Footer/>
     
    </div>
  )
}
