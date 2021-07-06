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
    if (!email.includes("@")) {
      setShow(true);
      console.log("INsideIF");
    }
    console.log("INside");
  };
  console.log(email);
  const goToLogin=()=>{
      router.push('/login');
  }
  return (
    <div className="h-[580px] flex flex-col">
      <div className="login bg-login-baaner object-cover h-[560px] bg-no-repeat overflow-hidden px-50 py-28 w-full grid grid-cols-12">
        {/* <div className='lgshape w-[100px] h-[100px] bg-red-400'></div> */}

        {/* <div className='animate-spin lgsquare w-[100px] h-[100px] bg-gray-400'></div> */}
        <div className="col-span-4 col-start-8 rounded-2xl w-full h-[560px]">
          <div className="grid grid-col-12 px-3 py-5 h-[400px] gap-y- text-center">
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
              <p className='text-black text-xl font-semibold'>Verify your Email</p>
            </div>
            <div className="col-span-12 w-full h-[20px]">
              <p className='text-black text-bold'>We have sent a 6-digit OTP to your email, kindly verify it.</p>
            </div>
            <div className="col-span-12 w-full h-[30px]">
              <input
                onChange={handleChange}
                type="email"
                Placeholder="Email"
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
