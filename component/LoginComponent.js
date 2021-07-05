import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LoginComponent = () => {
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
  return (
    <div className="h-[600px] flex flex-col">
      <div className="login bg-login-baaner object-cover h-[580px] bg-no-repeat overflow-hidden px-50 py-[70px] w-full grid grid-cols-12">
        {/* <div className='lgshape w-[100px] h-[100px] bg-red-400'></div> */}

        {/* <div className='animate-spin lgsquare w-[100px] h-[100px] bg-gray-400'></div> */}
        <div className="col-span-4 col-start-8 rounded-2xl bg-white w-full h-[350px]">
          <div className="grid grid-col-12 px-3 py-6 h-[400px] gap-y-5 text-center">
            <div className="bg-white col-span-12 w-full h-[100px]">
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

            <div className="bg-white col-span-12 w-full h-[50px]">
              <input
                onChange={handleChange}
                type="email"
                Placeholder="Email"
                className="pl-5 border-b-2 w-full h-10 rounded-lg border-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <p className={show ? "text-red-600" : "hidden"}>
                Please Enter Valid Email
              </p>
            </div>
            <div className="bg-white col-span-12 w-full h-[50px]">
              <input
                type="password"
                Placeholder="Password"
                className="pl-5 border-b-2 w-full h-10 rounded-lg border-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></input>
            </div>
            <div className="bg-white col-span-12 w-full h-[50px]">
              <button
                onClick={submit}
                className="bg-[#1e56a0] w-full h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
              >
                Sign up
              </button>
            </div>
            <div className="bg-white col-span-3 col-start-1 w-full h-[25px]">
              <button className="text-[#1e56a0] text-left w-full h-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                Forgot Password?
              </button>
            </div>
            <div className="bg-white col-span-3 col-start-4 w-full h-[25px]">
              <h1>Didn&apos;t Register Yet?</h1>
            </div>
            <div className="bg-white col-span-5 w-full h-[25px] mt-[-8px]">
              <Link href="/">
                <button className="bg-green-500 w-full h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                  Register
                </button>
              </Link>
            </div>
            <div className="bg-white text-xl text-left col-span-3 w-full h-[25px] mt-[-8px]">
              <p>Sign in with</p>
            </div>
            <div className="bg-white col-span-3 w-full h-[25px] mt-[-8px]">
              <Link href="/">
                <button className="bg-blue-500 w-full h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                  Facebook
                </button>
              </Link>
            </div>
            <div className="bg-white col-span-4 col-start-8 w-full h-[25px] mt-[-8px]">
              <Link href="/">
                <button className="bg-red-500 w-full h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                  Google
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lgcircle relative top-0 w-[300px] h-[300px] bg-blue-400"></div> */}
    </div>
  );
};

export default LoginComponent;
