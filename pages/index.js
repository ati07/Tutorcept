import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'

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
