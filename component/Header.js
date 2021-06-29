import Image from "next/image";
import { useState, useEffect } from "react";
import SchoolIcon from "@material-ui/icons/School";
// import { BookOpenIcon } from "@heroicons/react/outline";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import Link from "next/link";
// import ReactLogo from "../Header/svg (17).svg";
import LogoSvg from "./LogoSvg";
// import svg_1 from '/svg(17).svg'

function Header() {
  const HeaderItems = ["Home", "Pricing", "How It Works", "Request A tutor"];
  const Cred = ["Sign In", "Become A Tutor", "FAQs"];
  const Headerlink = ["/", "/", "/", "/"];
  const RightHeaderlink = ["/", "/", "/"];
  const Icons = [
    "CreditCardOutlinedIcon",
    "SchoolIcon",
    "MenuBookOutlinedIcon",
  ];
  const [clr, setClr] = useState(false);
  const changeColor = () => {
    if (window.pageYOffset > 10) {
      setClr(true);
    } else {
      setClr(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const box={
    boxShadow: '0 3px 3px rgb(0 0 0 / 30%)',
  }

  return (
    <div
      className={`${
        clr ? "fixed top-0 bg-white transition duration-700 ease-in-out header" : "absolute top-[50px]"
      } lg:px-5 font-semibold text-base w-full flex items-center justify-between z-20 `}
    >
      <div className="flex">
        <Link href="/">
          {/* <div> */}
          {/* <LogoSvg width={300} height={100} fill={'red'}/> */}
          {/* <ReactLogo /> */}
          {/* </div> */}
          {/* <ReactLogo/> */}
          {/* <img src={ReactLogo} className='w-[200px] h-[80px] min-h-[100px] text-5xl white'/> */}
          <Image
            className="min-h-[100px] text-5xl white"
            src={clr?'/logo4.png':"/Log3.png"}
            width={200}
            height={60}
            alt="logo"
          />
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
            >
              {/* < {...Icons[i]} /> */}
              <Link href={Headerlink[i]}>{item}</Link>
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
          >
            <Link href={RightHeaderlink[i]}>{item}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
