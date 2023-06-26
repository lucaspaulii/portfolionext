"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiNodedotjs } from "react-icons/si";
import { useContext, useState } from "react";
import LangContext from "@/context/langContext";

export default function Project(props: project) {
  const { lang } = useContext(LangContext);
  const [showMore, setShowMore] = useState(false);
  function handleClick() {
    setShowMore(!showMore);
  }
  function handleVideo(id: String) {
    if (id && props.setVideo) {
      props.setVideo(id);
    } else {
      let alertMsg =
        lang === "en"
          ? "Sorry video, not suported"
          : "Desculpe, video não suportado";
      alert(alertMsg);
    }
  }

  function handleLoad() {
    //
  }

  return (
    <>
      <motion.div
        className="w-8/12 h-fit sm:flex sm:flex-col hidden rounded-3xl mt-10 mb-10 min-h-[16rem] z-20"
        initial={{
          translateX: props.direction == "r" ? "10vw" : "-10vw",
          opacity: 0,
        }}
        whileInView={{ translateX: "0rem", opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
      >
        <motion.div
          className={`flex h-fit min-h-[9rem] w-full bg-gradient-to-b to-[#aeaefce8] from-[#e4e4ffe8] bg-opacity-60 rounded-t-xl ${
            props.direction == "r" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div
            className={`h-100 w-1/5 flex items-center ${
              props.direction == "r" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center">
                <div
                  className={`absolute scale-[230%] transition duration-150 hover:z-30 hover:scale-[400%] ${
                    props.direction == "r"
                      ? "-translate-x-10"
                      : "translate-x-10"
                  }`}
                >
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    priority
                    onLoad={handleLoad}
                  />
                </div>
                <div
                  className={`absolute z-20  transition duration-150 hover:scale-[300%] ${
                    props.direction == "r"
                      ? "translate-x-20"
                      : "-translate-x-20"
                  }`}
                >
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    priority
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            )}
            {props.imageDesktopSrc && !props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center">
                <div
                  className={`absolute scale-[230%] transition duration-150 hover:z-30 hover:scale-[400%] ${
                    props.direction == "r"
                      ? "-translate-x-10"
                      : "translate-x-20"
                  }`}
                >
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    priority
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            )}
            {!props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center">
                <div className="absolute z-20 scale-150 transition duration-150 hover:scale-[300%] -translate-x-16">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    priority
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center w-4/5 p-3 gap-3">
            <h1 className="text-black w-full text-center text-4xl font-extrabold drop-shadow-lg shadow-black mb-4">
              {props.name}
            </h1>
            <p
              className={` text-justify w-full text-base ${
                props.direction == "r" ? "pr-3" : "pl-3"
              } ${
                showMore ? "text-gray-700" : "line-clamp-1 text-gray-500"
              } transition-all duration-100`}
            >
              {props.description}
            </p>
            <button
              onClick={handleClick}
              className={` w-full text-right pr-5 mb-4 -mt-2 ${
                showMore ? "text-gray-100" : "text-[#ffffff] font-semibold"
              }`}
            >
              {showMore
                ? lang === "en"
                  ? "Show Less"
                  : "Veja Menos"
                : lang === "en"
                ? "Show More"
                : "Veja Mais"}
            </button>
            <div className="flex justify-around w-full">
              {Object.entries(props.buttons).map((entry, i) => {
                if (entry[0] === "demo video") {
                  return (
                    <motion.div
                      key={i}
                      onClick={() => handleVideo(entry[1])}
                      className="flex w-36 h-10 justify-center items-center text-white shadow-md transition duration-150 hover:shadow-indigo-950 hover:scale-105"
                      initial={{
                        backgroundColor: "rgba(128, 121, 231, 0.568)",
                      }}
                      animate={{
                        backgroundColor: [
                          "rgba(128, 121, 231, 0.568)",
                          "rgba(76, 65, 202, 0.568)",
                          "rgba(86, 80, 170, 0.568)",
                          "rgba(128, 121, 231, 0.568)",
                        ],
                        borderRadius: [
                          "15% 50% 20% / 75% 85% 95%",
                          "40% 15% 30% / 85% 65% 75%",
                          "45% 35% 50% / 65% 85% 85%",
                          "15% 50% 20% / 75% 85% 95%",
                        ],
                      }}
                      transition={{
                        ease: "easeInOut",
                        type: "keyframes",
                        duration: 5,
                        repeat: Infinity,
                      }}
                    >
                      {entry[0]}
                    </motion.div>
                  );
                } else {
                  return (
                    <Link key={i} href={new URL(`${entry[1]}`)}>
                      <motion.div
                        className="flex w-36 h-10 justify-center items-center text-white shadow-md transition duration-150 hover:shadow-indigo-950 hover:scale-105"
                        initial={{
                          backgroundColor: "rgba(128, 121, 231, 0.568)",
                        }}
                        animate={{
                          backgroundColor: [
                            "rgba(128, 121, 231, 0.568)",
                            "rgba(76, 65, 202, 0.568)",
                            "rgba(86, 80, 170, 0.568)",
                            "rgba(128, 121, 231, 0.568)",
                          ],
                          borderRadius: [
                            "15% 50% 20% / 75% 85% 95%",
                            "40% 15% 30% / 85% 65% 75%",
                            "45% 35% 50% / 65% 85% 85%",
                            "15% 50% 20% / 75% 85% 95%",
                          ],
                        }}
                        transition={{
                          ease: "easeInOut",
                          type: "keyframes",
                          duration: 7,
                          repeat: Infinity,
                        }}
                      >
                        {entry[0]}
                      </motion.div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center p-4 gap-7 pl-3 items-center text-indigo-200 w-full h-1/5 bg-[#8079E7] bg-opacity-90 rounded-bl-[35%] rounded-br-[50%]">
          <p>
            {lang === "en" ? "Technologies used" : "Tecnologias utilizadas"}:
          </p>
          <div className="flex gap-5 text-2xl">
            {props.technologies.map((tech, i) => (
              <div className="transition duration-150 hover:scale-125" key={i}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-[85%] h-fit flex flex-col sm:hidden rounded-lg mt-10 mb-10 min-h-[16rem] z-20"
        initial={{
          translateX: props.direction == "r" ? "5vw" : "-5vw",
          opacity: 0,
        }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <div className="flex flex-col items-center h-fit min-h-[9rem] w-full bg-gradient-to-b to-[#aeaefce8] from-[#e4e4ffe8] bg-opacity-60 rounded-tr-[32%] rounded-tl-[11%] mt-20">
          <div className="h-20 w-full flex flex-col items-center">
            {props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center justify-center -translate-y-14">
                <div className="absolute scale-[210%] -translate-x-[3rem]">
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
                <div className="absolute z-20 translate-x-[7.5rem] scale-[110%]">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            )}
            {props.imageDesktopSrc && !props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center justify-center -translate-y-14">
                <div className="absolute scale-[240%]">
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/laptopblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            )}
            {!props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center justify-center -translate-y-14">
                <div className="absolute z-20 scale-150">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            )}
            {!props.imageDesktopSrc && !props.imageSmartphoneSrc && (
              <div className="h-[100px] w-[100px] flex items-center justify-center bg-gray-500 border-[3px] border-black scale-[200%] -translate-y-14">
                <div className="z-20 scale-150 transition duration-150 flex flex-col items-center">
                  <SiNodedotjs className="text-xl" />
                  <p className="text-[0.5rem] text-center">BackEnd project</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center w-full pl-1 pr-1 pb-5 pt-5 gap-1">
            <h1 className="text-black w-full text-center text-2xl font-bold drop-shadow-lg shadow-black">
              {props.name}
            </h1>
            <p
              className={` text-justify w-full text-sm pr-3 mt-4 ${
                showMore ? "text-black" : "line-clamp-1 text-gray-600"
              } transition-all duration-100`}
            >
              {props.description}
            </p>
            <button
              onClick={handleClick}
              className="w-full text-gray-100 font-semibold text-right pr-5 text-sm -mt-1"
            >
              {showMore
                ? lang === "en"
                  ? "Show Less"
                  : "Veja Menos"
                : lang === "en"
                ? "Show More"
                : "Veja Mais"}
            </button>
            <div className="flex justify-around w-full pt-8 pb-2">
              {Object.entries(props.buttons).map((entry, i) => {
                if (entry[0] === "demo video") {
                  return (
                    <div
                      onClick={() => handleVideo(entry[1])}
                      className="flex w-fit h-fit p-1 text-sm justify-center items-center rounded-lg bg-[#8d87e280] text-white shadow-md wrap max-w-[20%] text-center"
                      key={i}
                    >
                      {entry[0]}
                    </div>
                  );
                } else {
                  return (
                    <Link
                      href={new URL(`${entry[1]}`)}
                      key={i}
                      className="max-w-[30%]"
                    >
                      <div className="flex w-fit h-fit p-1 text-sm justify-center items-center rounded-lg bg-[#8d87e280] text-white shadow-md text-center">
                        {entry[0]}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4 gap-7 pl-3 items-center text-white w-full h-1/5 bg-[#8d87dfda] bg-opacity-60 rounded-bl-[35%] rounded-br-[50%]">
          <p className="text-xs">
            {lang === "en" ? "Technologies" : "Tecnologias"}:
          </p>
          <div className="flex gap-2 text-base flex-wrap">
            {props.technologies.map((tech, i) => (
              <div className="transition duration-150 hover:scale-125" key={i}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

type project = {
  name: String;
  description: String;
  buttons: {
    "demo video"?: String;
    "front-end repo"?: String;
    "back-end repo"?: String;
  };
  technologies: any[];
  direction: String;
  imageDesktopSrc?: String;
  imageSmartphoneSrc?: String;
  setVideo?: Function;
};
