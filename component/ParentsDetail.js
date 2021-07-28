// import DateFnsUtils from "@date-io/date-fns";
// import 'date-fns';
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Image from 'next/image'
import { makeStyles } from "@material-ui/core/styles";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     input: {
    //   display: 'none',
//     },
//   }));
function ParentsDetail() {
  // const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [Input, setInput] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    Occupation: "",
  });
  const handleChange = (e) => {
    // Computed property names
    // keys of the objects are computed dynamically
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    localStorage.setItem('ParentsDetail',JSON.stringify(Input));
    console.log("Input",Input)
  },[Input])
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // const handleChange = () => {};

  return (
    <div className="grid grid-cols-12 gap-5 pt-2 pb-2 px-8 bg-white h-[200px]">
      <div className="col-span-6">
        <input
        name='FirstName'
          onChange={handleChange}
          type="text"
          Placeholder="First Name"
          value={Input['FirstName']}
          className="w-full h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
        name='LastName'
          onChange={handleChange}
          type="text"
          Placeholder="Last Name"
          value={Input['LastName']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      {/* <div className="col-span-6">
        <lable className='flex items-center justify-between text-sm focus:outline-none '>
            <span>Date of Birth:</span>
        <input
          onChange={handleChange}
          type="date"
          Placeholder="Enter Your Date of Birth"
          className="w-[70%] h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
        </lable>
      </div> */}
      <div className="col-span-6">
        <input
        name='Email'
          onChange={handleChange}
          type="Email"
          Placeholder="Email"
          value={Input['Email']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
        name='MobileNumber'
          onChange={handleChange}
          type="number"
          Placeholder="Mobile Number"
          value={Input['MobileNumber']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
        name='Occupation'
          onChange={handleChange}
          type="text"
          Placeholder="Occupation"
          value={Input['Occupation']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      {/* <div className="col-span-12">
        <input
          onChange={handleChange}
          type="text"
          Placeholder="Address"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <input
          onChange={handleChange}
          type="text"
          Placeholder="Pin"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <input
          onChange={handleChange}
          type="text"
          Placeholder="City"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <input
          onChange={handleChange}
          type="text"
          Placeholder="Country"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
          onChange={handleChange}
          type="text"
          Placeholder="School"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
          onChange={handleChange}
          type="text"
          Placeholder="Class"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      
      <div className="flex items-center justify-between w-full col-span-6 row-span-2">
        <input
          accept="image/*"
          className="hidden"
          id="contained-button-file"
          multiple
          type="file"
          name="contained-button-file"
        />
        <span className='flex items-center justify-between row-span-2 text-sm focus:outline-none '>Upload your Photo:</span>
        <label htmlFor="contained-button-file" >
            
          <Button
          variant="contained" color="primary" component="span"
            className="bg-[#1e56a0] rounded-sm w-[100px] h-[40px] opacity-90 hover:opacity-100 text-white"
          >
            Upload
          </Button>
        </label>
      </div>
      
      <div className="flex justify-center w-full col-span-6 row-span-2">
          <div  className='border-2'>
                       <Image src='/Free-Logo.png' width={80} height={65} alt='photo'/>
 
          </div>
      </div> */}
      
    </div>
  );
}

export default ParentsDetail;
