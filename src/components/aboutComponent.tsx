import { useContext } from "react";
import LangContext from "@/context/langContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdSportsHandball } from "react-icons/md";
import {
  GiGuitar,
  GiMicrophone,
  GiCat,
  GiSoccerBall,
  GiGamepad,
} from "react-icons/gi";
import { aboutTxtEng, aboutTxtPt } from "@/lang/langTexts";

export default function AboutComponent() {
  const { lang } = useContext(LangContext);

  return (
    <div className="flex flex-col items-center w-full overflow-visible">
      <motion.div className="flex flex-col sm:w-fit items-start sm:mb-16 mb-10 h-fit sm:gap-4 relative">
        <h1 className="drop-shadow-md text-center text-lg sm:text-xl text-gray-400">
          {lang === "en" ? "Introduction" : "Introdução"}
        </h1>
        <h1 className="drop-shadow-md text-center font-extrabold text-4xl sm:text-[5rem] text-white">
          {lang === "en" ? "Overview." : "Sobre."}
        </h1>
      </motion.div>
      <motion.div
        className="sm:w-4/5 w-[98%] sm:text-xl text-[0.8rem] text-center flex mt-8 gap-2 bg-gradient-to-b to-[#06062ce8] from-[#080844e8] rounded-xl border-b-4 border-white"
        initial={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          backgroundColor: "#3730a3",
        }}
        animate={{
          borderRadius: [
            "40% 70% 60% 20% / 30% 70% 40% 80%",
            "60% 85% 75% 30% / 40% 80% 49% 65%",
            "35% 65% 55% 16% / 27% 64% 36% 84%",
            "70% 90% 80% 35% / 35% 75% 47% 75%",
            "40% 70% 60% 20% / 30% 70% 40% 80%",
          ],
          backgroundColor: [" #1b1669", " #040131", " #1b1669"],
        }}
        transition={{
          ease: "easeInOut",
          type: "keyframes",
          duration: 7,
          repeat: Infinity,
        }}
      >
        <div className="sm:w-2/3 w-5/6 sm:pl-8 pl-6 pt-8 sm:pb-8 pb-8 pr-4 ml-4 flex flex-col justify-around items-center">
          <p className="[text-shadow:_1px_2px_2px_var(--tw-shadow-color)] shadow-[#6273d46f] sm:p-14">
            {lang === "en" ? aboutTxtEng.mainText : aboutTxtPt.mainText}
          </p>
          <motion.div className="sm:text-3xl w-2/5 justify-around text-indigo-800 sm:flex hidden">
            <MdSportsHandball />
            <GiSoccerBall />
            <GiGuitar />
            <GiMicrophone />
            <GiCat />
            <GiGamepad />
          </motion.div>
        </div>
        <motion.div className="sm:h-[600px] h-500px sm:w-1/3 w-1/6 relative rounded-e-xl">
          <Image
            src="/aboutimg1-removebg-preview.png"
            alt="Lucas standing"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/faceblur.jpg"
            priority={true}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
