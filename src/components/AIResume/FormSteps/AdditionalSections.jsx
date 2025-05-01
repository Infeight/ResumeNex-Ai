import React, { useState } from "react";

const AdditionalSections = ({ additional, setAdditional }) => {
  const [languageInput, setLanguageInput] = useState("");
  const [proficiencyInput, setProficiencyInput] = useState("Basic");
  const [hobbyInput, setHobbyInput] = useState("");

  const add_circle = "/AIResumeAssets/add_circle.png";
  const deleteicon = "/AIResumeAssets/delete.png";
  const deleteminicon = "/AIResumeAssets/delete-min.png";

  const safeLanguages = Array.isArray(additional.languages)
    ? additional.languages
    : [];
  const safeHobbies = Array.isArray(additional.hobbies)
    ? additional.hobbies
    : [];
  const safeAchievements = Array.isArray(additional.achievements)
    ? additional.achievements
    : [];

  const languagesList = [
    "Hindi",
    "English",
    "Telugu",
    "Tamil",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Kannada",
    "Punjabi",
    "Urdu",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Russian",
    "Korean",
    "Arabic",
    "Portuguese",
  ];

  const proficiencyLevels = ["Basic", "Intermediate", "Fluent", "Native"];

  const addLanguage = () => {
    if (!languageInput.trim()) return;
    const newLang = {
      name: languageInput.trim(),
      proficiency: proficiencyInput,
    };
    setAdditional((prevState) => ({
      ...prevState,
      languages: [...safeLanguages, newLang],
    }));
    setLanguageInput("");
    setProficiencyInput("Basic");
  };

  const addHobby = () => {
    if (!hobbyInput.trim()) return;
    setAdditional((prevState) => ({
      ...prevState,
      hobbies: [...safeHobbies, hobbyInput.trim()],
    }));
    setHobbyInput("");
  };

  const addAchievement = () => {
    setAdditional((prevState) => ({
      ...prevState,
      achievements: [
        ...safeAchievements,
        { name: "", organization: "", description: "" },
      ],
    }));
  };

  const handleAchievementChange = (index, e) => {
    const newAchievements = [...safeAchievements];
    newAchievements[index][e.target.name] = e.target.value;
    setAdditional((prevState) => ({
      ...prevState,
      achievements: newAchievements,
    }));
  };

  const removeLanguage = (index) => {
    const updated = safeLanguages.filter((_, i) => i !== index);
    setAdditional((prevState) => ({ ...prevState, languages: updated }));
  };

  const removeHobby = (index) => {
    const updated = safeHobbies.filter((_, i) => i !== index);
    setAdditional((prevState) => ({ ...prevState, hobbies: updated }));
  };

  const removeAchievement = (index) => {
    const updated = safeAchievements.filter((_, i) => i !== index);
    setAdditional((prevState) => ({ ...prevState, achievements: updated }));
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className="text-[25px] leading-[40px] tracking-[0px] text-[#212529] font-manrope font-bold mb-4">
          Additional Sections
        </h2>
        <div className="w-24 h-5 bg-[#FEF9C2] -mt-8"></div>
      </div>

      <div className="flex flex-col w-full max-w-[527px] ml-3 border-l-[2px] border-[#FDC700] pb-[40px] pl-[30px] gap-[40px] font-inter sm:ml-0 sm:pl-4">
        {/* LANGUAGES */}
        <div>
          <h3 className="text-[16px] font-inter font-semibold border-[#FFDF20] bg-[#FEFCE8] text-[#212529] rounded-[10px] px-[20px] py-[5px] border">
            1. Languages
          </h3>
          <div className="mt-[10px] border px-4 py-4 border-[#FFDF20] bg-[#FEFCE8] text-[#212529] rounded-xl">
            <div className="flex flex-wrap gap-2 mb-2">
              {safeLanguages
                .filter((lang) => lang.name.trim() !== "")
                .map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-max h-[38px] px-[20px] py-[5px] rounded-[50px] border border-[#0C4A6E] text-base text-[#0C4A6E] gap-2"
                  >
                    <span className="text-[#212529]">{lang.name}</span>
                    <span className="bg-[#05DF7233] text-[#212529] px-[20px] py-[2px] rounded-[500px] flex items-center justify-center">
                      {lang.proficiency}
                    </span>
                    <img
                      src={deleteminicon}
                      alt="remove"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() => removeLanguage(index)}
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center w-full h-[56px] border border-[#D3D9DE] rounded-[8px] focus-within:ring-1 focus:ring-[#FDC700] bg-white">
              <div className="relative w-full">
                <input
                  list="languages"
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  placeholder="Type a language"
                  className="w-full h-[56px] bg-white border-none px-[15px] py-[16px] rounded-[8px] outline-none placeholder:text-[#A59DAA]"
                />
                <datalist id="languages">
                  {languagesList.map((lang, idx) => (
                    <option key={idx} value={lang} />
                  ))}
                </datalist>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <select
                    value={proficiencyInput}
                    onChange={(e) => setProficiencyInput(e.target.value)}
                    className="h-[32px] pl-[10px] pr-[24px] py-[2px] rounded-[8px] bg-white border border-[#D3D9DE] text-[#212529] text-sm focus:outline-none focus:ring-1 focus:ring-[#FDC700] appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[center_right_0.5rem] hover:border-[#A59DAA] transition-colors cursor-pointer"
                  >
                    {proficiencyLevels.map((level, idx) => (
                      <option key={idx} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={addLanguage}
                    className="bg-[#05df72]/40 text-[#212529] h-[32px] px-5 py-1 rounded-[500px] text-sm font-semibold hover:bg-[#05df72]/60 transition-colors"
                  >
                    Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HOBBIES */}
        <div>
          <h3 className="text-[16px] font-inter font-semibold border-[#DAB2FF] bg-[#FAF5FF] text-[#212529] rounded-[10px] px-[20px] py-[5px] border">
            2. Hobbies & Interests
          </h3>
          <div className="mt-[10px] border px-4 py-4 border-[#DAB2FF] bg-[#FAF5FF] text-[#212529] rounded-xl">
            <div className="flex flex-wrap gap-2 mb-2">
              {safeHobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex items-center w-auto h-6 bg-white border border-[#212529] text-[#212529] px-3 py-1 rounded-full text-base font-medium leading-6"
                >
                  {hobby}
                  <img
                    src={deleteminicon}
                    alt="remove"
                    className="w-4 h-4 ml-2 cursor-pointer"
                    onClick={() => removeHobby(index)}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 relative items-center border border-[#D3D9DE] rounded-[8px] w-full min-h-[56px] bg-white focus-within:ring-1 focus:ring-[#FDC700]">
              <input
                type="text"
                value={hobbyInput}
                onChange={(e) => setHobbyInput(e.target.value)}
                placeholder="Type a hobby or interest"
                className="w-full h-[56px] bg-white border-none px-[15px] py-[16px] rounded-[8px] outline-none placeholder:text-[#A59DAA]"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                <button
                  onClick={addHobby}
                  className="bg-[#05df72]/40 text-[#212529] w-[79px] h-[32px] px-[20px] py-[2px] rounded-[500px] text-sm font-semibold hover:bg-[#05df72]/60 transition-colors"
                >
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS & AWARDS */}
        <div>
          <h3 className="text-[16px] font-inter text-[#212529] font-semibold border-[#B8E6FE] bg-[#F0F9FF] rounded-[10px] px-[20px] py-[5px] border mb-[10px]">
            3. Achievements & Awards
          </h3>
          {safeAchievements.map((ach, index) => (
            <div key={index} className="flex flex-col gap-4 mb-2">
              <div className="flex font-inter flex-col gap-4 border px-4 py-4 bg-[#F0F9FF] border-[#B8E6FE] rounded-xl">
                <input
                  type="text"
                  name="name"
                  placeholder="Achievement Name"
                  value={ach.name}
                  onChange={(e) => handleAchievementChange(index, e)}
                  className="w-full h-[56px] bg-white border border-[#D3D9DE] rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#5CBEFE] placeholder:text-[#A59DAA]"
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="Issuing Organization"
                  value={ach.organization}
                  onChange={(e) => handleAchievementChange(index, e)}
                  className="w-full h-[56px] bg-white border border-[#D3D9DE] rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#5CBEFE] placeholder:text-[#A59DAA]"
                />
                <img
                  src={deleteicon}
                  alt="delete"
                  className="w-5 h-5 cursor-pointer ml-auto"
                  onClick={() => removeAchievement(index)}
                />
              </div>
            </div>
          ))}
          <button
            onClick={addAchievement}
            className="inline-flex items-center gap-[5px] px-[12px] py-[6px] bg-[#F0F9FF] border border-[#5CBEFE] rounded-[8px] text-[#212529] font-inter text-[15px] font-semibold hover:bg-[#E0F2FE] transition-colors"
          >
            <span>Add Achievement</span>
            <img src={add_circle} alt="add icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSections;
