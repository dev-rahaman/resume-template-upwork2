import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineComponent from "./TimeLineComponent";

const SectionTwo = ({ data }) => {
  return (
    <div
      id="contain-shadow"
      className="sm:h-[1000px] h-[100vh] sm:p-10 overflow-hidden mt-[20px]  relative  sm:w-[940px] w-[100%] container m-auto"
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
            timelineData={data.experienceSection.experienceSecondPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
