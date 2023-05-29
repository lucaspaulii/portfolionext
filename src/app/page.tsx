"use client";
import CurrentPage from "@/components/currentPage";
import NextIcon from "@/components/nextIcon";
import Picture from "@/components/picture";
import PageContext from "@/context/pageContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PictureMobile from "@/components/PictureMobile";

export default function Home() {
  const { setPageData, pageData } = useContext(PageContext);
  const prevPage = pageData;

  useEffect(() => {
    setPageData("/");
  }, []);

  return (
    <main className="h-screen  w-screen bg-gradient-to-tr from-blue-900 from-10% via-gray-900 via-80% to-blue-950 text-white box-border absolute">
      <Image src="/bg3.jpg" alt="bg" fill placeholder="blur" priority={true} blurDataURL="/bgblur.png"/>
      <motion.div
        className="flex flex-col items-center justify-center h-full w-full sm:pt-20 pb-32 overflow-hidden"
        initial={{ translateX: prevPage == "about" ? "-70vw" : "0" }}
        animate={{ translateX: "0" }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <Picture />
        <PictureMobile />
        <div className="mb-5 bg-white h-24 w-fit p-8 bg-opacity-0 flex flex-col items-center justify-center z-30">
          <h1 className="text-center mb-1 font-bold text-gray-100 text-4xl sm:text-6xl [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028]">
            Lucas Costa Pauli
          </h1>
          <p className="text-red-500 sm:text-lg font-bold text-md [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028]">
            {"<FullStack Web Developer/>"}
          </p>
        </div>
      </motion.div>
      <NextIcon nextPage="about" />
      <CurrentPage currentPage="home" />
    </main>
  );
}
