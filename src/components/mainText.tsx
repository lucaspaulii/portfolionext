import LangContext from "@/context/langContext";
import { useContext } from "react";
import { motion } from "framer-motion"
import { mainTxtEng, mainTxtPt } from "@/lang/langTexts";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function MainText() {
    const { lang } = useContext(LangContext);

    return (
        <motion.div
            className="sm:h-full h-fit overflow-hidden sm:mt-0 mt-4"
            initial={{ width: "0" }}
            animate={{ width: ["0", "fit-content"] }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.div
              className="mb-5 h-fit w-[110%] sm:p-8 p-1 flex flex-col justify-center items-start z-30 sm:gap-10 gap-4"
              initial={{ opacity: "0" }}
              animate={{ opacity: "1" }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <h1 className="text-center mb-1 font-extrabold text-gray-100 text-4xl sm:text-[4rem] break-keep [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028]">
                {lang === "en" ? mainTxtEng.welcome : mainTxtPt.welcome}{" "}
                <span className="text-indigo-400">Lucas</span>
              </h1>
              <p className="text-white lg:text-xl sm:text-lg text-sm [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028]">
                FullStack Web Developer.
                <br /> Front End Developer, React.js{" "}
                {lang === "en" ? "and" : "e"} Next.js.
                <br /> Back End Developer, Node.js, Express{" "}
                {lang === "en" ? "and" : "e"} Nest.js.
              </p>
              <div className="gap-2 sm:flex hidden">
                <Link
                  href="https://www.linkedin.com/in/lucaspauli/"
                  className="hidden sm:block"
                >
                  <AiFillLinkedin className="text-indigo-400 text-4xl hover:scale-110" />
                </Link>
                <Link
                  href="https://github.com/lucaspaulii"
                  className="hidden sm:block"
                >
                  <AiOutlineGithub className="text-indigo-400 text-4xl hover:scale-110" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
    )
};
