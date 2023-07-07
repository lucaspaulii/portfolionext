"use client";
import Background from "@/components/background";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "@react-pdf-viewer/core/lib/styles/index.css";
import LangContext from "@/context/langContext";

export default function CvPage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCV, setSelectedCV] = useState("PT");
  const { lang } = useContext(LangContext);

  useEffect(() => {
    if (lang == "en") setSelectedCV("en");
    if (lang == "pt") setSelectedCV("pt");
    const container = document.querySelector("main") as HTMLElement;
    setInterval(() => setWindowHeight(container.clientHeight), 500);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = document.querySelector("main") as HTMLElement;
    setWindowHeight(container.clientHeight);
  }, []);

  function handleCVSelection(cv: string) {
    setSelectedCV(cv);
  }

  return (
    <>
      <main className="w-full z-20 box-border absolute overflow-y-scroll overflow-x-hidden scrollbar-none">
        <div className="flex flex-col items-center justify-center h-full w-screen sm:pt-20 pt-14 pb-32 overflow-hidden box-border">
          <Link
            href="/"
            className="absolute top-5 left-5 text-5xl z-50 text-white hover:scale-110"
          >
            <IoMdArrowRoundBack />
          </Link>
          <div className="text-xl w-fit h-fit flex z-40 gap-10">
            <button
              className={`text-white p-5 rounded ${
                selectedCV == "en"
                  ? "bg-indigo-600 shadow shadow-indigo-300 font-bold"
                  : "bg-indigo-900"
              }`}
              disabled={selectedCV == "en" ? true : false}
              onClick={() => handleCVSelection("en")}
            >
              EN
            </button>
            <button
              className={`text-white p-5 rounded ${
                selectedCV == "pt"
                  ? "bg-indigo-600 shadow shadow-indigo-300 font-bold"
                  : "bg-indigo-900"
              }`}
              disabled={selectedCV == "pt" ? true : false}
              onClick={() => handleCVSelection("pt")}
            >
              PT
            </button>
          </div>
          <div className="z-40 w-full h-screen flex justify-center mt-10 sm:mb-56">
            <div className="sm:w-[800px] w-full sm:h-[1200px] h-[600px]">
              {selectedCV == "en" ? (
                <object
                  type="application/pdf"
                  data={`/cvs/CV_Lucas_C_Pauli_ENG.pdf#view=fitH&zoom=scale&pagemode=none`}
                  width="100%"
                  height="100%"
                />
              ) : (
                <iframe
                  src={`/cvs/CV_Lucas_C_Pauli_PT.pdf#view=fitH&zoom=scale&pagemode=none`}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
        </div>
        <Background
          windowHeight={windowHeight}
          scrollPosition={scrollPosition}
        />
      </main>
    </>
  );
}
