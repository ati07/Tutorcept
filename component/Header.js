import Image from "next/image";
import { useState, useEffect } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useRouter } from 'next/router'
import SchoolIcon from "@material-ui/icons/School";
// import { BookOpenIcon } from "@heroicons/react/outline";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import Link from "next/link";
// import ReactLogo from "../Header/svg (17).svg";
import LogoSvg from "./LogoSvg";
// import svg_1 from '/svg(17).svg'



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // setOpen(true);
    window.scrollTo(0, 1330);
    // console.log("clicked")

  };
  const handleClickerror=()=>{

  }

  const handleClose = () => {
    
    router.push('/login');
  };
  const handleClose1=()=>{
    setOpen(false);
  }
  // const HeaderItems = ["Home", "Pricing", "How It Works","About Us","Contact Us"];
  const HeaderItems = ["Home", "Pricing", "How It Works","About Us"];

  const Cred = ["Request Demo", "Become A Tutor", "FAQs"];
  // const Headerlink = ["/", "/pricing", "","","/contactus"];
  const Headerlink = ["/", "/pricing", "","/about",""];

  const RightHeaderlink = ["", "/becometutor", "/faqs"];
  // const RightHeaderlink = ["", "/", "/faqs"];

  const Icons = [
    "CreditCardOutlinedIcon",
    "SchoolIcon",
    "MenuBookOutlinedIcon",
  ];
  const [clr, setClr] = useState(false);

  // useEffect(()=>{
  //   if(cr===true){
  //   setClr(true)
  // }
  // },[])
  
  const changeColor = () => {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 10) {
      setClr(true);
    } else {
      setClr(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const scrollToHw =()=>{
    window.scrollTo(0, 690);
  }
  const handleError=()=>{

  }
  return (
    <div
      className={`${
        clr ? "lg:px-6 lg:max-w-[100%] w-[100%] fixed top-0 bg-white transition duration-500 ease-in-out header" : "absolute top-[0px] lg:md:w-[96%] w-[100%]"
      } lg:py-4 border-b-[1px] border-[#ababab] font-semibold lg:text-base text-[6px] flex items-center justify-between z-20`}
    >
      <div className="flex">
        <Link href="/">
          <h1 className={clr?'text-[#1e56a0] font-bold lg:md:text-3xl text-sm cursor-pointer':'text-white font-bold cursor-pointer lg:md:text-3xl text-sm'}>Tutorcept</h1>
          {/* <div> */}
          {/* <LogoSvg width={300} height={100} fill={'red'}/> */}
          {/* <ReactLogo /> */}
          {/* </div> */}
          {/* <ReactLogo/> */}
          {/* <img src={ReactLogo} className='w-[200px] h-[80px] min-h-[100px] text-5xl white'/> */}
          {/* <Image
            className="min-h-[100px] text-5xl white cursor-pointer"
            src={clr?'/logo4.png':"/Log3.png"}
            width={200}
            height={60}
            alt="logo"
          /> */}
        </Link>

        <div
          className={
            clr
              ? "lg:pl-10 flex justify-around items-center white"
              : "lg:pl-10 flex justify-around items-center"
          }
        >
          {HeaderItems.map((item, i) => (
            <div
            
              key={i}
              className={
                clr
                  ? "lg:px-5 pl-2 m-1 uppercase text-[#1e56a0]"
                  : "lg:px-5 pl-2 m-1 uppercase text-[#fff] "
              }
            >{i===2?
              <button className='font-semibold uppercase' onClick={i===2?scrollToHw:handleError} >
              {item}
              </button>
              :
              <Link href={Headerlink[i]} >
              {item}
              </Link>
            }
              {/* < {...Icons[i]} /> */}
              {/* <button onClick={i===2?scrollToHw:handleError}> */}
              {/* <Link href={i===2?'':Headerlink[i]} >
                {item}
                </Link> */}
                {/* </button> */}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-around lg:pl-10">
        {Cred.map((item, i) => (
          <div
            key={i}
            className={
              i === 1
                ? `${
                    clr
                      ? "text-[#1e56a0] border-[#1e56a0] border-opacity-100"
                      : "text-[#fff] border-white"
                  } lg:px-5 pl-2 m-1 uppercase border-2 rounded-xl`
                : `${
                    clr ? "text-[#1e56a0]" : "text-[#fff]"
                  } lg:px-5 pl-2 m-1 uppercase`
            }
          >{i===0?<div onClick={handleClickOpen} className='cursor-pointer' >
            
              
              {item}
              
             
              </div>
              :
              <div>
            <Link href={RightHeaderlink[i]} >
              <a>
              {item}
              </a>
              </Link>
              </div>}
          </div>
        ))}
      </div>
      <Dialog
      scroll={'body'}
      disableScrollLock={ true }
        // maxWidth='true'
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div className="grid w-full grid-cols-12 gap-6 text-center gap-y-10">
            <div  className='col-span-12'>
              <Button variant="contained" onClick={handleClose} color="secondary">
            Continue As A Student
          </Button>
            </div>
            <div  className='col-span-12'>
<Button variant="contained" onClick={handleClose} color="primary">
            Continue As A Tutor
          </Button>
            </div>
          </div>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default Header;
