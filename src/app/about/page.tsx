"use client";
import CurrentPage from "@/components/currentPage";
import NextIcon from "@/components/nextIcon";
import PageTitle from "@/components/pageTitle";
import PrevIcon from "@/components/prevIcon";
import { motion } from "framer-motion";
import PageContext from "@/context/pageContext";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import LangContext from "@/context/langContext";
import { aboutTxtEng, aboutTxtPt } from "@/lang/langTexts";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const { setPageData, pageData } = useContext(PageContext);
  const { lang } = useContext(LangContext);
  const prevPage = pageData;

  useEffect(() => {
    setPageData("about");
  }, []);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-blue-900 via-gray-900 to-purple-900 text-white flex flex-col items-center overflow-hidden [text-shadow:_1px_2px_2px_var(--tw-shadow-color)] shadow-[#0000006f]">
      <Image src="/bg3.jpg" alt="bg" fill />

      <div className="w-full h-screen overflow-y-scroll sm:scrollbar-thin sm:scrollbar-track-neutral-600 sm:scrollbar-thumb-gray-950 z-30 overflow-x-hidden scrollbar-none">
        <motion.div
          className="pb-14 w-full h-fit sm:pt-28 pt-[5.5rem] flex flex-col items-center"
          initial={{ translateX: prevPage == "/" ? "70vw" : "-70vw" }}
          animate={{ translateX: "0" }}
          transition={{ delay: 0, duration: 0.2 }}
        >
          <PageTitle title={lang == "en" ? "About" : "Sobre"} />
          <div className="sm:w-4/6 h-fit flex sm:flex-row items-center flex-col-reverse sm:gap-8 gap-2 sm:mb-4 scale-[80%] sm:-mt-24 -mt-48 w-full">
            <motion.div
              className="w-full sm:w-[59%] h-[auto] flex items-center justify-center"
              initial={{ opacity: 0, translateX: "10rem" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <p className="pr-2 text-justify whitespace-pre-wrap sm:text-xl">
                {lang == "en" ? `${aboutTxtEng.mainText}` : aboutTxtPt.mainText}
              </p>
            </motion.div>
            <motion.div
              className="w-[300px] h-[450px] sm:h-[1200px] sm:w-[41%] relative mb-4 sm:mb-0"
              initial={{ opacity: 0, translateX: "-10rem" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Image
                src="/aboutimg1.jpg"
                alt="Lucas standing"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          {showMore ? (
            ""
          ) : (
            <button
              onClick={() => handleClick()}
              className="group p-3 bg-white bg-opacity-20 hover:scale-110  transition-all duration-[100ms] flex items-center gap-2 w-fit"
            >
              {lang === "en" ? "Show More" : "Veja Mais"} <RiArrowDownSLine className="transition-all duration-[100ms] group-hover:scale-[135%] group-hover:translate-y-[0.2rem]"/>
            </button>
          )}
          {showMore && (
            <motion.div
              className="w-fit h-fit flex flex-col justify-center items-center"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "fit-content", opacity: 1 }}
              transition={{ delay: 0, duration: 0.3 }}
            >
              <div className="sm:w-4/6 w-full h-fit mt-8 mb-24 flex sm:flex-row flex-col sm:justify-start justify-center gap-8">
                <motion.div
                  className="sm:w-2/6 w-full sm:h-[auto] h-[200px] relative"
                  initial={{ opacity: 0, translateX: "10rem" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Image
                    src="/aboutimg3.jpg"
                    alt="Lucas standing"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="sm:w-[45%] w-full text-center sm:text-start relative sm:p-0 pl-7 pr-7"
                  initial={{ opacity: 0, translateX: "-10rem" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h1 className="font-bold sm:text-2xl text-lg mb-4">
                    {lang === "en"
                      ? aboutTxtEng.teamTitle
                      : aboutTxtPt.teamTitle}
                  </h1>
                  <p className="pr-2 text-justify whitespace-pre-wrap sm:text-base text-sm">
                    {lang === "en" ? aboutTxtEng.teamText : aboutTxtPt.teamText}
                  </p>
                </motion.div>
              </div>
              <div className="sm:w-4/6 w-full h-fit mt-4 mb-24 flex sm:flex-row flex-col-reverse sm:justify-end justify-end gap-8">
                <motion.div
                  className="sm:w-[45%] w-full text-center sm:text-start relative sm:p-0 pl-7 pr-7"
                  initial={{ opacity: 0, translateX: "10rem" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h1 className="font-bold sm:text-2xl text-lg mb-4">
                    {lang === "en"
                      ? aboutTxtEng.problemSolvingTitle
                      : aboutTxtPt.problemSolvingTitle}
                  </h1>
                  <p className="pr-2 text-justify whitespace-pre-wrap sm:text-base text-sm">
                    {lang === "en"
                      ? aboutTxtEng.problemSolvingText
                      : aboutTxtPt.problemSolvingText}
                  </p>
                </motion.div>
                <motion.div
                  className="sm:w-2/6 w-full sm:h-[auto] h-[200px] relative"
                  initial={{ opacity: 0, translateX: "-10rem" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Image
                    src="/itaipu.jpg"
                    alt="Lucas standing"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="sm:w-4/6 w-full h-fit mt-4 flex sm:flex-row flex-col sm:justify-start justify-center gap-8">
                <motion.div
                  className="sm:w-2/6 w-full sm:h-[auto] h-[200px] relative"
                  initial={{ opacity: 0, translateX: "10rem" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Image
                    src="/aboutpicture2.jpg"
                    alt="Lucas standing"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="sm:w-[45%] w-full text-center sm:text-start relative sm:p-0 pl-7 pr-7"
                  initial={{ opacity: 0, translateX: "-10rem" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h1 className="font-bold sm:text-2xl text-lg mb-4">
                    {lang === "en"
                      ? aboutTxtEng.creativeTitle
                      : aboutTxtPt.creativeTitle}
                  </h1>
                  <p className="pr-2 text-justify whitespace-pre-wrap sm:text-base text-sm">
                    {lang === "en"
                      ? aboutTxtEng.creativeText
                      : aboutTxtPt.creativeText}
                  </p>
                </motion.div>
              </div>
              {showMore ? (
                <button
                  className="group mt-10 p-3 bg-white bg-opacity-20 hover:scale-110  transition-all duration-[100ms] flex items-center gap-2 w-fit"
                  onClick={() => handleClick()}
                >
                  {lang === "en" ? "Show Less" : "Veja Menos"} <RiArrowUpSLine className="transition-all duration-[100ms] group-hover:scale-[135%] group-hover:-translate-y-[0.2rem]" />
                </button>
              ) : (
                ""
              )}
            </motion.div>
          )}
        </motion.div>
        <NextIcon nextPage="projects" />
        <PrevIcon prevPage="" />
        <CurrentPage currentPage="about" />
      </div>
    </div>
  );
}
