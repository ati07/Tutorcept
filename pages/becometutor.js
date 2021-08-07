import Header from "../component/Header";
import TopHeader from "../component/TopHeader";
import Banner from "../component/Banner";
import ComingSoon from '../component/ComingSoon'
import WhiteHeader from "../component/WhiteHeader";
import Footer from '../component/Footer'

function becomeTutor() {
  return (
    <div className="w-full h-[500px] items-center flex flex-col">
      {/* <TopHeader /> */}
      <WhiteHeader/>
     {/* <ComingSoon content='it'/> */}
     <div className='flex mt-32 justify-around items-center h-[500px] w-[70%] p-10 rounded-lg shadow-lg'>
       <div className='flex flex-col'>
         <h1 className='text-lg text-gray-500 font-medium mt-3'>Is teaching your passion?</h1>
         <h1 className='text-lg text-gray-500 font-medium'>Do you desire to become a part of the shift towards virtual tutoring?</h1>
         <h1 className='text-lg text-gray-500 font-medium'>Is flexible remote tutoringyour cup of tea?</h1>
         <h1 className='text-lg text-gray-500 font-medium'>You have reached the right destination.</h1>
        
       </div>
       <div className='rounded-lg shadow-lg flex flex-col mt-5 justify-center items-center h-[150px] w-[300px] bg-[#1f4c70]'>
          <h1 className='text-2xl text-white font-medium pb-3'>Join Our Community</h1>
          <button className='bg-green-500 rounded-lg text-white w-[100px] h-[50px]'>
            Join Now
          </button>
        </div>
     </div>
     <Footer/>
    </div>
  );
}
export default becomeTutor;
