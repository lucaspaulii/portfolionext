import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Background({
  windowHeight,
  scrollPosition,
}: {
  windowHeight: number;
  scrollPosition: number;
}) {
  const [margin, setMargin] = useState(0);
  const bgwidth = 5000;

  function handlePosition() {
    const position =
      (scrollPosition * (bgwidth - window.screen.width)) / windowHeight;
    if (typeof position == "number") return position;
    else return 0;
  }

  useEffect(() => {
    const position = handlePosition();
    setMargin(position);
  }, [scrollPosition]);

  return (
    <div className="h-screen w-screen top-0 left-0 z-0 fixed overflow-hidden">
      <div
        className={`w-[5000px] h-full absolute top-0`}
        style={{ right: `-${margin}px` }}
      >
        <Image src="/group8.png" alt="bg" fill priority quality={100} />
        <motion.div
          className="absolute top-1/4 left-1/2 text-5xl text-white opacity-50"
          animate={{ translateY: ["0px", "10px", "0px"] }}
          transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}
        >
          
        </motion.div>
      </div>
    </div>
  );
}
