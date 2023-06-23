import { motion } from "framer-motion";
import Tree from "./canvas/TreeCanvas";
import MainText from "./mainText";
import MainPicture from "./mainPicture";
import MainDropdown from "./MainDropdown";
import Laptop from "./canvas/LaptopCanvas";

export default function MainContent() {
  return (
    <>
      <motion.div className="flex flex-col items-center justify-center h-full w-screen sm:pt-20 pt-14 pb-32 overflow-hidden box-border z-20">
        <div className="h-full sm:w-3/4 w-5/6 flex items-center flex-col sm:flex-row sm:justify-center sm:pt-20 sm:mt-10 mt-14 box-border z-20 sm:scale-125 scale-100">
          <MainPicture />
          <MainText />
        </div>
        <MainDropdown />
      </motion.div>
    </>
  );
}
