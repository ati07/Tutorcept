import {useState, useEffect} from 'react'
function StHome() {
  const [user, setUser] = useState('')

  useEffect(()=>{
    if(localStorage.getItem('PersonalDetail')){
    const user = JSON.parse(localStorage.getItem('PersonalDetail'))
    setUser(user)
  }
  },[])
  
  return (
    <div className="grid grid-cols-12 gap-6 px-5 pt-5">
      <div className="col-span-12">
        <p className="text-xs uppercase opacity-70">Welcome</p>
        <h1 className="text-xl opacity-80 ">{user? user.FirstName:''}</h1>
      </div>
      <div className="col-span-8 bg-white rounded-xl shadow h-[200px]">
        <div className="px-2 pt-4 text-xs font-bold uppercase opacity-70">
          Live Session
        </div>
        <div className="flex items-center justify-center w-full pt-4 opacity-80">
          <button className="text-lg h-[80px] w-[200px] hover:text-white text-white bg-[#1e56a0] opacity-95 rounded-full hover:opacity-100 text-center">
            JOIN THE ROOM
          </button>
        </div>
      </div>
      <div className="col-span-4 bg-white rounded-xl shadow h-[200px]">
        <div className="grid grid-cols-12 gap-2 px-1 pt-6">
          <div className="col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            Start Session
          </div>
          <div className="flex items-center justify-center col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>


          </div>
          <div className="col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            End Session
          </div>
          <div className="flex items-center justify-center col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
          <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>
          </div>
          <div className="col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            Total Duration
          </div>
          <div className="flex items-center justify-center col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
          <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StHome;
