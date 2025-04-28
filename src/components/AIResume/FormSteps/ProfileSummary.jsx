import { useState } from "react";

const ProfileSummary = () => {
  const generaticon = "/AIResumeAssets/generateicon.png";

  // Initialize local state for profile summary
  const [summary, setSummary] = useState("");

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
        <h2 className="text-[25px] leading-[40px] tracking-[0px] text-[#212529] font-manrope font-bold mb-4">
          Profile Summary
        </h2>
        <div className="w-28 h-5 bg-[#ECFCCA] -mt-8"></div>
      </div>

      <div className="flex flex-col w-[527px] ml-3 border-l-[2px] border-[#9AE600] pb-[20px] pl-[30px] font-inter">
        <div className="relative w-full mt-6 ">
          <textarea
            placeholder="Enter Profile Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)} // Update summary on change
            className="border rounded-[10px] w-full h-44 px-[20px] py-[10px] pr-[100px] resize-none focus:outline-none focus:ring-1 focus:ring-[#9AE600]"
          />
          <button
            onClick={generateSummary} // Generate summary when clicked
            className="flex items-center text-white px-[10px] py-[7px] gap-[9px] absolute bottom-[16px] right-[10px] rounded-[35px] shadow-[0px_4px_5px_0px_#4C95FB40] text-sm font-inter"
            style={{
              background: "linear-gradient(90deg, #4C95FB 0%, #336EE7 100%)",
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
