import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";
import { useJobSpecific } from "../jobspecificcontext";
import { useUser } from "../../commonComponents/usercontext";

const Step3OfJS = () => {
  // PROJECTS SECTION (dynamic)
  const {projects, setProjects} = useJobSpecific();
  const{darkMode} = useUser();
  // SKILLS & ACHIEVEMENTS SECTION
  const {skills, setSkills} = useJobSpecific();
  const {achievements, setAchievements} = useJobSpecific();

  // Handler for project field changes
  const handleProjectChange = (idx, field, value) => {
    const updated = projects.map((proj, i) =>
      i === idx ? { ...proj, [field]: value } : proj
    );
    setProjects(updated);
  };

  // Add new project entry
  const addMoreProject = () => {
    setProjects([
      ...projects,
      {
        projectName: "",
        startYear: "",
        endYear: "",
        techUsed: "",
        aboutProject: "",
      },
    ]);
  };

  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* Projects */}
        <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'} p-6 rounded-lg w-full `}>
          <div className="relative w-fit">
            <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
              Projects
            </h2>
            <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#FFF4CC]'} h-2/4 w-3/4 absolute -bottom-0 -left-2 `}></div>
          </div>
          {/* Project entries */}
          <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-[35px] mb-6"
              >
                {/* Project Name */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={proj.projectName}
                    onChange={(e) =>
                      handleProjectChange(idx, "projectName", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. Portfolio Website"
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
                      value={proj.startYear}
                      onChange={(e) =>
                        handleProjectChange(idx, "startYear", e.target.value)
                      }
                      className={`w-full mt-1 ${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                      placeholder="e.g. 2022"
                    />
                  </div>
                  <div>
                    <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                      End Year
                    </label>
                    <input
                      type="text"
                      value={proj.endYear}
                      onChange={(e) =>
                        handleProjectChange(idx, "endYear", e.target.value)
                      }
                      className={`w-full mt-1 ${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                      placeholder="e.g. 2023"
                    />
                  </div>
                </div>
                {/* Tech Used */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Tech Used
                  </label>
                  <input
                    type="text"
                    value={proj.techUsed}
                    onChange={(e) =>
                      handleProjectChange(idx, "techUsed", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="e.g. React, Node.js"
                  />
                </div>
                {/* About Project */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    About Project
                  </label>
                  <input
                    type="text"
                    value={proj.aboutProject}
                    onChange={(e) =>
                      handleProjectChange(idx, "aboutProject", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                    placeholder="Describe your project"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#D0870033]':'bg-[#FEFCE8]'} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#fdfada] "
            onClick={addMoreProject}
          >
            Add More Project
            <AddIcon color={"#D08700"} />
          </button>
        </div>

        {/* Skills & Achievements: */}
        <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'} p-6 rounded-lg w-full `}>
          <div className="relative w-fit">
            <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
              Skills & Achievements:
            </h2>
            <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F8F0FF]'} h-2/4 w-3/4 absolute -bottom-0 -left-2 `}></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-[35px]">
              {/* Skills */}
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Skills
                  <span className="ml-1 text-[#A59DAA] text-[14px]">
                    (Max 3 skills)
                  </span>
                </label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="e.g. React, SQL, Flask"
                />
              </div>
              {/* Achievements */}
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Achievements
                  <span className="ml-1 text-[#A59DAA] text-[14px]">
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={achievements}
                  onChange={(e) => setAchievements(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="e.g. Hackathon Winner, Published Paper"
                />
              </div>
              {/* Skill suggestions */}
              <div className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium flex items-center w-fit gap-[15px] p-[15px] border border-dashed border-[#DCDCDC] rounded-full`}>
                Skill Based On Job Role:
                <button className={`border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF]'}   rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
                  SQL
                  <AddIcon color={"#AD46FF"} />
                </button>
                <button className={`border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF]'} rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
                  Flask
                  <AddIcon color={"#AD46FF"} />
                </button>
                <button className={`border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF]'} rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
                  React
                  <AddIcon color={"#AD46FF"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step3OfJS;
