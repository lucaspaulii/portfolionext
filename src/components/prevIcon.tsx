import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function PrevIcon({ prevPage }: any) {
  return (
    <Link href={`/${prevPage}`}>
      <div className="text-white fixed top-2/4 left-0 sm:left-12 w-5 sm:w-16 h-14 sm:h-16 bg-white bg-opacity-40 flex justify-center items-center sm:rounded-lg flex-col scale-150 transition-all shadow-lg duration-200 hover:scale-[180%]">
        <FaPlay className="drop-shadow-lg  rotate-180 sm:text-4xl text-xs" />
      </div>
    </Link>
  );
}
