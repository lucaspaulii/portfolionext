import Image from "next/image";
import { motion } from "framer-motion";

export default function MainPicture() {
  return (
    <motion.div
      className="w-fit h-fit flex justify-center items-center bg-gradient-to-l from-indigo-900 to-indigo-700 bg-opacity-30 p-2 overflow-hidden mr-8 sm:mt-0 mt-4 flex-shrink-0"
      initial={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "40% 70% 60% 20% / 30% 70% 40% 80%",
          "50% 80% 30% 50% / 50% 80% 20% 90%",
          "60% 30% 70% 40% / 60% 40% 30% 70%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      transition={{
        ease: "easeInOut",
        type: "keyframes",
        duration: 25,
        repeat: Infinity,
      }}
    >
      <div className="relative sm:w-52 sm:h-52 flex-shrink-0 w-48 h-48">
        <Image
          src="/lucaspicturefade.png"
          alt="profile picture"
          fill
          priority
        />
      </div>
    </motion.div>
  );
}
