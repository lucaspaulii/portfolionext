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
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        form.current as string | HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          setLoading(false);
        },
        (error) => {
          setLoading(false);
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col sm:w-3/5 justify-center items-center -mt-14 z-50"
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
          className="sm:h-9 h-7 rounded-lg text-black pl-2 mb-1 bg-white bg-opacity-60 w-full"
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
          className="sm:h-9 h-7 rounded-lg text-black pl-2 mb-1 bg-white bg-opacity-60 w-full"
        />
      </motion.div>
      <motion.div className="w-full">
        <label className="sm:font-semibold sm:text-lg text-sm [text-shadow:_0_1px_6px_var(--tw-shadow-color)] shadow-black w-full">
          {lang === "en" ? "Message" : "Mensagem"}
        </label>
        <textarea
          name="message"
          className="sm:h-40 h-28 rounded-lg text-black pt-2 pl-2 mb-2 bg-white bg-opacity-60 w-full"
        />
      </motion.div>
      <motion.button
  className="sm:p-2 p-1 mt-2 font-bold sm:text-xl [text-shadow:_0_1px_6px_var(--tw-shadow-color)] w-1/2 sm:w-1/5 transition-all hover:scale-110 duration-700"
  type="submit"
  disabled={loading}
  initial={{
    backgroundColor: "rgba(202, 199, 250, 0.568)",
    borderRadius: "15% 70% 20% / 75% 85% 95%",
  }}
  animate={{
    backgroundColor: [
      "rgba(202, 199, 250, 0.568)",
      "rgba(188, 195, 255, 0.568)",
      "rgba(197, 184, 243, 0.568)",
      "rgba(202, 199, 250, 0.568)",
    ],
    borderRadius: [
      "35% 70% 60% / 75% 85% 95%",
      "80% 15% 80% / 85% 15% 25%",
      "45% 35% 50% / 55% 85% 65%",
      "35% 70% 60% / 75% 85% 95%",
    ],
  }}
  transition={{
    ease: "easeInOut",
    type: "keyframes",
    duration: 7,
    repeat: Infinity,
  }}
>
  {loading ? (
    <div
      className="w-6 h-6 mx-auto"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
  ) : (
    lang === "en" ? "Send" : "Enviar"
  )}
</motion.button>
    </motion.form>
  );
}
