import { useEffect, useState } from "react";
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
    <div className="h-screen w-screen top-0 left-0 z-0 fixed overflow-hidden scroll-smooth">
      <div
        className={`w-[5000px] h-full absolute top-0`}
        style={{ transform: `translateX(-${margin}px)` }}
      >
        <Image src="/background.png" alt="bg" fill priority quality={100} />
      </div>
    </div>
  );
}
