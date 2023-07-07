import { motion } from "framer-motion";

export default function SkillCategory(params: SkillCard) {
  return (
    <motion.div
      className="sm:flex sm:flex-col hidden sm:w-[7.8rem] w-[4.5rem] sm:text-sm sm:h-40 h-fill items-center justify-center sm:gap-2 gap-1 text-[0.65rem] sm:mr-10"
    >
      <div className="flex flex-col justify-center items-center flex-shrink-0 sm:h-24 sm:w-24 gap-2 h-14 w-14 rounded bg-gradient-to-r from-indigo-400 to-blue-400 text-[1.2rem] sm:text-2xl text-white shadow-md shadow-black">
        {params.card}
        <p className="sm:text-base text-[0.5rem] sm:font-normal font-bold sm:mt-0">{params.name}</p>
      </div>
      
    </motion.div>
  );
}

type SkillCard = {
  card: any;
  name: String;
};
