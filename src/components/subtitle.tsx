import { motion } from "framer-motion";

export default function Subtitle(params: pageSubtitle) {
  return (
    <motion.div
      className="relative h-10 w-36 flex flex-col items-center justify-center rounded-lg sm:mt-32 sm:mb-10 mt-32 mb-0"
    >
      <p className="drop-shadow-md text-center font-extrabold text-4xl sm:text-5xl text-white">
        {params.subtitle}
      </p>
    </motion.div>
  );
}

type pageSubtitle = { subtitle: String };
