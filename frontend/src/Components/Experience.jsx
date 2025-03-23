import React from "react";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  useGSAP(() => {
    gsap.from("#one", {
      y: 350,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#projects-exp",
        start: "10% 80%",
        end: "5% 70%",
        scrub: false,
        toggleActions: "play none none none",
      },
    });

    gsap.from("#two", {
      y: 350,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#projects-exp",
        start: "28% 80%",
        end: "23% 70%",
        scrub: false,
        toggleActions: "play none none none",
      },
    });

    gsap.from("#three", {
      y: 350,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#projects-exp",
        start: "53% 80%",
        end: "48% 70%",
        scrub: false,
        toggleActions: "play none none none",
      },
    });

    gsap.from("#four", {
      y: 350,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#projects-exp",
        start: "78% 80%",
        end: "73% 70%",
        scrub: false,
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="w-full z-20 bg-[#18181a] min-h-screen relative">
      <div className="w-full text-[8vh] text-center hanken text-white">
        Crafted Experiences
      </div>
      <div
        id="projects-exp"
        className="w-full min-h-screen py-3 px-3 md:py-16 md:px-16 relative"
      >
        <div
          id="one"
          className="w-full md:h-[40vh] h-[80vh] bg-[#f9a639] rounded-tl-3xl rounded-br-3xl grid sm:grid-row-2 md:grid-cols-2 gap-2"
        >
          <div className="w-full h-[30vh] md:h-full md:relative">
            <img
              src="/imgs/uber.jpeg"
              alt="border"
              className="rounded-lg absolute md:top-1/4 md:left-[4vw] card1 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="px-3">
            <h1 className="hanken text-[6vh] text-[#333326]">Uber-clone</h1>
            <p className="inter-reg text-[2vh] text-[#333326] pl-[3.5vw] pb-[3.5vh] pr-[2vw]">
              The Uber Clone project replicates the core functionalities of Uber
              with a React frontend and a Node.js/Express backend. It features
              user and captain registration, real-time location tracking using
              Leaflet, and JWT-based authentication. The project includes
              detailed installation guides, API documentation, and environment
              variable setup for both backend and frontend.
            </p>
            <a
              href="https://github.com/DikshantJatrana/UBER-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 ml-[3.5vw] hanken text-[2vh] bg-[#333326] text-right rounded-xl text-[#f9a639] inline-flex items-center gap-1"
            >
              <FaGithub />
              Github Source
            </a>
          </div>
        </div>
        <div
          id="two"
          className="w-full mt-[15vh] md:h-[40vh] h-[80vh] bg-[#e4cfb9] rounded-bl-3xl rounded-tr-3xl grid sm:grid-row-2 md:grid-cols-2 gap-2"
        >
          <div className="px-3">
            <h1 className="hanken text-[6vh] text-[#333326]">FundNest</h1>
            <p className="inter-reg text-[2vh] text-[#333326] pl-[3.5vw] pb-[3.5vh] pr-[2vw]">
              The Future of Startup Investment & Growth FundNest is a next-gen
              platform where entrepreneurs can list, share, and even sell their
              startups. It provides a transparent and structured system for
              angel investors to buy shares, fund promising ventures, and be
              part of their journey.
            </p>
            <a
              href="https://github.com/DikshantJatrana/User_Management"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 ml-[3.5vw] hanken text-[2vh] bg-[#333326] text-right rounded-xl text-[#e4cfb9] inline-flex items-center gap-1"
            >
              <FaGithub />
              Github Source
            </a>
          </div>
          <div className="w-full h-[30vh] md:h-full md:relative">
            <img
              src="/imgs/kala.png"
              alt="border"
              className="rounded-lg absolute md:top-1/4 md:left-[4vw] card2 duration-300 transition-all ease-in-out"
            />
          </div>
        </div>
        <div
          id="three"
          className="w-full mt-[15vh] md:h-[40vh] h-[80vh] bg-[#f6e836] rounded-tl-3xl rounded-br-3xl grid sm:grid-row-2 md:grid-cols-2 gap-2"
        >
          <div className="w-full h-[30vh] md:h-full md:relative">
            <img
              src="/imgs/text.png"
              alt="border"
              className="rounded-lg absolute md:top-1/4 md:left-[4vw] card1 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="px-3">
            <h1 className="hanken text-[6vh] text-[#333326]">Text-Sphere</h1>
            <p className="inter-reg text-[2vh] text-[#333326] pl-[3.5vw] pb-[3.5vh] pr-[2vw]">
              Text Sphere is a real-time chat application built with React,
              Node.js, and MongoDB, allowing users to send messages and share
              photos. It features user authentication, profile management, and
              live messaging through Socket.io. The app leverages Redux for
              state management and provides a seamless user experience with
              efficient backend integration..
            </p>
            <a
              href="https://github.com/DikshantJatrana/TextSphere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 ml-[3.5vw] hanken text-[2vh] bg-[#333326] text-right rounded-xl text-[#f6e836] inline-flex items-center gap-1"
            >
              <FaGithub />
              Github Source
            </a>
          </div>
        </div>
        <div
          id="four"
          className="w-full mt-[15vh] mb-[15vh] md:h-[40vh] h-[80vh] bg-[#fe5826] rounded-bl-3xl rounded-tr-3xl grid sm:grid-row-2 md:grid-cols-2 gap-2"
        >
          <div className="px-3">
            <h1 className="hanken text-[6vh] text-[#333326]">Zentry-Clone</h1>
            <p className="inter-reg text-[2vh] text-[#333326] pl-[3.5vw] pb-[3.5vh] pr-[2vw]">
              AwwardsUI is a modern, responsive user interface design inspired
              by Zentry, focusing on clean, minimalistic layouts. Built with
              React, and Tailwind CSS, it prioritizes accessibility,
              scalability, and user experience. The project showcases best
              practices in UI/UX design, offering elegant typography and
              seamless navigation across devices.
            </p>
            <a
              href="https://github.com/DikshantJatrana/AwwardsUI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 ml-[3.5vw] hanken text-[2vh] bg-[#333326] text-right rounded-xl text-[#fe5826] inline-flex items-center gap-1"
            >
              <FaGithub />
              Github Source
            </a>
          </div>
          <div className="w-full h-[30vh] md:h-full md:relative">
            <img
              src="/imgs/zentry.png"
              alt="border"
              className="rounded-lg absolute md:top-1/4 md:left-[4vw] card2 duration-300 transition-all ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
