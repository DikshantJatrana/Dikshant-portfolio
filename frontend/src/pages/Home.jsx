import React from "react";
import Hero from "../Components/Hero";
import Cursor from "../Components/Cursor";
import About from "../Components/About";
import Project from "../Components/Project";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <Cursor />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
        <Experience />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
