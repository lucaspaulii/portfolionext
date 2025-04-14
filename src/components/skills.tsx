import {
  SiAmazonaws,
  SiAwslambda,
  SiAmazons3,
  SiCss3,
  SiClickhouse,
  SiDocker,
  SiElixir,
  SiExpress,
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
  SiPhoenixframework,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiCodereview,
  SiQuarkus,
} from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
import { TbFileTypeSql } from "react-icons/tb";
import { GiPerspectiveDiceSixFacesRandom, GiFox, GiDatabase } from "react-icons/gi";
import { FaJava } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { useContext } from "react";
import SkillCard from "./skillCard";
import SkillCategory from "./skillCategory";

export default function SkillsContent() {
  const { lang } = useContext(LangContext);
  return (
    <div className="w-full flex flex-col justify-center items-center pt-20">
      <motion.div
        className="flex flex-col h-fit mb-12 mt-8 sm:w-4/5 w-full sm:p-6 p-4 sm:text-base gap-8"
      >
        <div className="h-full w-full flex justify-center items-center text-white p-1 flex-wrap z-20">
          <div className="w-full h-full flex flex-col justify-start sm:gap-0 gap-2">
          <h1 className="sm:hidden block bg-indigo-900 bg-opacity-50 rounded p-1 w-fit">{lang == "en" ? "Languages:" : "Linguagens:"}</h1>
            <div className="flex items-center text-white p-1 flex-wrap z-20">
              <SkillCategory
                name={lang == "en" ? "Languages" : "Linguagens"}
                card={<SiCodereview />}
              />
              <SkillCard name="Elixir" card={<SiElixir />} />
              <SkillCard name="TypeScript" card={<SiTypescript />} />
              <SkillCard name="JavaScript" card={<SiJavascript />} />
              <SkillCard name="Rust" card={<SiRust />} />
              <SkillCard name="Java" card={<FaJava />}/>
              <SkillCard name="Python" card={<SiPython />} />
            </div>
            <h1 className="sm:hidden block bg-indigo-900 bg-opacity-50 rounded p-1 w-fit">Front-End:</h1>
            <div className="flex items-center text-white p-1 flex-wrap z-20">
              <SkillCategory name="Front-End" card={<MdScreenshotMonitor />} />
              <SkillCard name="LiveView" card={<SiPhoenixframework />} />
              <SkillCard name="React.js" card={<SiReact />} />
              <SkillCard name="Next.js" card={<SiNextdotjs />} />
              <SkillCard name="HTML" card={<SiHtml5 />} />
              <SkillCard name="CSS" card={<SiCss3 />} />
              <SkillCard name="Vue.Js" card={<SiVuedotjs />} />
              <SkillCard name="Tailwind CSS" card={<SiTailwindcss />} />
              <SkillCard name="Three.js" card={<SiThreedotjs />} />
            </div>
            <h1 className="sm:hidden block bg-indigo-900 bg-opacity-50 rounded p-1 w-fit">Back-end:</h1>
            <div className="flex items-center text-white p-1 flex-wrap z-20">
              <SkillCategory name="Back-End" card={<BsFillGearFill />} />
              <SkillCard name="Phoenix" card={<SiPhoenixframework />} />
              <SkillCard name="Node.js" card={<SiNodedotjs />} />
              <SkillCard name="Express.js" card={<SiExpress />} />
              <SkillCard name="Nest.js" card={<SiNestjs />} />
              <SkillCard name="Redpanda" card={<GiFox />} />
              <SkillCard name="Quarkus" card={<SiQuarkus />} />
            </div>
            <h1 className="sm:hidden block bg-indigo-900 bg-opacity-500 rounded p-1 w-fit">{lang == "en" ? "Databases:" : "Banco de Dados:"}</h1>
            <div className="flex items-center text-white p-1 flex-wrap z-20">
              <SkillCategory
                name={lang == "en" ? "Databases" : "Banco de Dados"}
                card={<GiDatabase />}
              />
              <SkillCard name="PostgreSQL" card={<SiPostgresql />} />
              <SkillCard name="SQL" card={<TbFileTypeSql />} />
              <SkillCard name="Redis" card={<SiRedis />} />
              <SkillCard name="MongoDB" card={<SiMongodb />} />
              <SkillCard name="Ecto" card={<SiElixir />} />
              <SkillCard name="ClickHouse" card={<SiClickhouse />} />
              <SkillCard name="Prisma ORM" card={<SiPrisma />} />
            </div>
            <h1 className="sm:hidden block bg-indigo-900 bg-opacity-500 rounded p-1 w-fit">{lang == "en" ? "Others:" : "Outros:"}</h1>
            <div className="flex items-center text-white p-1 flex-wrap z-20">
              <SkillCategory
                name={lang == "en" ? "Others" : "Outros"}
                card={<GiPerspectiveDiceSixFacesRandom />}
              />
              <SkillCard name="AWS" card={<SiAmazonaws />} />
              <SkillCard name="AWS Lambda" card={<SiAwslambda />} />
              <SkillCard name="Amazon S3" card={<SiAmazons3 />} />
              <SkillCard name="Docker" card={<SiDocker />} />
              <SkillCard name="Git" card={<SiGit />} />
              <SkillCard name="Jest" card={<SiJest />} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
