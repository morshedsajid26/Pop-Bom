"use client";
import React, { useState } from "react";


import Link from "next/link";
import InputField from "@/app/component/InputField";


const ForgotPass = () => {
 



  return (
    <div className="grid justify-center items-center h-screen bg-[#EAEAEA]">
    <main className="bg-white   grid justify-center items-center overflow-y-auto hide-scrollbar py-20 px-11 rounded-3xl  ">
      <form
        className="gap-5 flex flex-col items-center w-[480px] "
      >
        <h3 className="font-inter font-medium text-[32px] text-[#333333] ">
          Forget Password?
        </h3>

        <p className="font-inter  text-[#333333]  mb-5">
          Please enter your email to get verification code
        </p>

        <InputField
          label="Email Address"
          labelClass={`text-[#333333]  text-[16px]`}
          inputClass={`border-[#21E6A0] border bg-transparent rounded  text-[#5C5C5C] py-3 placeholder:text-[#5C5C5C]`}
          name="email"
          
          
        />
  
<Link href={`/otp`} className="w-full">
          <button 
          type="submit"
          
          className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-white font-semibold text-xl w-full font-inter py-3 rounded-lg cursor-pointer mt-5">
           Continue
          </button>
</Link>
        
       
      </form>
    </main>
      </div>
  );
};

export default ForgotPass;
