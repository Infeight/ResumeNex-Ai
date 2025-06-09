import React from "react";
import { useNavigate } from "react-router-dom";
import Alltools from "./alltools";
import { useState,useEffect } from "react";
import { useUser } from "../commonComponents/usercontext";
import { CgFileDocument } from "react-icons/cg";
import { LuLetterText } from "react-icons/lu";

const Downloads = () => {
  const navigate = useNavigate();
  const [resumePdf,setResumePdf] = useState(null)
  const{darkMode} = useUser();

  // const url = `/resumes_templates/steps/`

  useEffect(() => {
  if (resumePdf) {
    handleATScheck();
  }
}, [resumePdf]);

const handleATScheck = () => {
  console.log("ATS check initiated for:", resumePdf);
}

  const downloads = [
       {
      id: 'RESUME_ExpAndFresher_1',
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "11/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
       darkIcon:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>
      
    },
    {
      id: '',
      name: "Jarupula Sai Charan",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "20/05/2025",
      resumeImage: "/img/sampleCL.png",
      type: "Cover Letter",
      icon: "/Icons/Sidebar/MyCL.svg",
      darkIcon:<LuLetterText style={{color:'white', fontSize:'1.7vw'}}/>
    },
    {
      id: 'RESUME_ExpAndFresher_3',
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "25/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.avif",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
       darkIcon:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>
    }
  ];


  return(
    <>
     {downloads.length > 0 && (
        <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'}  rounded-[20px] px-[10px] sm:px-[14px] md:px-[20px] py-[14px] md:py-[20px] space-y-4 border-3 ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} border-dashed`}>
          <p className={`font-inter font-semibold text-[20px] sm:text-[24px] md:text-[30px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
           Access Your Downloads
          </p>
          <div className="flex flex-wrap gap-[16px] md:gap-[20px] ">
            {downloads.map((activity) => (
              <div
               
                key={activity.id}
                className={`items-center flex flex-col sm:flex-row justify-between w-full sm:w-fit gap-[12px] md:gap-[20px] ${darkMode?'bg-[#23272F]':'bg-[#F7F7FB]'} border ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} rounded-[20px] p-[12px] md:p-[20px]`}
              >
                {/* Resume Image */}
             <img
  alt="resume"
  class="
    w-[250px]    /* Default for mobile/tablet */
    sm:w-[140px] 
    md:w-[194px]
    border border-[#DCDCDC] rounded-[15px]
    mx-auto sm:mx-0
    h-[80%]
  "
  src={activity.resumeImage}
/>

                {/* Details */}
                <div className="flex flex-col justify-between w-full sm:w-fit h-auto sm:h-82 mx-auto sm:mx-0">
                  <div className="flex flex-col gap-[10px] md:gap-[20px]">
                    <div className={`flex gap-[8px] md:gap-[10px] p-[10px] md:p-[15px] rounded-[9px] ${darkMode?'text-[white]':'text-[#1E1B39]'} ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} w-fit font-inter font-semibold text-[16px] md:text-[19.2px]`}>
                     {
                      darkMode?activity.darkIcon:
                       <img
                        src={activity.icon}
                        alt="resume"
                        className="w-[16px] md:w-[20px] fill-[#00A6F4]"
                      />
                     }
                      {activity.type}
                    </div>

                     <p className={`text-[14px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                      <span className="font-bold font-inter">
                        Name:
                      </span>{" "}
                      {activity.name}
                    </p>

                     <p className={`text-[14px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                      <span className="font-bold font-inter">
                        Job Role:
                      </span>{" "}
                      {activity.jobRole}
                    </p>

                     <p className={`text-[14px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                      <span className="font-bold font-inter">
                        Creation Date:
                      </span>{" "}
                      {activity.creationDate}
                    </p>

                  </div>


      <div style={{display:activity.type=='Resume'?'flex':'none'}} className="flex flex-col items-start"  
       onClick={()=>{
       setResumePdf(activity.id)
        }}>
       <label
       htmlFor="check-ats-score"
       className={`flex justify-center gap-[10px] border border-[#6EE7B7] w-full py-[5px] rounded-full ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} text-[#059669] font-inter font-semibold text-[16px] md:text-[19.2px] cursor-pointer transition-all hover:scale-95 mt-2 sm:mt-0`}
      >
       Check ATS Score
     </label>
     </div>

                  <div className={`flex justify-center gap-[10px] border border-[#00A6F4] w-full py-[5px] rounded-full ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} text-[#00A6F4] font-inter font-semibold text-[16px] md:text-[19.2px] cursor-pointer transition-all hover:scale-95 mt-2 sm:mt-0`}
                    onClick={()=>{
                          navigate(`${activity.type=='Resume'?'/resumes_templates/steps/':'/cover_letter_templates/steps'}${activity.id}`)
                    }}>
                    Edit
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <Alltools/> */}
    </>
  )
};

export default Downloads;
