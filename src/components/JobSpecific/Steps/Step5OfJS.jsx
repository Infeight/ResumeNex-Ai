import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";
import { useJobSpecific } from "../jobspecificcontext";

const Step5OfJS = () => {
  // Hobbies section (dynamic)
  const {hobbies, setHobbies} = useJobSpecific();
  // Achievements section (dynamic)
  const {achievements1, setAchievements1} = useJobSpecific();
  // Mode of Resume
  const {resumeMode, setResumeMode} = useJobSpecific();

  // Handlers for hobbies
  const handleHobbyChange = (idx, value) => {
    const updated = hobbies.map((h, i) => (i === idx ? { hobby: value } : h));
    setHobbies(updated);
  };
  const addMoreHobby = () => {
    setHobbies([...hobbies, { hobby: "" }]);
  };

  // Handlers for achievements
  const handleAchievementChange = (idx, value) => {
    const updated = achievements.map((a, i) =>
      i === idx ? { achievement: value } : a
    );
    setAchievements(updated);
  };
  const addMoreAchievement = () => {
    setAchievements1([...achievements1, { achievement: "" }]);
  };

  // Handler for resume mode
  const handleResumeMode = (mode) => setResumeMode(mode);

  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* Hobbies */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Hobbies
            </h2>
            <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
            {hobbies.map((h, idx) => (
              <div key={idx} className="flex flex-col mb-4">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Hobbies Name
                </label>
                <input
                  type="text"
                  value={h.hobby}
                  onChange={(e) => handleHobbyChange(idx, e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                  placeholder="e.g. Reading, Painting"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FEFCE8] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#fdfada] "
            onClick={addMoreHobby}
          >
            Add More Hobby
            <AddIcon color={"#D08700"} />
          </button>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Achievements
            </h2>
            <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
            {achievements1.map((a, idx) => (
              <div key={idx} className="flex flex-col mb-4">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Achievements Name
                </label>
                <input
                  type="text"
                  value={a.achievement}
                  onChange={(e) => handleAchievementChange(idx, e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                  placeholder="e.g. Hackathon Winner"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8] "
            onClick={addMoreAchievement}
          >
            Add More Achievement
            <AddIcon color={"#AD46FF"} />
          </button>
        </div>

        {/* Mode of Resume */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Mode of Resume
            </h2>
            <div className="bg-[#CCEDFD] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#00A6F4] p-[30px] mx-[20px]">
            <div className="flex gap-[15px]">
              <button
                type="button"
                className={`border flex items-center gap-1 font-inter ${
                  resumeMode === "Formal"
                    ? "text-[#00A6F4] bg-[#CCEDFD]"
                    : "text-[#A59DAA]"
                } font-medium text-[20px] px-[10px] py-[2px] w-fit rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5]`}
                onClick={() => handleResumeMode("Formal")}
              >
                Formal
              </button>
              <button
                type="button"
                className={`border flex items-center gap-1 font-inter ${
                  resumeMode === "Professional"
                    ? "text-[#00A6F4] bg-[#CCEDFD]"
                    : "text-[#A59DAA]"
                } font-medium text-[20px] px-[10px] py-[2px] w-fit rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#CCEDFD]`}
                onClick={() => handleResumeMode("Professional")}
              >
                Professional
              </button>
              <button
                type="button"
                className={`border flex items-center gap-1 font-inter ${
                  resumeMode === "Enthusiastic"
                    ? "text-[#00A6F4] bg-[#CCEDFD]"
                    : "text-[#A59DAA]"
                } font-medium text-[20px] px-[10px] py-[2px] w-fit rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5]`}
                onClick={() => handleResumeMode("Enthusiastic")}
              >
                Enthusiastic
              </button>
              <button
                type="button"
                className={`border flex items-center gap-1 font-inter ${
                  resumeMode === "Interested"
                    ? "text-[#00A6F4] bg-[#CCEDFD]"
                    : "text-[#A59DAA]"
                } font-medium text-[20px] px-[10px] py-[2px] w-fit rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5]`}
                onClick={() => handleResumeMode("Interested")}
              >
                Interested
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step5OfJS;
