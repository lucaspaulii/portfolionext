"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
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

  function handleLoad() {
    //
  }

  return (
      <motion.div
        className="sm:w-[50vw] w-[90vw] h-fit flex flex-col rounded-lg min-h-[16rem] z-20 shrink-0"
        initial={{
          opacity: 0.3,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <div className="md:p-5 p-0 flex flex-col items-center h-fit min-h-[9rem] w-full bg-gradient-to-b to-[#aeaefce8] from-[#e4e4ffe8] bg-opacity-60 rounded-tr-[32%] rounded-tl-[11%] mt-20">
          <motion.div
            className="h-72 w-full sm:flex hidden items-center justify-center transition-all duration-500 gap-4"
            whileInView={{ scale: 1.4, translateY:  "-70px"}}
            initial={{ scale: 1, translateY: 0 }}
            exit={{ scale: 1, translateY: 0 }}
            transition={{ duration: 0.2 }} 
          >
              {props.imageDesktopSrc && (
                <div className="w-96 h-auto">
                    <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={1966}
                    height={1233}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
                )}
              {props.imageSmartphoneSrc && (
                <div className="w-32 h-auto">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={575}
                    height={575}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
              )}
          </motion.div>
          <motion.div
            className="h-72 w-full flex sm:hidden items-center justify-center transition-all duration-500 gap-4"
            whileInView={{ scale: 1, translateY:  "-30px"}}
            initial={{ scale: 1, translateY: 0 }}
            exit={{ scale: 1, translateY: 0 }}
            transition={{ duration: 0.2 }} 
          >
              {props.imageDesktopSrc && (
                <div className="w-96 h-auto">
                    <Image
                    src={props.imageDesktopSrc as string}
                    alt="laptop"
                    width={1966}
                    height={1233}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
                )}
              {props.imageSmartphoneSrc && (
                <div className="w-32 h-auto">
                  <Image
                    src={props.imageSmartphoneSrc as string}
                    alt="smartphone"
                    width={575}
                    height={575}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/smartphoneblur.png"
                    priority={true}
                    onLoad={handleLoad}
                  />
                </div>
              )}
          </motion.div>
          <div className="flex flex-col justify-center items-center w-full pl-1 pr-1 sm:pb-5 sm:pt-5 pt-2 pb-2 gap-1">
            <h1 className="text-[#06062cc0] w-full text-center sm:text-4xl text-2xl font-bold drop-shadow-lg shadow-black">
              {props.name}
            </h1>
            <p
              className={`text-justify w-full sm:text-base text-sm p-4 sm:mt-4 mt-2 text-[#06062cc0] transition-all duration-100`}
            >
              {props.description}
            </p>
            <div className="flex gap-10 w-fit pt-8 pb-2">
              {Object.entries(props.buttons).map((entry, i) => {
                  return (
                    <Link
                      href={new URL(`${entry[1]}`)}
                      target="_blank"
                      key={i}
                      className="w-fit h-fit"
                    >
                      <div className="flex w-fit h-fit sm:p-4 p-3 sm:text-base text-xs justify-center items-center rounded-lg bg-[#8d87dfda] text-white shadow-md text-center">
                        {entry[0]}
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4 gap-7 pl-3 items-center text-white w-full h-1/5 bg-[#8d87dfda] bg-opacity-60 rounded-bl-[35%] rounded-br-[50%]">
          <p className="sm:text-sm text-xs">
            {lang === "en" ? "Technologies" : "Tecnologias"}:
          </p>
          <div className="flex gap-2 sm:text-xl text-base flex-wrap">
            {props.technologies.map((tech, i) => (
              <div className="transition duration-150 hover:scale-125" key={i}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
  );
}

type project = {
  name: String;
  description: String;
  buttons: {
    "demo video"?: String;
    "website"?: String;
    "demo"?: String;
    "front-end repo"?: String;
    "back-end repo"?: String;
  };
  technologies: any[];
  direction: String;
  imageDesktopSrc?: String;
  imageSmartphoneSrc?: String;
  setVideo?: Function;
};
