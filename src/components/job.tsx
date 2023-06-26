import LangContext from "@/context/langContext";
import { useContext, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Job(params: any) {
  const { title, company, description } = params;
  const [showMore, setShowMore] = useState(false);
  const { lang } = useContext(LangContext);
  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="sm:p-2 p-1 mb-8 rounded-lg relative transition-all duration-200">
      <h1 className="w-full sm:text-2xl text-lg font-extrabold text-white">
        {title}
      </h1>
      <h3 className="w-full sm:text-xl text-sm font-bold text-indigo-400">
        {company}
      </h3>
      {!showMore && (
        <p className="sm:text-sm text-[0.02rem] text-gray-600 whitespace-break-spaces text-justify font-light line-clamp-1">
          {description}...
        </p>
      )}
      {showMore && (
        <motion.p
          className="sm:text-sm text-[0.02rem] text-gray-400 whitespace-break-spaces text-justify font-light"
          initial={{ height: "1.25em"}}
          animate={{ height: "fit-content"}}
          transition={{ delay: 0, duration: 0.4 }}
        >
          {description}
        </motion.p>
      )}
      {!showMore && (
        <button onClick={handleClick}>
          {lang === "en" ? "Show More" : "Veja Mais"}
        </button>
      )}
      {showMore && (
        <button onClick={handleClick} className="mt-4">
          {lang === "en" ? "Show Less" : "Veja Menos"}
        </button>
      )}
    </div>
  );
}
