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

export default function AboutContentMobile() {
  const { lang } = useContext(LangContext);
  return (
    <motion.div
        className="w-[95%] z-20 text-xs flex sm:hidden bg-[#06062cc0] rounded-xl border-b-4 border-white overflow-hidden"
        initial={{
          borderRadius: "10% 20% 15% 26% / 30% 20% 10% 12%"
        }}
        animate={{
          borderRadius: [
            "10% 20% 15% 26% / 30% 20% 10% 12%",
            "20% 32% 22% 30% / 20% 30% 20% 19%",
            "30% 20% 10% 12% / 10% 20% 15% 26%",
            "15% 12% 32% 25% / 25% 10% 30% 10%",
            "10% 20% 15% 26% / 30% 20% 10% 12%",
          ],
        }}
        transition={{
          ease: "easeInOut",
          type: "keyframes",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <div className={`w-2/3 pl-6 pb-2 pr-4 ml-4 flex flex-col justify-around items-center`}>
          <p className="[text-shadow:_1px_2px_2px_var(--tw-shadow-color)] shadow-[#6273d46f] break-words overflow-hidden w-full hyphens-auto text-justify">
            {lang === "en" ? aboutTxtEng.mainTextMobile : aboutTxtPt.mainTextMobile}
          </p>
        </div>
        <motion.div className="h-[300px] max-h-500px w-1/3 min-w-[75px] relative rounded-e-xl border-l-4 border-[#06062cc0] bg-indigo-600 bg-opacity-20">
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