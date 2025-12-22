"use client";
import Bredcumb from "@/app/component/Bredcumb";
import Dropdown from "@/app/component/Dropdown";
import Pagination from "@/app/component/Pagination";
import Table from "@/app/component/Table";
import React, { useEffect, useState } from "react";

let StatusDropDown = () => {
  return (
    <div className="">
      <Dropdown
              placeholder="Pending"
              className={`w-[60%]  rounded-xl p-2 font-inter font-medium`}
              options={["Solved", "Pending", "Issued"]}
              inputClass={``}
            />
    </div>
  )
};

const TableHeads = [
 

  {
    Title: "Username",
    key: "username",
    width: "10%",
  },

  { Title: "User Mail", key: "usermail", width: "10%" },
  { Title: "Contact Number", key: "number", width: "10%" },
  { Title: "Description", key: "description", width: "10%" },
  { Title: "Status", key: "status", width: "10%" },
  { Title: "Date", key: "date", width: "10%" },
 
];

// ROWS
const TableRows = [
  {
    
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    description: "...",
    status: <StatusDropDown/>,
    date: "2023-01-01"
  },

  {
    
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    description: "...",
    status: <StatusDropDown/>,
    date: "2023-01-01"
  },
  {
    
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    description: "...",
    status: <StatusDropDown/>,
    date: "2023-01-01"
  },
  {
    
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    description: "...",
    status: <StatusDropDown/>,
    date: "2023-01-01"
  },
  {
    
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    description: "...",
    status: <StatusDropDown/>,
    date: "2023-01-01"
  },
  
];


const Reports = () => {
    const [baseOnTitle, setBaseOnTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
     // Set data for pagination
  useEffect(() => {
    setBaseOnTitle(TableRows);
  }, []);

    // Pagination setup
      const itemsPerPage = 10;
      const totalPages = Math.ceil(baseOnTitle.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const currentItems = baseOnTitle.slice(startIndex, startIndex + itemsPerPage);
    return (

      <>
      <Bredcumb />
      <div className="grid grid-cols-12 gap-7 mt-10">
           <div className="bg-white px-10 pt-2 pb-10 col-span-4 rounded-2xl text-center ">
          <div className="flex justify-end">
            <Dropdown
              placeholder="Today"
              className={`w-[30%]  border   rounded-xl p-1 font-inter font-medium`}
              options={["Today", "This Week", "This Month", "This Year", "All Time"]}
              inputClass={``}
            />
          </div>
          <p className="font-inter text-black text-xl ">New Ticket</p>
          <p className="font-inter text-black mt-5 ">15</p>
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
          <p className="font-inter text-black text-xl ">On Progress</p>
          <p className="font-inter text-black mt-5 ">15</p>
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
          <p className="font-inter text-black text-xl ">Completed</p>
          <p className="font-inter text-black mt-5 ">15</p>
        </div>

        
      </div>
    <div className="bg-white rounded-2xl mt-7 ">

      

      <div className="">
        <Table TableHeads={TableHeads} TableRows={currentItems} />
      </div>

      <div className="py-5">
         <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </div>
    </>
  );
};

export default Reports;
