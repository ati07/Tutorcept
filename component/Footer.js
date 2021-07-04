import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import { makeStyles } from '@material-ui/core/styles';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WebIcon from '@material-ui/icons/Web';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
const useStyles = makeStyles({
  root: {
    
    // fontSize:80,

  },
  label: {
    textTransform: 'capitalize',
  },
});

function Footer() {
  const scrollToTop=()=>{
    window.scrollTo(0, 0);
  }
  const KnowUS = {
    Title: "GET TO KNOW US",
    pages: [
      "Home",
      "Abous Us",
      "Contact Us",
      "Terms of Services",
      "Privacy Policy",
      // "Honor Code",
      // "Accessibility",
      // "Press",
    ],
    links: ["/", "/", "/", "/", "/"],
  };
  const LearnUS = {
    Title: "LEARN WITH US",
    pages: [
      "Demo Lesson",
      "Subjects",
      "Pricing",
      "Faqs",
      "Curriculla",
    ],
    links: ["/", "/", "/", "/", "/"],
  };
  const PartnerUS = {
    Title: "PARTNER WITH US",
    pages: [
      // "Ambassadors",
      // "Academic Partners",
      // "Corporate Partners",
      "Careeres",
      "Become A Tutor",
    ],
    links: ["/", "/"],
  };
  const footerContent = [KnowUS, LearnUS, PartnerUS];
  const suject={
      
  }
  const classes = useStyles();
  return (
    <div className="relative z-10 footer flex flex-col justify-center align-center w-full h-auto bg-[#1f4c70]">
      <div className="flex justify-between lg:mt-10 mt-10 lg:px-20 text-white w-full">
        <div className="px-2 lg:px-5 w-full mt-20">
          <h1 className="font-bold lg:text-2xl text-1xl pb-3">
            CONNECT WITH US
          </h1>

          <div className="w-full flex justify-between items-center">
            <div className="flex justify-around mt-2 items-center w-full">
              <Link href="">
                <a href='https://www.facebook.com/tutorcept' target="_blank" rel="noreferrer">
                  <div className="lg px-10 items-center flex flex-col mr-5 opacity-70 hover:opacity-100 text-lg">
                    <FacebookIcon fontSize="large" /> <span className='mt-1'>Facebook</span> 
                  </div>
                </a>
              </Link>
              <div className='w-[1px] h-[100px] bg-white'></div>
              <Link href="">
                <a href='https://www.linkedin.com/company/tutorcept' target="_blank" rel="noreferrer">
                  <div className="lg px-10 flex justify-center flex-col items-center opacity-70 hover:opacity-100 text-lg">
                    <LinkedInIcon fontSize="large" /> <span className='mt-1' >LinkedIn</span>
                  </div>
                </a>
              </Link>
              <div className='w-[1px] h-[100px] bg-white'></div>

              <Link href="">
                <a href='https://twitter.com/tutorcept' target="_blank" rel="noreferrer">
                  <div className="lg px-10 flex flex-col justify-center mr-5 items-center opacity-70 hover:opacity-100 text-lg">
                    <TwitterIcon fontSize="large" /> <span className='mt-1'>Twitter</span>
                  </div>
                </a>
              </Link>
              <div className='w-[1px] h-[100px] bg-white'></div>

              <Link href="">
                <a href='https://www.youtube.com/channel/UC3iY0YCVHD7UwqZqlDYpEQw' target="_blank" rel="noreferrer">
                  <div className="lg px-10 flex flex-col justify-center items-center opacity-70 hover:opacity-100 text-lg">
                    <YouTubeIcon classes={{root: classes.root}} /> <span className='mt-1'>Youtube</span>
                  </div>
                </a>
              </Link>
              <div className='w-[1px] h-[100px] bg-white'></div>
              <Link href="">
                <a a href='https://t.me/tutorcept' target="_blank" rel="noreferrer">
                  <div className="lg px-10 flex flex-col justify-center items-center opacity-70 hover:opacity-100 text-lg">
                    <TelegramIcon classes={{root: classes.root}} /> <span className='mt-1'>Telegram</span>
                  </div>
                </a>
              </Link>
              <div className='w-[1px] h-[100px] bg-white'></div>

              <Link href="">
                <a href='https://www.instagram.com/tutorcept' target="_blank" rel="noreferrer">
                  <div className="lg px-10 flex flex-col justify-center items-center opacity-70 hover:opacity-100 text-lg">
                    <InstagramIcon fontSize="large" classes={{root: classes.root}}/> <span className='mt-1'>Instagram</span>
                  </div>
                </a>
              </Link>
            </div>
            {/* <div className="flex justify-between mt-2 align-left">
              <Link href="">
                <a>
                  <div className="flex justify-center mr-5 align-center opacity-70 hover:opacity-100 text-lg">
                    <TwitterIcon fontSize="large"/> <span className='mt-1'>Twitter</span>
                  </div>
                </a>
              </Link>
              <Link href="">
                <a>
                  <div className="flex justify-center align-center opacity-70 hover:opacity-100 text-lg">
                    <YouTubeIcon fontSize="large" /> <span className='mt-1'>Youtube</span>
                  </div>
                </a>
              </Link>
            </div> */}
          </div>
        </div>
        
        {/* {footerContent.map((item, i) => (
          <div key={i} className="px-1">
            <h2 key={i} className="text-xl font-bold py-1 ">{item.Title}</h2>
            {item["pages"].map((pg, j) => (
              <p key={j} className="opacity-70 hover:font-bold hover:opacity-100 leading-6 lg:leading-8 text-aqua font-thin text-sm lg:text-base">
                <Link href="/">{pg}</Link>
              </p>
            ))}
          </div>
        ))} */}
      </div>
      <div className="flex justify-between lg:mt-20 mt-10 lg:px-20 text-white w-full">
        <div className="px-2 lg:px-5">
          <h1 className="font-bold lg:text-6xl text-5xl pb-3">Tutorcept</h1>
          {/* <p className="opacity-70 py-3 leading-6 font-thin text-sm lg:text-base">
            Terms of Service | Privacy Policy
          </p> */}
          <p className="font-thin py-1 text-sm leading-9 lg:text-base">
            <LocationCityIcon/>
            <span className='pl-2'>Address,202260</span>
          </p>
          <p className="font-thin py-1 text-sm leading-9 lg:text-base">
            <WebIcon/>
            <span className='pl-2'>www.tutorcept.com</span>
          </p>
          <p className="font-thin py-1 text-sm leading-9 lg:text-base">
            <PhonelinkRingIcon/>
            <span className='pl-2'>+91 7565091186, +91 8181060600</span>
          </p>
          {/* <p className="font-thin py-1 text-sm leading-9 lg:text-base">
            Made in INDIA by Atiurrahman
          </p>
          <p>@2021 TutorCept, LLC</p> */}
        </div>
        {footerContent.map((item, i) => (
          <div key={i} className="px-1">
            <h2 key={i} className="text-xl font-bold py-1 ">{item.Title}</h2>
            {item["pages"].map((pg, j) => (
              <p key={j} className="opacity-70 hover:font-bold hover:opacity-100 leading-6 lg:leading-8 text-aqua font-thin text-sm lg:text-base">
                <Link href="/">{pg}</Link>
              </p>
            ))}
          </div>
        ))}
      </div>
      <div onClick={scrollToTop} className='w-full text-white flex justify-end pr-[150px]'><ArrowUpwardIcon fontSize='large' className='animate-bounce cursor-pointer' /></div>
      <div className='text-white text-xl w-full mt-10 mb-1 flex justify-center items-center'>www.tutorcept.com @2021, All Right Reserved
      
      
      </div>
    </div>
  );
}

export default Footer;
