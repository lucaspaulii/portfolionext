"use client";
import PageTitle from "@/components/pageTitle";
import Project from "@/components/project";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiPostgresql,
  SiRedis,
  SiJest,
  SiGithubactions,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import CurrentPage from "@/components/currentPage";
import NextIcon from "@/components/nextIcon";
import PrevIcon from "@/components/prevIcon";
import PageContext from "@/context/pageContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LangContext from "@/context/langContext";
import { projectsTxtEng, projectsTxtPt } from "@/lang/langTexts";
import VideoModal from "@/components/videoModal";

export default function Projects() {
  const { setPageData, pageData } = useContext(PageContext);
  const { lang } = useContext(LangContext);
  const [video, setVideo] = useState(false);
  const prevPage = pageData;

  useEffect(() => {
    setPageData("projects");
  }, []);

  return (
    <main className="h-screen w-screen bg-gradient-to-tr from-blue-900 via-gray-900 to-purple-900 text-white flex flex-col items-center overflow-hidden">
      <Image src="/bg3.jpg" alt="bg" fill placeholder="blur" priority={true} blurDataURL="/bgblur.png"/>
      <div className="w-full h-screen overflow-y-scroll overflow-x-hidden sm:scrollbar-track-neutral-600 sm:scrollbar-thumb-gray-950 z-30 scrollbar-none pb-6">
        <motion.div
          className="w-screen h-fit flex flex-col items-center gap-8 sm:pt-28 pt-[5.5rem] sm:pb-44 pb-5 mb-16 box-border"
          initial={{ translateX: prevPage == "about" ? "70vw" : "-70vw" }}
          animate={{ translateX: "0" }}
          transition={{ delay: 0, duration: 0.2 }}
        >
          <PageTitle title={lang === "en" ? "Projects" : "Projetos"} />
          <h1 className="sm:w-3/6 w-5/6 text-center -mt-20 sm:mt-0 sm:mb-0 mb-6">
            {lang === "en" ? projectsTxtEng.main : projectsTxtPt.main}
          </h1>
          <Project
            name="Musichems"
            description={
              lang === "en" ? projectsTxtEng.musichems : projectsTxtPt.musichems
            }
            buttons={{
              "demo video": lang === "en" ? "vqvXGUABWpI" : "tDw20q_sSZ4",
              "front-end repo":
                "https://www.github.com/lucaspaulii/musichem-front",
              "back-end repo": "https://github.com/lucaspaulii/musichem-back",
            }}
            technologies={[
              <SiTypescript />,
              <SiJavascript />,
              <SiNextdotjs />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiPrisma />,
              <SiMongodb />,
              <SiDocker />,
              <SiAmazonaws />,
              <SiGithubactions />,
            ]}
            direction="r"
            imageDesktopSrc={"/laptop_musichems.png"}
            imageSmartphoneSrc={"/smartphone_musichems.png"}
            setVideo={setVideo}
          />
          <Project
            name="Drivent"
            description={
              lang === "en" ? projectsTxtEng.drivent : projectsTxtPt.drivent
            }
            buttons={{
              "demo video": lang === "en" ? "aCFD1ue7kRo" : "rHFszFrL6L8",
              "front-end repo": "https://github.com/drivent-proj/drivent-front",
              "back-end repo": "https://github.com/drivent-proj/drivent-back",
            }}
            technologies={[
              <SiTypescript />,
              <SiJavascript />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiPrisma />,
              <SiPostgresql />,
              <SiRedis />,
              <SiJest />,
            ]}
            direction="l"
            imageDesktopSrc={"/laptop_drivent.png"}
            setVideo={setVideo}
          />
          <Project
            name="WallEt"
            description={
              lang === "en" ? projectsTxtEng.wallet : projectsTxtPt.wallet
            }
            buttons={{
              "demo video": lang === "en" ? "3sJqfX1HNm0" : "e-Kky-7xEww",
              "front-end repo": "https://github.com/lucaspaulii/wall.et_front",
              "back-end repo": "https://github.com/lucaspaulii/wall.et_back",
            }}
            technologies={[
              <SiJavascript />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiMongodb />,
            ]}
            direction="r"
            imageDesktopSrc={"/laptop_wallet.png"}
            imageSmartphoneSrc={"/smartphone_wallet.png"}
            setVideo={setVideo}
          />
          <Project
            name="Linkr"
            description={
              lang === "en" ? projectsTxtEng.linkr : projectsTxtPt.linkr
            }
            buttons={{
              "demo video": lang === "en" ? "ON86VCPCNQ0" : "zmik5uDY1Vg",
              "front-end repo":
                "https://github.com/devgalindo/projeto18-linkr-front",
              "back-end repo":
                "https://github.com/devgalindo/projeto18-linkr-back",
            }}
            technologies={[
              <SiJavascript />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiPostgresql />,
            ]}
            direction="l"
            imageDesktopSrc={"/laptop_linkr.png"}
            setVideo={setVideo}
          />
          <Project
            name="Prima Fiat"
            description={
              lang === "en" ? projectsTxtEng.primafiat : projectsTxtPt.primafiat
            }
            buttons={{
              "demo video": lang === "en" ? "Dbl6KQPmkBU" : "7yvhvJX4IXQ",
              "front-end repo":
                "https://github.com/lucaspaulii/prima-fiat-front",
              "back-end repo":
                "https://github.com/lucaspaulii/prima-fiat-backend",
            }}
            technologies={[
              <SiTypescript />,
              <SiJavascript />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiPostgresql />,
              <SiPrisma />,
            ]}
            direction="r"
            imageDesktopSrc={"/laptop_prima_hq.png"}
            setVideo={setVideo}
          />
          <Project
            name="Shortly"
            description={
              lang === "en" ? projectsTxtEng.shortly : projectsTxtPt.shortly
            }
            buttons={{
              "back-end repo": "https://github.com/lucaspaulii/shortly",
            }}
            technologies={[
              <SiJavascript />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiPostgresql />,
            ]}
            direction="l"
          />
          <Project
            name="LaCopa Store"
            description={
              lang === "en" ? projectsTxtEng.lacopa : projectsTxtPt.lacopa
            }
            buttons={{
              "demo video": lang === "en" ? "HQPKzaQXw9w" : "69fDkC1n6UA",
              "front-end repo": "https://github.com/lucaspaulii/lacopa-front",
              "back-end repo": "https://github.com/lucaspaulii/lacopa-back",
            }}
            technologies={[
              <SiJavascript />,
              <SiNodedotjs />,
              <SiReact />,
              <SiStyledcomponents />,
              <SiExpress />,
              <SiMongodb />,
            ]}
            direction="r"
            imageSmartphoneSrc={"/smartphone_lacopa.png"}
            setVideo={setVideo}
          />
          <Project
            name="Cineflex"
            description={
              lang === "en" ? projectsTxtEng.cineflex : projectsTxtPt.cineflex
            }
            buttons={{
              "demo video": lang === "en" ? "5kwv9E1DZUg" : "euGMmi5WFGM",
              "front-end repo": "https://github.com/lucaspaulii/cineflex",
            }}
            technologies={[
              <SiJavascript />,
              <SiReact />,
              <SiStyledcomponents />,
            ]}
            direction="l"
            imageDesktopSrc={"/laptop_cineflex.png"}
            imageSmartphoneSrc={"/smartphone_cineflex.png"}
            setVideo={setVideo}
          />
          <Project
            name="Parrots Card Game"
            description={
              lang === "en" ? projectsTxtEng.parrots : projectsTxtPt.parrots
            }
            buttons={{
              "demo video": lang === "en" ? "pxgXRf_xgPE" : "_ideXYrOcFM",
              "front-end repo":
                "https://github.com/lucaspaulii/ParrotsCardGame",
            }}
            technologies={[<SiHtml5 />, <SiCss3 />, <SiJavascript />]}
            direction="r"
            imageDesktopSrc={"/laptop_parrots.png"}
            imageSmartphoneSrc={"/smartphone_parrots.png"}
            setVideo={setVideo}
          />
        </motion.div>
        <NextIcon nextPage="skills" />
        <PrevIcon prevPage="about" />
        <CurrentPage currentPage="projects" />
      </div>
      {video && <VideoModal video={video} setVideo={setVideo} />}
    </main>
  );
}
