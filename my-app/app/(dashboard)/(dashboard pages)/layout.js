"use client";

import React from "react";

import Sidebar from "@/app/component/Sidebar";
import Topbar from "@/app/component/Topbar";

const layout = ({ children }) => {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 min-h-0">
          <Topbar />

          {/* MAIN CONTAINER */}
          <main
            className={`
              flex-1 min-h-0 p-4 overflow-scroll hide-scrollbar
              
              `}
          >
            <div
              className={`
                w-full max-w-full
                overflow-scroll hide-scrollbar
               
                `}
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default layout;
