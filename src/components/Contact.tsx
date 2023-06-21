"use client";
import PageTitle from "@/components/pageTitle";
import PageContext from "@/context/pageContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="h-fit sm:w-2/3 w-full text-white">
      <motion.div
        className="w-full sm:h-full h-fit sm:pt-28 pt-[5.5rem] box-border ms:overflow-hidden overflow-x-hidden overflow-y-scroll flex flex-col items-center justify-center scrollbar-none sm:pb-0 pb-10"
        initial={{ translateX: prevPage == "skills" ? "70vw" : "0" }}
        animate={{ translateX: "0" }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <PageTitle title={lang === "en" ? "Contact" : "Contato"} />
        <EmailInput />
        <Contacts />
      </motion.div>
    </div>
  );
}
