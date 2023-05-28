"use client";
import CurrentPage from "@/components/currentPage";
import NextIcon from "@/components/nextIcon";
import PageTitle from "@/components/pageTitle";
import PrevIcon from "@/components/prevIcon";
import PageContext from "@/context/pageContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SkillsContent from "@/components/skills";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import Image from "next/image";
import LangContext from "@/context/langContext";

export default function Skills() {
  const { setPageData, pageData } = useContext(PageContext);
  const { lang } = useContext(LangContext);
  const prevPage = pageData;

  useEffect(() => {
    setPageData("skills");
  }, []);

  return (
    <main className="h-screen w-screen bg-gradient-to-tr from-blue-900 via-gray-900 to-purple-900 text-white flex flex-col items-center overflow-hidden">
      <Image src="/bg3.jpg" alt="bg" fill />
      <div className="w-full h-screen overflow-y-scroll sm:scrollbar-thin sm:scrollbar-track-neutral-600 sm:scrollbar-thumb-gray-950 z-30 overflow-x-hidden scrollbar-none">
        <motion.div
          className="w-screen h-fit flex flex-col items-center sm:pt-28 pt-[5.5rem] pb-40 overflow-x-hidden"
          initial={{ translateX: prevPage == "projects" ? "70vw" : "-70vw" }}
          animate={{ translateX: "0" }}
          transition={{ delay: 0, duration: 0.2 }}
        >
          <PageTitle
            title={
              lang === "en"
                ? "Skills, Experiences and Education"
                : "Habilidades, Experiencias e Educação"
            }
          />
          <SkillsContent />
          <div className="sm:grid sm:grid-cols-2 sm:gap-8 gap-1 sm:w-3/5 w-full flex flex-col">
            <Experiences />
            <Education />
          </div>
        </motion.div>
        <NextIcon nextPage="contact" />
        <PrevIcon prevPage="projects" />
        <CurrentPage currentPage="skills" />
      </div>
    </main>
  );
}
