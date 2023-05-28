"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiNodedotjs } from "react-icons/si";
import { useContext } from "react";
import LangContext from "@/context/langContext";

export default function Project(props: project) {
  const { lang } = useContext(LangContext);
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

  return (
    <>
      <motion.div
        className="w-8/12 h-fit sm:flex sm:flex-col hidden rounded-lg mt-10 mb-10 min-h-[16rem] shadow-lg"
        initial={{
          translateX: props.direction == "r" ? "66vw" : "-74vw",
          opacity: 0,
        }}
        whileInView={{ translateX: "4rem", opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.1 }}
      >
        <div className="flex h-fit min-h-[9rem] w-full bg-white bg-opacity-70 rounded-t-lg">
          <div className="h-100 w-1/5 flex items-center">
            {props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center">
                <div className="absolute -translate-x-10 scale-[230%] transition duration-150 hover:z-30 hover:scale-[400%]">
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className="absolute z-20 translate-x-20 transition duration-150 hover:scale-[300%]">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            )}
            {props.imageDesktopSrc && !props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center">
                <div className="absolute -translate-x-10 scale-[230%] transition duration-150 hover:z-30 hover:scale-[400%]">
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            )}
            {!props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center">
                <div className="absolute z-20 scale-150 transition duration-150 hover:scale-[300%]">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            )}
            {!props.imageDesktopSrc && !props.imageSmartphoneSrc && (
              <div className="h-5/6 w-5/6 flex items-center -translate-x-20 justify-center bg-gray-500 border-[6px] border-black hover:scale-110">
                <div className="z-20 scale-150 transition duration-150 flex flex-col items-center">
                  <SiNodedotjs className="text-5xl " />
                  <p>BackEnd project</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center w-4/5 p-3 gap-3">
            <h1 className="text-black w-full text-center text-3xl font-bold drop-shadow-lg shadow-black">
              {props.name}
            </h1>
            <p className="text-black text-center w-full text-base pr-3">
              {props.description}
            </p>
            <div className="flex justify-around w-full">
              {Object.entries(props.buttons).map((entry) => {
                if (entry[0] === "demo video") {
                  return (
                    <div
                      onClick={() => handleVideo(entry[1])}
                      className="flex w-36 h-10 justify-center items-center rounded-lg bg-white text-black shadow-md transition duration-150 hover:shadow-indigo-950 hover:scale-105"
                    >
                      {entry[0]}
                    </div>
                  );
                } else {
                  return (
                    <Link href={new URL(`${entry[1]}`)}>
                      <div className="flex w-36 h-10 justify-center items-center rounded-lg bg-white text-black shadow-md transition duration-150 hover:shadow-indigo-950 hover:scale-105">
                        {entry[0]}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4 gap-7 pl-3 items-center text-white w-full h-1/5 bg-indigo-100 bg-opacity-20 rounded-b-lg">
          <p>Technologies used:</p>
          <div className="flex gap-5 text-2xl">
            {props.technologies.map((tech) => (
              <div className="transition duration-150 hover:scale-125">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-[90%] h-fit flex flex-col sm:hidden rounded-lg mt-10 mb-10 min-h-[16rem] shadow-lg"
        initial={{
          translateX: props.direction == "r" ? "66vw" : "-74vw",
          opacity: 0,
        }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.1 }}
      >
        <div className="flex flex-col items-center h-fit min-h-[9rem] w-full bg-white bg-opacity-70 rounded-t-lg mt-20">
          <div className="h-20 w-full flex flex-col items-center">
            {props.imageDesktopSrc && props.imageSmartphoneSrc && (
              <div className="h-full w-full flex items-center justify-center -translate-y-14">
                <div className="absolute scale-[230%] -translate-x-[3rem]">
                  <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={130}
                    height={130}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className="absolute z-20 translate-x-[8rem] scale-[120%]">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={140}
                    height={140}
                    quality={100}
                    unoptimized
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
                    unoptimized
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
                    unoptimized
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
            <p className="text-black text-center w-full text-sm pr-3">
              {props.description}
            </p>
            <div className="flex justify-around w-full pt-8 pb-2">
              {Object.entries(props.buttons).map((entry) => {
                if (entry[0] === "demo video") {
                  return (
                    <div
                      onClick={() => handleVideo(entry[1])}
                      className="flex w-fit h-fit p-1 text-sm justify-center items-center rounded-lg bg-white text-black shadow-md"
                    >
                      {entry[0]}
                    </div>
                  );
                } else {
                  return (
                    <Link href={new URL(`${entry[1]}`)}>
                      <div className="flex w-fit h-fit p-1 text-sm justify-center items-center rounded-lg bg-white text-black shadow-md">
                        {entry[0]}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4 gap-7 pl-3 items-center text-white w-full h-1/5 bg-indigo-100 bg-opacity-20 rounded-b-lg">
          <p className="text-xs">Technologies:</p>
          <div className="flex gap-2 text-base flex-wrap">
            {props.technologies.map((tech) => (
              <div className="transition duration-150 hover:scale-125">
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
