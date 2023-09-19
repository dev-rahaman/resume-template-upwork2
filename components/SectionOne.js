import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineComponent from "./TimeLineComponent";
import { AlternateEmail, LocalPhone, LocationOn } from "@mui/icons-material";
import { Icon } from "@mui/material";

const SectionOne = ({ data }) => {
  const iconComponents = {
    LocalPhone: LocalPhone,
    AlternateEmail: AlternateEmail,
    LocationOn: LocationOn,
  };

  return (
    <>
      {data && (
        <div
          id="contain-shadow"
          className="h-[1200px] lg:h-[1100px] my-5 sm:p-10 sm:mt-[20px] overflow-hidden  relative sm:w-[940px] w-[100%] container m-auto"
          style={{
            backgroundImage: "url(/bg.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            boxShadow: "4px 6px 26px 0px rgba(0,0,0,0.75) ",
          }}
        >
          <div className="w-full pl-[30px] pr-[30px] flex justify-center flex-col">
            {/* user name */}
            <h1
              className={`lg:text-[42px] text-[30px] font-bold mt-10 ${
                data.userName.isBold && "font-bold"
              }`}
              style={{
                color: data.userName.color,
              }}
            >
              {data.userName.name}
            </h1>

            {/* user position */}
            <h3
              className={`text-[22px] text-[${data.userPosition.fontSize}] ${
                data.userPosition.isBold && "font-bold"
              }`}
              style={{
                color: data.userPosition.color,
              }}
            >
              {data.userPosition.position}
            </h3>
            {/* user contact */}

            <div className="mt-5 lg:mt-2 lg:flex flex-row justify-between  sm:w-[500px] w-[270px]">
              {data.contactInfo.map((c, i) => {
                const IconComponent = iconComponents[c.icon];
                return (
                  <div
                    key={i}
                    className={`text-[#384347] text-[16px] font-bold flex items-center justify-center `}
                  >
                    {/* <IconsList /> */}
                    <IconComponent
                      fontSize={c.fontSize}
                      style={{
                        color: c.color,
                        fontWeight: 700,
                      }}
                    />
                    <p className={`text-[16px] sm:text-[12px] `}>{c.contact}</p>
                  </div>
                );
              })}
            </div>
            {/* user skills */}

            <div className=" w-[100%]">
              <h1
                className="text-[28px] mt-[20px] font-bold "
                style={{
                  color: "#0c2773",
                }}
              >
                SKILLS
              </h1>
              <div className="mt-[15px] flex flex-wrap sm:gap-3 gap-2">
                {data.userSkills.skills.map((s, i) => {
                  return (
                    <p
                      key={i}
                      className={`border-b-[2px] text-[#405264] border-gray-400 sm:text-[15px] text-[10px] font-bold`}
                    >
                      {s}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* user SUMMARY */}
            <div className="w-[90%] sm:mt-3 mt-0">
              <h1
                className="text-[20px] mt-[20px] font-bold "
                style={{
                  color: "#0c2773",
                }}
              >
                SUMMARY
              </h1>
              <div
                className={`sm:text-[14px] text-[8px]  `}
                dangerouslySetInnerHTML={{
                  __html: data.summarySection.content,
                }}
              ></div>
            </div>
            {/* user EXPERIENCE */}
            <div className="w-[90%]">
              <h1
                className="text-[20px] mt-[20px] font-bold "
                style={{
                  color: "#0c2773",
                }}
              >
                EXPERIENCE
              </h1>
            </div>
            {/* timeline */}
            <div className="w-[90%] ">
              <TimeLineComponent
                timelineData={data.experienceSection.experienceFirstPage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionOne;
