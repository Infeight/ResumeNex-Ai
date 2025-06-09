import { useState } from "react";
import { useResume } from "./resumecontext";
import { useUser } from "../../commonComponents/usercontext";


const ProfileSummary = () => {
  const generaticon = "/AIResumeAssets/generateicon.png";

  // Initialize local state for profile summary
  // const [summary, setSummary] = useState("");
  const {summary,setSummary} = useResume();
     const {darkMode} =useUser();
  

  const generateSummary = async () => {
    try {
      setSummary("AI-generated profile summary: Experienced developer with...");
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className={`text-[25px] leading-[40px] tracking-[0px] ${darkMode?'text-[white]':'text-[#212529]'} font-manrope font-bold mb-4`}>
          Profile Summary
        </h2>
        <div className={`w-28 h-5 ${darkMode?'bg-[#9AE60033]':'bg-[#ECFCCA]'} -mt-8`}></div>
      </div>

      <div className={`flex flex-col w-full max-w-[527px] pb-[20px] font-inter 
                ml-0 pl-0 border-l-0 
                lg:ml-3 lg:pl-[30px] lg:border-l-[2px] lg:border-[#9AE600]
                `}>

        <div className="relative w-full mt-6">
          <textarea
            placeholder="Enter Profile Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-44 ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] pr-[100px] resize-none focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
          />
          <button
            className="flex items-center text-white px-[12px] py-[8px] gap-[8px] absolute bottom-3 right-3 rounded-[35px] shadow-[0px_4px_10px_0px_#4C95FB4D] text-sm font-inter font-semibold hover:scale-105 hover:shadow-[0px_6px_12px_0px_#4C95FB66] transition-transform duration-200"
            style={{
              background: "linear-gradient(90deg, #5A9BFF 0%, #3B82F6 100%)",
            }}
          >
            <img src={generaticon} className="h-4 w-4" alt="generate" />
            Generate with AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
