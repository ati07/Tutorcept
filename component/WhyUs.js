import {Button} from '@material-ui/core'
function WhyUs() {
  return (
    <div className="whyus w-full bg-[#becdda] border-2 h-[800px]">
      <div className="flex justify-center w-full h-auto mt-20 text-3xl font-semibold align-center">
        <h1 className="text-4xl font-bold">Why use Tutorcept?</h1>
      </div>
      <div className="w-full grid grid-cols-8 gap-6 justify-center mt-10 item-center lg:px-[150px]">
        <div className="w-full col-span-4 bg-white h-80">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>On-demand tutoring</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 p-4">
          <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>On-demand tutoring</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-4 bg-white h-80">
        <div className="w-full col-span-4 bg-white h-80">
          <div className="grid w-full grid-cols-12 p-4">
            <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>On-demand tutoring</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 p-4">
          <div className="w-full col-span-3">LOGO</div>
            <div className="w-full col-span-9">
              <h1 className='text-2xl font-medium uppercase opacity-70'>On-demand tutoring</h1>
              <p>
                Connect with an online tutor in less than 30 seconds, 24/7. It
                doesn’t matter if you want help with a single problem or you
                need a 3-hour lesson.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    
        <div className='h-[50px] flex items-center justify-around w-full h-auto mt-20'>
            <div className='flex px-10 text-white text-center justify-center w-56 h-[40px] uppercase bg-blue-600 rounded-lg'>
                <Button className='w-full text-white'>Request A Tutor</Button>
            </div>
            <div className='flex px-10 text-white text-center justify-center w-56 h-[40px] uppercase bg-blue-600 rounded-lg'>
                <Button className='w-full '> Request a Demo</Button>
            </div>

        </div>
    </div>
  );
}

export default WhyUs;
