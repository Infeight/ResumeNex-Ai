import React, { useState } from "react";
import { useCoverLetter } from "./coverlettercontext";
import { useUser } from "../commonComponents/usercontext";

const Step4OfCL = () => {
  const {date, setDate} = useCoverLetter();
  const{darkMode} = useUser();
  const {coverLetterMode, setCoverLetterMode} = useCoverLetter();
  const modes = ["Formal", "Professional", "Enthusiastic", "Interested"];

  return (
    <section className="flex flex-col gap-[36px]">
      <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'} py-5 px-2 lg:p-6 rounded-lg w-full`}>
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1`}>
            Interview Availability
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#E3F6FF] '} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>

        <div className="border-l-2 border-[#74D4FF] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[35px]">
            <div className="flex flex-col">
              <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                Availability for Interview:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`${darkMode?'bg-[#363B45]':'bg-white'}  border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                placeholder="Select a date"
                style={{ touchAction: "manipulation" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'} py-5 px-2 lg:p-6 rounded-lg w-full`}>
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1`}>
            Mode of Cover Letter
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#EBFACC]'} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>

        <div className="border-l-2 border-[#9AE600] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
          <div className="flex flex-wrap gap-[10px] sm:gap-[15px]">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => setCoverLetterMode(mode)}
                className={`border flex items-center gap-1 font-inter font-medium text-[14px] sm:text-[16px] px-[10px] py-[4px] rounded-full transition-all cursor-pointer ${
                  coverLetterMode === mode
                    ? `${darkMode?'bg-[#699C0133]':'bg-[#e5fabc]'} text-[#699C01]`
                    : "text-[#A59DAA] hover:bg-[#f5f5f5]"  
                }`}
                style={{ touchAction: "manipulation" }}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4OfCL;
