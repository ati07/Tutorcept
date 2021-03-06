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
import {BsLink45Deg} from 'react-icons/fa';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

    
const useStyles = makeStyles((theme) => ({
  root: {
    opacity:0.7,
    fontSize:50,
    [theme.breakpoints.down('sm')]: {
    // backgroundColor: theme.palette.secondary.main,
    fontSize:25,
  },

  },
  
  "&:hover": {
    // background: "#efefef"
    // opacity:1,
  },
  label: {
    textTransform: 'capitalize',
  },
}));

function Footer() {
  const [stop,setStop] = useState()
    useEffect(()=> {
        AOS.init({duration:1500,
            once: true});
    })
  const scrollToTop=()=>{
    window.scrollTo(0, 0);
  }
  const KnowUS = {
    Title: "GET TO KNOW US",
    pages: [
      "Home",
      "About Us",
      "Contact Us",
      "Terms of Services",
      "Privacy Policy",
      // "Honor Code",
      // "Accessibility",
      // "Press",
    ],
    links: ["/", "/about", "/contactus", "/", "/"],
  };
  const LearnUS = {
    Title: "LEARN WITH US",
    pages: [
      "Demo Lesson",
      "Subjects",
      "Pricing",
      "Faqs",
      "Curriculum",
    ],
    links: ["/", "/", "/pricing", "/faqs", "/"],
  };
  const PartnerUS = {
    Title: "PARTNER WITH US",
    pages: [
      // "Ambassadors",
      // "Academic Partners",
      // "Corporate Partners",
      "Careers",
      "Become A Tutor",
    ],
    links: ["/", "/"],
  };
  const footerContent = [KnowUS, LearnUS, PartnerUS];
  const suject={
      
  }
  const classes = useStyles();
  return (
    <div className="relative z-10 footer flex flex-col justify-center items-center w-full h-auto bg-[#1f4c70]">
      <div className="flex justify-between lg:md:w-full w-full text-white lg:px-20">
        <div className="w-full px-2 mt-20 lg:px-5">
          <h1 className="pb-3 font-bold lg:text-2xl text-1xl">
            CONNECT WITH US
          </h1>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-around lg:md:w-full w-full mt-2">
              <Link href="">
                <a href='https://www.facebook.com/tutorcept' target="_blank" rel="noreferrer">
                  <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center lg:md:px-10 px-2 lg:md:mr-5 mr-0 lg:md:text-lg text-sm ftb opacity-70 hover:opacity-100">
                    <FacebookIcon classes={{root: classes.root}} /> <span className='mt-1'>Facebook</span> 
                  </div>
                </a>
              </Link>
              <div data-aos="fade-up" data-aos-delay="200" className='w-[1px] h-[100px] bg-white'></div>
              <Link href="">
                <a href='https://www.linkedin.com/company/tutorcept' target="_blank" rel="noreferrer">
                  <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center justify-center lg:md:px-10 px-2 lg:md:text-lg text-sm ftb opacity-70 hover:opacity-100">
                    <LinkedInIcon  classes={{root: classes.root}} /> <span className='mt-1' >LinkedIn</span>
                  </div>
                </a>
              </Link>
              <div data-aos="fade-up" data-aos-delay="400"  className='w-[1px] h-[100px] bg-white'></div>

              <Link href="">
                <a href='https://twitter.com/tutorcept' target="_blank" rel="noreferrer">
                  <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col items-center justify-center lg:md:px-10 px-2 lg:md:mr-5 mr-0 lg:md:text-lg text-sm ftb opacity-70 hover:opacity-100">
                    <TwitterIcon classes={{root: classes.root}} /> <span className='mt-1'>Twitter</span>
                  </div>
                </a>
              </Link>
              <div data-aos="fade-up" data-aos-delay="600"  className='w-[1px] h-[100px] bg-white'></div>

              <Link href="">
                <a href='https://www.youtube.com/channel/UC3iY0YCVHD7UwqZqlDYpEQw' target="_blank" rel="noreferrer">
                  <div data-aos="fade-up" data-aos-delay="700" className="flex flex-col items-center justify-center lg:md:px-10 px-2 lg:md:text-lg text-sm ftb opacity-70 hover:opacity-100">
                    <YouTubeIcon classes={{root: classes.root}} /> <span className='mt-1'>Youtube</span>
                  </div>
                </a>
              </Link>
              <div data-aos="fade-up" data-aos-delay="800" className='w-[1px] h-[100px] bg-white'></div>
              <Link href="">
                <a href='https://t.me/tutorcept' target="_blank" rel="noreferrer">
                  <div data-aos="fade-up" data-aos-delay="900" className="flex flex-col items-center justify-center lg:md:px-10 px-2 lg:md:text-lg text-sm ftb opacity-70 hover:opacity-100">
                    <TelegramIcon classes={{root: classes.root}} /> <span className='mt-1'>Telegram</span>
                  </div>
                </a>
              </Link>
              <div data-aos="fade-up" data-aos-delay="1000" className='w-[1px] h-[100px] bg-white'></div>

              <Link href="">
                <a href='https://www.instagram.com/tutorcept' target="_blank" rel="noreferrer">
                  <div  data-aos="fade-up" data-aos-delay="1100" className="flex flex-col items-center justify-center lg:md:px-10 px-2 lg:md:text-lg text-sm ftb opacity-70 hover:opacity-100">
                    <InstagramIcon  classes={{root: classes.root}}/> <span className='mt-1'>Instagram</span>
                  </div>
                </a>
              </Link>
            </div>
            {/* <div className="flex justify-between mt-2 align-left">
              <Link href="">
                <a>
                  <div className="flex justify-center mr-5 text-lg align-center opacity-70 hover:opacity-100">
                    <TwitterIcon fontSize="large"/> <span className='mt-1'>Twitter</span>
                  </div>
                </a>
              </Link>
              <Link href="">
                <a>
                  <div className="flex justify-center text-lg align-center opacity-70 hover:opacity-100">
                    <YouTubeIcon fontSize="large" /> <span className='mt-1'>Youtube</span>
                  </div>
                </a>
              </Link>
            </div> */}
          </div>
        </div>
        
      </div>
      <div className="flex justify-between w-full mt-10 text-white lg:md:mt-10 lg:px-20">
        <div className="px-2 lg:px-5">
          <h1 className="pb-3 text-4xl font-bold lg:md:text-6xl">Tutorcept</h1>
          {/* <p className="py-3 text-sm font-thin leading-6 opacity-70 lg:text-base">
            Terms of Service | Privacy Policy
          </p> */}
          <p className="py-1 lg:md:text-sm text-xs font-thin leading-9 lg:text-base">
            <LocationOnIcon/>
            <span className='lg:md:pl-2 pl-1'>India</span>
          </p>
          <p className="py-1 lg:md:text-sm text-xs font-thin leading-9 lg:text-base">
            <LinkIcon/>
            <span className='lg:md:pl-2 pl-1'>www.tutorcept.com</span>
          </p>
          <p className="py-1 lg:md:text-sm text-xs font-thin leading-9 lg:text-base">
            <PhonelinkRingIcon/>
            <span className='lg:md:pl-2 pl-1'>+91 7003014691, +91 7523951200</span>
          </p>
          {/* <p className="py-1 text-sm font-thin leading-9 lg:text-base">
            Made in INDIA by Atiurrahman
          </p>
          <p>@2021 TutorCept, LLC</p> */}
        </div>
        {footerContent.map((item, i) => (
          <div key={i} className="px-1">
            <h2 key={i} className="py-1 lg:md:text-xl text-sm font-bold ">{item.Title}</h2>
            {item["pages"].map((pg, j) => (
              <p key={j} className={`${ ['Home','About Us','Contact Us','Pricing','Faqs'].includes(pg) ?"":'cursor-not-allowed'} mt-1 lg:md:text-sm text-xs font-thin leading-6 opacity-70 hover:font-bold hover:opacity-100 lg:leading-8 text-aqua lg:text-base`}>
                {/* {pg} */}
                {['Home','About Us','Contact Us','Pricing','Faqs'].includes(pg) ? <Link href={item['links'][j]}>
                  <a >
                    {/* {console.log("j",j)} */}
                   {pg} 
                  </a>
                  </Link>
                  :
                pg 
                  }

              </p>
            ))}
          </div>
        ))}
      </div>
      <div onClick={scrollToTop} className='w-full text-white flex justify-end lg:md:pr-[150px] pr-[30px]'><ArrowUpwardIcon fontSize='large' className='cursor-pointer animate-bounce' /></div>
      <div className='flex items-center justify-center w-full mt-10 mb-1 lg:md:text-lg text-sm text-white'>Tutorcept.com @2021, All Rights Reserved
      
      
      </div>
    </div>
  );
}

export default Footer;
