import {Button} from '@material-ui/core'
function WhyUs() {
  return (
    <div className="whyus flex flex-col items-center justify-center w-full bg-[#becdda] border-2 h-[1300px] mt-[-200px]">
      <div className='flex flex-col relative top-[-130px] items-center'>
      <div className="animate-bounce advantage flex w-[400px] pt-4 justify-center h-[200px] font-semibold bg-[#2c5698] relative top-[380px]">
        <h1 className="text-3xl font-bold text-center text-white uppercase">Advantage <br/>of <br/>Tutorcept</h1>
      </div>
      <div className="w-full grid grid-cols-8 gap-10 gap-y-20 justify-center item-center lg:px-[150px]">
        <div className="w-full col-span-3 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
          <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Quality Tutors</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
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
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
                </p>
            </div>
          </div>
      
        </div>
        <div className="w-full col-span-3 ml-[77px] col-start-1 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
              <div className="w-full col-span-9">
                <h1 className='text-2xl font-medium uppercase opacity-70'>Learn Anytime</h1>
                <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
                </p>
            </div>
          </div>
      
        </div>
        <div className="w-full col-span-3 ml-[-77px] col-start-6 bg-white shadow-lg rounded-xl h-50 gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Expert&apos;s Resources</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
              </p>
            </div>
          </div>
      
        </div>
        <div className="w-full col-span-4 col-start-3 bg-white shadow-lg h-50 rounded-xl gap-y-20">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>Break The language Barriers</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
              </p>
            </div>
          </div>
      
        </div>
      
      
      </div>

        <div className='h-[50px] flex items-center justify-around w-full mt-10'>
            <div className='flex px-10 text-white text-center justify-center w-56 h-[40px] uppercase bg-blue-600 rounded-lg'>
                <Button className='w-full text-white'>Request A Tutor</Button>
            </div>
            <div className='flex px-10 text-white text-center justify-center w-56 h-[40px] uppercase bg-blue-600 rounded-lg'>
                <Button className='w-full '> Request a Demo</Button>
            </div>

        </div>
        </div>
    </div>
  );
}

export default WhyUs;
