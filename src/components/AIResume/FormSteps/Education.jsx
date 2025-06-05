import React, { useState } from "react";
import { useResume } from "./resumecontext";

const Education = () => {
  const add_circle = "/AIResumeAssets/add_circle.png";
  const deleteicon = "/AIResumeAssets/delete.png";
  // const [education, setEducation] = useState([
  //   {
  //     collegeName: "",
  //     degree: "",
  //     stream: "",
  //     cgpa: "",
  //     location: "",
  //     startDate: "",
  //     endDate: "",
  //   },
  // ]);
  const { education, setEducation } = useResume();

  const addEducation = () => {
    setEducation([
      ...education,
      {
        collegeName: "",
        degree: "",
        stream: "",
        cgpa: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const removeEducation = (index) => {
    const filtered = education.filter((_, i) => i !== index);
    setEducation(filtered);
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className="text-[25px] leading-[40px] tracking-[0px] text-[#212529] font-manrope font-bold mb-4">
          Education
        </h2>
        <div className="w-16 h-5 bg-[#DFF2FE] -mt-8"></div>
      </div>

     <div className="flex flex-col w-full max-w-[600px] pb-10 font-inter 
                ml-0 pl-0 border-l-0 
                lg:ml-3 lg:pl-6 lg:border-l-[2px] lg:border-[#74D4FF]">

        {education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between px-5 py-2 border border-[#B8E6FE] bg-[#F0F9FF] rounded-lg text-[#212529] text-[16px] font-medium">
              <span>{index + 1}. College name</span>
              <img
                src={deleteicon}
                alt="delete"
                className="w-5 h-5 cursor-pointer"
                onClick={() => removeEducation(index)}
              />
            </div>

            <div className="bg-[#F0F9FF] flex flex-col gap-4 mb-4 px-4 py-4 border border-[#B8E6FE] rounded-xl">
              <input
                type="text"
                name="collegeName"
                placeholder="College Name"
                value={edu.collegeName}
                onChange={(e) => handleChange(index, e)}
                className="w-full h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                className="w-full h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
              />
              <input
                type="text"
                name="stream"
                placeholder="Stream"
                value={edu.stream}
                onChange={(e) => handleChange(index, e)}
                className="w-full h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
              />
              <input
                type="text"
                name="cgpa"
                placeholder="CGPA / Percentage"
                value={edu.cgpa}
                onChange={(e) => handleChange(index, e)}
                className="w-full h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
              />
              <input
                type="text"
                name="location"
                placeholder="College Location"
                value={edu.location}
                onChange={(e) => handleChange(index, e)}
                className="w-full h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="date"
                  name="startDate"
                  value={edu.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full sm:w-1/2 h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
                />
                <input
                  type="date"
                  name="endDate"
                  value={edu.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full sm:w-1/2 h-[56px] border border-[#D3D9DE] bg-white rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#00A6F4] placeholder:text-[#A59DAA]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <button
            onClick={addEducation}
            className="inline-flex items-center gap-[5px] px-[10px] py-[2px] bg-[#F0F9FF] border border-[#00A6F4] rounded-full text-[#00A6F4] font-['Inter'] text-[15px] leading-[24px]"
          >
            <span>Add More Education</span>
            <img src={add_circle} className="w-4 h-4" alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
