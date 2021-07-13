import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
function st_dashboard() {
  const classes = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  // const classes = useStyles();
  return (
    <div className="grid w-full grid-cols-12 pb-8 pt-10 mt-0 bg-[#dbdbdb] px-48">
      <div className="w-full col-span-1 bg-[#7869e0] rounded-tl-3xl rounded-bl-3xl  border-gray-300 h-[550px] shadow">
        <div className="grid items-center h-[415px] grid-cols-12 gap-y-2">
          <div className='flex items-center justify-center col-span-12 text-center '>  
            <Avatar
              alt="Tutorcept"
              src="/Free-Logo.png"
              className={classes.large}
            />
          </div>
          <div className='flex items-center justify-center col-span-12 text-center'>
          <IconButton><HomeOutlinedIcon
          style={{color:'#f1ededc7'}}
            /></IconButton>
          
          </div>
          <div className='flex items-center justify-center col-span-12 text-center'>
          <IconButton><CalendarTodayOutlinedIcon
          style={{color:'#f1ededc7'}}
            /></IconButton>
          
          </div>
          <div className='flex items-center justify-center col-span-12 text-center'>
          
          <IconButton><Badge badgeContent={4} color="primary">
              <EmailOutlinedIcon
        style={{color:'#f1ededc7'}} />
        </Badge>
        </IconButton>
        
      
          </div>
          <div className='flex items-center justify-center col-span-12 text-center'>
          <IconButton><ChatBubbleOutlineOutlinedIcon
          style={{color:'#f1ededc7'}}
            /></IconButton>
          
          </div>
          <div className='flex items-center justify-center col-span-12 text-center'>
          <IconButton><ExitToAppOutlinedIcon
          style={{color:'#f1ededc7'}}
            /></IconButton>
          
          </div>
        </div>
      </div>
      <div className="w-full h-full col-span-11 col-start-2 rounded-tr-3xl shadow rounded-br-3xl bg-[#f6f6f6] border-gray-300"></div>
    </div>
  );
}

export default st_dashboard;
