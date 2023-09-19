import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineComponent from "./TimeLineComponent";
import { CalendarMonth, LocationOn } from "@mui/icons-material";

const SectionThree = ({ data }) => {
  return (
    <div
      id="contain-shadow"
      className="lg:h-[1100px] md:h-[1100px] h-[950px]  sm:p-10 overflow-hidden mt-[20px]  relative sm:w-[940px] w-[100%] container m-auto"
      style={{
        backgroundImage: "url(/bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        boxShadow: "4px 6px 26px 0px rgba(0,0,0,0.75) ",
      }}
    >
      <div className="w-full pl-[30px] pr-[30px] flex justify-center flex-col">
        {/* user  Continuation */}
        <div className="w-[90%] ">
          <h1 className="text-[28px] text-[#0c2773] mt-[20px] font-bold ">
            PROJECTS
          </h1>
        </div>
        {/* timeline */}
        <div className="w-[90%] ">
          {data.projectSection.projectFirstPage.map((p, i) => {
            return (
              <div className="mt-2" key={i}>
                <h2 className="text-[14px] sm:text-[25px] text-[#0c2773] ">
                  {p.companyAndPositionName.content}
                </h2>
                <div className="flex w-[500px] ">
                  {/* <IconComponent
                    // fontSize={p.fontSize}
                    style={{
                      // color: p?.color,
                      fontWeight: 700,
                    }}
                  /> */}

                  <div className="flex items-center">
                    <CalendarMonth
                      style={{
                        fontWeight: "lighter",
                        color: "gray",
                        fontSize: "16px",
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
                        color: "gray",
                        fontWeight: "lighter",
                        fontSize: "16px",
                      }}
                    />
                    <p
                      className={`text-gray-500 ml-1 text-[12px] text-[${p.role.fontSize}] `}
                    >
                      {p.locationWorked.content}
                    </p>
                  </div>
                </div>
                <p className={` text-[${p.role.fontSize}]`}>{p.role.content}</p>
                {p.duties.listOfContent?.length > 0 && (
                  <ul className="list-disc ml-2.5">
                    {p.duties.listOfContent.map((l, i) => {
                      return (
                        <li
                          className={`text-[8px] ml-2 sm:text-[11px] `}
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
      </div>
    </div>
  );
};

export default SectionThree;
