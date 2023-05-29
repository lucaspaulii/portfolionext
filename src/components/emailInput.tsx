import LangContext from "@/context/langContext";
import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function EmailInput() {
  const { lang } = useContext(LangContext);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_auctjep",
        "template_tji4kae",
        form.current as string | HTMLFormElement,
        "as5AW8ZPE5FEvYIua"
      )
      .then(
        (result) => {
          console.log("message sent");
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col sm:w-2/5 justify-center items-center -mt-14 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <motion.div
        className="w-full"
        initial={{ translateX: "-370px", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <label className="sm:font-semibold sm:text-lg text-sm [text-shadow:_0_1px_6px_var(--tw-shadow-color)] shadow-black w-full">
          {lang === "en" ? "Name" : "Nome"}
        </label>
        <input
          type="text"
          name="user_name"
          className=" h-9 rounded-lg text-black pl-2 mb-1 bg-white bg-opacity-60 w-full"
        />
      </motion.div>
      <motion.div
        className="w-full"
        initial={{ translateX: "370px", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <label className="sm:font-semibold sm:text-lg text-sm [text-shadow:_0_1px_6px_var(--tw-shadow-color)] shadow-black w-full">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          className=" h-9 rounded-lg text-black pl-2 mb-1 bg-white bg-opacity-60 w-full"
        />
      </motion.div>
      <motion.div className="w-full">
        <label className="sm:font-semibold sm:text-lg text-sm [text-shadow:_0_1px_6px_var(--tw-shadow-color)] shadow-black w-full">
          {lang === "en" ? "Message" : "Mensagem"}
        </label>
        <textarea
          name="message"
          className="sm:h-40 h-32 rounded-lg text-black pt-2 pl-2 mb-2 bg-white bg-opacity-60 w-full"
        />
      </motion.div>
      <motion.input
        type="submit"
        value={loading ? "Loading" : lang === "en" ? "Send" : "Enviar"}
        initial={{ translateY: 1000, opacity: 0, rotate: 360 }}
        animate={{ translateY: 0, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.05 }}
        className="bg-red-700 rounded-lg sm:p-2 p-1 mt-2 font-bold sm:text-xl shadow shadow-black [text-shadow:_0_1px_6px_var(--tw-shadow-color)] w-1/2 sm:w-1/5 transition-all hover:bg-red-600 hover:scale-110 duration-700"
      />
    </motion.form>
  );
}
