"use client";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangContext from "@/context/langContext";
import { useContext, useEffect, useState } from "react";
import { navigationTxtEng, navigationTxtPt } from "../lang/langTexts";

export default function Navbar(params: any) {
  const pathname = usePathname();
  const { setLang, lang } = useContext(LangContext);

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
    <div
      className={`h-20 sm:h-20 w-screen bg-black bg-opacity-30 text-white fixed z-50 top-0 left-0 flex flex-col sm:flex-row justify-between items-center`}
    >
      <div className="flex gap-5 w-full sm:w-32 justify-between sm:justify-start pt-3 sm:pt-0 pb-2 sm:pb-0">
        <div className="flex gap-5 ml-10">
          <p
            className={
              lang == "en"
                ? "text-lg text-indigo-400 font-extrabold"
                : "text-white text-lg cursor-pointer"
            }
            onClick={() => lang == "pt" && setLang("en")}
          >
            EN
          </p>
          <p
            className={
              lang == "pt"
                ? "text-lg text-indigo-400 font-extrabold"
                : "text-white text-lg cursor-pointer"
            }
            onClick={() => lang == "en" && setLang("pt")}
          >
            PT
          </p>
        </div>
        <div className="flex justify-end sm:hidden gap-5 mr-10">
          <Link
            href="https://www.linkedin.com/in/lucaspauli/"
            className="block sm:hidden"
          >
            <AiFillLinkedin className="text-white text-3xl hover:scale-110" />
          </Link>
          <Link
            href="https://github.com/lucaspaulii"
            className="block sm:hidden"
          >
            <AiOutlineGithub className="text-white text-3xl hover:scale-110" />
          </Link>
        </div>
      </div>
      <div className="flex sm:gap-8 sm:mr-10 w-full sm:w-fit sm:justify-end items-center sm:pb-0 pb-3 text-[0.65rem] sm:text-base justify-around">
        <Link
          href="#top"
          className={`hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 text-indigo-400 font-extrabold scale-110 transition-all duration-100`}
          onClick={handleScroll}
        >
          {lang === "en" ? navigationTxtEng.home : navigationTxtPt.home}
        </Link>
        <Link
          href="#about"
          className="hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 transition-all duration-100"
          onClick={handleScroll}
        >
          {lang === "en" ? navigationTxtEng.about : navigationTxtPt.about}
        </Link>
        <Link
          href="#experiences"
          onClick={handleScroll}
          className="hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 transition-all duration-100"
        >
          {lang === "en" ? "Experiences" : "Experiência"}
        </Link>
        <Link
          href="#education"
          className="hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 transition-all duration-100"
          onClick={handleScroll}
        >
          {lang === "en" ? "Education" : "Educação"}
        </Link>
        <Link
          href="#tools"
          className="hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 transition-all duration-100"
          onClick={handleScroll}
        >
          {lang === "en" ? "Technologies" : "Tecnologias"}
        </Link>
        <Link
          href="#projects"
          className="hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 transition-all duration-100"
          onClick={handleScroll}
        >
          {lang === "en" ? "Projects" : "Projetos"}
        </Link>
      </div>
    </div>
  );
}
