import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineComponent from "./TimeLineComponent";
import TimeLineEducationComponent from "./TimeLineEducationComponent";
import TimeLineAdditionalExperienceComponent from "./TimeLineAdditionalExperienceComponent";
import { GitHub, LinkedIn } from "@mui/icons-material";

const SectionFive = ({ data }) => {
  const iconComponents = {
    LinkedIn: LinkedIn,
    GitHub: GitHub,
  };
  return (
    <div
      id="contain-shadow"
      className="sm:h-[1000px] h-[100vh] sm:p-10 overflow-hidden mt-[20px]  relative sm:w-[940px] w-full container m-auto"
      style={{
        backgroundImage: "url(/bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        boxShadow: "4px 6px 26px 0px rgba(0,0,0,0.75) ",
      }}
    >
      <div className="w-full pl-[30px] pr-[30px] flex justify-center flex-col">
        {/* ADDITIONAL EXPERIENCE */}

        <div className="w-full">
          <h1 className="text-[28px] mt-6 font-bold text-[#002878] ">
            ADDITIONAL EXPERIENCE
          </h1>
          <TimeLineAdditionalExperienceComponent
            timelineData={
              data.additionalExperienceSection.additionalExperienceSecondPage
            }
          />
        </div>

        {/*FIND ME ONLINE  */}
        <div className="w-[90%] mt-4">
          <h1 className="text-[28px] text-[#0c2773] mt-6 font-bold ">
            FIND ME ONLINE
          </h1>
          <div className="flex sm:flex-row flex-col justify-between sm:w-[60%] w-[100%]">
            {data.findMeOnlineSection.findMeOnline.map((f, i) => {
              const IconComponent = iconComponents[f.icon];
              return (
                <div key={i} className="mt-4">
                  <div className="flex">
                    <div className="items-start flex">
                      <IconComponent
                        style={{
                          fontSize: "25px",
                          marginRight: "5px",
                          color: f.iconColor,
                        }}
                      />
                    </div>
                    <div>
                      <p className={`text-[#0c2773] text-[11px] font-bold `}>
                        {f.websiteName}
                      </p>
                      <p className="text-[10px]">{f.websiteLink}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
