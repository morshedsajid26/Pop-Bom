"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Avatar from "@/public/Avatar.png";
import { FiEdit, FiX } from "react-icons/fi";
import InputField from "@/app/component/InputField";

const Profile = () => {
  const [viewOpen, setViewOpen] = useState(false);

  const logoRef = useRef(null);

  const [logoPreview, setLogoPreview] = useState(Avatar);

  // Handle file input
  const handleFileSelect = (e, setPreview) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="w-[530px] gap-8 mt-10">
      <div className="flex items-center ">
        <div>
          <p className="font-inter text-xl mb-2">Profile Image</p>
          <Image src={Avatar} alt="profile" />
        </div>
        <button
          onClick={() => setViewOpen(true)}
          className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-[#000000] w-[20%] font-bold font-inter py-2.5 mt-14 rounded-lg cursor-pointer text-sm"
        >
          Edit Profile
        </button>
      </div>

      <div className="font-inter text-xl text-[#000000] mt-10">
        <div className="flex justify-between border-b border-[#000000]/10 py-4">
          <span className="font-medium">Name:</span>
          <span className="font-normal">Jane</span>
        </div>

        <div className="flex justify-between border-b border-[#000000]/10 py-4">
          <span className="font-medium">Email:</span>
          <span className="font-normal">example@gmail.com</span>
        </div>
      </div>

      {viewOpen && (
        <div className="fixed inset-0 bg-[#D9D9D9]/80 flex items-center justify-center z-50">
          <div className="bg-[#EFEFEF] rounded-3xl p-10  w-[600px]">
            <div className="flex justify-end">
              <FiX
                onClick={() => setViewOpen(false)}
                className="w-7 h-7 cursor-pointer"
              />
            </div>
            <h3 className="font-inter font-medium text-2xl text-center mb-12">
              Edit Profile
            </h3>
            <div className="my-10 relative flex flex-col justify-center items-center">
              {/* <p className="font-inter text-xl mb-2">Profile Logo</p> */}

              {/* Logo Preview */}
              <div className=" ">
                <Image
                  src={logoPreview}
                  alt="cafe logo"
                  className="rounded-lg"
                />
              </div>

              {/* Edit Icon */}
              <button
                onClick={() => logoRef.current.click()}
                className="w-8 h-8 bg-gradient-to-r from-[#21E6A0] to-[#6DF844] flex items-center justify-center 
                     rounded-lg absolute right-[40%] bottom-0 cursor-pointer"
              >
                <FiEdit className="w-5 h-5  " />
              </button>

              {/* Hidden Input */}
              <input
                type="file"
                ref={logoRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, setLogoPreview)}
              />
            </div>

            <div className="  space-y-10">
              <InputField
                label=" Full Name"
                labelClass={`text-[#333333]  text-[16px]`}
                inputClass={` border-[#21E6A0] border bg-transparent rounded  text-[#5C5C5C] py-3 placeholder:text-[#5C5C5C]`}
                name="email"
              />
              <InputField
                label="Email Address"
                labelClass={`text-[#333333]  text-[16px]`}
                inputClass={`border-[#21E6A0] border bg-transparent rounded  text-[#5C5C5C] py-3 placeholder:text-[#5C5C5C]`}
                name="email"
              />
            </div>

            <div className="text-center">
              <button
                onClick={() => setViewOpen(false)}
                className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-[#000000] w-[30%] font-bold font-inter py-3 mt-14 rounded-lg cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
