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
  SiContentful,
  SiVercel,
  SiTailwindcss,
  SiVuedotjs,
  SiGooglemaps,
  SiElixir,
  SiPhoenixframework,
  SiAmazons3
} from "react-icons/si";
import { useContext, useEffect, useRef, useState } from "react";
import LangContext from "@/context/langContext";
import { projectsTxtEng, projectsTxtPt } from "@/lang/langTexts";

export default function Projects() {
  const { lang } = useContext(LangContext);
  const [margin, setMargin] = useState(0);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;

  setMargin(sectionRef.current.offsetTop)};
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="w-full h-fit pb-6 z-20 flex flex-col items-center justify-center">
      <div>
      <PageTitle title={lang === "en" ? "Projects" : "Projetos"} />
      </div>
      <div className="relative w-full sm:h-[550vw]">
      <div id="section_ref" ref={sectionRef} className="sm:sticky sm:items-start sm:justify-start sm:block flex items-center justify-center sm:top-0 sm:h-screen h-fit w-[100%]">
      <div id="projects-section" className="sm:absolute top-0 w-fit sm:mx-[20vw] flex sm:flex-row flex-col sm:items-start sm:justify-start items-center justify-center gap-[20vw] sm:pt-28 pt-[5.5rem] z-20 shrink-0"  
      style={{ transform: `translateX(-${margin}px)` }}>
        <Project
          name="Trio Credit Card"
          description={
            lang === "en" ? projectsTxtEng.trio_card : projectsTxtPt.trio_card
          }
          buttons={{
            "website": lang === "en" ? "https://www.triohq.com/en/solutions/cartao-corporativo" : "https://www.triohq.com/pt-BR/solutions/cartao-corporativo",
          }}
          technologies={[
            <SiElixir />,
            <SiPhoenixframework />,
            <SiJavascript />,
            <SiPostgresql />,
            <SiAmazons3 />
          ]}
          direction="r"
          imageDesktopSrc={"/laptop_trio_card.png"}
        />
        <Project
          name="Trio Checkout"
          description={
            lang === "en" ? projectsTxtEng.trio_checkout : projectsTxtPt.trio_checkout
          }
          buttons={{
            "demo": lang === "en" ? "https://www.triohq.com/pt-BR/solutions/demo-checkout" : "https://www.triohq.com/en/solutions/demo-checkout",
          }}
          technologies={[
            <SiElixir />,
            <SiPhoenixframework />,
            <SiJavascript />,
            <SiPostgresql />
          ]}
          direction="r"
          imageDesktopSrc={"/laptop_trio_checkout.png"}
          imageSmartphoneSrc={"/smartphone_trio_checkout.png"}
        />
        <Project
          name="Trio HQ"
          description={
            lang === "en" ? projectsTxtEng.trio : projectsTxtPt.trio
          }
          buttons={{
            "website": lang === "en" ? "https://triohq.com/en" : "https://triohq.com/pt-BR/",
          }}
          technologies={[
            <SiJavascript />,
            <SiNextdotjs />,
            <SiTailwindcss />,
            <SiContentful />,
            <SiVercel />,
            <SiReact />
          ]}
          direction="r"
          imageDesktopSrc={"/laptop_trio.png"}
          imageSmartphoneSrc={"/smartphone_trio.png"}
        />
        <Project
          name="FindMe"
          description={
            lang === "en" ? projectsTxtEng.findme : projectsTxtPt.findme
          }
          buttons={{}}
          technologies={[
            <SiTypescript />,
            <SiJavascript />,
            <SiVuedotjs />,
            <SiNodedotjs />,
            <SiTailwindcss />,
            <SiPostgresql />,
            <SiGooglemaps />,
          ]}
          direction="r"
          imageDesktopSrc={"/laptop_findme.png"}
          imageSmartphoneSrc={"/smartphone_findme.png"}
        />
        <Project
          name="Drivent"
          description={
            lang === "en" ? projectsTxtEng.drivent : projectsTxtPt.drivent
          }
          buttons={{
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
          direction="r"
          imageDesktopSrc={"/laptop_drivent.png"}
        />
        <Project
          name="Prima Fiat"
          description={
            lang === "en" ? projectsTxtEng.primafiat : projectsTxtPt.primafiat
          }
          buttons={{
            "front-end repo": "https://github.com/lucaspaulii/prima-fiat-front",
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
          imageSmartphoneSrc={"/smartphone_prima.png"}
        />
        <Project
          name="Musichems"
          description={
            lang === "en" ? projectsTxtEng.musichems : projectsTxtPt.musichems
          }
          buttons={{
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
        />
      </div>
      </div>
      </div>
    </div>
  );
}
