import React from "react";
import { useNavigate } from "react-router-dom";
import Alltools from "./alltools";
import { useState } from "react";

const MyResumes = () => {

   const navigate = useNavigate();

  const url = `/resumes_templates/steps/`

  const halfwayActivities = [
    {
      id: 'RESUME_ExpAndFresher_1',
      creationDate: "12/11/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      type: "Resume",
    },
    {
      id: 'RESUME_ExpAndFresher_2',
      creationDate: "12/11/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      type: "Resume",
    },
  ];


  return(
    <>
     {halfwayActivities.length > 0 && (
        <div className="bg-[#F7F7FB] rounded-[20px] px-[10px] sm:px-[14px] md:px-[20px] py-[14px] md:py-[20px] space-y-4 border-3 border-[#dcdcdc] border-dashed">
          <p className="font-inter font-semibold text-[20px] sm:text-[24px] md:text-[30px]">
           Let's see what you have created.
          </p>
          <div className="flex flex-wrap gap-[16px] md:gap-[20px] ">
            {halfwayActivities.map((activity) => (
              <div
                key={activity.id}
                className="items-center flex flex-col sm:flex-row justify-between w-full sm:w-fit gap-[12px] md:gap-[20px] bg-white border border-[#DCDCDC] rounded-[20px] p-[12px] md:p-[20px]"
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
                <div className="flex flex-col justify-between w-full sm:w-fit h-auto sm:h-56 mx-auto sm:mx-0">
                  <div className="flex flex-col gap-[10px] md:gap-[20px]">
                    <div className="flex gap-[8px] md:gap-[10px] p-[10px] md:p-[15px] rounded-[9px] bg-[#F7F7FB] w-fit font-inter font-semibold text-[16px] md:text-[19.2px]">
                      <img
                        src="/Icons/Sidebar/MyResume.svg"
                        alt="resume"
                        className="w-[16px] md:w-[20px] fill-[#00A6F4]"
                      />
                      {activity.type}
                    </div>

                    <p className="text-[14px] md:text-[16px]">
                      <span className="font-bold font-inter">
                        Creation Date:
                      </span>{" "}
                      {activity.creationDate}
                    </p>
                  </div>

                  <div className="flex justify-center gap-[10px] border border-[#00A6F4] w-full py-[5px] rounded-full bg-[#F0F9FF] text-[#00A6F4] font-inter font-semibold text-[16px] md:text-[19.2px] cursor-pointer transition-all hover:scale-95 mt-2 sm:mt-0"
                    onClick={()=>{
                          navigate(`${url}${activity.id}`)
                    }}>
                    Edit
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Alltools/>
    </>
  )

  
};

export default MyResumes;
