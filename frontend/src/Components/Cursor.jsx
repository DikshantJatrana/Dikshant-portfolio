import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GiNinjaStar } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    gsap.to(cursorRef.current, {
      rotate: "360deg",
      duration: 2.5,
      repeat: -1,
      yoyo: 1,
    });
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      const dets = { x: e.clientX, y: e.clientY };
      gsap.to(cursorRef.current, {
        x: dets.x,
        y: dets.y,
        duration: 0.2,
        ease: "elastic.out(2,0.1)",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-10 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img src="/imgs/Star.png" alt="star" />
    </div>
  );
};

export default Cursor;
