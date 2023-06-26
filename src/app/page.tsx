"use client";
import { useEffect, useState } from "react";
import SkillsContent from "@/components/skills";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import AboutComponent from "@/components/aboutComponent";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Planet from "@/components/canvas/PlanetCanvas";
import MainContent from "@/components/mainContent";
import Background from "@/components/background";
import Navbar from "@/components/navbar";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = document.querySelector("main") as HTMLElement;
    setInterval(() => setWindowHeight(container.clientHeight), 500);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar scrollPosition={scrollPosition} />
      <main className="w-full z-20 bg-gradient-to-tr from-blue-900 from-10% via-gray-900 via-80% to-blue-950 text-white box-border absolute overflow-y-scroll overflow-x-hidden scrollbar-none">
        <div className="relative top-0" id="top"></div>
        <Background
          windowHeight={windowHeight}
          scrollPosition={scrollPosition}
        />
        <MainContent />
        <div className="w-full h-fit mt-[13rem] pt-[7rem] z-40" id="about">
          <AboutComponent />
        </div>
        <div className="w-full h-fit z-40 pt-[4rem] mt-[2rem]" id="tools">
          <SkillsContent />
        </div>
        <div className="w-full h-fit z-40 pt-[3rem] mt-[3rem]" id="projects">
          <Projects />
        </div>
        <div className="w-full h-fit z-40 pt-[4rem] mt-[2rem]" id="experiences">
          <Experiences />
        </div>
        <div className="w-full h-fit z-40 pt-[4rem] mt-[2rem]" id="education">
          <Education />
        </div>

        <div
          className="w-full h-fit -mt-20 mb-20 flex sm:flex-row flex-col items-start"
          id="contact"
        >
          <Contact />
          <Planet />
        </div>
      </main>
    </>
  );
}
