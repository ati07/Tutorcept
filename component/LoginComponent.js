import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

const LoginComponent = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setShow(false);
  };
  
  const submit = async () => {
    const res = await fetch('http://localhost:3000/api/hello')
    const user = await res.json()
    console.log("user",user)
    const userEmails =[]
    user.map((user,i)=>(
      userEmails.push(user.Email)
    ))
    if (!email.includes("@")) {
      setShow(true);
      
      console.log("INsideIF");
    }else{
      if(userEmails.includes(email)){
        router.push('/std/st_dashboard')
      }
      
    }
    console.log("INside");
  };
  console.log(email);
  return (
    <div className="lg:h-[580px] h-[600px] flex flex-col">
      <div className="login lg:bg-login-baaner object-cover lg:h-[560px] bg-no-repeat overflow-hidden px-50 w-full grid grid-cols-12">
        {/* <div className='lgshape w-[100px] h-[100px] bg-red-400'></div> */}

        {/* <div className='animate-spin lgsquare w-[100px] h-[100px] bg-gray-400'></div> */}
        <div className="lg:col-span-4 col-span-12 lg:col-start-8 rounded-2xl w-full h-[560px]">
          <div className="grid grid-col-12 px-3 py-5 h-[400px] gap-y-5 text-center">
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
              <p className='text-xl font-semibold text-black'>Dive in your Tutorcept Account</p>
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
            <div className="col-span-12 w-full h-[30px]">
              <input
                type="password"
                Placeholder="Password"
                className="pl-5 bg-transparent border-b-2 w-full h-10 border-[#dde0e4] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
              ></input>
            </div>
            <div className="col-span-12 w-full h-[20px]">
              <button className="text-[#1e56a0] text-left w-full h-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                Forgot Password?
              </button>
            </div>
            <div className="col-span-12 w-full h-[30px]">
              <button
                onClick={submit}
                className="bg-[#1e56a0] w-full text-xl font-semibold h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
              >
                Sign In
              </button>
            </div>
            <div className="col-span-12 w-full h-[20px]">
              <h1 className='text-2xl font-bold text-black'>OR,</h1>
            </div>
            <div className="col-span-12 w-full h-[20px] text-black text-lg font-semibold'">
              <p>Sign In with your social media account</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 col-start-1 col-span-4 lg:w-[200px] w-full h-10 mt-[-4px]">
              <Link href="/">
                <button className="w-full h-10 text-white bg-blue-500 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                  Facebook
                </button>
              </Link>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 col-start-8 col-span-4 lg:w-[220px] w-full h-10 mt-[-4px]">
              <Link href="/">
                <button className="w-full h-10 text-white bg-red-500 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                  Google
                </button>
              </Link>
            </div>
            <div className="w-full h-10 col-span-4 text-lg font-bold text-black lg:col-span-6'">
              <h1>New to Tutorcept?</h1>
            </div>
            <div className="lg:col-span-6 col-span-4 w-full h-[20px] font-bold text-lg">
              <Link href="/signup">
                <p  className="w-full h-10 rounded-lg text-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 cursor-pointer">
                  Create a New Account
                </p>
              </Link>
            </div>
            {/* <div className="bg-white text-xl text-left col-span-3 w-full h-[25px] mt-[-8px]">
              <p>Sign in with</p>
            </div> */}
            
            
          </div>
        </div>
      </div>
      {/* <div className="lgcircle relative top-0 w-[300px] h-[300px] bg-blue-400"></div> */}
    </div>
  );
};

export default LoginComponent;
