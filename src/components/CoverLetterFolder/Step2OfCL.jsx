import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon";

const Step2OfCL = () => {
  const [educationList, setEducationList] = useState([
    {
      college: "",
      degree: "",
      stream: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [showNoticePeriod, setShowNoticePeriod] = useState(false);
  const [noticePeriod, setNoticePeriod] = useState("");

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

  const removeNoticePeriod = () => {
    setShowNoticePeriod(false);
    setNoticePeriod("");
  };

  return (
    <section className="flex flex-col gap-[36px]">
      <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
            Education Details
          </h2>
          <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>

        {educationList.map((edu, index) => (
          <div
            key={index}
            className="border-l-2 border-[#74D4FF] p-[30px] mx-[20px] relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
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
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                  placeholder="e.g. Delhi University"
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
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                  placeholder="e.g. B.Tech"
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
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                  placeholder="e.g. Computer Science"
                />
              </div>
              <div className="flex gap-[13px] ">
                <div className="w-1/2 ">
                  <label className="block text-[#170F49] font-inter font-medium text-[18px] mb-1">
                    Start Year
                  </label>
                  <input
                    type="month"
                    value={edu.startYear}
                    onChange={(e) =>
                      handleEducationChange(index, "startYear", e.target.value)
                    }
                    className="w-full bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="Select a date"
                  />
                </div>
                <div className="w-1/2 ">
                  <label className="block text-[#170F49] font-inter font-medium text-[18px] mb-1">
                    End Year
                  </label>
                  <input
                    type="month"
                    value={edu.endYear}
                    onChange={(e) =>
                      handleEducationChange(index, "endYear", e.target.value)
                    }
                    className="w-full bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="Select a date"
                  />
                </div>
              </div>
            </div>
            {educationList.length > 1 && (
              <button
                onClick={() => removeEducation(index)}
                className="absolute top-4 right-4 bg-[#FFE3E3] text-[#FF4D4D] font-inter font-medium text-[14px] px-3 py-1 rounded-full hover:bg-[#FFDADA] transition-all"
              >
                Delete
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addMoreEducation}
          className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd]"
        >
          Add More Education
          <AddIcon color={"#00A6F4"} />
        </button>
      </div>

      <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
            Work Experience{" "}
            <span className="text-[18px] text-[#A59DAA]">(Optional)</span>
          </h2>
          <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>
        <div className="border-l-2 border-[#9AE600] p-[30px] mx-[20px] relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Previous Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                placeholder="e.g. Infosys"
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
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                placeholder="e.g. Frontend Developer"
              />
            </div>
            <div className="flex gap-[13px]">
              <div className="w-1/2">
                <label className="text-[#170F49] font-inter font-medium text-[18px]">
                  Start Year
                </label>
                <input
                  type="month"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                  placeholder="Select a date"
                />
              </div>
              <div className="w-1/2">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  End Year
                </label>
                <input
                  type="month"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                  placeholder="Select a date"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Add Notice Period Button */}
        <button
          className="border flex items-center gap-1 font-inter text-[#659701] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F8FFE8] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8f8d8]"
          onClick={() => {
            if (showNoticePeriod) {
              setShowNoticePeriod(false);
              setNoticePeriod("");
            } else {
              setShowNoticePeriod(true);
            }
          }}
        >
          {showNoticePeriod ? "Remove Notice Period" : "Add Notice Period"}
          <AddIcon color={"#659701"} />
        </button>

        {/* Notice Period Input */}
        {showNoticePeriod && (
          <div className="mt-4 flex flex-col">
            <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
              Notice Period
            </label>
            <input
              type="text"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
              placeholder="Enter notice period"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Step2OfCL;
