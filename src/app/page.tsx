"use client";
import PageContext from "@/context/pageContext";
import { useContext, useEffect, useState } from "react";
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
  const { setPageData, pageData } = useContext(PageContext);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setPageData("/");
    const container = document.querySelector("main") as HTMLElement;
    setInterval(() => setWindowHeight(container.clientHeight), 5000);
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
        <div className="absolute top-[130vh]" id="about" />
        <div className="w-full h-fit pt-[20rem] z-40">
          <AboutComponent />
        </div>
        <div className="w-full h-fit z-40 pt-24" id="tools">
          <SkillsContent />
        </div>
        <div className="w-full h-fit z-40 pt-24" id="projects">
          <Projects />
        </div>
        <div className="w-full h-fit z-40 pt-24" id="experiences">
          <Experiences />
        </div>
        <div className="w-full h-fit z-40 pt-24" id="education">
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
