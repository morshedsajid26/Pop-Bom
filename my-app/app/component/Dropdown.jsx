"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { createPortal } from "react-dom";

const Dropdown = ({
  value,                 // ✅ controlled value
  options = [],
  onChange,              // ✅ controlled change
  className = "",
  inputClass = "",
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef(null);

  // calculate dropdown position
  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  // outside click
  useEffect(() => {
    const handler = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Trigger */}
      <div ref={buttonRef} className={`relative w-full ${className}`}>
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className={`w-full h-9 px-3 rounded-md bg-white text-left ${inputClass}`}
        >
          {value}
        </button>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {open ? <FaCaretUp /> : <FaCaretDown />}
        </span>
      </div>

      {/* Menu */}
      {open &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              width: position.width,
            }}
            className="bg-white border border-[#CED2E5] rounded-md shadow-lg z-[9999] max-h-60 overflow-y-auto"
          >
            {options.map((item) => (
              <div
                key={item}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#7AA3CC] hover:text-white ${
                  value === item ? "bg-[#7AA3CC] text-white" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default Dropdown;
