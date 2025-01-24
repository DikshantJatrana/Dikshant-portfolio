import React, { useRef } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Icons = ({ name, imgSrc }) => {
  const imgRef = useRef();
  const nameRef = useRef();
  const handleEnter = () => {
    gsap.to(nameRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "power1.inOut",
    });
  };
  const handleLeave = () => {
    gsap.to(nameRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.1,
      ease: "power1.inOut",
    });
  };
  return (
    <div className="relative inline-block">
      <span
        ref={nameRef}
        className="text-sm left-1/2 scale-0 opacity-0 -translate-x-1/2 absolute rounded-lg -top-[70%] px-2 py-2 border-1 border-gray-500 bg-white text-black"
      >
        {name}
      </span>
      <img
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        ref={imgRef}
        className="w-12 cursor-pointer aspect-square"
        src={imgSrc}
        alt={`${name}'s profile`}
      />
    </div>
  );
};

export default Icons;
