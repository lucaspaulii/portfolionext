"use client";
import PageContext from "@/context/pageContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SkillsContent from "@/components/skills";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import AboutComponent from "@/components/aboutComponent";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Planet from "@/components/canvas/PlanetCanvas";
import MainContent from "@/components/mainContent";

export default function Home() {
  const { setPageData, pageData } = useContext(PageContext);

  useEffect(() => {
    setPageData("/");
  }, []);

  return (
    <>
      <main className="h-screen  w-screen bg-gradient-to-tr from-blue-900 from-10% via-gray-900 via-80% to-blue-950 text-white box-border absolute overflow-y-scroll scrollbar-none">
        <div className="relative top-0" id="top"></div>
        <MainContent />
        <motion.div
          className="absolute top-[110vh] h-20 bg-indigo-800 blur-2xl w-full z-10 rotate-3"
          animate={{ height: ["2rem", "3rem", "2rem"], rotate: [1, -1, 1] }}
          transition={{ ease: "easeInOut", duration: 5, repeat: Infinity }}
        />
        <div className="absolute top-[130vh]" id="about" />
        <div className="w-full h-fit mt-[20rem]">
          <AboutComponent />
        </div>
        <div className="w-full h-fit" id="experiences">
          <Experiences />
        </div>
        <div className="w-full h-fit" id="education">
          <Education />
        </div>
        <div className="w-full h-fit " id="tools">
          <SkillsContent />
        </div>
        <div className="w-full h-fit " id="projects">
          <Projects />
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
