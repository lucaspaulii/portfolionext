"use client";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangContext from "@/context/langContext";
import { useContext } from "react";
import { navigationTxtEng, navigationTxtPt } from "../lang/langTexts";

export default function Navbar(params: any) {
  const pathname = usePathname();
  const { setLang, lang } = useContext(LangContext);

  return (
    <div className="h-20 sm:h-20 w-screen bg-black text-white fixed z-50 top-0 left-0 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex gap-5 w-full sm:w-32 justify-between sm:justify-start pt-3 sm:pt-0 pb-2 sm:pb-0">
        <div className="flex gap-5 ml-10">
          <p
            className={
              lang == "en" ? "text-lg" : "text-gray-600 text-lg cursor-pointer"
            }
            onClick={() => lang == "pt" && setLang("en")}
          >
            EN
          </p>
          <p
            className={
              lang == "pt" ? "text-lg" : "text-gray-600 text-lg cursor-pointer"
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
      <div className="flex sm:gap-8 sm:mr-10 w-full sm:w-fit sm:justify-end items-center sm:pb-0 pb-3 text-sm sm:text-base justify-around">
        <Link
          href="/"
          className={`hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 ${
            pathname == "/" && "text-red-700 font-extrabold scale-110"
          }`}
        >
          {lang === "en" ? navigationTxtEng.home : navigationTxtPt.home}
        </Link>
        <Link
          href="/about"
          className={`hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 ${
            pathname == "/about" && "text-red-700 font-extrabold scale-110"
          }`}
        >
          {lang === "en" ? navigationTxtEng.about : navigationTxtPt.about}
        </Link>
        <Link
          href="/projects"
          className={`hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 ${
            pathname == "/projects" && "text-red-700 font-extrabold scale-110"
          }`}
        >
          {lang === "en" ? navigationTxtEng.projects : navigationTxtPt.projects}
        </Link>
        <Link
          href="/skills"
          className={`hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 w-fit whitespace-nowrap overflow-hidden sm:max-w-none ${
            pathname == "/skills" && "text-red-700 font-extrabold scale-110"
          } ${
            lang === "en" ? "max-w-[33px]" : "max-w-[77px]"
          }`}
        >
          {lang === "en" ? navigationTxtEng.skills : navigationTxtPt.skills}
        </Link>
        <Link
          href="/contact"
          className={`hover:font-extrabold hover:scale-110 active:font-extrabold active:scale-110 ${
            pathname == "/contact" && "text-red-700 font-extrabold scale-110"
          }`}
        >
          {lang === "en" ? navigationTxtEng.contact : navigationTxtPt.contact}
        </Link>
        <Link
          href="https://www.linkedin.com/in/lucaspauli/"
          className="hidden sm:block"
        >
          <AiFillLinkedin className="text-white text-3xl hover:scale-110" />
        </Link>
        <Link href="https://github.com/lucaspaulii" className="hidden sm:block">
          <AiOutlineGithub className="text-white text-3xl hover:scale-110" />
        </Link>
      </div>
    </div>
  );
}
