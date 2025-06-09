import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";
import { useJobSpecific } from "../jobspecificcontext";
import { useUser } from "../../commonComponents/usercontext";

const Step2OfJS = () => {
  // EDUCATION SECTION
  const {educations, setEducations} = useJobSpecific();
  const {darkMode} = useUser();

  // WORK EXPERIENCE SECTION
  const {companyName, setCompanyName} = useJobSpecific();
  const {jobRole, setJobRole} = useJobSpecific();
  const {workStartYear, setWorkStartYear} = useJobSpecific();
  const {workEndYear, setWorkEndYear} = useJobSpecific();

  // Handler for education field changes
  const handleEducationChange = (idx, field, value) => {
    const updated = educations.map((edu, i) =>
      i === idx ? { ...edu, [field]: value } : edu
    );
    setEducations(updated);
  };

  // Add new education entry
  const addMoreEducation = () => {
    setEducations([
      ...educations,
      { collegeName: "", degree: "", stream: "", startYear: "", endYear: "" },
    ]);
  };

  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* education details */}
        <div className={`flex flex-col gap-[20px]  ${darkMode?'bg-[#1A1D23]':'bg-white'} p-6 rounded-lg w-full `}>
          <div className="relative  w-fit">
            <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
              Education Details
            </h2>
            <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#E3F6FF]'} h-2/4 w-3/4 absolute -bottom-0 -left-2 `}></div>
          </div>
          {/* Education entries */}
          <div className="border-l-2 border-[#74D4FF] p-[30px] mx-[20px]">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-[35px] mb-6"
              >
                {/* College Name */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    College Name
                  </label>
                  <input
                    type="text"
                    value={edu.collegeName}
                    onChange={(e) =>
                      handleEducationChange(idx, "collegeName", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. Stanford University"
                  />
                </div>
                {/* Degree */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(idx, "degree", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. B.Tech"
                  />
                </div>
                {/* Stream */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Stream
                  </label>
                  <input
                    type="text"
                    value={edu.stream}
                    onChange={(e) =>
                      handleEducationChange(idx, "stream", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. Computer Science"
                  />
                </div>
                {/* Start/End Year */}
                <div className="flex gap-[13px]">
                  <div>
                    <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium text-[18px]`}>
                      Start Year
                    </label>
                    <input
                      type="text"
                      value={edu.startYear}
                      onChange={(e) =>
                        handleEducationChange(idx, "startYear", e.target.value)
                      }
                      className={`w-full mt-1 ${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                      placeholder="e.g. 2019"
                    />
                  </div>
                  <div>
                    <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                      End Year
                    </label>
                    <input
                      type="text"
                      value={edu.endYear}
                      onChange={(e) =>
                        handleEducationChange(idx, "endYear", e.target.value)
                      }
                      className={`w-full mt-1 ${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                      placeholder="e.g. 2023"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className={`border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#00A6F433]':'bg-[#F0F9FF]'} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd] `}
            onClick={addMoreEducation}
          >
            Add More Education
            <AddIcon color={"#00A6F4"} />
          </button>
        </div>
        {/* work exp */}
        <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'}  p-6 rounded-lg w-full `}>
          <div className="relative  w-fit">
            <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
              Work Experience{" "}
              <span className="text-[18px] text-[#A59DAA]"> (Optional)</span>
            </h2>
            <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#EBFACC]'} h-2/4 w-3/4 absolute -bottom-0 -left-2 `}></div>
          </div>
          <div className="border-l-2 border-[#9AE600] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
              {/* Previous Company Name */}
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Previous Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="e.g. Google"
                />
              </div>
              {/* Job Role */}
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Job Role
                </label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="e.g. Software Engineer"
                />
              </div>
              {/* Start/End Year */}
              <div className="flex gap-[13px]">
                <div>
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium text-[18px]`}>
                    Start Year
                  </label>
                  <input
                    type="text"
                    value={workStartYear}
                    onChange={(e) => setWorkStartYear(e.target.value)}
                    className={`w-full mt-1 ${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. 2022"
                  />
                </div>
                <div>
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    End Year
                  </label>
                  <input
                    type="text"
                    value={workEndYear}
                    onChange={(e) => setWorkEndYear(e.target.value)}
                    className={`w-full mt-1 ${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. 2024"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="border flex items-center gap-1 font-inter text-[#699C01] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#699C0133]':'bg-[#EBFACC]'}  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e5fabc] ">
            Add Notice Period
            <AddIcon color={"#699C01"} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Step2OfJS;
