import Image from "next/image";
import Link from "next/link";
import {useState,useEffect} from 'react'
// import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactUs = () => {
  useEffect(()=> {
    AOS.init({duration:3000});
})
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
    <div className="login bg-contact-us object-cover h-[580px] bg-no-repeat mt-20 overflow-hidden px-50 py-[60px] w-full grid grid-cols-12">
      <div data-aos="fade-right" className="col-span-4 col-start-8 rounded-2xl bg-white w-full h-[350px]">
        <div className="grid grid-col-12 px-3 py-6 h-[300px] gap-y-5 text-center">
          <div className="bg-white col-span-12 w-full h-[50px]">
            <div className='text-5xl text-[#1e56a0]'>
                <h1>Contact Us</h1>
            </div>
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <input
              onChange={handleChange}
              type="text"
              Placeholder="Your Name"
              className="pl-5 border-b-2 w-full h-10 rounded-lg border-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            {/* <p className={show?'text-red-600':'hidden'}>Please Enter Valid Email</p> */}
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <input
              onChange={handleChange}
              type="email"
              Placeholder="Email"
              className="pl-5 border-b-2 w-full h-10 rounded-lg border-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <p className={show?'text-red-600':'hidden'}>Please Enter Valid Email</p>
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <input
              type="number"
              Placeholder="Your Mobile Number"
              className="pl-5 border-b-2 w-full h-10 rounded-lg border-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ></input>
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <textarea
            rows="10"
            cols="50"
              type="text"
              Placeholder="Message"
              className="pl-5 border-b-2 w-full h-10 rounded-lg border-[#1e56a0] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ></textarea>
          </div>
          <div className="bg-white col-span-12 w-full h-[50px]">
            <button onClick={submit} className="bg-[#1e56a0] w-full h-10 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
              Submit
            </button>
          </div>
          {/* <div className="bg-white col-span-4 col-start-5 w-full h-[25px]">
            <button  className="text-[#1e56a0] w-full h-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
              Forgot Password
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
