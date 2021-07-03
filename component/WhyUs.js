import {Button} from '@material-ui/core'
import Image from 'next/image'
function WhyUs() {
  return (
    <div className="whyus flex flex-col items-center justify-center w-full bg-[#becdda] border-2 h-[1300px] mt-[-200px]">
      <div className='flex flex-col relative top-[-130px] items-center'>
      <div className="advantage flex w-[300px] pt-12 justify-center h-[250px] font-semibold bg-[#2c5698] relative top-[350px]">
        <h1 className="text-3xl mt-6 leading-10 font-bold text-center text-white uppercase">Advantage <br/>of <br/>Tutorcept</h1>
      </div>
      <div className="w-full grid grid-cols-8 gap-10 gap-y-20 justify-center item-center lg:px-[150px]">
        <div className="w-full col-span-3 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
          <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Quality Tutors</h1>
              <p className='opacity-60'>
              Good grades are not a distant dream anymore. Our well-qualified instructors will help you achieve them in your learning style.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-3 col-start-6 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
              <div className="w-full col-span-9">
                <h1 className='text-2xl font-medium uppercase opacity-70'>Affordable Price</h1>
                <p>
                You get to choose result-oriented tutoring that fits your budget and plans that can be customized for specific academic needs.
                </p>
            </div>
          </div>
      
        </div>
        <div className="w-full col-span-3 col-start-1 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
              <div className="w-full col-span-9">
                <h1 className='text-2xl font-medium uppercase opacity-70'>Learn Anytime</h1>
                <p>
                Stuck with a problem, count on us anytime. Get online lessons at the convenient time in your busy schedule. 
                </p>
            </div>
          </div>
      
        </div>
        <div className="w-full col-span-3 col-start-6 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Expert&apos;s Resources</h1>
              <p>
              You just bring in your brain and let our resources do the best. Our resources are carefully hand-picked to make you excel beyond the classroom.
              </p>
            </div>
          </div>
      
        </div>
        <div className="w-full col-span-4 col-start-3 bg-white shadow-lg h-50 rounded-xl gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Break The Barriers</h1>
              <p>
              Let not any language be a barrier in your learning. We&apos;ll teach in the tongue you speak. Currently we offer English and Hindi Tutoring.
              </p>
            </div>
          </div>
      
        </div>    
      </div>
        <div className='h-[50px] flex items-center justify-around w-full mt-10'>
            <div className='whyusbutton flex px-10 text-white text-center justify-center w-[280px] h-[60px] uppercase bg-blue-600 rounded-lg'>
                <Button className='w-full text-white'>Request A Tutor</Button>
            </div>
            <div className='whyusbutton flex px-10 text-white text-center justify-center w-[280px] h-[60px] uppercase bg-blue-600 rounded-lg'>
                <Button className='w-full '> Request a Demo</Button>
            </div>

        </div>
        </div>
      {/* <Image src="/pentagon.jpg" width={300} height={300} alt='image'/> */}

    </div>
  );
}

export default WhyUs;
