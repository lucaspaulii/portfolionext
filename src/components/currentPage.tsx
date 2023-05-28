import Link from "next/link";

export default function CurrentPage({ currentPage }: any) {
  return (
    <div className="flex justify-around items-center fixed bottom-0 sm:bottom-[10%] sm:left-1/2 left-0 sm:-ml-[5.5rem] w-screen sm:w-44 h-7 sm:h-12 bg-white bg-opacity-40 sm:p-3 sm:rounded-lg">
      <Link href="/">
        <div
          className={`w-2 h-2 rounded-full border-solid border-cyan-950 drop-shadow-md border-[1.5px] ${
            currentPage == "home" && "bg-white scale-125"
          }`}
        ></div>
      </Link>
      <Link href="/about">
        <div
          className={`w-2 h-2 rounded-full border-solid border-cyan-950 border-[1.5px] ${
            currentPage == "about" && "bg-white scale-110"
          }`}
        ></div>
      </Link>
      <Link href="/projects">
        <div
          className={`w-2 h-2 rounded-full border-solid border-cyan-950 border-[1.5px] ${
            currentPage == "projects" && "bg-white scale-110"
          }`}
        ></div>
      </Link>
      <Link href="/skills">
        <div
          className={`w-2 h-2 rounded-full border-solid border-cyan-950 border-[1.5px] ${
            currentPage == "skills" && "bg-white scale-110"
          }`}
        ></div>
      </Link>
      <Link href="/contact">
        <div
          className={`w-2 h-2 rounded-full border-solid border-cyan-950 border-[1.5px] ${
            currentPage == "contact" && "bg-white scale-110"
          }`}
        ></div>
      </Link>
    </div>
  );
}
