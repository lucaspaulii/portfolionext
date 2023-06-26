import { useContext } from "react";
import LangContext from "@/context/langContext";
import { motion } from "framer-motion";
import AboutContent from "./aboutContent";
import AboutContentMobile from "./aboutContentMobile";

export default function AboutComponent() {
  const { lang } = useContext(LangContext);

  return (
    <div className="flex flex-col items-center w-full overflow-visible z-20">
      <motion.div className="flex flex-col sm:w-fit items-start sm:mb-16 mb-10 h-fit sm:gap-4 relative z-20">
        <h1 className="drop-shadow-md text-center text-lg sm:text-xl text-gray-400">
          {lang === "en" ? "Introduction" : "Introdução"}
        </h1>
        <h1 className="drop-shadow-md text-center font-extrabold text-4xl sm:text-[5rem] text-white">
          {lang === "en" ? "Overview." : "Sobre."}
        </h1>
      </motion.div>
      <AboutContent />
      <AboutContentMobile />
    </div>
  );
}
