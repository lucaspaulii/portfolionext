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

export default function AboutContent() {
  const { lang } = useContext(LangContext);
  return (
    <motion.div
        className="w-4/5 z-20 text-xl text-justify sm:flex hidden mt-8 gap-2 bg-[#06062ce8] rounded-xl border-b-4 border-white"
        initial={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
        }}
        animate={{
          borderRadius: [
            "40% 70% 60% 20% / 30% 70% 40% 80%",
            "60% 85% 75% 30% / 40% 80% 49% 65%",
            "35% 65% 55% 16% / 27% 64% 36% 84%",
            "70% 90% 80% 35% / 35% 75% 47% 75%",
            "40% 70% 60% 20% / 30% 70% 40% 80%",
          ],
        }}
        transition={{
          ease: "easeInOut",
          type: "keyframes",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <div className="w-2/3 pl-8 pt-14 pb-8 pr-4 ml-4 flex flex-col justify-around items-center">
          <p className="[text-shadow:_1px_2px_2px_var(--tw-shadow-color)] shadow-[#6273d46f] p-14">
            {lang === "en" ? aboutTxtEng.mainText : aboutTxtPt.mainText}
          </p>
          <motion.div className="text-3xl mt-0 w-2/5 justify-around text-indigo-800 flex">
            <MdSportsHandball />
            <GiSoccerBall />
            <GiGuitar />
            <GiMicrophone />
            <GiCat />
            <GiGamepad />
          </motion.div>
        </div>
        <motion.div className="h-[600px] max-h-500px w-1/3 min-w-[75px] relative rounded-e-xl">
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
  )
}
