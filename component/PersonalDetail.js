// import DateFnsUtils from "@date-io/date-fns";
// import 'date-fns';
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

// export async function getStaticProps() {
//   const res = await fetch("https://cdn-tutorcept.herokuapp.com/schools/v1/get")
//     const schoolData = await res.json()
//   // console.log(res.data)
//   // if (!schoolData) {
//   //   return {
//   //     notFound: true,
//   //   }
//   // }
//   console.log("SChoolData",schoolData)
//   return {
//     props: { schoolData }, // will be passed to the page component as props
//   }
// }

function PersonalDetail({ schoolData }) {
  const [Input, setInput] = useState({
    FullName: "",
    DateOfBirth: "",
    Email: "",
    MobileNumber: "",
    Board: "",
    Address: "",
    Pin: "",
    Country:"",
    City: "",
    School: "",
    Class: "",
  });

  const [showCountry, setShowCountry] = useState(false);
  const [showCity, setShowCity] = useState(false);

  const showdropdownCountry = () => {
    setShowCountry(true);
  };
  const countryBlurFunction = () => {
    setShowCountry(false);
  };

  const showdropdownCity = () => {
    setShowCity(true);
  };
  const cityBlurFunction = () => {
    setShowCity(false);
  };
  const blurFunction = () => {
    setShow(false);
  };
  const handleChange = (e) => {
    // Computed property names
    // keys of the objects are computed dynamically
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };
  

  // useEffect(()=>{
  //   localStorage.setItem('PersonalDetail',JSON.stringify(Input));
  //   console.log("Input",Input)
  // },[Input])
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // const handleChange = () => {};
  // const school = []
  // const [schools] = school

  // SChool Filter and controller
  const [school, setSchool] = useState([{ name: "Loading" }]);
  const [schoolFilter, setSchoolFilter] = useState([]);
  const [show, setShow] = useState(false);
  const showdropdown = () => {
    setShow(true);
  };
  //Search Keyword for school
  const schoolChange = (e) => {
    console.log(e.target.value);
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
    const filterData =[]
    schoolFilter.map((item,i)=>{
      // console.log("item",item)
       if(item.name){
        // console.log("item",item.name)
        const schoolName = item.name.toLowerCase();
         const value  = Input['School'].toLowerCase()
         if(schoolName.includes(value)){
           filterData.push(item)
         }
       }
     })
     console.log("fliterData",filterData)
     setSchool(filterData)
    // if(school.length > 2){

    // }
  };
  const schoolName = (name) => {
    setInput({
      ...Input,
      School: name,
    });
    setShow(false);
    console.log("Nmae", name);
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      // const response = await MyAPI.getData(someId);
      const res = await axios.get(
        "https://cdn-tutorcept.herokuapp.com/schools/v1/get"
      );
      const schoolData = res.data.data;
      // console.log("schooldata", schoolData);
      // schools.push(schoolData)
      setSchool(schoolData);
      setSchoolFilter(schoolData);

      // ...
    }
    fetchData();
  }, []);


  //Conutry Filter and controller
  
  const [country, setCountry] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);

//Search Keyword for Country
const countryChange = (e) => {
  console.log(e.target.value);
  setInput({
    ...Input,
    [e.target.name]: e.target.value,
  });
  const filterData =[]
  countryFilter.map((item,i)=>{
    // console.log("item",item)
     if(item.name){
      // console.log("item",item.name)
      const countryName = item.name.toLowerCase();
       const value  = Input['Country'].toLowerCase()
       if(countryName.includes(value)){
         filterData.push(item)
       }
     }
   })
   console.log("fliterData",filterData)
   setCountryFilter(filterData)
  // if(school.length > 2){

  // }
};
const countryName = (name) => {
  setInput({
    ...Input,
    Country: name,
  });
  setShowCountry(false);
  console.log("CNmae", name);
};
  useEffect(()=>{
    async function fetchData() {
      // You can await here
      // const response = await MyAPI.getData(someId);
      const resCountry = await fetch("https://cdn-tutorcept.herokuapp.com/country/v1/get")
      const countryData = await resCountry.json()
      setCountry(countryData.data)
      // ...
    }
    fetchData();
  },[])
//DetaillSchool
  const [showSchool, setShowSchool] = useState(false);


  // City filter and controller section

  
  const [city, setCity] = useState([]);
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
          name="FullName"
          onChange={handleChange}
          type="text"
          Placeholder="Full Name"
          value={Input["FullName"]}
          className="w-full h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
          name="Email"
          onChange={handleChange}
          type="Email"
          Placeholder="Email"
          value={Input["Email"]}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
          name="MobileNumber"
          onChange={handleChange}
          type="number"
          value={Input["MobileNumber"]}
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
        <lable className="flex items-center justify-between text-sm focus:outline-none ">
          <span>Date of Birth:</span>
          <input
            name="DateOfBirth"
            onChange={handleChange}
            type="date"
            Placeholder="Enter Your Date of Birth"
            value={Input["DateOfBirth"]}
            className="w-[70%] h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
          />
        </lable>
      </div>
      <div className="col-span-12"
      // onBlur={blurFunction}
      // onMouseOut={blurFunction}
      >
        <div
          className="flex border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"

          // className="flex w-full"
        >
          <input
            name="School"
            onChange={schoolChange}
            type="text"
            Placeholder="School"
            value={Input["School"]}
            onFocus={showdropdown}
            // onBlur={blurFunction}
            className="relative z-0 pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-tl-lg focus:rounded-tr-lg"
          />
          <ArrowDropDownIcon
            style={{
              position: "relative",
              color: "#1e56a0",
              zIndex: 1,
              marginLeft: -25,
            }}
          />
        </div>
        <div
            // onBlur={blurFunction}
            
          className={
            show
              ? "absolute pl-5 z-10 text-left bg-white h-[150px] ml-[-1px] overflow-y-scroll w-[639px] border-2 border-t-0 rounded border-purple-600 "
              : "hidden"
          }
        >
          <p>Type your School</p>
          <div>
            {school.map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  // setSchool([{ name: "Loading" }])
                  schoolName(item.name)}}
            

                className="relative z-20 opacity-50 cursor-pointer"
              >
                {item.name}
              </p>
              // <p key={i} className='opacity-50 cursor-pointer'>{item}</p>
            ))}
          </div>

          <p
            onClick={() => setShowSchool(true)}
            className="sticky bottom-0 z-30 bg-white cursor-pointer opacity-70"
          >
            Other
          </p>
          <div
            className={showSchool ? "grid grid-col-12 gap-5 pt-3" : " hidden"}
          >
            <div className="col-span-6">
              <input
                name="SchoolName"
                onChange={handleChange}
                type="text"
                value={Input["SchoolName"]}
                Placeholder="School Name"
                className="w-full h-8 pl-5 border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
              />
            </div>
            <div className="col-span-6">
              <input
                name="SchoolAddress"
                onChange={handleChange}
                type="text"
                value={Input["SchoolAddress"]}
                Placeholder="School Address"
                className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
              />
            </div>
            <div className="col-span-6">
              <input
                name="SchoolDistrict"
                onChange={handleChange}
                type="text"
                value={Input["SchoolDistrict"]}
                Placeholder="School District"
                className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
              />
            </div>
            <div className="col-span-6">
              <input
                name="SchoolState"
                onChange={handleChange}
                type="text"
                value={Input["SchoolState"]}
                Placeholder="School State"
                className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
              />
            </div>
            <div className="col-span-12 pb-2">
              <button
                className="w-full text-white bg-[#3f51b5] rounded-lg"
                onClick={() => setShowSchool(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      
      
      </div>

      <div className="col-span-6">
        <input
          name="Class"
          onChange={handleChange}
          type="text"
          Placeholder="Class"
          value={Input["Class"]}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-6">
        <input
          name="Board"
          onChange={handleChange}
          type="text"
          Placeholder="Board"
          value={Input["Board"]}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-12">
        <input
          name="Address"
          onChange={handleChange}
          type="text"
          Placeholder="Address"
          value={Input["Address"]}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <input
          name="Pin"
          onChange={handleChange}
          type="text"
          Placeholder="Pin"
          value={Input["Pin"]}
          className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <div
          className="flex border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-lg"

          // className="flex w-full"
        >
          <input
            name="Country"
            onChange={countryChange}
            type="text"
            Placeholder="Country"
            value={Input["Country"]}
            onFocus={showdropdownCountry}
            // onBlur={countryBlurFunction}
            className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-tl-lg focus:rounded-tr-lg"
          />
          <ArrowDropDownIcon
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: -25,
              color: "#1e56a0",
            }}
          />
        </div>
        <div
          className={
            showCountry
              ? "absolute z-10 pl-5 text-left bg-white h-[150px] ml-[-1px] overflow-y-scroll w-[201px] border-2 border-t-0 rounded border-purple-600 "
              : "hidden"
          }
        >
          <p>Type your Country Name</p>
          {country.map((item, i) => (
            <p key={i} 
            onClick={() => {
              countryName(item.name)}}
            className="opacity-50 cursor-pointer">
              {item.name}
            </p>
          ))}
          <p className="opacity-50 cursor-pointer">
            Add Country
          </p>
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
            name="City"
            onChange={handleChange}
            type="text"
            Placeholder="City"
            value={Input["City"]}
            onFocus={showdropdownCity}
            onBlur={cityBlurFunction}
            className="pl-5 border-b-2 w-full h-8 border-[] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-tl-lg focus:rounded-tr-lg"
          />
          <ArrowDropDownIcon
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: -25,
              color: "#1e56a0",
            }}
          />
        </div>
        <div
          className={
            showCity
              ? "absolute z-10 pl-5 text-left bg-white h-[150px] ml-[-1px] overflow-y-scroll w-[201px] border-2 border-t-0 rounded border-purple-600 "
              : "hidden"
          }
        >
          <p>Type your City</p>
          {city.map((item, i) => (
            <p key={i} className="opacity-50 cursor-pointer">
              {item.city}
            </p>
          ))}
          <p className="opacity-50 cursor-pointer">
            Add Country
          </p>
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
        <span className="flex items-center justify-between row-span-2 text-sm focus:outline-none ">
          Upload your Photo(optional):
        </span>
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
            className="bg-[#1e56a0] rounded-sm w-[100px] h-[40px] opacity-90 hover:opacity-100 text-white"
          >
            Upload
          </Button>
        </label>
      </div>

      <div className="flex justify-center w-full col-span-6 row-span-2">
        <div className="border-2">
          <Image src="/Free-Logo.png" width={80} height={65} alt="photo" />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetail;
