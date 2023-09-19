import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineComponent from "./TimeLineComponent";
import TimeLineEducationComponent from "./TimeLineEducationComponent";
import TimeLineAdditionalExperienceComponent from "./TimeLineAdditionalExperienceComponent";
import { CalendarMonth, LocationOn } from "@mui/icons-material";

const SectionFour = ({ data }) => {
  return (
    <div
      className="lg:h-[1000px] md:h-[1000px] h-[900px] sm:p-10 overflow-hidden mt-[20px]  relative sm:w-[940px] w-[100%] container m-auto"
      id="contain-shadow"
      style={{
        backgroundImage: "url(/bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        boxShadow: "4px 6px 26px 0px rgba(0,0,0,0.75) ",
      }}
    >
      <div className=" w-full ml-[30px] mr-[30px] absolute flex justify-center flex-col">
        {/* user  Continuation */}
        <div className="w-[90%] ">
          <h1 className="text-[28px] mt-[20px] font-bold text-[#0c2773] ">
            PROJECTS
          </h1>
        </div>
        {/* project section*/}
        <div className="w-[90%] ">
          {data.projectSection.projectSecondPage.map((p, i) => {
            return (
              <div className="mt-4" key={i}>
                <h2 className="text-[14px] sm:text-[20px] text-[#0c2773]">
                  {p.companyAndPositionName.content}
                </h2>
                <div className="flex w-[500px] ">
                  <div className="flex items-center">
                    <CalendarMonth
                      style={{
                        color: "gray",
                        fontWeight: "lighter",
                        fontSize: "16px",
                        margin: "5px 0",
                      }}
                    />
                    <p
                      className={`text-gray-500 ml-1 text-[12px] text-[${p.date.fontSize}] `}
                    >
                      {p.date.content.from}-{p.date.content.to}
                    </p>
                  </div>
                  <div className="flex ml-10 items-center">
                    <LocationOn
                      style={{
                        fontWeight: "lighter",
                        color: "gray",
                        fontSize: "16px",
                        margin: "5px 0",
                      }}
                    />
                    <p
                      className={`text-gray-500 ml-1  text-[12px] text-[${p.role.fontSize}] `}
                    >
                      {p.locationWorked.content}
                    </p>
                  </div>
                </div>
                <p className={`text-[10px] sm:text-[10px]`}>{p.role.content}</p>
                {p.duties.listOfContent?.length > 0 && (
                  <ul className="list-disc ml-2.5">
                    {p.duties.listOfContent.map((l, i) => {
                      return (
                        <li
                          className={`ml-2 text-[10px] sm:text-[11px]`}
                          key={i}
                        >
                          {l}
                        </li>
                      );
                    })}
                  </ul>
                )}{" "}
              </div>
            );
          })}
        </div>
        {/* education */}
        <div className="w-[90%] ">
          <h1 className="text-[20px] mt-[20px] font-bold text-[#0c2773] ">
            EDUCATION
          </h1>
          <TimeLineEducationComponent
            timelineData={data.educationSection.education}
          />
        </div>
        {/* certification */}

        <div className="w-[90%] mt-4">
          <h1
            className="text-[20px] font-bold "
            style={{
              color: "#0c2773",
            }}
          >
            CERTIFICATIONS
          </h1>
          <div className="grid grid-cols-2 gap-3">
            {data.certificationSection.certification.map((c, i) => {
              return (
                <div key={i}>
                  <p
                    className={`text-[${c.courseName.fontSize}] font-bold`}
                    style={{
                      color: c.courseName.color,
                      fontWeight: "bold",
                    }}
                  >
                    {c.courseName.content}
                  </p>
                  <p className={`text-[${c.courseName.fontSize}]`}>
                    {c.courseProvider.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ADDITIONAL EXPERIENCE */}
        <div className="w-[90%]">
          <h1
            className="text-[20px] mt-6 font-bold "
            style={{
              color: "#0c2773",
            }}
          >
            ADDITIONAL EXPERIENCE
          </h1>
          <TimeLineAdditionalExperienceComponent
            timelineData={
              data.additionalExperienceSection.additionalExperienceFirstPage
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
