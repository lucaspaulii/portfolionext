"use client";
import CurrentPage from "@/components/currentPage";
import PageTitle from "@/components/pageTitle";
import PrevIcon from "@/components/prevIcon";
import PageContext from "@/context/pageContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import EmailInput from "@/components/emailInput";
import Contacts from "@/components/contacts";
import LangContext from "@/context/langContext";

export default function Contact() {
  const { setPageData, pageData } = useContext(PageContext);
  const prevPage = pageData;
  const { lang } = useContext(LangContext);

  useEffect(() => {
    setPageData("contact");
  }, []);

  return (
    <main className="h-screen w-screen bg-gradient-to-tr from-blue-900 via-gray-900 to-purple-900 text-white overflow-hidden">
      <Image src="/bg3.jpg" alt="bg" fill/>
      <motion.div
        className="w-full h-full sm:pt-28 pt-[5.5rem] box-border overflow-hidden flex flex-col items-center"
        initial={{ translateX: prevPage == "skills" ? "70vw" : "0" }}
        animate={{ translateX: "0" }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <PageTitle title={lang === "en" ? "Contact" : "Contato"} />
        <EmailInput />
        <Contacts />
      </motion.div>
      <PrevIcon prevPage="skills" />
      <CurrentPage currentPage="contact" />
    </main>
  );
}
