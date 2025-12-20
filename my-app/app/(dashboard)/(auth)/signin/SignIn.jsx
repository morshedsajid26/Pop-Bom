"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import InputField from "@/app/component/InputField";
import Password from "@/app/component/Password";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await fetch("http://172.252.13.97:5000/api/auth/admin/login", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (res.ok) {
        setMessage("Login successful!");
        setIsSuccess(true);

        // Save JWT Token
        if (data.token) {
          Cookies.set("token", data.token);
        }

        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      } else {
        setMessage(JSON.stringify(data));
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Something went wrong!");
      setIsSuccess(false);
    }

    setLoading(false);
  };
  return (
    <div className="bg-[#EAEAEA] h-screen grid justify-center items-center">
      <main className="bg-white overflow-y-auto hide-scrollbar py-15 px-11 rounded-3xl  ">
        <form
          onSubmit={handleLogin}
          className="gap-5 flex flex-col items-center w-[480px] "
        >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Password
            inputClass="border border-[#21E6A0]"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          {message && (
          <p
            className={`text-center mt-2 ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

          
            <button 
            disabled={loading}
            className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-white font-semibold text-xl w-full font-inter py-3 rounded-lg cursor-pointer mt-12">
              
              {loading? "Signing In..." : "Sign In"}
            </button>
          

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
