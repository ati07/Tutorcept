import {Button} from '@material-ui/core'
import Image from 'next/image'
import {useEffect} from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SchoolIcon from '@material-ui/icons/School';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AOS from 'aos';
import 'aos/dist/aos.css';
function WhyUs() {
  useEffect(()=> {
    AOS.init({duration:3000,
      once: true});
})

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#becdda] border-2 lg:md:h-[700px] h-auto ">
      <div className='relative flex flex-col items-center'>
      <div className="relative flex justify-center pb-5 font-semibold advantage ">
        <h1 className="lg:md:text-3xl text-xl font-bold leading-10 text-center text-[#316ab4]">What Tutorcept Offers</h1>
      </div>
      <div className="w-full grid grid-cols-9 gap-10 justify-center item-center lg:px-[150px]">
        <div data-aos="fade-up" className="w-full lg:md:col-span-3 col-span-9 h-50">
          <div className="grid w-full grid-cols-12 p-4 text-center">
          <div className="w-full col-span-12 pb-5"><SchoolIcon style={{fontSize:60,}}/></div>
            <div className="w-full col-span-12">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Quality Tutors</h1>
              <p className='opacity-60'>
              Good grades are not a distant dream anymore. Our well-qualified instructors will help you achieve them in your learning style.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full lg:md:col-span-3 col-span-9 lg:md:col-start-4 h-50">
          <div className="grid w-full grid-cols-12 p-4 text-center">
            <div className="w-full col-span-12 pb-5"><AttachMoneyIcon style={{fontSize:60,}}/></div>
              <div className="w-full col-span-12">
                <h1 className='text-2xl font-medium uppercase opacity-70'>Affordable Price</h1>
                <p className='opacity-60'>
                You get to choose result-oriented tutoring that fits your budget and plans that can be customized for specific academic needs.
                </p>
            </div>
          </div>
      
        </div>
        <div data-aos="fade-up" className="w-full lg:md:col-span-3 col-span-9 lg:md:col-start-7 h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4 text-center">
            <div className="w-full col-span-12 pb-5"><AccessTimeIcon style={{fontSize:60,}}/></div>
              <div className="w-full col-span-12">
                <h1 className='text-2xl font-medium uppercase opacity-70'>Learn Anytime</h1>
                <p className='opacity-60'>
                Stuck with a problem, count on us anytime. Get online lessons at the convenient time in your busy schedule. 
                </p>
            </div>
          </div>
      
        </div>
        <div data-aos="fade-up" className="w-full lg:md:col-span-3 col-span-9 lg:md:col-start-1 h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4 text-center">
            <div className="w-full col-span-12 pb-5"><CastForEducationIcon style={{fontSize:60,}}/></div>
            <div className="w-full col-span-12">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Expert&apos;s Resources</h1>
              <p className='opacity-60'>
              You just bring in your brain and let our resources do the best. Our resources are carefully hand-picked to make you excel beyond the classroom.
              </p>
            </div>
          </div>
      
        </div>
        <div data-aos="fade-up" className="w-full lg:md:col-span-3 col-span-9 lg:md:col-start-4 h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4 text-center">
            <div className="w-full col-span-12 pb-5"><Image src='/Break1.png' width={70} height={60} style={{fontSize:60,}}/></div>
            <div className="w-full col-span-12">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Break The Barriers</h1>
              <p className='opacity-60'>
              Let not any language be a barrier in your learning. We&apos;ll teach in the tongue you speak. Currently we offer English and Hindi Tutoring.
              </p>
            </div>
          </div>
      
        </div>
        <div data-aos="fade-up" className="w-full lg:md:col-span-3 col-span-9 lg:md:col-start-7 h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4 text-center">
            <div className="w-full col-span-12 pb-5"><Image src='/medal.png' width={70} height={60} style={{fontSize:60,}}/></div>
            <div className="w-full col-span-12">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Accolades & Appreciation</h1>
              <p className='opacity-60'>
              A highly motivated mind strives for the best grades. Our tutor believes in rewarding the child time to time in order to cherish their efforts and make them confident.
              </p>
            </div>
          </div>
      
        </div>       
      </div>
        
        </div>
      {/* <Image src="/pentagon.jpg" width={300} height={300} alt='image'/> */}

    </div>
  );
}

export default WhyUs;
