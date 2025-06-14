import React, { useState } from "react";
import { useResume } from "./resumecontext";
import { useUser } from "../../commonComponents/usercontext";
import { RiDeleteBin5Fill } from "react-icons/ri";



const Projects = () => {
  const add_circle = "/AIResumeAssets/add_circle.png";
  const deleteicon = "/AIResumeAssets/delete.png";
    
  
  const generaticon = "/AIResumeAssets/generateicon.png";

  // const [projects, setProjects] = useState([
  //   {
  //     name: "",
  //     technologies: "",
  //     link: "",
  //     description: "",
  //     startDate: "",
  //     endDate: "",
  //     summary: "",
  //   },
  // ]);

  const{projects,setProjects} = useResume();
   const {darkMode} =useUser();
   
  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: "",
        technologies: "",
        link: "",
        description: "",
        startDate: "",
        endDate: "",
        summary: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const newProjects = [...projects];
    newProjects[index][e.target.name] = e.target.value;
    setProjects(newProjects);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h2 className={`text-[25px] leading-[40px] tracking-[0px]  ${darkMode?'text-[white]':'text-[#212529]'} font-manrope font-bold mb-4`}>
          Projects
        </h2>
        <div className={`w-14 h-5 ${darkMode?'bg-[#9AE60033]':'bg-[#ECFCCA]'}  -mt-8`}></div>
      </div>
      
     <div className="flex flex-col w-full max-w-[527px] pb-[40px] gap-[20px] font-inter 
                ml-0 pl-0 border-l-0 
                lg:ml-3 lg:pl-[30px] lg:border-l-[2px] lg:border-[#9AE600]">

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <h2 className={`flex items-center justify-between gap-[20px] w-full max-w-[497px] h-auto px-[20px] py-[5px] mt-10 border border-[#D8F999] ${darkMode?'bg-[#9AE60033]':'bg-[#F7FEE7]'} rounded-[10px] ${darkMode?'text-[white]':'text-[#212529]'} text-[16px] leading-[24px] font-['Inter'] font-medium`}>
              <span>{index + 1}. Project</span>
              {darkMode?<RiDeleteBin5Fill style={{color:'white',fontSize:'1.7vw'}} />:
                                        <img
                                          src={deleteicon}
                                          alt="delete"
                                          className="w-5 h-5 cursor-pointer"
                                          onClick={() => removeCertificate(index)}
                                        />}
            </h2>

            <div className={`flex flex-col gap-4 border border-[#D8F999] px-4 py-4  ${darkMode?'bg-[#9AE60033]':'bg-[#F7FEE7]'} rounded-xl`}>
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
              />
              <input
                type="text"
                name="technologies"
                placeholder="Technologies Used"
                value={project.technologies}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'}w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
              />
              <input
                type="url"
                name="link"
                placeholder="Project Link (Optional)"
                value={project.link}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={project.description}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[100px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="date"
                  name="startDate"
                  value={project.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full sm:w-[47%] h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[8px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
                />
                <input
                  type="date"
                  name="endDate"
                  value={project.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full sm:w-[47%] h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[8px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
                />
              </div>
              <div className="flex flex-col relative w-full">
                <textarea
                  name="summary"
                  placeholder="Summary (Bullet Points)"
                  value={project.summary}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-32 ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#9AE600] placeholder:text-[#A59DAA]`}
                />
                <button
                  className="flex items-center font-inter text-white px-[10px] py-[7px] gap-[9px] absolute bottom-2 right-2 rounded-[35px] shadow-[0px_4px_5px_0px_#4C95FB40] text-sm"
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
            onClick={addProject}
            className={`flex items-center gap-[5px] px-[10px] py-[2px] ${darkMode?'bg-[#9AE60033]':'bg-[#F8FFEC]'} border border-[#9AE600] rounded-full text-[#699C01] font-['Inter'] text-[15px] leading-[24px]`}
          >
            <span>Add More Project</span>
            <img src={add_circle} className="w-4 h-4" alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
