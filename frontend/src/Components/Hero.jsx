import React, { useRef } from "react";
import Navbar from "./Navbar";
import Orbit from "./Orbit";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function Hero() {
  const dikshantRef = useRef();
  const imRef = useRef();
  const fullRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(dikshantRef.current, {
      y: 220,
      duration: 1.2,
      delay: 0.15,
      ease: "power1.inOut",
      opacity: 0,
    });
    tl.from(
      imRef.current,
      {
        scale: 0,
        duration: 1,
        delay: 1.2,
        ease: "power1.inOut",
      },
      "<"
    );
    tl.from(
      fullRef.current,
      {
        scale: 0,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <div className="w-full h-screen bg-[#e4cfb9] relative ">
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className="font-anton z-40 inline-block text-9xl absolute top-[20%] text-[#212121] ">
          <div className="text-6xl flex justify-between items-end">
            <span ref={imRef}>I&apos;m </span>
            <span ref={fullRef} className="text-4xl text-[#212121]">
              Full-stack Developer
            </span>
          </div>
          <div className="inline-block overflow-hidden">
            <div ref={dikshantRef} className="opacity-1">
              DIKSHANT JATRANA
            </div>
          </div>
        </div>
      </div>
      <div className="h-[85%] z-10 glow aspect-square flex items-center justify-center bg-[#fe5826] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[20%]">
        <div className="h-[80%] z-50 aspect-square">
          <img src="/imgs/sam.png" alt="samuria" />
        </div>
      </div>
      <div className="h-[85%]  -bottom-[20%] z-10 aspect-square absolute left-1/2 -translate-x-1/2">
        <Orbit />
      </div>
    </div>
  );
}

export default Hero;
