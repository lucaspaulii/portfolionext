"use client";
import PageTitle from "@/components/pageTitle";
import { useContext } from "react";
import { motion } from "framer-motion";
import EmailInput from "@/components/emailInput";
import Contacts from "@/components/contacts";
import LangContext from "@/context/langContext";

export default function Contact() {
  const { lang } = useContext(LangContext);

  return (
    <div className="h-fit sm:w-2/3 w-full text-white">
      <motion.div className="w-full sm:h-full h-fit sm:pt-28 pt-[5.5rem] box-border ms:overflow-hidden overflow-x-hidden overflow-y-scroll flex flex-col items-center justify-center scrollbar-none sm:pb-0 pb-10">
        <PageTitle title={lang === "en" ? "Contact" : "Contato"} />
        <EmailInput />
        <Contacts />
      </motion.div>
    </div>
  );
}
