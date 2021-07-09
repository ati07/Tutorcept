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
      // color:'#1e56a0',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      opacity:1,
    },
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="w-full h-auto">
      {/* <TopHeader /> */}
      <WhiteHeader />

      <div className="w-full h-auto flex flex-col mt-[150px] px-52 py-8">
        <div className="pb-10 text-center">
          <h1 className="text-5xl text-[#1e56a0] font-bold pb-7">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Please reach us at <u>tutorcept@gmail.com</u> if you cannot find an
            answer to your question.
          </p>
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
                {item["question"]}
              </Typography>
              {/* <Typography >I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography dangerouslySetInnerHTML={{__html: item["answer"]}}>
                {}
                
              </Typography>
            </AccordionDetails>
          </Accordion>
  ))}

      </div>
      {/* <ComingSoon content='it'/> */}
      <Footer />
    </div>
  );
}

export default Faqs;
