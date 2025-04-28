import { useState } from "react";

const Skills = () => {
  const add_circle = "/AIResumeAssets/add_circle.png";
  const generaticon = "/AIResumeAssets/generateicon.png";
  const deleteminicon = "/AIResumeAssets/delete-min.png";

  const [skills, setSkills] = useState({
    technical: [],
    soft: [],
    related: "",
  });

  const [technicalInput, setTechnicalInput] = useState("");
  const [softInput, setSoftInput] = useState("");

  const selectTechnicalSkill = (skill) => {
    if (!skills.technical.includes(skill)) {
      setSkills({
        ...skills,
        technical: [...skills.technical, skill],
      });
      setTechnicalInput("");
    }
  };

  const selectSoftSkill = (skill) => {
    if (!skills.soft.includes(skill)) {
      setSkills({
        ...skills,
        soft: [...skills.soft, skill],
      });
      setSoftInput("");
    }
  };

  const removeTechnicalSkill = (indexToRemove) => {
    setSkills({
      ...skills,
      technical: skills.technical.filter((_, index) => index !== indexToRemove),
    });
  };

  const removeSoftSkill = (indexToRemove) => {
    setSkills({
      ...skills,
      soft: skills.soft.filter((_, index) => index !== indexToRemove),
    });
  };

  const handleTechnicalInput = (e) => {
    if (e.key === "Enter" && technicalInput.trim()) {
      if (!skills.technical.includes(technicalInput.trim())) {
        setSkills({
          ...skills,
          technical: [...skills.technical, technicalInput.trim()],
        });
        setTechnicalInput("");
      }
    } else {
      setTechnicalInput(e.target.value);
    }
  };

  const handleSoftInput = (e) => {
    if (e.key === "Enter" && softInput.trim()) {
      if (!skills.soft.includes(softInput.trim())) {
        setSkills({
          ...skills,
          soft: [...skills.soft, softInput.trim()],
        });
        setSoftInput("");
      }
    } else {
      setSoftInput(e.target.value);
    }
  };

  const suggestedTechnicalSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "Figma",
  ];
  const suggestedSoftSkills = ["Communication", "Teamwork", "Problem-Solving"];

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className="text-[25px] leading-[40px] tracking-[0px] text-[#212529] font-manrope font-bold mb-4">
          Skills
        </h2>
        <div className="w-10 h-5 bg-[#DFF2FE] -mt-8"></div>
      </div>
      <div className="flex flex-col w-[527px] ml-3 border-l-[2px] border-[#74D4FF] pb-[40px] pl-[30px] gap-[20px] font-inter">
        {/* Technical Skills */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-[#212529] mb-2">
            Technical Skills
          </h4>
          <div className="flex flex-wrap items-center border rounded-[8px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] w-full min-h-[56px] bg-white focus-within:ring-2 focus:ring-1 focus:ring-[#74D4FF]">
            {skills.technical.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-[#E0F2FE] text-[#0C4A6E] px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                <span>{skill}</span>
                <img
                  src={deleteminicon}
                  alt="remove"
                  className="w-4 h-4 ml-2 cursor-pointer"
                  onClick={() => removeTechnicalSkill(index)}
                />
              </div>
            ))}
            <input
              type="text"
              placeholder={
                skills.technical.length === 0 ? "Enter Technical Skill" : ""
              }
              value={technicalInput}
              onChange={(e) => setTechnicalInput(e.target.value)}
              onKeyDown={handleTechnicalInput}
              className="flex-grow border-none outline-none bg-transparent min-w-[100px] "
            />
          </div>
          <div className="mt-4 p-4 border-2 border-dashed border-[#74D4FF] rounded-xl bg-[#F0F9FF]">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestedTechnicalSkills.map((skill, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectTechnicalSkill(skill)}
                  className="bg-gray-100 flex items-center text-[15px] leading-[24px] font-medium text-[#555555] px-[10px] py-[2px] border border-[#555555] rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-1 focus:ring-[#74D4FF] font-['Inter']"
                >
                  {skill}
                  <img src={add_circle} className="w-4 h-4 ml-1" alt="add" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-[#212529] mb-2">
            Soft Skills
          </h4>
          <div className="flex flex-wrap items-center border rounded-[8px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] w-full min-h-[56px] bg-white focus-within:ring-2 focus:ring-1 focus:ring-[#74D4FF]">
            {skills.soft.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-[#E0F2FE] text-[#0C4A6E] px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                <span>{skill}</span>
                <img
                  src={deleteminicon}
                  alt="remove"
                  className="w-4 h-4 ml-2 cursor-pointer"
                  onClick={() => removeSoftSkill(index)}
                />
              </div>
            ))}
            <input
              type="text"
              placeholder={skills.soft.length === 0 ? "Enter Soft Skill" : ""}
              value={softInput}
              onChange={(e) => setSoftInput(e.target.value)}
              onKeyDown={handleSoftInput}
              className="flex-grow border-none outline-none bg-transparent min-w-[100px]"
            />
          </div>
          <div className="mt-4 p-4 border-2 border-dashed border-[#74D4FF] rounded-xl">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestedSoftSkills.map((skill, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectSoftSkill(skill)}
                  className="bg-gray-100 flex items-center text-[15px] leading-[24px] font-medium text-[#555555] px-[10px] py-[2px] border border-[#555555] rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-1 focus:ring-[#74D4FF] font-['Inter']"
                >
                  {skill}
                  <img src={add_circle} className="w-4 h-4 ml-1" alt="add" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Related Skills */}
        <div className="mt-6 border px-4 py-4 border-[#74D4FF] bg-[#F0F9FF] rounded-xl">
          <h3 className="text-lg text-[#212529] font-semibold mb-2">
            Related Skills
          </h3>
          <div className="flex flex-col relative w-full">
            <textarea
              placeholder="Enter Related Skills"
              value={skills.related}
              onChange={(e) =>
                setSkills({ ...skills, related: e.target.value })
              }
              className="border rounded-[8px] pt-[16px] pr-[15px] pb-[16px] pl-[15px] w-full h-32 focus:outline-none focus:ring-1 focus:ring-[#74D4FF]"
              rows="4"
            />
            <button
              className="flex items-center text-white px-[10px] py-[7px] gap-[9px] absolute bottom-2 right-2 rounded-[35px] shadow-[0px_4px_5px_0px_#4C95FB40] text-sm font-inter"
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
    </div>
  );
};

export default Skills;
