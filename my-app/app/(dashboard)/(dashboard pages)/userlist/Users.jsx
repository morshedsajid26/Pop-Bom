"use client";
import Bredcumb from "@/app/component/Bredcumb";
import Pagination from "@/app/component/Pagination";
import Table from "@/app/component/Table";
import React, { useEffect, useState } from "react";
const TableHeads = [
  {
    Title: "Name",
    key: "name",
    width: "20%",
  },

  {
    Title: "Username",
    key: "username",
    width: "20%",
  },

  { Title: "User Mail", key: "usermail", width: "20%" },
  { Title: "Contact Number", key: "number", width: "20%" },
  { Title: "Created Date", key: "created_date", width: "20%" },
 
];

// ROWS
const TableRows = [
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
  {
    name: "Sarah Martinez",
    username: "@sarah_m",
    usermail: "bNt6a@example.com",
    number: "+1 123-456-7890",
    created_date: "2023-01-01",
  },
 
];


const Users = () => {
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

export default Users;
