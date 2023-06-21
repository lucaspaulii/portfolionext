import { motion } from "framer-motion";

export default function SkillCard(params: SkillCard) {
  return (
    <motion.div
      className="flex flex-col sm:w-[7.8rem] w-[5.5rem] sm:text-sm sm:h-40 h-[6.5rem] items-center justify-start sm:gap-2 gap-1 text-[0.65rem] group"
      initial={{ scale: 0.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0, duration: 0.7 }}
    >
      <div className="flex justify-center items-center flex-shrink-0 sm:h-14 sm:w-14 h-10 w-10 rounded-full bg-white text-2xl sm:text-2xl text-indigo-900 shadow-md shadow-black group-hover:scale-[110%] group-hover:shadow-indigo-700 group-hover:shadow-lg transition-all duration-500">
        {params.card}
      </div>
      <p className="sm:text-base text-xs group-hover:scale-[125%] group-hover:z-30 transition-all duration-500">{params.name}</p>
    </motion.div>
  );
}

type SkillCard = {
  card: any;
  name: String;
};
