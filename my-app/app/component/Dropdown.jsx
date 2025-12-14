"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { createPortal } from "react-dom";

const Dropdown = ({
  label = "",
  placeholder = "",
  options = [],
  onSelect,
  className,
  inputClass,
  optionClass,
  labelClass,
  icon
}) => {
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState(null);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    setShow(false);
    onSelect?.(value);
  };

  // outside click (FIXED for portal)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // calculate dropdown position
  useEffect(() => {
    if (show && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [show]);

  return (
    <div ref={dropdownRef} className={`flex flex-col relative ${className}`}>
      {/* Label */}
      <label className={`font-inter text-[#000000] ${labelClass}`}>
        {label}
      </label>

      {/* Input Box */}
      <div
        className="relative"
        ref={triggerRef}
        onClick={() => setShow(!show)}
      >
        <input
          readOnly
          value={selected}
          placeholder={placeholder}
          className={`w-full bg-transparent outline-none text-[#000000] placeholder:text-[#000000] cursor-pointer ${inputClass}`}
        />

        <div className={`w-6 h-6 absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center ${icon}`}>
          {show ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </div>

      {/* Dropdown Menu (Portal) */}
      {show && coords &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              width: coords.width,
              zIndex: 9999,
            }}
            className={`bg-white border border-[#CED2E5] rounded-md shadow-md
              text-[#000000] transition-all duration-300 text-center
              max-h-40 overflow-auto hide-scrollbar font-inter ${optionClass}`}
          >
            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                className="py-2 hover:bg-gradient-to-r from-[#21E6A0] to-[#6DF844] hover:text-white cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Dropdown;
