import React from "react";
import Icons from "./Icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.timeline().to("#about", {
      backgroundColor: "white",
      duration: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#git",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#git",
          start: "center 80%",
          end: "center 50%",
          scrub: false,
          toggleActions: "play none none none",
        },
      })
      .from("#who", {
        y: -170,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#img",
        {
          x: 170,
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=0.5"
      )
      .from(
        "#full",
        {
          x: -170,
          duration: 1,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=0.7"
      )
      .from(
        "#tech",
        {
          x: -170,
          duration: 1,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=0.7"
      )
      .from(
        "#line",
        {
          x: 170,
          duration: 1,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-0.5"
      )
      .from(
        "#education",
        {
          y: 250,
          duration: 1.2,
          opacity: 0,
          ease: "power1",
        },
        "-=0.7"
      );
  });

  return (
    <div id="about" className="w-full min-h-screen py-8 bg-[#e4cfb9]  relative">
      <div className="w-full h-screen px-20 py-8 mt-52 grid hanken gap-4 grid-cols-3 grid-row-6">
        <div
          id="who"
          className="z-20 shadow-md bg-[#263238]/15 rounded-lg backdrop:blur-md col-span-2 row-span-2 relative"
        >
          <div className="w-full absolute h-full px-3 py-2">
            <div className="text-[6vh] underline">Who am I?</div>
            <p className="text-[2vh] inter-reg">
              Hi! My name is Dikshant Jatrana, and I’m a final-year B.Tech
              student in Computer Science from Haryana, India. I’m passionate
              about coding and love working on projects that involve JavaScript,
              Python, and Java. I’m also exploring the idea of starting an
              agriculture-focused business that leverages technology to make a
              positive impact. When I’m not coding, you can find me
              brainstorming ideas or learning something new to keep growing as a
              developer.
            </p>
          </div>
        </div>
        <div
          id="img"
          className="z-20 shadow-md bg-[#263238]/15 rounded-lg backdrop:blur-md col-span-1 row-span-3 bg-cover bg-[url(/imgs/32852.jpg)]"
        ></div>
        <div
          id="full"
          className="z-20 shadow-md bg-[#e4cfb9]/90 rounded-lg backdrop:blur-md col-span-1 row-span-1 text-[4vh] text-[#fe5826] relative"
        >
          <span className="w-full h-full text-center top-2 absolute">
            Student & Fullstack Developer
          </span>
        </div>
        <div
          id="git"
          className="z-20 shadow-md bg-[#012849] rounded-lg backdrop:blur-md col-span-1 row-span-2 relative"
        >
          <div className="w-[18vh] aspect-square rounded-full bg-white absolute top-4 left-1/2 -translate-x-1/2 ">
            <img
              src="/imgs/user.png"
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
          <a
            href="https://github.com/DikshantJatrana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-full absolute bottom-4 text-center text-[4vh] cursor-pointer hanken"
          >
            Dikshant Jatrana
          </a>
        </div>
        <div
          id="tech"
          className="z-20 shadow-md bg-[#263238] rounded-lg backdrop:blur-md col-span-1 row-span-3 relative"
        >
          <div className="absolute w-full h-full p-3">
            <div className="text-[4vh] text-white">
              Technologies I have worked with
            </div>
            <div className="w-full grid grid-cols-4 gap-3">
              <Icons imgSrc={"/imgs/python.png"} name={"Python"} />
              <Icons imgSrc={"/imgs/java.png"} name={"Java"} />
              <Icons imgSrc={"/imgs/javascript.png"} name={"JavaScript"} />
              <Icons imgSrc={"/imgs/typescript.png"} name={"Typescript"} />
              <Icons imgSrc={"/imgs/tailwind.png"} name={"Tailwind"} />
              <Icons imgSrc={"/imgs/react.png"} name={"React"} />
              <Icons imgSrc={"/imgs/postgres.png"} name={"PostgreSQL"} />
              <Icons imgSrc={"/imgs/nodejs.png"} name={"Node js"} />
              <Icons imgSrc={"/imgs/mongo.png"} name={"MongoDB"} />
              <Icons imgSrc={"/imgs/firebase.png"} name={"Firebase"} />
              <Icons imgSrc={"/imgs/docker.png"} name={"Docker"} />
              <Icons imgSrc={"/imgs/figma.png"} name={"Figma"} />
              <Icons imgSrc={"/imgs/supabase.png"} name={"Supabase"} />
            </div>
          </div>
        </div>
        <div
          id="line"
          className="z-20 shadow-md bg-[#e4cfb9]/90 rounded-lg backdrop:blur-md col-span-1 row-span-1 text-[4vh] text-[#313131] relative"
        >
          <span className="w-full h-full text-center top-2 absolute">
            Being Good Does Not Make You Great
          </span>
        </div>
        <div
          id="education"
          className="z-20 shadow-md bg-[#263238]/10 rounded-lg backdrop:blur-md col-span-2 row-span-2 relative"
        >
          <div className="absolute w-full h-full px-5 py-3">
            <div className="text-[6vh] underline">Education</div>
            <ul className="inter-reg text-[2vh]">
              <li>Pursuing B.Tech in Computer Science (Final Year).</li>
              <li>
                Completed: CS50:
                <li>Introduction to Computer Science. CS50 Python:</li>{" "}
                <li>
                  Introduction to Programming with Python. CS50 Web Development:
                </li>{" "}
                <li>Building web applications.</li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
