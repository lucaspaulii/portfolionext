import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Subtitle from "./subtitle";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { useContext } from "react";

export default function SkillsContent() {
  const { lang } = useContext(LangContext);
  return (
    <>
      <Subtitle subtitle={lang === "en" ? "Tools" : "Ferramentas"} />
      <motion.div
        className="flex h-fit mb-12 mt-4 sm:w-3/5 w-full bg-white bg-opacity-60 sm:rounded-lg sm:p-6 p-6 sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="h-full w-1/4 flex flex-col justify-center items-center text-gray-800 p-1">
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiTypescript className="text-base sm:text-lg" />
            <p>TypeScript</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiJavascript className="text-base sm:text-lg" />
            <p>JavaScript</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiNextdotjs className="text-base sm:text-lg" />
            <p>Next.js</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiNodedotjs className="text-base sm:text-lg" />
            <p>Node.js</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiReact className="text-base sm:text-lg" />
            <p>React.js</p>
          </div>
        </div>
        <div className="h-full w-1/4 flex flex-col justify-center items-center text-gray-800 border-l-[1px] border-r-[1px] border-slate-700 p-1">
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiNestjs className="text-base sm:text-lg" />
            <p>Nest.js</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiHtml5 className="text-base sm:text-lg" />
            <p>HTML</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiCss3 className="text-base sm:text-lg" />
            <p>CSS</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiExpress className="text-base sm:text-lg" />
            <p>Express.js</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiMongodb className="text-base sm:text-lg" />
            <p>MongoDB</p>
          </div>
        </div>
        <div className="h-full sm:w-1/4 w-[30%] flex flex-col justify-center items-center text-gray-800 border-r-[1px] border-slate-700 p-1">
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiPostgresql className="text-base sm:text-lg" />
            <p>PostgreSQL</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiRedis className="text-base sm:text-lg" />
            <p>Redis</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiStyledcomponents className="text-3xl sm:text-4xl" />
            <p>Styled-Components</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiTailwindcss className="text-base sm:text-lg" />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiPrisma className="text-base sm:text-lg" />
            <p>Prisma ORM</p>
          </div>
        </div>
        <div className="h-full sm:w-1/4 w-[20%] flex flex-col justify-center items-center text-gray-800 p-1">
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiAmazonaws className="text-base sm:text-lg" />
            <p>AWS</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiDocker className="text-base sm:text-lg" />
            <p>Docker</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiGit className="text-base sm:text-lg" />
            <p>Git</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiJest className="text-base sm:text-lg" />
            <p>Jest</p>
          </div>
          <div className="flex sm:w-4/5 w-[95%] sm:text-lg h-10 items-center justify-start sm:gap-3 gap-1 text-[0.65rem]">
            <SiFigma className="text-base sm:text-lg" />
            <p>Figma</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
