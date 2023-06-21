import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
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
  SiPython,
  SiReact,
  SiRedis,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { useContext } from "react";
import SkillCard from "./skillCard";

export default function SkillsContent() {
  const { lang } = useContext(LangContext);
  return (
    <div className="w-full flex flex-col justify-center items-center pt-20">
      <motion.div
        className="flex flex-col h-fit mb-12 mt-8 sm:w-4/5 w-full sm:p-6 p-6 sm:text-base gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="h-full w-full flex justify-center items-center text-white p-1 flex-wrap">
          <SkillCard name="TypeScript" card={<SiTypescript />} />
          <SkillCard name="JavaScript" card={<SiJavascript />} />
          <SkillCard name="Next.js" card={<SiNextdotjs />} />
          <SkillCard name="Node.js" card={<SiNodedotjs />} />
          <SkillCard name="React.js" card={<SiReact />} />
          <SkillCard name="HTML" card={<SiHtml5 />} />
          <SkillCard name="CSS" card={<SiCss3 />} />
          <SkillCard name="Express.js" card={<SiExpress />} />
          <SkillCard name="Nest.js" card={<SiNestjs />} />
          <SkillCard name="MongoDB" card={<SiMongodb />} />
          <SkillCard name="PostgreSQL" card={<SiPostgresql />} />
          <SkillCard name="Redis" card={<SiRedis />} />
          <SkillCard name="Styled-Comp." card={<SiStyledcomponents />} />
          <SkillCard name="Tailwind CSS" card={<SiTailwindcss />} />
          <SkillCard name="Prisma ORM" card={<SiPrisma />} />
          <SkillCard name="AWS" card={<SiAmazonaws />} />
          <SkillCard name="Docker" card={<SiDocker />} />
          <SkillCard name="Git" card={<SiGit />} />
          <SkillCard name="Jest" card={<SiJest />} />
          <SkillCard name="Vue.Js" card={<SiVuedotjs />} />
          <SkillCard name="Python" card={<SiPython />} />
        </div>
      </motion.div>
    </div>
  );
}
