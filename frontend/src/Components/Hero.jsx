import React from "react";
import Navbar from "./Navbar";
import Orbit from "./Orbit";

function Hero() {
  return (
    <div className="w-full h-screen bg-[#e4cfb9] relative overflow-hidden">
      <Navbar />
      <div className="font-anton w-full z-20 text-9xl text-center absolute top-[20%] text-[#212121] ">
        <div className="text-6xl">
          I&apos;m <span className="text-3xl">Full-stack Developer</span>
        </div>
        <div className="">DIKSHANT JATRANA</div>
      </div>
      <div className="h-[85%] glow aspect-square flex items-center justify-center bg-[#fe5826] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[20%]">
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
