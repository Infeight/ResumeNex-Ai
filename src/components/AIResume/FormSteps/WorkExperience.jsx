import React, { useState } from "react";
import { useResume } from "./resumecontext";
import { useUser } from "../../commonComponents/usercontext";
import { RiDeleteBin5Fill } from "react-icons/ri";



const WorkExperience = () => {
  const add_circle = "/AIResumeAssets/add_circle.png";
  const deleteicon = "/AIResumeAssets/delete.png";
  const generaticon = "/AIResumeAssets/generateicon.png";

  // const [workExperience, setWorkExperience] = useState([
  //   {
  //     companyName: "",
  //     jobTitle: "",
  //     startDate: "",
  //     endDate: "",
  //     responsibilities: "",
  //   },
  // ]);

  const{workExperience,setWorkExperience} = useResume();
     const {darkMode} =useUser();
  
   
  const addWork = () => {
    setWorkExperience([
      ...workExperience,
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const newWork = [...workExperience];
    newWork[index][e.target.name] = e.target.value;
    setWorkExperience(newWork);
  };

  const removeWork = (index) => {
    const newWork = workExperience.filter((_, i) => i !== index);
    setWorkExperience(newWork);
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className={`text-[25px] leading-[40px] tracking-[0px] ${darkMode?'text-[white]':'text-[#212529]'} font-manrope font-bold mb-4`}>
          Work Experience (Optional)
        </h2>
        <div className={`w-28 h-5 ${darkMode?'bg-[#FFDF2033]':'bg-[#FEF9C2]'}  -mt-8`}></div>
      </div>

      <div className="flex flex-col w-full max-w-[527px] pb-[40px] gap-[20px] font-inter 
                ml-0 pl-0 border-l-0 
                lg:ml-3 lg:pl-[30px] lg:border-l-[2px] lg:border-[#FDC700]">

        {workExperience.map((work, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <h2 className={`flex items-center justify-between gap-[20px] w-full max-w-[497px] h-auto px-[20px] py-[5px] mt-10 border border-[#FFDF20] ${darkMode?'bg-[#FFDF2033]':'bg-[#FEF9C2]'}  rounded-[10px] ${darkMode?'text-[white]':'text-[#212529]'} text-[16px] leading-[24px] font-['Inter'] font-medium`}>
              <span>{index + 1}. Company name</span>
             {darkMode?<RiDeleteBin5Fill style={{color:'white',fontSize:'1.7vw'}} />:
                           <img
                             src={deleteicon}
                             alt="delete"
                             className="w-5 h-5 cursor-pointer"
                             onClick={() => removeCertificate(index)}
                           />}
            </h2>

            <div className={`flex flex-col font-inter gap-4 mb-4 border rounded-xl px-4 py-4 border-[#FFDF20] ${darkMode?'bg-[#FFDF2033]':'bg-[#FEF9C2]'} `}>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={work.companyName}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px]  ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#FFDF20] placeholder:text-[#A59DAA]`}
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title/Internship Role"
                value={work.jobTitle}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#FFDF20] placeholder:text-[#A59DAA]`}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  value={work.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full sm:w-[47%] h-[56px]  ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[8px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#FFDF20] placeholder:text-[#A59DAA]`}
                />
                <input
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  value={work.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full sm:w-[47%] h-[56px]  ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[8px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#FFDF20] placeholder:text-[#A59DAA]`}
                />
              </div>
              <div className="relative w-full">
                <textarea
                  name="responsibilities"
                  placeholder="Responsibilities (Bullet Points)"
                  value={work.responsibilities}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-32 ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#FFDF20] placeholder:text-[#A59DAA]`}
                />
                <button
                  className="flex items-center font-inter text-white px-[10px] py-[7px] gap-[9px] absolute bottom-4 right-2 rounded-[35px] shadow-[0px_4px_5px_0px_#4C95FB40] text-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #4C95FB 0%, #336EE7 100%)",
                  }}
                >
                  <img src={generaticon} className="h-4 w-4" alt="generate" />
                  Generate with AI
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <button
            onClick={addWork}
            className={`flex items-center gap-[5px] px-[10px] py-[2px] ${darkMode?'bg-[#FFDF2033]':'bg-[#FEF9C2]'} border border-[#FFDF20] rounded-full text-[#D08700] font-['Inter'] text-[15px] leading-[24px]`}
          >
            <span>Add More Work Experience</span>
            <img src={add_circle} className="w-4 h-4" alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
