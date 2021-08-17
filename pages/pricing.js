import TopHeader from "../component/TopHeader";
import Header from "../component/Header";
import Banner from "../component/Banner";
import ComingSoon from "../component/ComingSoon";
import React, { useState } from "react";
import WhiteHeader from "../component/WhiteHeader";
import Footer from "../component/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import datajson from '../data.json'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Pricing() {
  // console.log("data",datajson)
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      height: 600,
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      // flexBasis: "33.33%",
      flexShrink: 0,
      color:'#1e56a0',
    },
    headingWithNoColor: {
      fontSize: theme.typography.pxToRem(20),
      // flexBasis: "33.33%",
      flexShrink: 0,
      opacity:0.9
      // color:'#1e56a0',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      // opacity:0.8,
    },
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const email =()=>{
    window.open('mailto:tutorcept@gmail.com')
  }
  const datajson =[
      {},{},{}
  ]
  const [show,setShow] = useState(false)
  return (
    <div className="w-full h-auto">
      {/* <TopHeader /> */}
      <WhiteHeader />
      {!show?<ComingSoon content='pricing plan'/>: 
      
      <div className="w-full h-auto flex flex-col mt-[80px] px-52 py-8">
          <div className='w-full text-center pb-20'>
              <p className="text-2xl text-gray-500 font-medium">
                  <FormatQuoteIcon
                  style={{
                    transform: "rotate(180deg)",
                    marginTop: "-15px",
                    // marginBottom: "6px",
                    color: "black",
                    fontSize: "30px",
                  }}/>
              We understand the struggle to get good tutoring services without breaking your wallet. Therefore, we bring you one of the cheapest and customizable plans in India without sacrificing the quality of service!
              <FormatQuoteIcon 
              style={{
                // transform: "rotate(180deg)",
                marginTop: "-15px",
                color: "black",
                fontSize: "30px",
              }}
              />
              </p>
          </div>
        <div className="pb-10 text-center">
          <h1 className="text-5xl text-[#1e56a0] font-bold pb-7">
          Group Tutoring Pricing Plans
          </h1>
          <p className="text-lg text-gray-500 font-medium ">
          We offer a variety of affordable monthly tutoring rates to suit your needs.
          </p>
          {/* <p className="text-xl opacity-80">
            Please reach us at <u onClick={email} style={{color:'#1e56a0',cursor:"pointer"}}>tutorcept@gmail.com</u> if you cannot find an
            answer to your question.
          </p> */}
        </div>
        {/* <div>
          <div className='flex items-center justify-center pb-10'>
                  <input placeholder='Find Out Your Question' className="pl-5 w-[600px] h-[54px] shadow border border-transparent focus:outline-none focus:rounded-bl-lg focus:rounded-tl-lg focus:ring-2 focus:ring-[#1e56a0] focus:border-transparent"></input>
                  <SearchIcon className='bg-[#5cb85c] cursor-pointer rounded-r-md hover:bg-[#1e56a0]' style={{height:58,width:70,color:"white",padding:10}}/>
          </div>
        </div> */}
        {/* {datajson.map((item, i) => ( */}
          <Accordion
        //   key={i}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${0 + 1}bh-content`}
              id={`panel${0}bh-header`}
            >
              <Typography className={expanded === 'panel1'?`${classes.heading}`:`${classes.headingWithNoColor}`}>
              Monthly Premium Plan
              </Typography>
              {/* <Typography >I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails
            style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography className='w-[600px]'>
                  <div className='group cursor-pointer grid grid-cols-12 mt-5 w-full h-[100px] hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                      <div className='col-span-12 rounded-lg shadow-xl text-center'>
                          <h1 className='text-2xl text-gray-600 group-hover:text-white mt-5 pb-2 font-medium'>₹2150</h1>
                          <p>(Includes English, Mathematics, Science and Social Science)</p>
                      </div>
                  </div>
              


              </Typography>
            </AccordionDetails>
          </Accordion>
{/* {'2nd plan'} */}
          <Accordion
        //   key={i}
            expanded={expanded === `panel${1 + 1}`}
            onChange={handleChange(`panel${1 + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${1 + 1}bh-content`}
              id={`panel${1}bh-header`}
            >
              <Typography className={expanded === `panel${1 + 1}`?`${classes.heading}`:`${classes.headingWithNoColor}`}>
              A la carte Plans
              </Typography>
              {/* <Typography >I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='' >
               <div className='grid grid-cols-12 gap-6 text-center'>
               <div className='group cursor-pointer col-span-6 rounded-lg h-[150px] shadow-2xl hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                   <h1 className='text-2xl text-gray-600 group-hover:text-white mt-3 pb-4 font-medium'>Lingo Learners Plan</h1>
                   <h2>₹650</h2>
                   <p>(For CBSE Language and Literature)</p>
               </div>
               <div className='group cursor-pointer col-span-6 rounded-lg h-[150px] shadow-2xl hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                   <h1 className='text-2xl text-gray-600 group-hover:text-white mt-3 pb-4 font-medium'>Mathematics Mania Plan</h1>
                   <h2>₹650</h2>
                   <p>(For CBSE Mathematics)</p>
               </div>
               <div className='group cursor-pointer col-span-6 rounded-lg h-[150px] shadow-2xl hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                   <h1 className='text-2xl text-gray-600 group-hover:text-white mt-3 pb-4 font-medium'>Scientific Saints Plan</h1>
                   <h2>₹650</h2>
                   <p>(For CBSE Physics, Chemistry and Biology)</p>
               </div>
               <div className='group cursor-pointer col-span-6 rounded-lg h-[150px] shadow-2xl hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                   <h1 className='text-2xl text-gray-600 group-hover:text-white mt-3 pb-4 font-medium'>Harmonious Humanities Plan</h1>
                   <h2>₹700</h2>
                   <p>(For CBSE Social Science-History, Geography, Political Science, Economics)</p>
               </div>

               </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
{/* {'3 plan'} */}
          <Accordion
        //   key={i}
            expanded={expanded === `panel${2 + 1}`}
            onChange={handleChange(`panel${2 + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${2 + 1}bh-content`}
              id={`panel${2}bh-header`}
            >
              <Typography className={expanded === `panel${2 + 1}`?`${classes.heading}`:`${classes.headingWithNoColor}`}>
              Mix N Match Plan
              </Typography>
              {/* <Typography >I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className=''>
                  <p className='mt-5 opacity-80'>
              Make your own combo plan and get exciting discounts by choosing any combination which satisfies your needs and doesn’t hurt your pocket.

                  </p>
                  <div className='grid grid-cols-12 gap-6 w-full text-center mt-5'>
                  <div className='group cursor-pointer col-span-6 rounded-lg h-[150px] shadow-2xl hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                   <h1 className='text-2xl text-gray-600 group-hover:text-white mt-3 pb-4 font-medium'>Two Subjects/month</h1>
                   <h2>₹1250</h2>
                   <p>(If Social Science - ₹1300)</p>
               </div><div className='group cursor-pointer col-span-6 rounded-lg h-[150px] shadow-2xl hover:bg-[#1e56a0] hover:text-white hover:opacity-100 hover:rounded-lg'>
                   <h1 className='text-2xl text-gray-600 group-hover:text-white mt-3 pb-4 font-medium'>Three Subjects/month</h1>
                   <h2>₹1850 </h2>
                   <p>(If Social Science - ₹1900)</p>
               </div>
                      {/* <div className='col-span-6 rounded h-[100px]'> -  </div>
<div className='col-span-6 rounded h-[100px]'> - </div> */}
                  </div>

              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* {'4 plan'} */}
          <Accordion
        //   key={i}
            expanded={expanded === `panel${3 + 1}`}
            onChange={handleChange(`panel${3 + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${3 + 1}bh-content`}
              id={`panel${3}bh-header`}
            >
              <Typography className={expanded === `panel${3 + 1}`?`${classes.heading}`:`${classes.headingWithNoColor}`}>
              1-ON-1 Private Tutoring Monthly Exclusive Plan
              </Typography>
              {/* <Typography >I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='opacity-80 pb-5'>
                  <p>
              Our affordable monthly plan is perfect for you if you need consistent help in your classes. With just ₹3999/month, you can get help in all of your classes. Our tutors are available from 3 pm - 7 pm and you can drop in during that time to get help!

                  </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
  {/* ))} */}

      </div>
      }
      <Footer />
    </div>
  );
}

export default Pricing;
