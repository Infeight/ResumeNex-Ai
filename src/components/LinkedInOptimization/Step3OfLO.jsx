import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon.jsx";
import RemoveIcon from "../commonComponents/RemoveIcon.jsx";
import { useLinkedIn } from "./linkedincontext.jsx";
import { useUser } from "../commonComponents/usercontext.jsx";

const Step3OfLO = () => {
  // State for Work Experience
  const {workExperiences, setWorkExperiences} = useLinkedIn();

  // State for Projects
  const {projects, setProjects} = useLinkedIn();

  // Handle Work Experience input changes
  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  // Handle Project input changes
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  // Add new Work Experience entry
  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { title: "", company: "", duration: "", description: "", tools: "" },
    ]);
  };
  const{darkMode} = useUser();

  // Add new Project entry
  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", description: "", tools: "", link: "" },
    ]);
  };

  // Remove Work Experience entry
  const removeWorkExperience = (index) => {
    if (workExperiences.length > 1) {
      const updatedExperiences = workExperiences.filter((_, i) => i !== index);
      setWorkExperiences(updatedExperiences);
    }
  };

  // Remove Project entry
  const removeProject = (index) => {
    if (projects.length > 1) {
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
    }
  };

  return (
    <section className="flex flex-col gap-[36px] ">
      {/* Work Experience Section */}
      <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'} py-5 px-2  lg:p-6 rounded-lg w-full`}>
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
            Work Experience
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#FFF4CC]'} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>
        <div className="border-l-2 border-[#FDC700] pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          {workExperiences.map((experience, index) => (
            <div key={index} className="mb-[20px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                {/* Job Title */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={experience.title}
                    onChange={(e) =>
                      handleWorkExperienceChange(index, "title", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                    placeholder="e.g., Software Engineer"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "company",
                        e.target.value
                      )
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                    placeholder="e.g., ABC Corp"
                  />
                </div>

                {/* Duration */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/2">
                      <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={experience.startDate}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                        className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                        placeholder="Select a month"
                      />
                    </div>
                    {!experience.currentlyWorking && (
                      <div className="flex flex-col w-full md:w-1/2">
                        <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                          End Date
                        </label>
                        <input
                          type="month"
                          value={experience.endDate}
                          onChange={(e) =>
                            handleWorkExperienceChange(
                              index,
                              "endDate",
                              e.target.value
                            )
                          }
                          className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                          placeholder="Select a month"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={experience.currentlyWorking}
                      onChange={(e) => {
                        handleWorkExperienceChange(
                          index,
                          "currentlyWorking",
                          e.target.checked
                        );
                        if (e.target.checked) {
                          handleWorkExperienceChange(index, "endDate", "");
                        }
                      }}
                      className="w-5 h-5 text-[#FDC700] border-[#DCDCDC] rounded focus:ring-[#FDC700]"
                    />
                    <label className={`ml-2 ${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium text-[16px]`}>
                      Currently Working
                    </label>
                  </div>
                </div>

                {/* Technologies/Tools */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Technologies/Tools
                  </label>
                  <input
                    type="text"
                    value={experience.tools}
                    onChange={(e) =>
                      handleWorkExperienceChange(index, "tools", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                    placeholder="e.g., React, Node.js, AWS"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Description{" "}
                    <span className="text-[#A59DAA] text-[14px]">
                      (Short paragraph or bullets)
                    </span>
                  </label>
                  <textarea
                    rows={6}
                    value={experience.description}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-xl px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]`}
                    placeholder="Describe your responsibilities and achievements"
                  />
                </div>
              </div>

              {/* Remove Button (only if more than one entry) */}
              {workExperiences.length > 1 && (
                <button
                  className={`border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#D0870033]':'bg-[#FEFCE8]'} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#fdfada] mt-5`}
                  onClick={() => removeWorkExperience(index)}
                >
                  Remove Experience
                  <RemoveIcon color={"#D08700"} />
                </button>
              )}

              {/* Horizontal Line (except for the last entry) */}
              {index < workExperiences.length - 1 && (
                <hr className="my-16 border border-[#FDC700]" />
              )}
            </div>
          ))}
          <button
            className={`border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#D0870033]':'bg-[#FEFCE8]'} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#fdfada]`}
            onClick={addWorkExperience}
          >
            Add Another Experience
            <AddIcon color={"#D08700"} />
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div className={`flex flex-col gap-[20px] ${darkMode?'bg-[#1A1D23]':'bg-white'} py-5 px-2  lg:p-6 rounded-lg w-full`}>
        <div className="relative w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
            Projects
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F8F0FF]'} h-2/4 w-3/4 absolute -bottom-0 -left-2`}></div>
        </div>
        <div className="border-l-2 border-[#DAB2FF] pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          {projects.map((project, index) => (
            <div key={index} className="mb-[20px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                {/* Project Title */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      handleProjectChange(index, "title", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="e.g., E-commerce Platform"
                  />
                </div>

                {/* Tools Used */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Tools Used
                  </label>
                  <input
                    type="text"
                    value={project.tools}
                    onChange={(e) =>
                      handleProjectChange(index, "tools", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="e.g., React, Firebase, Tailwind CSS"
                  />
                </div>

                {/* GitHub/Live Link */}
                <div className="flex flex-col">
                  <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    GitHub/Live Link{" "}
                    <span className="text-[#A59DAA] text-[14px]">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) =>
                      handleProjectChange(index, "link", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="e.g., https://github.com/your-repo"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label className={`flex flex-col gap-1 md:flex-row md:items-center ${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                    Project Description{" "}
                    <span className="text-[#A59DAA] text-[14px]">
                      (Short paragraph or bullets)
                    </span>
                  </label>
                  <textarea
                    rows={6}
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-xl px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]`}
                    placeholder="Describe the project, its purpose, and your contributions"
                  />
                </div>
              </div>

              {/* Remove Button (only if more than one entry) */}
              {projects.length > 1 && (
                <button
                  className={`border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF] '} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8] absolute right-0 -top-10 `}
                  onClick={() => removeProject(index)}
                >
                  Remove Project
                  <RemoveIcon color={"#AD46FF"} />
                </button>
              )}

              {/* Horizontal Line (except for the last entry) */}
              {index < projects.length - 1 && (
                <hr className="my-16 border border-[#DAB2FF]" />
              )}
            </div>
          ))}
          <button
            className={`border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit ${darkMode?'bg-[#AD46FF33]':'bg-[#FAF5FF] '} rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8d9f8]`}
            onClick={addProject}
          >
            Add Another Project
            <AddIcon color={"#AD46FF"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Step3OfLO;
