import { useState } from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  const add_circle = "/AIResumeAssets/add_circle.png";

  const [showInputs, setShowInputs] = useState({
    linkedin: false,
    github: false,
    figma: false,
    other: false,
  });

  const toggleInput = (field) => {
    setShowInputs((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className="text-[25px] leading-[40px] tracking-[0px] text-[#212529] font-manrope font-bold mb-4">
          Personal Info & Job Role
        </h2>
        <div className="w-40 h-5 bg-[#F3E8FF] -mt-8"></div>
      </div>
      <div className="flex flex-col w-full max-w-[527px] ml-3 border-l-[2px] border-[#DAB2FF] pb-[40px] pl-[30px] gap-[20px] font-inter">
        <div className="flex flex-wrap gap-[20px] font-inter mt-10">
          {["firstName", "middleName", "lastName"].map((name, idx) => (
            <input
              key={idx}
              type="text"
              name={name}
              placeholder={name.replace(/([A-Z])/g, " $1")}
              value={formData[name]}
              onChange={handleChange}
              autoComplete="off"
              className="flex-1 min-w-[150px] h-[56px] border rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
            />
          ))}
        </div>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title (e.g., Software Engineer)"
          value={formData.jobTitle}
          onChange={handleChange}
          autoComplete="off"
          className="border rounded-[8px] px-[15px] py-[16px] w-full h-[56px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          autoComplete="off"
          className="h-[56px] border rounded-[8px] px-[15px] py-[16px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
        />
        <div className="gap-4 flex flex-wrap">
          {["city", "state", "pincode"].map((name, idx) => (
            <input
              key={idx}
              type="text"
              name={name}
              placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
              value={formData[name]}
              onChange={handleChange}
              autoComplete="off"
              className="flex-1 min-w-[150px] h-[56px] border rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
            />
          ))}
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          className="h-[56px] border rounded-[8px] px-[15px] py-[16px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
        />
        <div className="mt-6 p-4 border-2 border-dashed border-[#DAB2FF] rounded-xl bg-[#FAF5FF]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-800 bg-[#DAB2FF] px-3 py-1 rounded-3xl">
                Optional
              </span>
              <p className="text-sm font-semibold text-gray-600">
                (we recommend to add for good ATS resume)
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["linkedin", "github", "figma", "other"].map((field) => (
                <button
                  key={field}
                  type="button"
                  onClick={() => toggleInput(field)}
                  className="bg-gray-100 flex items-center text-sm text-[#555] px-[10px] py-[2px] border border-[#555] rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  <img src={add_circle} className="w-4 h-4 ml-1" alt="add" />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {showInputs.linkedin && (
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={handleChange}
                autoComplete="off"
                className="h-[56px] border rounded-[8px] px-[15px] py-[16px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
            )}
            {showInputs.github && (
              <input
                type="url"
                name="github"
                placeholder="GitHub URL"
                value={formData.github}
                onChange={handleChange}
                autoComplete="off"
                className="h-[56px] border rounded-[8px] px-[15px] py-[16px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
            )}
            {showInputs.figma && (
              <input
                type="url"
                name="figma"
                placeholder="Figma URL"
                value={formData.figma}
                onChange={handleChange}
                autoComplete="off"
                className="h-[56px] border rounded-[8px] px-[15px] py-[16px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
            )}
            {showInputs.other && (
              <input
                type="url"
                name="otherLink"
                placeholder="Other URL"
                value={formData.otherLink}
                onChange={handleChange}
                autoComplete="off"
                className="h-[56px] border rounded-[8px] px-[15px] py-[16px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
