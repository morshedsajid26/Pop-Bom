import Image from "next/image";
import React from "react";


import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import InputField from "@/app/component/InputField";
import Password from "@/app/component/Password";

const SignIn = () => {
  return (
    <div className="bg-[#EAEAEA] h-screen grid justify-center items-center">
      <main className="bg-white overflow-y-auto hide-scrollbar py-15 px-11 rounded-3xl  ">
        <form className="gap-5 flex flex-col items-center w-[480px] ">
          <h3 className="font-inter font-medium text-[32px] text-[#333333] mb-6 mt-">
            Signin to Account
          </h3>

          <p className="font-inter  text-[#333333]">
            Please enter your email and password to continue
          </p>

          <InputField
            label="Email Address"
            labelClass={`text-[#333333] text-[16px]`}
            placeholder=""
            inputClass={`border-[#21E6A0] border bg-transparent  text-[#5C5C5C] py-3 placeholder:text-[#5C5C5C] rounded`}
          />
          <Password
            inputClass="border border-[#21E6A0]"
            label="Password"
            // placeholder="Enter your password"
          />

          <div className="flex justify-between items-center  w-full ">
            <div className="flex items-center gap-2.5">
              <input type="checkbox" className="w-4 h-4 accent-[#21E6A0]" />
              <p className="text-[#333333] font-inter ">Remember Password</p>
            </div>
            <Link href="/forgotpassword">
              <p className="text-[#21E6A0] font-inter ">Forgot Password?</p>
            </Link>
          </div>

          <Link className="w-full" href="/dashboard">
            <button className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-white font-semibold text-xl w-full font-inter py-3 rounded-lg cursor-pointer mt-12">
              Sign In
            </button>
          </Link>

          {/* <p className="font-inter ">
            Don’t have an account?
            <a href="/signup" className="font-bold">
              Sign up
            </a>
          </p> */}
        </form>
      </main>
    </div>
  );
};

export default SignIn;
