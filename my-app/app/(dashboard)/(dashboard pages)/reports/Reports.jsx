"use client";
import Bredcumb from "@/app/component/Bredcumb";
import Pagination from "@/app/component/Pagination";
import Table from "@/app/component/Table";
import React, { useEffect, useState } from "react";

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
    status: "+1 123-456-7890",
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
    <div className="bg-white p-6 rounded-2xl">
      <Bredcumb />

      <div className="mt-10">
        <Table TableHeads={TableHeads} TableRows={currentItems} />
      </div>

      <div>
         <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </div>
  );
};

export default Reports;
