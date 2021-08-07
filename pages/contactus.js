import TopHeader from '../component/TopHeader'
import Header from '../component/Header'
import Banner from '../component/Banner'
import ComingSoon from '../component/ComingSoon'
import ContactUs from '../component/ContactUs'
import WhiteHeader from "../component/WhiteHeader";

function contactus() {
    return (
        <div className='bg-white w-full h-[600px]'>
            {/* <TopHeader/>      */}
            <WhiteHeader/>
            <ContactUs/>
        </div>
    )
}

export default contactus
