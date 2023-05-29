import { useContext } from "react";
import Job from "./job";
import Subtitle from "./subtitle";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { skillsTxtEng, skillsTxtPt } from "@/lang/langTexts";

export default function Education() {
  const { lang } = useContext(LangContext);
  return (
    <div className="flex flex-col items-center">
      <Subtitle subtitle={lang === "en" ? "Education" : "Educação"} />
      <motion.div
        className="flex flex-col w-full bg-white bg-opacity-60 sm:rounded-lg h-fit sm:p-8 p-8 sm:mt-8 mt-4"
        initial={{ translateX: "-20rem", opacity: 0 }}
        animate={{ translateX: "0", opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.2 }}
      >
        <Job
          title={lang === "en" ? skillsTxtEng.education.driven.title : skillsTxtPt.education.driven.title}
          company={lang === "en" ? skillsTxtEng.education.driven.company : skillsTxtPt.education.driven.company}
          period={lang === "en" ? skillsTxtEng.education.driven.period : skillsTxtPt.education.driven.period}
          description={lang === "en" ? skillsTxtEng.education.driven.description : skillsTxtPt.education.driven.description}
        />
        <Job
          title={lang === "en" ? skillsTxtEng.education.cs50.title : skillsTxtPt.education.cs50.title}
          company={lang === "en" ? skillsTxtEng.education.cs50.company : skillsTxtPt.education.cs50.company}
          period={lang === "en" ? skillsTxtEng.education.cs50.period : skillsTxtPt.education.cs50.period}
          description={lang === "en" ? skillsTxtEng.education.cs50.description : skillsTxtPt.education.cs50.description}
        />
        <Job
          title={lang === "en" ? skillsTxtEng.education.ufsc.title : skillsTxtPt.education.ufsc.title}
          company={lang === "en" ? skillsTxtEng.education.ufsc.company : skillsTxtPt.education.ufsc.company}
          period={lang === "en" ? skillsTxtEng.education.ufsc.period : skillsTxtPt.education.ufsc.period}
          description={lang === "en" ? skillsTxtEng.education.ufsc.description : skillsTxtPt.education.ufsc.description}
        />
      </motion.div>
    </div>
  );
}
