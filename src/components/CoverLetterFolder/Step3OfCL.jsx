import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon";
import { useCoverLetter } from "./coverlettercontext";

const Step3OfCL = () => {
  const {jobRole, setJobRole} = useCoverLetter();
  const {companyName, setCompanyName} = useCoverLetter();
  const {companyAddress, setCompanyAddress} = useCoverLetter();
  const {whyThisCompany, setWhyThisCompany} = useCoverLetter();
  const {skills, setSkills} = useCoverLetter();
  const {achievements, setAchievements} = useCoverLetter();
  const {certifications, setCertifications} = useCoverLetter();

  const {hrInputVisible, setHrInputVisible} = useCoverLetter();
  const {hrName, setHrName} = useCoverLetter();

  // Example suggested skills based on job role
  const suggestedSkills = ["SQL", "Flask", "Python"];

  const handleAddHR = () => {
    setHrInputVisible(!hrInputVisible);
    if (hrInputVisible) setHrName(""); // Clear HR name when hiding input
  };

  const handleSuggestedSkillClick = (skill) => {
    const currentSkills = skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (currentSkills.includes(skill) || currentSkills.length >= 3) return;

    const updatedSkills = [...currentSkills, skill].join(", ");
    setSkills(updatedSkills);
  };

  return (
    <section className="flex flex-col gap-[36px]">
      {/* Job Details */}
      <div className="flex flex-col gap-[20px] bg-white py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1">
            Job Details Applying For
          </h2>
          <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>
        <div className="border-l-2 border-[#FDC700] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[35px]">
            {/* Job Role */}
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Job Role
              </label>
              <input
                type="text"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Job Role"
                style={{ touchAction: "manipulation" }}
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Company Name"
                style={{ touchAction: "manipulation" }}
              />
            </div>

            {/* Company Address + Why This Company (Full Width) */}
            <div className="flex flex-col gap-[25px] sm:gap-[30px] md:gap-[35px] col-span-1 md:col-span-2">
              {/* Company Address */}
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Company Address
                </label>
                <input
                  type="text"
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                  placeholder="Company Address"
                  style={{ touchAction: "manipulation" }}
                />
              </div>

              {/* Why This Company */}
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-2 text-[18px]">
                  Why this Company?{" "}
                  <span className="text-[#A59DAA] text-[14px] sm:text-[16px]">
                    (Short paragraph input)
                  </span>
                </label>
                <textarea
                  value={whyThisCompany}
                  onChange={(e) => setWhyThisCompany(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-xl px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA] text-[14px] sm:text-base w-full min-h-[100px]"
                  placeholder="Why do you want to join this company?"
                  style={{ touchAction: "manipulation" }}
                />
              </div>
            </div>
          </div>
          {hrInputVisible && (
            <div className="flex flex-col mt-4">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                HR Name
              </label>
              <input
                type="text"
                value={hrName}
                onChange={(e) => setHrName(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Enter HR Name"
                style={{ touchAction: "manipulation" }}
              />
            </div>
          )}
          <button
            onClick={handleAddHR}
            className="border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[4px] w-fit bg-[#FEFCE8] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#fdfada] mt-4"
            style={{ touchAction: "manipulation" }}
            aria-label={hrInputVisible ? "Cancel HR name input" : "Add HR name"}
          >
            {hrInputVisible ? "Cancel" : "Add HR Name"}
            <AddIcon color={"#D08700"} />
          </button>
        </div>
      </div>

      {/* Skills & Achievements */}
      <div className="flex flex-col gap-[20px] bg-white py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1">
            Skills & Achievements
          </h2>
          <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>

        <div className="border-l-2 border-[#DAB2FF] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
          <div className="grid grid-cols-1 gap-[25px] sm:gap-[30px] md:gap-[35px]">
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Skills{" "}
                <span className="ml-1 text-[#A59DAA] text-[14px] sm:text-[16px]">
                  (Max 3 skills)
                </span>
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Skill 1, Skill 2, Skill 3"
                style={{ touchAction: "manipulation" }}
              />
            </div>

            {/* Suggested Skills */}
            {jobRole.trim() && (
              <div className="text-[#170F49] font-inter font-medium flex flex-wrap items-center w-fit gap-[15px] p-[15px] border border-dashed border-[#DCDCDC] rounded-xl">
                Skill Based On Job Role:
                {suggestedSkills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedSkillClick(skill)}
                    className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[4px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8]"
                    style={{ touchAction: "manipulation" }}
                    aria-label={`Add ${skill} to skills`}
                  >
                    {skill}
                    <AddIcon color={"#AD46FF"} />
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Notable Achievements{" "}
                <span className="ml-1 text-[#A59DAA] text-[14px] sm:text-[16px]">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Achievements"
                style={{ touchAction: "manipulation" }}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Certifications{" "}
                <span className="ml-1 text-[#A59DAA] text-[14px] sm:text-[16px]">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                value={certifications}
                onChange={(e) => setCertifications(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
                placeholder="Certifications"
                style={{ touchAction: "manipulation" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step3OfCL;
