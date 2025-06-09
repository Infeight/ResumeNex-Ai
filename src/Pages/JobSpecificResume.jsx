import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useJobSpecific } from '../components/JobSpecific/jobspecificcontext';
import { useUser } from "../components/commonComponents/usercontext";

const JobSpecificResume = () => {
  const {jobRole, setJobRole} = useJobSpecific();
  const {companyName, setCompanyName} = useJobSpecific();
  const {jobDescription, setJobDescription} = useJobSpecific();
  const {darkMode} = useUser();

  const isFormComplete = jobRole && companyName && jobDescription;

  return (
    <section className={`relative w-full mx-auto flex flex-col justify-center items-center gap-[50px] py-[50px] ${darkMode?'text-[white]':'text-[#1E1B39]'} ${darkMode?'bg-[#23272F]':'bg-white'}`}>
      <p className="font-lexend font-semibold text-[30px] flex gap-3">
        AI
        <span
          className="text-[#774B35] flex items-center gap-1"
          style={{ textShadow: "0px 0px 100px #774B35" }}
        >
          Job
        </span>
        specific Resume !
      </p>

      <div className="relative">
        <div className={`relative z-1 flex flex-col gap-[35px] w-[981px] mx-auto p-[50px] ${darkMode?'bg-[#1A1D23]':'bg-white'} rounded-[34px] border ${darkMode?'border-[#1A1D23]':'border-[#DCDCDC]'} [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]`}>
          {/* Job Role */}
          <div className="flex flex-col gap-[15px]">
            <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
              Job role applying for :
            </label>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              className={`${darkMode?'bg-[#23272F]':'bg-white'} border-[2px] rounded-full px-8 py-5 focus:outline-none focus:ring-3 focus:ring-[#774B35] placeholder-[#A59DAA] text-[18px] font-medium ${
                jobRole ? "border-[#774B35]" :  `${darkMode?'border-[#23272F]':'border-[#DCDCDC]'}`
              }`}
              placeholder="Enter Job Role here"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-[15px]">
            <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
              Company name:
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={`${darkMode?'bg-[#23272F]':'bg-white'} border-[2px] rounded-full px-8 py-5 focus:outline-none focus:ring-3 focus:ring-[#774B35] placeholder-[#A59DAA] text-[18px] font-medium ${
                companyName ? "border-[#774B35]" :  `${darkMode?'border-[#23272F]':'border-[#DCDCDC]'}`
              }`}
              placeholder="eg: Amazon, Facebook ..."
            />
          </div>

          {/* Job Description */}
          <div className="flex flex-col gap-[15px]">
            <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
              Job description:
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className={`${darkMode?'bg-[#23272F]':'bg-white'} border-[2px] rounded-3xl px-8 py-5 focus:outline-none focus:ring-3 focus:ring-[#774B35] placeholder-[#A59DAA] text-[18px] font-medium resize-none ${
                jobDescription ? "border-[#774B35]" : `${darkMode?'border-[#23272F]':'border-[#DCDCDC]'}`
              }`}
              placeholder="(Copy paste the job description from Linkedin, Naukri etx)"
              rows={6}
            />
          </div>
        </div>

        {/* SVG */}
        <img
          src="/Icons/AIJobSvg.svg"
          alt="svg"
          className="border-[#dcdcdc] w-[222px] absolute left-[-150px] top-[50px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0 z-0"
        />

        {/* Button */}
        <div className="w-full flex justify-end mt-[35px]">
          {isFormComplete ? (
            <Link to="/job_specific_resume/templates">
              <button className="group relative flex items-center justify-center px-10 py-4 text-[18px] font-bold font-lexend rounded-full transition-all duration-300 overflow-hidden bg-[#774B35] hover:text-[#212529] text-[#ffffff] hover:bg-white border-[3px] border-white hover:border-[#774B35] cursor-pointer">
                Optimize
              </button>
            </Link>
          ) : (
            <button
              className="group relative flex items-center justify-center px-10 py-4 text-[18px] font-bold font-lexend rounded-full transition-all duration-300 overflow-hidden bg-gray-300 text-gray-500 cursor-not-allowed"
              disabled
            >
              Optimize
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobSpecificResume;
