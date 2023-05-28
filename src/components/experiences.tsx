import { useContext } from "react";
import Job from "./job";
import Subtitle from "./subtitle";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { skillsTxtEng, skillsTxtPt } from "@/lang/langTexts";

export default function Experiences() {
  const { lang } = useContext(LangContext);

  return (
    <div className="flex flex-col items-center">
      <Subtitle subtitle={lang === "en" ? "Experiences" : "Experiências"} />
      <motion.div
        className="flex flex-col w-full bg-white bg-opacity-60 sm:rounded-lg h-fit sm:p-8 p-5 sm:mt-8 mt-4"
        initial={{ translateX: "20rem", opacity: 0 }}
        animate={{ translateX: "0", opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.2 }}
      >
        <Job
          title={lang === "en" ? skillsTxtEng.experiences.driven.title : skillsTxtPt.experiences.driven.title}
          company={lang === "en" ? skillsTxtEng.experiences.driven.company : skillsTxtPt.experiences.driven.company}
          period={lang === "en" ? skillsTxtEng.experiences.driven.period : skillsTxtPt.experiences.driven.period}
          description={lang === "en" ? skillsTxtEng.experiences.driven.description : skillsTxtPt.experiences.driven.description}
        />
        <Job
          title={lang === "en" ? skillsTxtEng.experiences.lajetrel.title : skillsTxtPt.experiences.lajetrel.title}
          company={lang === "en" ? skillsTxtEng.experiences.lajetrel.company : skillsTxtPt.experiences.lajetrel.company}
          period={lang === "en" ? skillsTxtEng.experiences.lajetrel.period : skillsTxtPt.experiences.lajetrel.period}
          description={lang === "en" ? skillsTxtEng.experiences.lajetrel.description : skillsTxtPt.experiences.lajetrel.description}
        />
        <Job
          title={lang == "en" ? skillsTxtEng.experiences.crestani.title : skillsTxtPt.experiences.crestani.title}
          company={lang == "en" ? skillsTxtEng.experiences.crestani.company : skillsTxtPt.experiences.crestani.company}
          period={lang == "en" ? skillsTxtEng.experiences.crestani.period : skillsTxtPt.experiences.crestani.period}
          description={lang == "en" ? skillsTxtEng.experiences.crestani.description : skillsTxtPt.experiences.crestani.description}
        />
        <Job
          title={lang === "en" ? skillsTxtEng.experiences.concreta.title : skillsTxtPt.experiences.concreta.title}
          company={lang === "en" ? skillsTxtEng.experiences.concreta.company : skillsTxtPt.experiences.concreta.company}
          period={lang === "en" ? skillsTxtEng.experiences.concreta.period : skillsTxtPt.experiences.concreta.period}
          description={lang === "en" ? skillsTxtEng.experiences.concreta.description : skillsTxtPt.experiences.concreta.description}
        />
      </motion.div>
    </div>
  );
}
