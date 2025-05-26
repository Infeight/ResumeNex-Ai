import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon";
import { useCoverLetter } from "./coverlettercontext";

const Step2OfCL = () => {
  const {educationList, setEducationList} = useCoverLetter();

  const {company, setCompany} = useCoverLetter();
  const {jobRole, setJobRole} = useCoverLetter();
  const {startYear, setStartYear} = useCoverLetter();
  const {endYear, setEndYear} = useCoverLetter();
  const {showNoticePeriod, setShowNoticePeriod} = useCoverLetter();
  const {noticePeriod, setNoticePeriod} = useCoverLetter();

  const handleEducationChange = (index, field, value) => {
    const updated = [...educationList];
    updated[index][field] = value;
    setEducationList(updated);
  };

  const addMoreEducation = () => {
    setEducationList([
      ...educationList,
      { college: "", degree: "", stream: "", startYear: "", endYear: "" },
    ]);
  };

  const removeEducation = (index) => {
    if (educationList.length > 1) {
      const updated = educationList.filter((_, i) => i !== index);
      setEducationList(updated);
    }
  };

  return (
    <section className="flex flex-col gap-[36px]">
      <div className="flex flex-col gap-[20px] bg-white py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1">
            Education Details
          </h2>
          <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>

        <div className="border-l-2 border-[#74D4FF] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
          {educationList.map((edu, index) => (
            <div key={index} className="mb-[20px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[35px]">
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    College Name
                  </label>
                  <input
                    type="text"
                    value={edu.college}
                    onChange={(e) =>
                      handleEducationChange(index, "college", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                    placeholder="e.g. Delhi University"
                    style={{ touchAction: "manipulation" }}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                    placeholder="e.g. B.Tech"
                    style={{ touchAction: "manipulation" }}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Stream
                  </label>
                  <input
                    type="text"
                    value={edu.stream}
                    onChange={(e) =>
                      handleEducationChange(index, "stream", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                    placeholder="e.g. Computer Science"
                    style={{ touchAction: "manipulation" }}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-[13px]">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Start Year
                    </label>
                    <input
                      type="month"
                      value={edu.startYear}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "startYear",
                          e.target.value
                        )
                      }
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                      placeholder="Select a month"
                      style={{ touchAction: "manipulation" }}
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      End Year
                    </label>
                    <input
                      type="month"
                      value={edu.endYear}
                      onChange={(e) =>
                        handleEducationChange(index, "endYear", e.target.value)
                      }
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                      placeholder="Select a month"
                      style={{ touchAction: "manipulation" }}
                    />
                  </div>
                </div>
              </div>
              {educationList.length > 1 && (
                <button
                  onClick={() => removeEducation(index)}
                  className="absolute top-4 right-4 bg-[#FFE3E3] text-[#FF4D4D] font-inter font-medium text-[14px] px-3 py-1 rounded-full hover:bg-[#FFDADA] transition-all hover:scale-95 cursor-pointer"
                  style={{ touchAction: "manipulation" }}
                >
                  Delete
                </button>
              )}
              {index < educationList.length - 1 && (
                <hr className="my-8 sm:my-12 md:my-16 border border-[#74D4FF]" />
              )}
            </div>
          ))}
          <button
            onClick={addMoreEducation}
            className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[4px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd]"
            style={{ touchAction: "manipulation" }}
          >
            Add Another Education
            <AddIcon color={"#00A6F4"} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] bg-white py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1">
            Work Experience{" "}
            <span className="text-[16px] sm:text-[18px] text-[#A59DAA]">
              (Optional)
            </span>
          </h2>
          <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>
        <div className="border-l-2 border-[#9AE600] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[35px]">
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Previous Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="e.g. Infosys"
                style={{ touchAction: "manipulation" }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Job Role
              </label>
              <input
                type="text"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="e.g. Frontend Developer"
                style={{ touchAction: "manipulation" }}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-[13px]">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Start Year
                </label>
                <input
                  type="month"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                  placeholder="Select a month"
                  style={{ touchAction: "manipulation" }}
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  End Year
                </label>
                <input
                  type="month"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                  placeholder="Select a month"
                  style={{ touchAction: "manipulation" }}
                />
              </div>
            </div>
          </div>
          {showNoticePeriod && (
            <div className="flex flex-col mt-4">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Notice Period
              </label>
              <input
                type="text"
                value={noticePeriod}
                onChange={(e) => setNoticePeriod(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Enter notice period"
                style={{ touchAction: "manipulation" }}
              />
            </div>
          )}
          <button
            onClick={() => {
              if (showNoticePeriod) {
                setShowNoticePeriod(false);
                setNoticePeriod("");
              } else {
                setShowNoticePeriod(true);
              }
            }}
            className="border flex items-center gap-1 font-inter text-[#659701] font-medium text-[16px] px-[10px] py-[4px] w-fit bg-[#F8FFE8] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8f8d8] mt-4"
            style={{ touchAction: "manipulation" }}
          >
            {showNoticePeriod ? "Remove Notice Period" : "Add Notice Period"}
            <AddIcon color={"#659701"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Step2OfCL;
