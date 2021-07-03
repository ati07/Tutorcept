import Image from "next/image";
import Link from "next/link";
import {useState,useEffect} from 'react'

const LoginComponent = () => {
  const [email,setEmail] = useState('')
  const [show,setShow] = useState(false)

  const handleChange=(e)=>{
    setEmail(e.target.value)
    setShow(false)
  }
  const submit=()=>{
    if(!email.includes('@')){
      setShow(true)
      console.log("INsideIF")
    }
    console.log("INside")
  }
  console.log(email)
  return (
    <div className="bg-login-baaner object-cover h-[500px] bg-no-repeat overflow-hidden px-50 py-28 w-full grid grid-cols-12">
      <div className="col-span-4 col-start-8 rounded-2xl bg-white w-full h-[350px]">
        <div className="grid grid-col-12 px-3 py-6 h-[300px] gap-y-5 text-center">
          <div className="bg-white col-span-12 w-full h-[50px]">
            <Link href="/">
              <Image
                className="min-h-[100px] text-5xl white cursor-pointer"
                src="/Logo4.png"
                width={200}
                height={60}
                alt="logo"
              />
            </Link>
          </div>

          <div className="bg-white col-span-12 w-full h-[50px]">
            <input
              onChange={handleChange}
              type="email"
              Placeholder="Email"
              className="pl-5 border-b-2 w-full h-10 rounded-lg border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <p className={show?'text-red-600':'hidden'}>Please Enter Valid Email</p>
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <input
              type="password"
              Placeholder="Password"
              className="pl-5 border-b-2 w-full h-10 rounded-lg border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ></input>
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <button onClick={submit} className="bg-purple-600 w-full h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
              Sign up
            </button>
          </div>
          <div className="bg-white col-span-4 col-start-5 w-full h-[25px]">
            <button  className="text-purple-600 w-full h-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
