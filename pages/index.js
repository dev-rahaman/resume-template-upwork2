import React, { useEffect, useState } from "react";
import { data } from "../data";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";

const index = () => {
  const [resumeData, setResumeData] = useState();
  useEffect(() => {
    setResumeData(data);
  }, []);

  return (
    resumeData && (
      <>
        {/* download section */}

        <div
          className="flex justify-around items-center w-full h-[4vh] resume-navigation"
          style={{
            boxShadow: "1px 2px 6px 0px rgba(0,0,0,0.75) ",
          }}
        >
          <div className="hidden lg:block">{resumeData.userName.name}</div>
          <div className="flex justify-between ">
            <a href="/KiritiKomaragiriResume.pdf" download>
              Export to PDF
            </a>
            <a className="ml-20" href="KiritiKomaragiriResume.json" download>
              Export to JSON
            </a>
          </div>
        </div>

        <div className="m-auto h-[100vh] w-[100vw] container ">
          <SectionOne data={resumeData} />
          <div className="resume-navigation">
            <h1 className="text-center mt-4">-- Page 1 --</h1>
          </div>
          <SectionTwo data={resumeData} />
          <div className="resume-navigation">
            <h1 className="text-center mt-4">-- Page 2 --</h1>
          </div>
          <SectionThree data={resumeData} />
          <div className="resume-navigation">
            <h1 className="text-center mt-4">-- Page 3 --</h1>
          </div>
          <SectionFour data={resumeData} />
          <div className="resume-navigation">
            <h1 className="text-center mt-4">-- Page 4 --</h1>
          </div>
          <SectionFive data={resumeData} />
          <div className="resume-navigation">
            <h1 className="text-center mt-4">-- Page 5 --</h1>
          </div>
        </div>
      </>
    )
  );
};

export default index;
