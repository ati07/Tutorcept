import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LoginComponent = () => {
    const router =useRouter()
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setShow(false);
  };
  const submit = () => {
    router.push('/completeprofile')
    // if (!email.includes("@")) {
    //   setShow(true);
    //   console.log("INsideIF");
    // }
  };
  console.log(email);
  return (
    <div className="flex flex-col items-center justify-center h-auto py-12 m-auto lg:md:flex lg:md:items-center lg:md:justify-center">
      <div className="grid lg:md:p-0 lg:md:m-0 w-full h-[500px] grid-cols-12 overflow-hidden px-50">
        {/* <div className='lgshape w-[100px] h-[100px] bg-red-400'></div> */}

        {/* <div className='animate-spin lgsquare w-[100px] h-[100px] bg-gray-400'></div> */}
        <div className='w-0 h-0 md:w-auto lg:md:m-0 md:col-span-7 md:col-start-1 lg:col-span-7'>
          <Image src='/otp.png' className='' width={800} height={550} alt='otpImage'/>
        </div>
        <div className="flex items-center justify-center w-full h-auto col-span-12 lg:md:flex lg:md:items-center lg:md:justify-center md:col-span-4 lg:col-start-8 rounded-2xl">
          <div className="grid h-[400px] px-3 py-2 text-center grid-col-12">
            <div className="col-span-12 w-full h-[100px]">
              <Link href="/">
                {/* <h1 className='text-[#1e56a0] font-bold text-5xl cursor-pointer uppercase'>Tutorcept</h1> */}
                <Image
                  className="min-h-[100px] text-5xl white cursor-pointer"
                  src="/Free-Logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-span-12 w-full h-[20px]">
              <p className='text-lg font-semibold text-black lg:text-xl'>Verify your Email</p>
            </div>
            <div className="col-span-12 w-full h-[20px]">
              <p className='text-black text-bold'>We have sent a 6-digit OTP to your email, kindly verify it.</p>
            </div>
            <div className="col-span-12 w-full h-[30px]">
              <input
              min="6"
              max="6"
                onChange={handleChange}
                type="number"
                Placeholder="6-digit"
                className="pl-5 border-b-2 w-full h-10 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
              />
              <p className={show ? "text-red-600" : "hidden"}>
                Please Enter Valid Email
              </p>
            </div>
            {/* <div className="col-span-6 w-full h-[20px]">
              <button className="text-[#1e56a0] text-left w-full h-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                Already have an account?
              </button>
            </div>
            <div className="col-span-3 w-full h-[20px]">
              <button onClick={goToLogin} className="text-[#1e56a0] text-lg font-bold text-left w-full h-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                Log In
              </button>
            </div> */}
            <div className="col-span-12 w-full h-[30px]">
              <button
                onClick={submit}
                className="bg-[#1e56a0] w-full text-xl font-semibold h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
              >
                Verify OTP
              </button>
            </div>
                  
          </div>
        </div>
      </div>
      {/* <div className="lgcircle relative top-0 w-[300px] h-[300px] bg-blue-400"></div> */}
    </div>
  );
};

export default LoginComponent;
