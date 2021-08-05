// import DateFnsUtils from "@date-io/date-fns";
// import 'date-fns';
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Image from 'next/image'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'

function PersonalDetail() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [Input, setInput] = useState({
    FullName: "",
    DateOfBirth: "",
    Email: "",
    MobileNumber: "",
    Board: "",
    Address: "",
    Pin: "",
    City: "",
    School: "",
    Class: "",

  });
  const [show, setShow] =useState(false)
  const showdropdown =()=>{
    setShow(true)
  }
  const [showCountry, setShowCountry] =useState(false)
  const [showCity, setShowCity] =useState(false)

  const showdropdownCountry=()=>{
    setShowCountry(true)
  }
  const countryBlurFunction=()=>{
    setShowCountry(false)
    
  }

  const showdropdownCity=()=>{
    setShowCity(true)
  }
  const cityBlurFunction=()=>{
    setShowCity(false)
    
  }
  const blurFunction=()=>{
    setShow(false)
    
  }
  const handleChange = (e) => {
    // Computed property names
    // keys of the objects are computed dynamically
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
    
  };

  useEffect(()=>{
    localStorage.setItem('PersonalDetail',JSON.stringify(Input));
    console.log("Input",Input)
  },[Input])
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // const handleChange = () => {};
  // const school = []
  // const [schools] = school
  const [school,setSchool] =useState([])
  const [city,setCity] =useState([])
  const [country,setCountry] = useState([])
  // const schools = []
  // const [school] = schools
useEffect(()=>{
  async function fetchData() {
    // You can await here
    // const response = await MyAPI.getData(someId);
    const res = await axios.get("https://cdn-tutorcept.herokuapp.com/schools/v1/get")
    const schoolData = res.data.data
    console.log("schooldata",schoolData)
    // schools.push(schoolData.data)
    setSchool(schoolData)
  }
  fetchData();
},[])
// useEffect(()=>{
//   async function fetchData() {
//     // You can await here
//     // const response = await MyAPI.getData(someId);
//     const resCountry = await fetch("https://cdn-tutorcept.herokuapp.com/country/v1/get")
//     const countryData = await resCountry.json()
//     setCountry(countryData.data)
//     // ...
//   }
//   fetchData();
// },[])
// useEffect(()=>{
//   async function fetchData() {
//     // You can await here
//     // const response = await MyAPI.getData(someId);
//     const resCity = await fetch("https://cdn-tutorcept.herokuapp.com/city/v1/get")
//     const cityData = await resCity.json()
//     setCity(cityData.data)
//     // ...
//   }
//   fetchData();
// },[])
// useEffect(()=>{
//   console.log("schools",city)
//   console.log("schoolslength",city.length)

// },[city])
// if(schools){

// }

  return (
    <div className="grid grid-cols-12 gap-5 pt-2 pb-2 px-8 bg-white h-[400px]">
      <div className="col-span-6">
        <input
        name='FullName'
          onChange={handleChange}
          type="text"
          Placeholder="Full Name"
          value={Input['FullName']}
          className="w-full h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
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
          value={Input['MobileNumber']}
          Placeholder="Mobile Number"
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      {/* <div className="col-span-6">
        <input
        name='LastName'
          onChange={handleChange}
          type="text"
          Placeholder="Last Name"
          value={Input['LastName']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div> */}
      <div className="col-span-6">
        <lable className='flex items-center justify-between text-sm focus:outline-none '>
            <span>Date of Birth:</span>
        <input
        name='DateOfBirth'
          onChange={handleChange}
          type="date"
          Placeholder="Enter Your Date of Birth"
          value={Input['DateOfBirth']}
          className="w-[70%] h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
        </lable>
      </div>
      <div className="col-span-12">
        <div 
          className="flex border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"

        // className="flex w-full"
        >
        <input
        name='School'
          onChange={handleChange}
          type="text"
          Placeholder="School"
          value={Input['School']}
          onFocus={showdropdown}
          onBlur={blurFunction}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-tl-lg focus:rounded-tr-lg"
        />
        <ArrowDropDownIcon
        style={{position:'relative',color:'#1e56a0', zIndex:1,marginLeft:-25}}
        />
        </div>
        <div className={show?"absolute z-10 pl-5 text-left bg-white h-[150px] ml-[-1px] overflow-y-scroll w-[639px] border-2 border-t-0 rounded border-purple-600 ":'hidden'}>
          <p>Type your School</p>
          {school.map((item,i)=>(
            <p key={i} className='opacity-50 cursor-pointer'>{item.name}</p>
          ))}
          <p className='opacity-50 cursor-pointer'>Create School:{Input['School']}</p>
        </div>
      </div>
      
      <div className="col-span-6">
        <input
        name='Class'
          onChange={handleChange}
          type="text"
          Placeholder="Class"
          value={Input['Class']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
        name='Board'
          onChange={handleChange}
          type="text"
          Placeholder="Board"
          value={Input['Board']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-12">
        <input
        name='Address'
          onChange={handleChange}
          type="text"
          Placeholder="Address"
          value={Input['Address']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <input
        name='Pin'
          onChange={handleChange}
          type="text"
          Placeholder="Pin"
          value={Input['Pin']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <div 
          className="flex border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"

        // className="flex w-full"
        >
        <input
        name='Country'
          onChange={handleChange}
          type="text"
          Placeholder="Country"
          value={Input['Country']}
          onFocus={showdropdownCountry}
          onBlur={countryBlurFunction}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-tl-lg focus:rounded-tr-lg"
        />
        <ArrowDropDownIcon
        style={{position:'relative', zIndex:1,marginLeft:-25,color:'#1e56a0'}}
        />
        </div>
        <div className={showCountry?"absolute z-10 pl-5 text-left bg-white h-[150px] ml-[-1px] overflow-y-scroll w-[201px] border-2 border-t-0 rounded border-purple-600 ":'hidden'}>
          <p>Type your Country Name</p>
          {country.map((item,i)=>(
            <p key={i} className='opacity-50 cursor-pointer'>{item.name}</p>
          ))}
          <p className='opacity-50 cursor-pointer'>Add Country:{Input['Country']}</p>
        </div>
      </div>
      {/* <div className="col-span-4">
        <input
        name='Country'
          onChange={handleChange}
          type="text"
          Placeholder="Country"
          value={Input['Country']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div> */}
      <div className="col-span-4">
        <div 
          className="flex border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"

        // className="flex w-full"
        >
        <input
        name='City'
          onChange={handleChange}
          type="text"
          Placeholder="City"
          value={Input['City']}
          onFocus={showdropdownCity}
          onBlur={cityBlurFunction}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-tl-lg focus:rounded-tr-lg"
        />
        <ArrowDropDownIcon
        style={{position:'relative', zIndex:1,marginLeft:-25,color:'#1e56a0'}}
        />
        </div>
        <div className={showCity?"absolute z-10 pl-5 text-left bg-white h-[150px] ml-[-1px] overflow-y-scroll w-[201px] border-2 border-t-0 rounded border-purple-600 ":'hidden'}>
          <p>Type your City</p>
          {city.map((item,i)=>(
            <p key={i} className='opacity-50 cursor-pointer'>{item.city}</p>
          ))}
          <p className='opacity-50 cursor-pointer'>Add Country:{Input['Country']}</p>
        </div>
      </div>
      {/* <div className="col-span-4">
        <input
        name='City'
          onChange={handleChange}
          type="text"
          Placeholder="City"
          value={Input['City']}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
        <ArrowDropDownIcon
        style={{position:'relative', zIndex:1,marginLeft:-25,color:'#1e56a0'}}
        />
      </div> */}
      
      
      
      
      <div className="flex items-center justify-between w-full col-span-6 row-span-2">
        <input
          accept="image/*"
          className="hidden"
          id="contained-button-file"
          multiple
          type="file"
          name="contained-button-file"
        />
        <span className='flex items-center justify-between row-span-2 text-sm focus:outline-none '>Upload your Photo(optional):</span>
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
      </div>
      
    </div>
  );
}

export default PersonalDetail;
