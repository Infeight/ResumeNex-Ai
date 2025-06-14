import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon.jsx";
import RemoveIcon from "../commonComponents/RemoveIcon.jsx";
import { useLinkedIn } from "./linkedincontext.jsx";
import { useUser } from "../commonComponents/usercontext.jsx";

const Step4OfLO = () => {
  // State for Technical Skills
  const {technicalSkills, setTechnicalSkills} = useLinkedIn();

  // State for Soft Skills
  const {softSkills, setSoftSkills} = useLinkedIn();

  // State for Achievements
  const {achievements, setAchievements} = useLinkedIn();

  // State for LinkedIn Goal (single selection)
  const {selectedGoal, setSelectedGoal} = useLinkedIn();
  const{darkMode} = useUser();

  // Handle Achievement input changes
  const handleAchievementChange = (index, field, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index][field] = value;
    setAchievements(updatedAchievements);
  };

  // Add new Achievement entry
  const addAchievement = () => {
    setAchievements([...achievements, { name: "", description: "", year: "" }]);
  };

  // Remove Achievement entry
  const removeAchievement = (index) => {
    if (achievements.length > 1) {
      const updatedAchievements = achievements.filter((_, i) => i !== index);
      setAchievements(updatedAchievements);
    }
  };

  // Handle LinkedIn Goal selection (single selection)
  const handleGoalChange = (goal) => {
    setSelectedGoal(goal);
  };

  return (
    <section className="flex flex-col gap-[36px]">
      {/* Skills Section */}
      <div className="flex flex-col gap-[20px]  py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
            Skills
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#FFF4CC]'} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>
        <div className="border-l-2 border-[#FDC700] pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
            {/* Technical Skills */}
            <div className="flex flex-col">
              <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                Technical Skills
              </label>
              <input
                type="text"
                value={technicalSkills}
                onChange={(e) => setTechnicalSkills(e.target.value)}
                className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                placeholder="e.g., JavaScript, React, MongoDB"
              />
            </div>

            {/* Soft Skills */}
            <div className="flex flex-col">
              <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                Soft Skills
              </label>
              <input
                type="text"
                value={softSkills}
                onChange={(e) => setSoftSkills(e.target.value)}
                className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                placeholder="e.g., Communication, Leadership"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="flex flex-col gap-[20px]  py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
            Achievements / Awards
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F8F0FF]'} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>
        <div className="border-l-2 border-[#DAB2FF] pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          {achievements.map((achievement, index) => (
            <div key={index} className="mb-[20px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                {/* Achievement Name */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Achievement Name
                  </label>
                  <input
                    type="text"
                    value={achievement.name}
                    onChange={(e) =>
                      handleAchievementChange(index, "name", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="e.g., Best Coder Award"
                  />
                </div>

                {/* Year */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Year
                  </label>
                  <input
                    type="text"
                    value={achievement.year}
                    onChange={(e) =>
                      handleAchievementChange(index, "year", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="e.g., 2023"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-2 text-[18px]`}>
                    Description
                  </label>
                  <textarea
                    rows={6}
                    value={achievement.description}
                    onChange={(e) =>
                      handleAchievementChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-xl px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="Describe the achievement or award"
                  />
                </div>
              </div>

              {/* Remove Button (only if more than one entry) */}
              {achievements.length > 1 && (
                <button
                  className={`mt-4 border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit  ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF]'} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8] absolute right-0 -top-10`}
                  onClick={() => removeAchievement(index)}
                >
                  Remove Achievement
                  <RemoveIcon color={"#AD46FF"} />
                </button>
              )}

              {/* Horizontal Line (except for the last entry) */}
              {index < achievements.length - 1 && (
                <hr className="my-10 border-t border-[#DCDCDC]" />
              )}
            </div>
          ))}
          <button
            className={`border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF]'} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8]`}
            onClick={addAchievement}
          >
            Add Another Achievement
            <AddIcon color={"#AD46FF"} />
          </button>
        </div>
      </div>

      {/* LinkedIn Goals Section */}
      <div className="flex flex-col gap-[20px]  py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
            LinkedIn Goals (Optional)
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#EBFACC]'} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>
        <div className="border-l-2 border-[#9AE600] pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          <div className="flex flex-wrap gap-[15px]">
            {[
              { key: "attractRecruiters", label: "Attract recruiters" },
              { key: "growNetwork", label: "Grow your network" },
              { key: "showcaseBrand", label: "Personal brand" },
            ].map((goal) => (
              <button
                key={goal.key}
                onClick={() => handleGoalChange(goal.key)}
                className={`border flex items-center gap-1 font-inter font-medium text-start text-[18px] px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedGoal === goal.key
                    ? `${darkMode?'bg-[#699C0133]':'bg-[#e5fabc]'} text-[#699C01]`
                    : "text-[#A59DAA] hover:bg-[#f5f5f5]"
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4OfLO;
