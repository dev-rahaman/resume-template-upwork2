import React from "react";

const TimeLineComponent = ({ timelineData }) => {
  return (
    <div className="w-full">
      <div className=" ">
        <div className="w-full max-w-3xl mx-auto">
          <div className="">
            {timelineData.map((t, i) => {
              return (
                <div key={i} className="relative pl-32 py-3 group">
                  <div className="flex flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-3 before:h-full before:px-px before:bg-slate-300 before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-3 after:w-1.5 after:h-1.5 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-full after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 font-bold">
                    <p
                      className={`w-[120px] font-extrabold text-[#0c2773] hover:text-[#90A1C4] text-[12px] absolute left-0  translate-y-0.5 inline-flex items-center justify-center h-6 mb-0 rounded-full -ml-1`}
                    >
                      {t.date.content.from}-{t.date.content.to}
                    </p>
                    <p
                      className={`absolute left-0 translate-y-5 sm:translate-x-0 translate-x-2 inline-flex items-center justify-center w-20 sm:h-6 h-2 rounded-full text-[8px] sm:text-[8px] `}
                    >
                      {t.locationWorked.content}
                    </p>
                    <div>
                      <div
                        className={`text-[11px] sm:text-[15px] text-[#0c2773]`}
                      >
                        {t?.whichPosition.content}
                      </div>
                      <div
                        className={`text-[10px] sm:text-[13px] text-${t.companyName.color}-500 font-bold  `}
                        style={{
                          color: "#EF6A13",
                        }}
                      >
                        {t?.companyName.content}
                      </div>
                    </div>
                  </div>

                  {t.role.content && (
                    <div className={`text-[10px] sm:text-[13px] `}>
                      {t?.role.content}
                    </div>
                  )}
                  {/* list of duties */}
                  {t.duties.listOfContent.length > 0 && (
                    <ul className="list-disc ml-2.5">
                      {t.duties.listOfContent.map((l, i) => {
                        return (
                          <li className={`text-[10px] sm:text-[13px] `} key={i}>
                            {l}
                          </li>
                        );
                      })}
                      <div className="flex">
                        {t.duties?.listOfContentReferenceLink?.length > 0 && (
                          <li className="text-[8px]">Reference:</li>
                        )}
                        <div>
                          {t.duties?.listOfContentReferenceLink?.map((l, i) => {
                            return (
                              <p
                                className={``}
                                style={{
                                  fontSize: t.duties.fontSize,
                                }}
                                key={i}
                              >
                                {l}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </ul>
                  )}
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
