"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { useContext } from "react";
import { mainTxtEng, mainTxtPt } from "@/lang/langTexts";

export default function PictureMobile() {
  const { lang } = useContext(LangContext);
  return (
    <motion.div
      className="flex-col items-center group scale-110 w-[35rem] sm:hidden flex mt-10"
      initial={{ translateX: 0 }}
      animate={{ translateX: "-12rem" }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="pr-5 pl-5 delay-100 bg-red-800 flex justify-center items-center transition-all rounded-xl"
        initial={{
          height: "0px",
          width: "0px",
          opacity: 0,
          translateY: "-1000px",
          translateX: "-600px",
        }}
        animate={{
          height: "4rem",
          width: "10rem",
          opacity: 100,
          translateY: "-20px",
          translateX: "130px",
        }}
        transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
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
        className="flex w-full h-full justify-center items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <motion.div
          className="relative w-48 h-48 z-40"
          initial={{ scale: 1.0, translateY: "2rem" }}
          animate={{ scale: 1.2, translateY: "1.2rem" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image src="/lucaspicturefade.png" alt="profile picture" fill />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 2.2, ease: "easeIn", duration: 0.3 }}
        >
          <motion.div
            className="transition-all absolute top-1 left-3/4 pl-5 pr-4 p-2 bg-slate-100 bg-opacity-10 flex items-center justify-center flex-col rounded-xl"
            initial={{
              height: 0,
              width: 0,
              opacity: 0,
              translateX: "-6.3rem",
              translateY: "3rem",
            }}
            animate={{
              height: "13rem",
              width: "19.5rem",
              translateX: "-6.3rem",
              opacity: 100,
              translateY: "2.2rem",
            }}
            transition={{ delay: 0.5, duration: 1.0 }}
          >
            <motion.p
              className="transition-all text-justify text-sm w-full text-white [text-shadow:_0_1px_1px_var(--tw-shadow-color)] shadow-[#00000020]"
              initial={{ opacity: 0, height: "0px" }}
              animate={{ opacity: 100, height: "auto" }}
              transition={{ delay: 2.0, ease: "easeIn", duration: 0.2 }}
            >
              {lang === "en" ? mainTxtEng.welcomeText : mainTxtPt.welcomeText}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
