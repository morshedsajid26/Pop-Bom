import UserChart from "@/app/component/UserChart";
import React from "react";

const Dashbaord = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-7">
        <div className="bg-white py-10 col-span-4 rounded-2xl text-center space-y-5">
          <p className="font-inter text-black text-xl ">Total User</p>
          <p className="font-inter text-black ">15</p>
        </div>

       <div className="bg-white py-10 col-span-4 rounded-2xl text-center space-y-5">
          <p className="font-inter text-black text-xl ">Total Video</p>
          <p className="font-inter text-black ">1500</p>
        </div>

        <div className="bg-white py-10 col-span-4 rounded-2xl text-center space-y-5">
          <p className="font-inter text-black text-xl ">Total Support Ticket</p>
          <p className="font-inter text-black ">15</p>
        </div>

      <div className="bg-white p-5 col-span-12 rounded-2xl ">
        <div className="mb-12">
          <p className="font-inter text-black text-[20px]">User Chart</p>
        </div>
        <UserChart />
      </div>
      </div>

    </div>
  );
};

export default Dashbaord;
