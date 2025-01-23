import React from "react";
import Hero from "../Components/Hero";
import Cursor from "../Components/cursor";

function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <Cursor />
      <Hero />
      <div className="w-full h-screen"></div>
    </div>
  );
}

export default Home;
