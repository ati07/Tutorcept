import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import StHome from "../../component/StHome";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { useState, useEffect } from "react";
import Tooltip from '@material-ui/core/Tooltip';

function St_dashboard() {
  const classes = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const [bgColor, setBgcolor] = useState({
    1: "#f6f6f6",
    2: "",
    3: "",
    4: "",
    5: "",
    6:''
  });
  const rightPage =[
  {
    id:1,
    page:<StHome />,
  },
  {
    id:2,
    page:'Commming Soon2',
  },
  {
    id:3,
    page:'Commming Soon3',
  },
  {
    id:4,
    page:'Commming Soon4',
  },
  {
    id:5,
    page:'Commming Soon5',
  },
  {
    id:6,
    page:'Commming Soon6',
  },
  ]
  const changebg = () => {};
  return (
    <div className="grid w-full grid-cols-12 pb-8 pt-10 mt-0 bg-[#dbdbdb] px-48">
      <div className="w-full col-span-1 bg-[#1e56a0] rounded-tl-3xl rounded-bl-3xl  border-gray-300 h-[550px] shadow">
        <div className="grid items-center h-[415px] grid-cols-12 gap-y-2">
          <div className="flex items-center justify-center col-span-12 text-center ">
            <Avatar
              alt="Tutorcept"
              src="/Free-Logo.png"
              className={classes.large}
            />
          </div>
          <div className="flex items-center justify-center col-span-12 text-center">
          <Tooltip title="Home" placement="right-start" style={{backgroundColor:'#1e56a0', color:'red'}}>
            <IconButton
              style={{ backgroundColor: bgColor["1"] }}
              onClick={() => setBgcolor({ 1: "#f6f6f6" })}
            >
              <HomeOutlinedIcon
              className={bgColor["1"] === "#f6f6f6" ?'animate-bounce':'hover:animate-bounce'}
                style={{
                  color: bgColor["1"] === "#f6f6f6" ? "black" : "white",
                }}
              />
            </IconButton>
            </Tooltip>
          </div>
          <div className="flex items-center justify-center col-span-12 text-center">
          <Tooltip title="Profile" placement="right-start">
           
            <IconButton
              style={{ backgroundColor: bgColor["2"] }}
              onClick={() => setBgcolor({ 2: "#f6f6f6" })}
            >
              <PermIdentityOutlinedIcon
              className={bgColor["2"] === "#f6f6f6" ?'animate-bounce':'hover:animate-bounce'}
                style={{
                  color: bgColor["2"] === "#f6f6f6" ? "black" : "white",
                }}
              />
            </IconButton>
            </Tooltip>
          </div>
          <div className="flex items-center justify-center col-span-12 text-center">
          <Tooltip title="Calender" placement="right-start">
            
            <IconButton
              style={{ backgroundColor: bgColor["3"] }}
              onClick={() => setBgcolor({ 3: "#f6f6f6" })}
            >
              <CalendarTodayOutlinedIcon
              className={bgColor["3"] === "#f6f6f6" ?'animate-bounce':'hover:animate-bounce'}
                style={{
                  color: bgColor["3"] === "#f6f6f6" ? "black" : "white",
                }}
              />
            </IconButton>
            </Tooltip>
          </div>
          <div className="flex items-center justify-center col-span-12 text-center">
          <Tooltip title="Email" placement="right-start">
           
            <IconButton
              style={{ backgroundColor: bgColor["4"] }}
              onClick={() => setBgcolor({ 4: "#f6f6f6" })}
            >
              <Badge badgeContent={4} color="primary">
                <EmailOutlinedIcon
                className={bgColor["4"] === "#f6f6f6" ?'animate-bounce':'hover:animate-bounce'}
                  style={{
                    color: bgColor["4"] === "#f6f6f6" ? "black" : "white",
                  }}
                />
              </Badge>
            </IconButton>
            </Tooltip>
          </div>
          <div className="flex items-center justify-center col-span-12 text-center">
          <Tooltip title="Chat" placement="right-start">
           
            <IconButton
              style={{ backgroundColor: bgColor["5"] }}
              onClick={() => setBgcolor({ 5: "#f6f6f6" })}
            >
              <ChatBubbleOutlineOutlinedIcon
              className={bgColor["5"] === "#f6f6f6" ?'animate-bounce':'hover:animate-bounce'}
                style={{
                  color: bgColor["5"] === "#f6f6f6" ? "black" : "white",
                }}
              />
            </IconButton>
            </Tooltip>
          </div>
          <div className="flex items-center justify-center col-span-12 text-center">
            
            <Link href="/" passHref>
          <Tooltip title="Log Out" placement="right-start">

              <IconButton>
                <ExitToAppOutlinedIcon className='hover:animate-bounce' style={{ color: "white" }} />
              </IconButton>
              </Tooltip>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="w-full h-full col-span-11 col-start-2 rounded-tr-3xl shadow rounded-br-3xl bg-[#f6f6f6] border-gray-300">
        {rightPage.map((item,i)=>(
          <div key={i}>
          {bgColor[`${i+1}`]==="#f6f6f6"?item['page']:''}
          </div>
        ))}
      </div>
    </div>
  );
}

export default St_dashboard;
