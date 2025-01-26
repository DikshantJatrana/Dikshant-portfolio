import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaHome } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [value, setValue] = useState("home");
  const MobileRef = useRef();
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    if (open) {
      gsap.to(MobileRef.current, {
        right: "0%",
        ease: "power1.inOut",
        duration: 1,
      });
    } else {
      gsap.to(MobileRef.current, {
        right: "-100%",
        ease: "power1.inOut",
        duration: 1,
      });
    }
  }, [open]);

  const handleActive = (key) => {
    setValue(key);
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const NavbarRef = useRef();
  useGSAP(() => {
    gsap.from(NavbarRef.current, {
      y: -80,
      duration: 1.7,
      delay: 1.75,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="">
      <div
        ref={NavbarRef}
        className="hidden md:flex w-full z-40 relative h-20 hanken pt-2 items-center justify-center px-8"
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
      <span className="absolute md:hidden right-4 top-6 border-2 border-gray-800 text-gray-800 rounded-lg p-[5px] flex items-center justify-center">
        <TiThMenu
          onClick={() => {
            setOpen(true);
          }}
          size={25}
        />
      </span>
      <div
        ref={MobileRef}
        className="fixed py-20 overflow-hidden top-0 anton md:hidden bg-black -right-[100%] z-50 text-white w-3/4 h-screen"
      >
        <span
          onClick={() => {
            setOpen(false);
          }}
          className="absolute top-4 right-4 p-[5px] rounded-lg hover:bg-white/25"
        >
          <IoClose size={30} />
        </span>
        <span
          onClick={() => {
            handleActive("home");
          }}
          className="text-[9vh] px-4 py-3 gap-2 flex items-center hover:scale-105 hover:bg-white/25 transition-all duration-150 ease-out border-t-2  border-white"
        >
          Home
        </span>
        <span
          onClick={() => {
            handleActive("about");
          }}
          className="text-[9vh] px-4 py-3 gap-2 flex items-center hover:scale-105 hover:bg-white/25 transition-all duration-150 ease-out border-t-2  border-white"
        >
          About
        </span>
        <span
          onClick={() => {
            handleActive("project");
          }}
          className="text-[9vh] px-4 py-3 gap-2 flex items-center hover:scale-105 hover:bg-white/25 transition-all duration-150 ease-out border-t-2  border-white"
        >
          Projects
        </span>
        <a
          href="/DikshantJatrana-CV.PDF"
          download
          onClick={() => {
            handleActive("resume");
          }}
          className="text-[9vh] px-4 py-3 gap-2 flex items-center hover:scale-105 hover:bg-white/25 transition-all duration-150 ease-out border-y-2  border-white"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
