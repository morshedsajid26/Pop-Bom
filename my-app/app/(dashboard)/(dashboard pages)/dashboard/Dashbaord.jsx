import Dropdown from "@/app/component/Dropdown";
import UserChart from "@/app/component/UserChart";
import React from "react";

const Dashbaord = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-7">
        <div className="bg-white p-10 col-span-4 rounded-2xl text-center space-y-5 flex flex-col items-center justify-center">
          <p className="font-inter text-black text-xl ">Total User</p>
          <p className="font-inter text-black ">15</p>
        </div>

        <div className="bg-white p-10 col-span-4 rounded-2xl text-center space-y-5  flex flex-col items-center justify-center">
          <p className="font-inter text-black text-xl ">Total Video</p>
          <p className="font-inter text-black ">1500</p>
        </div>

        <div className="bg-white px-10 pt-2 pb-10 col-span-4 rounded-2xl text-center ">
          <div className="flex justify-end">
            <Dropdown
              placeholder="Today"
              className={`w-[30%]  border   rounded-xl p-1 font-inter font-medium`}
              options={["Today", "This Week", "This Month", "This Year", "All Time"]}
              inputClass={``}
            />
          </div>
          <p className="font-inter text-black text-xl ">Total Support Ticket</p>
          <p className="font-inter text-black mt-5 ">15</p>
        </div>

        <div className="bg-white p-5 col-span-12 rounded-2xl ">
          <div className="mb-12 flex items-center justify-between">
            <p className="font-inter text-black text-[20px]">User Chart</p>
            <Dropdown
              placeholder="2025"
              className={`w-[7%]  border   rounded-xl p-2.5 font-inter font-medium `}
              options={["2025", "2024", "2023", "2022", "2021", "2020"]}
              inputClass={``}
            />
          </div>
          <UserChart />
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
