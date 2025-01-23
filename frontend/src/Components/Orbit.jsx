import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { OrbitingCircles } from "../Components/ui/orbiting-circles";
import React from "react";

function Orbit() {
  return (
    <div className="w-full h-full skew-x-[45deg] flex items-center justify-center">
      <OrbitingCircles radius={150}>
        <SiMongodb size={45} />
        <FaDocker size={45} />
      </OrbitingCircles>
      <OrbitingCircles radius={272} reverse={3} speed={0.5}>
        <FaReact size={75} />
        <FaGithub size={75} />
        <FaNodeJs size={75} />
        <RiJavascriptFill size={75} />
        <SiExpress size={75} />
      </OrbitingCircles>
    </div>
  );
}

export default Orbit;
