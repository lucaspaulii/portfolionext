"use client";
import PageContext from "@/context/pageContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import SkillsContent from "@/components/skills";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import { MdArrowDropDownCircle } from "react-icons/md";
import AboutComponent from "@/components/aboutComponent";
import { mainTxtEng, mainTxtPt } from "@/lang/langTexts";
import LangContext from "@/context/langContext";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Tree from "@/components/canvas/TreeCanvas";
import Planet from "@/components/canvas/PlanetCanvas";

export default function Home() {
  const { setPageData, pageData } = useContext(PageContext);
  const prevPage = pageData;
  const { lang } = useContext(LangContext);

  useEffect(() => {
    setPageData("/");
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    console.log(elem);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <>
      <main className="h-screen  w-screen bg-gradient-to-tr from-blue-900 from-10% via-gray-900 via-80% to-blue-950 text-white box-border absolute overflow-y-scroll scrollbar-none">
        <div className="relative top-0" id="top"></div>
        <motion.div
          className="flex flex-col items-center justify-center h-full w-full sm:pt-20 pt-12 pb-32 overflow-hidden"
          initial={{ translateX: prevPage == "about" ? "-70vw" : "0" }}
          animate={{ translateX: "0" }}
          transition={{ delay: 0, duration: 0.2 }}
        >
          <div className="h-fit sm:w-2/3 w-5/6 flex items-center flex-col sm:flex-row sm:mt-0 mt-20">
            <motion.div
              className="w-fit h-fit flex justify-center items-center bg-gradient-to-l from-indigo-900 to-indigo-700 bg-opacity-30 p-2 overflow-hidden mr-8 sm:mt-0 mt-4"
              initial={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "40% 70% 60% 20% / 30% 70% 40% 80%",
                  "50% 80% 30% 50% / 50% 80% 20% 90%",
                  "60% 30% 70% 40% / 60% 40% 30% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                ease: "easeInOut",
                type: "keyframes",
                duration: 7,
                repeat: Infinity,
              }}
            >
              <div className="relative sm:w-52 sm:h-52 w-56 h-56">
                <Image
                  src="/lucaspicturefade.png"
                  alt="profile picture"
                  fill
                  priority
                />
              </div>
            </motion.div>
            <div className="sm:h-full sm:w-[0.35rem] h-0 w-0 overflow-hidden">
              <motion.div
                className="sm:w-[0.35rem] bg-gradient-to-b to-indigo-900 from-indigo-400 rounded-full sm:block hidden"
                initial={{ height: "0" }}
                whileInView={{ height: "100%" }}
                transition={{ delay: 0.6, duration: 0.2 }}
              />
            </div>
            <motion.div
              className="h-[0.35rem] w-full bg-gradient-to-r to-indigo-900 from-indigo-400 rounded-full block sm:hidden mt-4"
              initial={{ width: "0" }}
              animate={{ width: ["1%", "100%"] }}
              transition={{ delay: 0.3, duration: 0.4 }}
            ></motion.div>
            <motion.div
              className="h-full overflow-hidden"
              initial={{ width: "0" }}
              animate={{ width: ["0", "fit-content"] }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <motion.div
                className="mb-5 h-fit w-[110%] sm:p-8 p-1 flex flex-col justify-center items-start z-30 sm:gap-10 gap-4"
                initial={{ opacity: "0" }}
                animate={{ opacity: "1" }}
                transition={{ delay: 1.0, duration: 0.4 }}
              >
                <h1 className="text-center mb-1 font-extrabold text-gray-100 text-4xl sm:text-[4rem] break-keep [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028]">
                  {lang === "en" ? mainTxtEng.welcome : mainTxtPt.welcome}{" "}
                  <span className="text-indigo-400">Lucas</span>
                </h1>
                <p className="text-white lg:text-xl sm:text-lg text-md [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028]">
                  FullStack Web Developer.
                  <br /> Front End Developer, React.js{" "}
                  {lang === "en" ? "and" : "e"} Next.js.
                  <br /> Back End Developer, Node.js, Express{" "}
                  {lang === "en" ? "and" : "e"} Nest.js.
                </p>
                <div className="flex gap-2">
                  <Link
                    href="https://www.linkedin.com/in/lucaspauli/"
                    className="hidden sm:block"
                  >
                    <AiFillLinkedin className="text-indigo-400 text-4xl hover:scale-110" />
                  </Link>
                  <Link
                    href="https://github.com/lucaspaulii"
                    className="hidden sm:block"
                  >
                    <AiOutlineGithub className="text-indigo-400 text-4xl hover:scale-110" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <Tree />
          </div>
        </motion.div>
        <motion.div
          className="absolute sm:top-[80vh] top-[90vh] w-full flex justify-center"
          animate={{ translateY: ["0px", "-10px", "0px"] }}
          transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}
        >
          <Link href="#about" onClick={handleScroll}>
            <MdArrowDropDownCircle className="text-5xl" />
          </Link>
        </motion.div>
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
