import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon";

const Step3OfCL = () => {
  const [jobRole, setJobRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [whyThisCompany, setWhyThisCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [achievements, setAchievements] = useState("");
  const [certifications, setCertifications] = useState("");

  const [hrInputVisible, setHrInputVisible] = useState(false);
  const [hrName, setHrName] = useState("");

  // Example suggested skills based on job role
  const suggestedSkills = ["SQL", "Flask", "Python"];

  const handleAddHR = () => {
    setHrInputVisible(!hrInputVisible);
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
    <>
      <section className="flex flex-col gap-[36px]">
        {/* Job Details */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Job Details Applying For
            </h2>
            <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
              {/* Job Role */}
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Job Role
                </label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                  placeholder="Job Role"
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
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                  placeholder="Company Name"
                />
              </div>

              {/* Company Address + Why This Company (Full Width) */}
              <div className="flex flex-col gap-[35px] col-span-1 md:col-span-2">
                {/* Company Address */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Company Address
                  </label>
                  <input
                    type="text"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                    placeholder="Company Address"
                  />
                </div>

                {/* Why This Company */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-2 text-[18px]">
                    Why this Company?{" "}
                    <span className="text-[#A59DAA] text-[14px]">
                      (Short paragraph input)
                    </span>
                  </label>
                  <textarea
                    value={whyThisCompany}
                    onChange={(e) => setWhyThisCompany(e.target.value)}
                    className="bg-white border border-[#DCDCDC] rounded-xl px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                    placeholder="Why do you want to join this company?"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className="border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FEFCE8] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#fdfada]"
            onClick={handleAddHR}
          >
            {hrInputVisible ? "Cancel" : "Add HR Name"}
            <AddIcon color={"#D08700"} />
          </button>

          {hrInputVisible && (
            <div className="mt-4 flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                HR Name
              </label>
              <input
                type="text"
                value={hrName}
                onChange={(e) => setHrName(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                placeholder="Enter HR Name"
              />
            </div>
          )}
        </div>

        {/* Skills & Achievements */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Skills & Achievements:
            </h2>
            <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>

          <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-[35px]">
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Skills{" "}
                  <span className="ml-1 text-[#A59DAA] text-[14px]">
                    (Max 3 skills)
                  </span>
                </label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                  placeholder="Skill 1, Skill 2, Skill 3"
                />
              </div>

              {/* Show suggested skills only if job role is entered */}
              {jobRole.trim() && (
                <div className="text-[#170F49] font-inter font-medium flex flex-wrap items-center w-fit gap-[15px] p-[15px] border border-dashed border-[#DCDCDC] rounded-xl">
                  Skill Based On Job Role:
                  {suggestedSkills.map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedSkillClick(skill)}
                      className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8]"
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
                  <span className="ml-1 text-[#A59DAA] text-[14px]">
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={achievements}
                  onChange={(e) => setAchievements(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                  placeholder="Achievements"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Certifications{" "}
                  <span className="ml-1 text-[#A59DAA] text-[14px]">
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={certifications}
                  onChange={(e) => setCertifications(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                  placeholder="Certifications"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step3OfCL;
