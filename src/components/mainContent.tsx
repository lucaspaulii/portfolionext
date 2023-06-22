import { motion } from "framer-motion";
import Tree from "./canvas/TreeCanvas";
import MainText from "./mainText";
import MainPicture from "./mainPicture";
import MainLineMobile from "./MainLineMobile";
import MainLine from "./MainLine";
import MainDropdown from "./MainDropdown";
import Laptop from "./canvas/LaptopCanvas";

export default function MainContent() {
  return (
    <>
      <motion.div className="flex flex-col items-center justify-center h-full w-screen sm:pt-20 pt-14 pb-32 overflow-hidden box-border">
        <div className="h-full sm:w-3/4 w-5/6 flex items-center flex-col sm:flex-row sm:pt-20 sm:mt-20 mt-14 box-border">
          <MainPicture />
          <MainLine />
          <MainLineMobile />
          <MainText />
          <Laptop />
        </div>
        <MainDropdown />
      </motion.div>
    </>
  );
}
