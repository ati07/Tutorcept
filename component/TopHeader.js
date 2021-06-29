import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import Link from 'next/link'
function TopHeader() {
    return (
        <div className='flex items-center justify-between w-full h-10 bg-[#1e56a0]'>
            <div className='px-4 font-bold text-white'><span className='px-1 text-white'>Call US:</span> 7565091186, 8181060600</div>
            <div className='flex px-4 font-bold text-white '>
                 <div className='px-2 animate-bounce'> <a href='https://www.facebook.com/tutorcept' target="_blank" rel="noreferrer"><FacebookIcon/> </a></div>
                 <div className='px-2 hover:animate-bounce'>  <a href='https://www.linkedin.com/company/tutorcept' target="_blank" rel="noreferrer">  <LinkedInIcon/> </a></div>
                 <div className='px-2 animate-bounce'> <a href='https://twitter.com/tutorcept' target="_blank" rel="noreferrer"> <TwitterIcon/> </a></div> 
                 <div className='px-2 hover:animate-bounce'> <a href='https://www.youtube.com/channel/UC3iY0YCVHD7UwqZqlDYpEQw' target="_blank" rel="noreferrer">  <YouTubeIcon/>  </a></div>
                 <div className='px-2 animate-bounce'> <a href='https://t.me/tutorcept' target="_blank" rel="noreferrer">  <TelegramIcon/>  </a></div>
                
                 <div className='px-2 hover:animate-bounce'> <a href='https://www.instagram.com/tutorcept' target="_blank" rel="noreferrer">  <InstagramIcon/>  </a></div>
                
                {/* </> */}
            </div>

        </div>
    )
}

export default TopHeader
