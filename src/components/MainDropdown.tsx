import Link from "next/link";
import { MdArrowDropDownCircle } from "react-icons/md";
import { motion } from "framer-motion";

export default function MainDropdown() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    console.log(elem);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };
  return (
    <motion.div
      className="w-full flex justify-center"
      animate={{ translateY: ["0px", "10px", "0px"] }}
      transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}
    >
      <Link href="#about" onClick={handleScroll}>
        <MdArrowDropDownCircle className="text-5xl" />
      </Link>
    </motion.div>
  );
}
