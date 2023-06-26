import { useContext } from "react";
import Job from "./job";
import Subtitle from "./subtitle";
import { motion } from "framer-motion";
import LangContext from "@/context/langContext";
import { skillsTxtEng, skillsTxtPt } from "@/lang/langTexts";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experiences() {
  const { lang } = useContext(LangContext);

  return (
    <div className="flex flex-col items-center w-full">
      <Subtitle subtitle={lang === "en" ? "Experiences" : "Experiências"} />
      <div className="flex mt-24 mb-24 sm:w-4/5 w-full">
        <motion.div className="w-[100%]">
          <p className="w-full text-center">{
                lang === "en"
                  ? "Present"
                  : "Presente"
              }</p>
          <VerticalTimeline
            lineColor="rgb(129, 140, 248)"
            className="vertical-timeline-element--work"
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{
                scale: "30%",
                background: "white",
                outline: "5px solid white",
              }}
              date={
                lang === "en"
                  ? skillsTxtEng.experiences.driven.period
                  : skillsTxtPt.experiences.driven.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang === "en"
                    ? skillsTxtEng.experiences.driven.title
                    : skillsTxtPt.experiences.driven.title
                }
                company={
                  lang === "en"
                    ? skillsTxtEng.experiences.driven.company
                    : skillsTxtPt.experiences.driven.company
                }
                description={
                  lang === "en"
                    ? skillsTxtEng.experiences.driven.description
                    : skillsTxtPt.experiences.driven.description
                }
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{
                scale: "30%",
                background: "white",
                outline: "5px solid white",
              }}
              date={
                lang === "en"
                  ? skillsTxtEng.experiences.lajetrel.period
                  : skillsTxtPt.experiences.lajetrel.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang === "en"
                    ? skillsTxtEng.experiences.lajetrel.title
                    : skillsTxtPt.experiences.lajetrel.title
                }
                company={
                  lang === "en"
                    ? skillsTxtEng.experiences.lajetrel.company
                    : skillsTxtPt.experiences.lajetrel.company
                }
                description={
                  lang === "en"
                    ? skillsTxtEng.experiences.lajetrel.description
                    : skillsTxtPt.experiences.lajetrel.description
                }
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{
                scale: "30%",
                background: "white",
                outline: "5px solid white",
              }}
              date={
                lang === "en"
                  ? skillsTxtEng.experiences.crestani.period
                  : skillsTxtPt.experiences.crestani.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang == "en"
                    ? skillsTxtEng.experiences.crestani.title
                    : skillsTxtPt.experiences.crestani.title
                }
                company={
                  lang == "en"
                    ? skillsTxtEng.experiences.crestani.company
                    : skillsTxtPt.experiences.crestani.company
                }
                description={
                  lang == "en"
                    ? skillsTxtEng.experiences.crestani.description
                    : skillsTxtPt.experiences.crestani.description
                }
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{
                scale: "30%",
                background: "white",
                outline: "5px solid white",
              }}
              date={
                lang === "en"
                  ? skillsTxtEng.experiences.concreta.period
                  : skillsTxtPt.experiences.concreta.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang === "en"
                    ? skillsTxtEng.experiences.concreta.title
                    : skillsTxtPt.experiences.concreta.title
                }
                company={
                  lang === "en"
                    ? skillsTxtEng.experiences.concreta.company
                    : skillsTxtPt.experiences.concreta.company
                }
                description={
                  lang === "en"
                    ? skillsTxtEng.experiences.concreta.description
                    : skillsTxtPt.experiences.concreta.description
                }
              />
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
}
