import LangContext from "@/context/langContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { mainTxtEng, mainTxtPt } from "@/lang/langTexts";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi";

export default function MainText() {
  const { lang } = useContext(LangContext);

  return (
    <motion.div
      className="sm:h-full h-fit overflow-visible sm:mt-0 mt-8 flex-shrink-0 w-fit"
      initial={{ width: "0" }}
      animate={{ width: ["0", "fit-content"] }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <motion.div
        className="mb-5 h-fit min-h-fit max-h-fit w-[110%] sm:p-8 p-1 flex flex-col justify-center items-start z-30 sm:gap-10 gap-4 flex-shrink-0"
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <h1 className="text-center mb-1 leading-none font-extrabold text-gray-100 text-5xl sm:text-[4rem] break-keep [text-shadow:_0_2px_2px_var(--tw-shadow-color)] tracking-tight shadow-[#00000028]">
          {lang === "en" ? `${mainTxtEng.welcome}` : mainTxtPt.welcome}{" "}
          <span className="text-indigo-400">Lucas</span>
        </h1>
        <p className="text-white lg:text-xl sm:text-lg text-sm min-h-fit [text-shadow:_0_2px_2px_var(--tw-shadow-color)] shadow-[#00000028] tracking-tight">
          FullStack Web Developer.
          <br /> Front End Developer, React.js {lang === "en"
            ? "and"
            : "e"}{" "}
          Next.js.
          <br /> Back End Developer, Node.js {lang === "en" ? "and" : "e"}{" "}
          Express.
        </p>
        <div className="gap-2 sm:flex hidden sm:items-end">
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
          <Link href="/cv">
            <div className="hover:scale-110 hover:cursor-pointer h-8 w-12 relative mb-3">
              <HiIdentification className="text-indigo-400 text-5xl absolute left-0 top-0" />
              <p className="tracking-tighter absolute z-10 left-[1.35rem] top-[1.1rem] font-extrabold text-xs bg-indigo-400 rounded text-blue-950">
                CV
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
