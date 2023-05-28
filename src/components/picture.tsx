"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { useContext } from "react";
import { mainTxtEng, mainTxtPt } from "@/lang/langTexts";

export default function Picture() {
  const { lang } = useContext(LangContext);
  return (
    <motion.div
      className="flex-col items-center group scale-110 w-[35rem] hidden sm:flex"
      initial={{ translateX: 0 }}
      animate={{ translateX: "-15rem" }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="flex w-full h-full justify-center items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <motion.div
          className="pr-20 pl-5 delay-100 absolute top-0 left-0 bg-red-500 flex justify-center items-center transition-all rounded-xl"
          initial={{
            height: "0px",
            width: "0px",
            opacity: 0,
            translateX: "5rem",
          }}
          animate={{
            height: "5rem",
            width: "11rem",
            translateX: "5rem",
            opacity: 100,
          }}
          transition={{ delay: 0.1, ease: "easeOut", duration: 0.5 }}
        >
          <motion.p
            className="font-bold text-xl w-full text-center text-gray-200 [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#0000007d]"
            initial={{ opacity: 0, scale: "50%", translateY: "3rem" }}
            animate={{ opacity: 100, scale: "100%", translateY: "0rem" }}
            transition={{ delay: 0.9, ease: "easeIn", duration: 0.2 }}
          >
            {lang === "en" ? mainTxtEng.welcome : mainTxtPt.welcome}
          </motion.p>
        </motion.div>
        <motion.div
          className="relative w-48 h-48 z-40"
          initial={{ scale: 1.35, translateY: 0 }}
          animate={{ scale: 1.7, translateY: "-1.5rem" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image src="/lucaspicturefade.png" alt="profile picture" fill />
        </motion.div>
        <motion.div
          className="transition-all absolute top-1 left-3/4 pl-10 bg-slate-100 bg-opacity-80 flex items-center justify-center flex-col rounded-xl"
          initial={{
            height: "0px",
            width: "0px",
            opacity: 0,
            translateX: "-6.3rem",
            translateY: "-4.5rem",
          }}
          animate={{
            height: "10.2rem",
            width: "40rem",
            translateX: "-6.3rem",
            opacity: 100,
          }}
          transition={{ delay: 0.5, duration: 1.0 }}
        >
          <motion.p
            className="transition-all text-m font-bold w-full text-indigo-950 [text-shadow:_0_1px_1px_var(--tw-shadow-color)] shadow-[#00000020]"
            initial={{ opacity: 0, height: "0px" }}
            animate={{ opacity: 100, height: "auto" }}
            transition={{ delay: 2.0, ease: "easeIn", duration: 0.2 }}
          >
            {lang === "en" ? mainTxtEng.welcomeText : mainTxtPt.welcomeText}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
