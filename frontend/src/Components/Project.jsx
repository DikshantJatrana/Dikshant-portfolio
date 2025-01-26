import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useGSAP(() => {
    gsap.to("#project", {
      scale: 50,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#project",
        start: "92% 100%",
        end: "97% 95%",
        scrub: 1,
      },
    });

    gsap.to("#black", {
      right: "0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#project",
        start: "92% 100%",
        end: "100% 95%",
        scrub: 1,
      },
    });
  });

  return (
    <div
      id="project"
      className="w-full h-screen text-[10vh] md:text-[15vh] flex items-center text-[#18181a] justify-center hanken relative overflow-hidden"
    >
      PROJECT
      <div
        id="black"
        className="absolute h-full w-full bg-[#18181a] bottom-0 -right-full text-white"
      ></div>
    </div>
  );
}

export default Project;
