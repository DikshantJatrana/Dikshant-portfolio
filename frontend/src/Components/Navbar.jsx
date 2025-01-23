import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaHome } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";

function Navbar() {
  const [value, setValue] = useState("home");
  const handleActive = (key) => {
    setValue(key);
  };
  const NavbarRef = useRef();
  useGSAP(() => {
    gsap.from(NavbarRef.current, {
      y: -70,
      duration: 1.7,
      ease: "power1.inOut",
    });
  });
  return (
    <div
      ref={NavbarRef}
      className="flex w-full h-20 hanken mt-2 items-center justify-center px-8"
    >
      <div className="rounded-2xl py-2 backdrop:blur-sm px-2 flex gap-2 border-[1px] border-gray-400 text-gray-800 ">
        <span
          onClick={() => {
            handleActive("home");
          }}
          className={`py-1 flex gap-1 items-center px-3 rounded-xl backdrop:blur-sm hover:text-gray-600 cursor-pointer hover:scale-105 border-[1px] border-gray-400 ${
            value === "home" ? "bg-white/85" : "bg-white/35"
          }`}
        >
          <FaHome />
          Home
        </span>
        <span
          onClick={() => {
            handleActive("about");
          }}
          className={`py-1 flex gap-1 items-center px-3 rounded-xl backdrop:blur-sm hover:text-gray-600 cursor-pointer hover:scale-105 duration-150 ease-in-out transition-all border-[1px] border-gray-400 ${
            value === "about" ? "bg-white/85" : "bg-white/25"
          }`}
        >
          <FaIdCard />
          About
        </span>
        <span
          onClick={() => {
            handleActive("project");
          }}
          className={`py-1 px-3 flex items-center gap-1 rounded-xl backdrop:blur-sm hover:text-gray-600 cursor-pointer hover:scale-105 border-[1px] border-gray-400 ${
            value === "project" ? "bg-white/85" : "bg-white/35"
          }`}
        >
          <FaBriefcase />
          Projects
        </span>
        <a
          href="/DikshantJatrana-CV.PDF"
          download
          onClick={() => {
            handleActive("resume");
          }}
          className={`py-1 flex items-center gap-1 px-3 rounded-xl backdrop:blur-sm hover:text-gray-600 cursor-pointer hover:scale-105 border-[1px] border-gray-400 ${
            value === "resume" ? "bg-white/85" : "bg-white/35"
          }`}
        >
          <SiGoogledocs />
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
