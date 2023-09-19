import React from "react";

const TimeLineComponent = ({ timelineData }) => {
  return (
    <div className="w-full ">
      <div className=" ">
        <div className="w-full max-w-3xl mx-auto">
          <div className="">
            {timelineData.map((t, i) => {
              return (
                <div
                  key={i}
                  className="sm:ml-0 -ml-2 relative pl-32 py-3 group"
                >
                  <div className="flex flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-0 before:h-full before:px-px before:bg-slate-300 before:ml-[6.45rem] sm:before:ml-[6.5rem] before:self-start sm:before:-translate-x-1/2 before:-translate-x-[33px] before:translate-y-3 after:absolute after:left-0 after:w-1.5 after:h-1.5 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-full after:ml-[6.5rem] sm:after:-translate-x-1/2 after:-translate-x-[40px] after:translate-y-1.5 font-bold">
                    <p
                      className={`w-[120px] font-extrabold text-[#0c2773] hover:text-[#90A1C4] text-[12px] absolute left-0 sm:mt-1 translate-y-0.5 inline-flex items-center justify-center h-6 mb-0 rounded-full -ml-1`}
                    >
                      {t.date.content.from}-{t.date.content.to}
                    </p>

                    <div>
                      <div
                        className={`text-[#0c2773] text-[8px] sm:text-[15px] font-bold -translate-x-[33px] sm:translate-x-[0px]  translate-y-[8px]  sm:translate-y-[5px]  `}
                      >
                        {t?.degree.content}
                      </div>
                      <div
                        className={`text-[6px] sm:text-[13px] text-${t.collegeName.color}-500 font-bold  -translate-x-[33px]  sm:translate-x-[0px]  translate-y-[8px] sm:translate-y-[8px] `}
                        style={{
                          color: "#EF6A13",
                        }}
                      >
                        {t?.collegeName.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="relative pl-8 sm:pl-32 py-3 group"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineComponent;
