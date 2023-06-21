import { motion } from "framer-motion"

export default function MainLineMobile() {
    return (
        <motion.div
            className="h-[0.35rem] w-full bg-gradient-to-r to-indigo-900 from-indigo-400 rounded-full block sm:hidden mt-4"
            initial={{ width: "0" }}
            animate={{ width: ["1%", "100%"] }}
            transition={{ delay: 0.3, duration: 0.4 }}
          ></motion.div>
    )
};
