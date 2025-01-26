import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Footer = () => {
  const handleActive = (key) => {
    setValue(key);
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer className="bg-[#18181a] hanken z-20 relative px-6 text-gray-100 py-8">
      <div className="border border-gray-500 rounded-xl py-2">
        <div className="mx-auto flex flex-wrap px-3 justify-between gap-8">
          <div className="flex flex-col md:grid gap-2 md:gap-7 md:grid-cols-4">
            <h3 className="text-[2.9vh] md:text-[4vh] font-normal mb-0 md:mb-4">
              Where <span className="text-purple-400">aesthetics</span> &{" "}
              <span className="text-cyan-400">functionality</span> meet
            </h3>
            <div className="flex my-3 justify-between">
              <div className="">
                <h4 className="text-orange-500 text-[4vh] font-semibold mb-2">
                  Explore
                </h4>
                <ul className="space-y-2">
                  <li>
                    <span
                      onClick={() => {
                        handleActive("home");
                      }}
                      className="hover:text-white"
                    >
                      Home
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        handleActive("about");
                      }}
                      className="hover:text-white"
                    >
                      About Me
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        handleActive("projects");
                      }}
                      className="hover:text-white"
                    >
                      Projects
                    </span>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-cyan-400 text-[4vh] font-semibold mb-2">
                  Follow Me
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://github.com/DikshantJatrana"
                      target="__blank"
                      className="flex items-center gap-2 hover:text-white"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Dikshant_J"
                      target="__blank"
                      className="flex items-center gap-2 hover:text-white"
                    >
                      <FaSquareXTwitter />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:flex md:flex-col">
              <h4 className="text-orange-500 text-[4vh] font-semibold mb-2">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <span
                    onClick={() => {
                      handleActive("home");
                    }}
                    className="hover:text-white"
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => {
                      handleActive("about");
                    }}
                    className="hover:text-white"
                  >
                    About Me
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => {
                      handleActive("projects");
                    }}
                    className="hover:text-white"
                  >
                    Projects
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex md:flex-col">
              <h4 className="text-cyan-400 text-[4vh] font-semibold mb-2">
                Follow Me
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://github.com/DikshantJatrana"
                    target="__blank"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Dikshant_J"
                    target="__blank"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaSquareXTwitter />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-[4vh]">
              <div>
                <a
                  href="mailto:dikshantjatrana02@gmail.com"
                  className="flex items-center text-gray-100 hover:text-[#f6e836]  group"
                >
                  Contact Me{" "}
                  <span className="ml-2 group-hover:-rotate-45 rotate-0 transition-all duration-150 ease-in-out">
                    <FaArrowCircleRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[12.2vw] md:text-[13.3vw]">dikshantjatrana</div>
      </div>
      <div className="mt-2 text-white  flex items-center justify-between text-center md:text-[3vh] text-sm">
        <span>
          DikshantJatrana ©2025 -{" "}
          <a href="#privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <br />
        </span>
        <span>Haryana ,India</span>
      </div>
    </footer>
  );
};

export default Footer;
