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
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Faqs() {
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
  return (
    <div className="w-full h-auto">
      {/* <TopHeader /> */}
      <WhiteHeader />

      <div className="w-full h-auto flex flex-col lg:md:mt-[150px] mt-[20px] lg:md:px-52 py-8">
        <div className="pb-10 text-center">
          <h1 className="lg:md:text-5xl text-xl text-[#1e56a0] font-bold pb-7">
            Frequently Asked Questions
          </h1>
          <p className="lg:md:text-xl text-sm opacity-80">
            Please reach us at <u onClick={email} style={{color:'#1e56a0',cursor:"pointer"}}>tutorcept@gmail.com</u> if you cannot find an
            answer to your question.
          </p>
        </div>
        <div>
          <div className='flex items-center justify-center pb-10'>
                  {/* <TextField className='w-[600px] rounded-r-none bg-[#fff]' id="outlined-search" label="Find Out Your Question" type="search" variant="outlined" /> */}
                  <input placeholder='Find Out Your Question' className="pl-5 lg:md:w-[600px] w-[500px] lg:md:h-[54px] h-[54px] shadow border border-transparent focus:outline-none focus:rounded-bl-lg focus:rounded-tl-lg focus:ring-2 focus:ring-[#1e56a0] focus:border-transparent"></input>
                  <SearchIcon className='bg-[#5cb85c] cursor-pointer h-[25px] rounded-r-md hover:bg-[#1e56a0]' style={{height:58,width:70,color:"white",padding:10}}/>
          </div>
        </div>
        {datajson.map((item, i) => (
          <Accordion
          key={i}
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i + 1}bh-content`}
              id={`panel${i}bh-header`}
            >
              <Typography className={expanded === `panel${i + 1}`?`${classes.heading}`:`${classes.headingWithNoColor}`}>
                <p className='text-[10px] lg:md:text-xl'>{item["question"]}</p>
                
              </Typography>
              {/* <Typography >I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
               <p className='opacity-70 text-sm lg:md:text-base' dangerouslySetInnerHTML={{__html: item["answer"]}}>

               </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
  ))}

      </div>
      <Footer />
    </div>
  );
}

export default Faqs;
