import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import LangContext from "@/context/langContext";

export default function Contacts() {
  const { lang } = useContext(LangContext);
  return (
    <div className="flex flex-col sm:w-3/5 items-center gap-1 mt-5 sm:mt-14 mb-2 z-50">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
        <div className="flex items-center gap-3 sm:w-fit w-full sm:justify-normal justify-center sm:text-base text-xs">
          <SiWhatsapp className="sm:text-2xl" />
          <p>+55 48 9 9683-1681</p>
        </div>
        <div className="flex items-center gap-3 sm:w-fit w-full sm:justify-normal justify-center sm:text-base text-xs">
          <MdEmail className="sm:text-2xl" />
          <p>lucaspauli22@gmail.com</p>
        </div>
        <div className="flex items-center gap-3 sm:w-fit w-full sm:justify-normal justify-center sm:text-base text-xs">
          <Link
            href="https://www.linkedin.com/in/lucaspauli/"
            className="flex items-center gap-3"
          >
            <SiLinkedin className="sm:text-2xl" />
            <p>linkedin.com/in/lucaspauli/</p>
          </Link>
        </div>
      </div>
      <p className="sm:text-base text-xs">{lang === "en"
          ? "Florianópolis - SC - Brazil"
          : "Florianópolis - SC - Brasil"}</p>
    </div>
  );
}
