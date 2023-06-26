import { motion } from "framer-motion";

export default function MainLine() {
  return (
    <div className="sm:h-full sm:w-[0.35rem] h-0 w-0 overflow-hidden">
      <motion.div
        className="sm:w-[0.35rem] bg-gradient-to-b to-indigo-900 from-indigo-400 rounded-full sm:block hidden"
        initial={{ height: "0" }}
        whileInView={{ height: "100%" }}
        transition={{ delay: 0.6, duration: 0.2 }}
      />
    </div>
  );
}
