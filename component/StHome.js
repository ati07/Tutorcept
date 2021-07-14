function StHome() {
  return (
    <div className="grid grid-cols-12 gap-6 pt-5 px-5">
      <div className="col-span-12">
        <p className="uppercase text-xs opacity-70">Welcome</p>
        <h1 className="text-xl opacity-80 ">Atiurrahman</h1>
      </div>
      <div className="col-span-8 bg-white rounded-xl shadow h-[200px]">
        <div className="uppercase text-xs opacity-70 px-2 pt-4 font-bold">
          Live Session
        </div>
        <div className="flex justify-center items-center opacity-80 w-full pt-4">
          <button className="text-lg h-[80px] w-[200px] hover:text-white text-white bg-[#1e56a0] opacity-95 rounded-full hover:opacity-100 text-center">
            JOIN THE ROOM
          </button>
        </div>
      </div>
      <div className="col-span-4 bg-white rounded-xl shadow h-[200px]">
        <div className="grid grid-cols-12 px-1 gap-2 pt-6">
          <div className="col-span-6 uppercase text-xs opacity-70 px-2 pt-4 font-bold">
            Start Session
          </div>
          <div className=" flex justify-center items-center col-span-6 uppercase text-xs opacity-70 px-2 pt-4 font-bold">
            <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>


          </div>
          <div className="col-span-6 uppercase text-xs opacity-70 px-2 pt-4 font-bold">
            End Session
          </div>
          <div className="flex justify-center items-center col-span-6 uppercase text-xs opacity-70 px-2 pt-4 font-bold">
          <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>
          </div>
          <div className="col-span-6 uppercase text-xs opacity-70 px-2 pt-4 font-bold">
            Total Duration
          </div>
          <div className="flex justify-center items-center col-span-6 uppercase text-xs opacity-70 px-2 pt-4 font-bold">
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
