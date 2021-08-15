import Head from "next/head";
import { useEffect,useState } from "react";
import Image from 'next/image'
// import Banner from '../component/Banner'
// import CurriculumSlider from '../component/CurriculumSlider'
import Footer from "../component/Footer";
import Header from "../component/Header";
// import HowItWorks from '../component/HowItWorks'
// import Testing from '../component/Testing'
// import WhyUs from '../component/WhyUs'
// import TopHeader from '../component/TopHeader'
// import Testemonial from '../component/Testemonial'
// import Timer from '../component/Timer'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Home() {
  const [image, setImage] = useState({
    Img: "/RentAgreement/img.png",
  });
  const [fileN,setFileN] =useState([])
  const fileName=(e)=>{
    const path= e.target.value
    const fileName = path.split('\\')
    const filelastN = fileName[2]
    console.log("e",fileName[2])
    setFileN([
      ...fileN,
      
      filelastN,
    ])
  }
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage({ Img: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="flex flex-col items-center h-auto justify-center">
      <Head>
        <title>Tutorcept</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TopHeader/>      */}
      {/* <Header cr={false} /> */}
      <div className="grid grid-cols-12 px-5 gap-6">
        <div className="lg:col-span-6 lg:md:flex hidden">
        <Image src='/qna.jpg' className='' width={800} height={550} alt='otpImage'/>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="grid grid-col-12 gap-2 mt-10">
            <div className="col-span-12 lg:md:text-7xl text-4xl font-semibold text-[#1e56a0]">
              <h1>
                Online
                <br /> Homework Help!
              </h1>
            </div>
            <div className="lg:md:col-span-5 col-span-4 mt-4 mb-5 lg:md:h-[10px] h-[5px] bg-[#1e56a0]"></div>
            <div className="col-span-7"></div>
            <div className="col-span-12 mb-4 pl-4">
              <h1 className='lg:md:text-lg text-sm text-gray-500 font-medium'>Get Online Assignment Help Instantly. Try It Now!</h1>
            </div>
            <div className="lg:md:col-span-8 col-span-12 ">
              <TextField
                id="outlined-multiline-static"
                label="Type Your Question"
                multiline
                rows={3}
                defaultValue="Type Your Question"
                variant="outlined"
                fullWidth
                className='text-gray-500 font-medium'
              />
            </div>
            {/* <div className="col-span-12 text-center">
              <p>OR</p>
            </div> */}
            <div className="lg:md:col-span-4 col-span-12 flex flex-col items-center">
              
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" style={{backgroundColor:'#1e56a0'}}>
                  Add Files
                </Button>
              </label>
              <div className='mt-2'>
                {fileN.map((item,i)=>(
                 <p key={i}> {item}</p>
                  )
                  
                  )}
              </div>
              <input
                onChange={imageHandler}
                accept="image/*"
                // className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onInput={fileName}
                className='hidden'
                // className='bg-black text-blue-600'
              />
            </div>
          {/* <div className="col-span-6">
          <Image
                        src={image.Img}
                        width={100}
                        height={100}
                        alt=""
                        id="img"
                        className="img"
                      />
          </div> */}
          <div className='lg:md:col-span-6 col-span-12 mt-5'>
          <TextField id="outlined-basic" fullWidth label="Select Subject" variant="outlined" />
          </div>
          <div className='lg:md:col-span-6 col-span-12 mt-5'>
          <TextField
          fullWidth
    id="datetime-local"
    label="Deadline"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    // className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
          </div>
          <div className='col-span-12 mt-5 lg:md:block flex justify-center items-center'>
              <button className='bg-[#1e56a0] lg:md:p-5 p-3 rounded-xl text-center text-white lg:text-2xl text-sm opacity-90 hover:opacity-100'>Get Solution Now</button>
          </div>
          <div className='col-span-12 mt-1 mb-2'>
            <p className='lg:md:text-sm text-xs text-gray-500 font-medium'>*Signup and get <span className='text-red-500'>$25</span> in your account instantly.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
