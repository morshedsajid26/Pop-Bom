"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "@/public/Avatar.png";
import { FiEdit, FiX } from "react-icons/fi";
import InputField from "@/app/component/InputField";

const Profile = () => {
  const [viewOpen, setViewOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const logoRef = useRef(null);
  const [logoPreview, setLogoPreview] = useState(Avatar);

  /* =========================
     Fetch profile using ID
     ========================= */
  useEffect(() => {
    const fetchProfile = async () => {
      const id = localStorage.getItem("id");
      const email = localStorage.getItem("email");

      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://172.252.13.97:5000/api/admin/profile/${id}`
        );
        const data = await res.json();

        if (data.success) {
          setProfile(data.data);
          if (data.data.avatar) {
            setLogoPreview(data.data.avatar);
          }
        } else {
          // fallback
          setProfile({ email });
        }
      } catch (err) {
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  /* =========================
     Handle image select
     ========================= */
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLogoPreview(url);
  };

  if (loading) {
    return <p className="mt-10 text-center">Loading profile...</p>;
  }

  return (
    <div className="w-[530px] gap-8 mt-10">
      {/* ================= Profile View ================= */}
      <div className="flex items-center gap-10">
        <div>
          <p className="font-inter text-xl mb-2">Profile Image</p>
          <Image
            src={logoPreview || Avatar}
            alt="profile"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>

        <button
          onClick={() => setViewOpen(true)}
          className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-black w-[35%] font-bold py-2.5 mt-14 rounded-lg text-sm"
        >
          Edit Profile
        </button>
      </div>

      {/* ================= Info ================= */}
      <div className="font-inter text-xl text-black mt-10">
        <div className="flex justify-between border-b py-4">
          <span className="font-medium">Name:</span>
          <span>{profile?.name || "PopBom"}</span>
        </div>

        <div className="flex justify-between border-b py-4">
          <span className="font-medium">Email:</span>
          <span>{profile?.email}</span>
        </div>
      </div>

      {/* ================= Edit Modal ================= */}
      {viewOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-[#EFEFEF] rounded-3xl p-10 w-[600px]">
            <div className="flex justify-end">
              <FiX
                onClick={() => setViewOpen(false)}
                className="w-7 h-7 cursor-pointer"
              />
            </div>

            <h3 className="font-inter text-2xl text-center mb-12">
              Edit Profile
            </h3>

            {/* Image edit */}
            <div className="relative flex flex-col items-center mb-12">
              <Image
                src={logoPreview || Avatar}
                alt="logo"
                width={120}
                height={120}
                className="rounded-lg"
              />

              <button
                onClick={() => logoRef.current.click()}
                className="w-8 h-8 bg-gradient-to-r from-[#21E6A0] to-[#6DF844]
                flex items-center justify-center rounded-lg absolute bottom-0"
              >
                <FiEdit />
              </button>

              <input
                type="file"
                ref={logoRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
            </div>

            {/* Inputs */}
            <div className="space-y-8">
              <InputField
                label="Full Name"
                value={profile?.name || ""}
                labelClass="text-[#333333]"
                inputClass="border border-[#21E6A0] bg-transparent rounded py-3"
              />

              <InputField
                label="Email Address"
                value={profile?.email || ""}
                disabled
                labelClass="text-[#333333]"
                inputClass="border border-[#21E6A0] bg-transparent rounded py-3"
              />
            </div>

            <div className="text-center">
              <button
                onClick={() => setViewOpen(false)}
                className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844]
                text-black w-[30%] font-bold py-3 mt-14 rounded-lg"
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
