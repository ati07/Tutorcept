import Header from '../component/Header'
import TopHeader from '../component/TopHeader'
import Banner from '../component/Banner'
import ComingSoon from '../component/ComingSoon'
import WhiteHeader from "../component/WhiteHeader";
import Footer from '../component/Footer'

const howItWorks = () => {
    return (
        <div className="w-full h-[500px]">
      {/* <TopHeader /> */}
      <WhiteHeader/>

     <ComingSoon content='it'/>
     <Footer/>
    </div>
    )
}

export default howItWorks
