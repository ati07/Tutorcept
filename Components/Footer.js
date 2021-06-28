import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
function Footer() {
  const KnowUS = {
    Title: "GET TO KNOW US",
    pages: [
      "Abous Us",
      "Help Center",
      "Blog",
      "Honor Code",
      "Accessibility",
      "Careeres",
      "Press",
    ],
    links: ["/", "/", "/", "/", "/", "/", "/"],
  };
  const LearnUS = {
    Title: "LEARN WITH US",
    pages: [
      "Demo Lesson",
      "Subjects",
      "Brows Tutors",
      "Test Prep Courses",
      "For Parents",
    ],
    links: ["/", "/", "/", "/", "/"],
  };
  const PartnerUS = {
    Title: "PARTNER WITH US",
    pages: [
      "Ambassadors",
      "Academic Partners",
      "Corporate Partners",
      "Become A Tutor",
    ],
    links: ["/", "/", "/", "/"],
  };
  const footerContent = [KnowUS, LearnUS, PartnerUS];
  const suject={
      
  }
  return (
    <div className="relative z-10 footer flex flex-col justify-center align-center w-full h-auto bg-[#1f4c70]">
      <div className="flex justify-between lg:mt-40 mt-20 lg:px-20 text-white w-full">
        <div className="px-2 lg:px-5">
          <h1 className="font-bold lg:text-6xl text-5xl pb-3">TutorCept</h1>
          <p className="opacity-70 py-3 leading-6 font-thin text-sm lg:text-base">
            Terms of Service | Privacy Policy
          </p>
          <p className="font-thin py-1 text-sm leading-9 lg:text-base">
            Made in INDIA by Atiurrahman
          </p>
          <p>@2021 TutorCept, LLC</p>
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
      <div className="flex justify-between lg:mt-10 mt-10 lg:px-20 text-white w-full">
        <div className="px-2 lg:px-5">
          <h1 className="font-bold lg:text-2xl text-1xl pb-3">
            CONNECT WITH US
          </h1>
          <div display="w-full justify-between align-left">
            <div className="flex justify-around mt-2 align-left ">
              <Link href="">
                <a>
                  <div className="align-left flex mr-5 opacity-70 hover:opacity-100 text-lg">
                    <FacebookIcon fontSize="large"/> <span className='mt-1'>Facebook</span> 
                  </div>
                </a>
              </Link>

              <Link href="">
                <a>
                  <div className="flex justify-center align-center opacity-70 hover:opacity-100 text-lg">
                    <LinkedInIcon fontSize="large"/> <span className='mt-1' >LinkedIn</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex justify-between mt-2 align-left">
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
            </div>
          </div>
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
    </div>
  );
}

export default Footer;
