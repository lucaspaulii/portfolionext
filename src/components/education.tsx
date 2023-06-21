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

export default function Education() {
  const { lang } = useContext(LangContext);
  return (
    <div className="flex flex-col items-center w-full">
      <Subtitle subtitle={lang === "en" ? "Education" : "Educação"} />
      <div className="flex mt-24 mb-24 sm:w-4/5 w-full">
        <motion.div className="w-[100%]">
          <p className="w-full text-center">
            {lang === "en" ? "Present" : "Presente"}
          </p>
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
                  ? skillsTxtEng.education.driven.period
                  : skillsTxtPt.education.driven.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang === "en"
                    ? skillsTxtEng.education.driven.title
                    : skillsTxtPt.education.driven.title
                }
                company={
                  lang === "en"
                    ? skillsTxtEng.education.driven.company
                    : skillsTxtPt.education.driven.company
                }
                description={
                  lang === "en"
                    ? skillsTxtEng.education.driven.description
                    : skillsTxtPt.education.driven.description
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
                  ? skillsTxtEng.education.cs50.period
                  : skillsTxtPt.education.cs50.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang === "en"
                    ? skillsTxtEng.education.cs50.title
                    : skillsTxtPt.education.cs50.title
                }
                company={
                  lang === "en"
                    ? skillsTxtEng.education.cs50.company
                    : skillsTxtPt.education.cs50.company
                }
                description={
                  lang === "en"
                    ? skillsTxtEng.education.cs50.description
                    : skillsTxtPt.education.cs50.description
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
                  ? skillsTxtEng.education.ufsc.period
                  : skillsTxtPt.education.ufsc.period
              }
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              contentStyle={{ background: "#06062ce8" }}
            >
              <Job
                title={
                  lang === "en"
                    ? skillsTxtEng.education.ufsc.title
                    : skillsTxtPt.education.ufsc.title
                }
                company={
                  lang === "en"
                    ? skillsTxtEng.education.ufsc.company
                    : skillsTxtPt.education.ufsc.company
                }
                description={
                  lang === "en"
                    ? skillsTxtEng.education.ufsc.description
                    : skillsTxtPt.education.ufsc.description
                }
              />
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
}
