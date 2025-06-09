import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alltools from "./alltools";
import Checkats from "../AIResume/FormSteps/checkAtsComp";
import ProgressIndicator from "../commonComponents/ProgressIndicator";
import { useUser } from "../commonComponents/usercontext";
import { CgFileDocument } from "react-icons/cg";
import { LuLetterText } from "react-icons/lu";


// ... FileTypeSelector component remains unchanged ...

const FileTypeSelector = ({ id }) => {
  const [selected, setSelected] = useState("pdf");
  const {darkMode} = useUser();
  return (
    <div className="flex  gap-0 sm:gap-3 justify-around">
      {/* PDF Option */}
      <label className={`w-[45%] font-lexend text-xs sm:text-base md:text-lg border ${darkMode?'border-[#363B45]':'border-[#D3D9DE] '}  ${darkMode?'text-[white]':'text-[#1E1B39]'} px-1 sm:px-3 py-1 sm:py-2 rounded-xl ${darkMode?'bg-[#1A1D23]':'bg-[white]'} flex items-center justify-center gap-2 cursor-pointer`}>
        <input
          type="radio"
          name={`fileType-${id}`}
          value="pdf"
          checked={selected === "pdf"}
          onChange={() => setSelected("pdf")}
          className="hidden"
        />
        <img
          src={selected === "pdf" ? "/Icons/select.png" : "/Icons/unSelect.svg"}
          alt={selected === "pdf" ? "Selected" : "Unselected"}
          className="w-4 md:w-5"
        />
        <img src="/Icons/PDF.svg" alt="PDF" className="w-5 md:w-6" />
        PDF
      </label>
      {/* DOCX Option */}
      <label className={`w-1/2 font-lexend text-xs sm:text-base md:text-lg border  ${darkMode?'border-[#363B45]':'border-[#D3D9DE] '} ${darkMode?'text-[white]':'text-[#1E1B39]'} px-1 sm:px-3 py-1 sm:py-2 rounded-xl ${darkMode?'bg-[#1A1D23]':'bg-[white]'} flex items-center justify-center gap-2 cursor-pointer`}>
        <input
          type="radio"
          name={`fileType-${id}`}
          value="docx"
          checked={selected === "docx"}
          onChange={() => setSelected("docx")}
          className="hidden"
        />
        <img
          src={selected === "docx" ? "/Icons/select.png" : "/Icons/unSelect.svg"}
          alt={selected === "docx" ? "Selected" : "Unselected"}
          className="w-4 md:w-5"
        />
        <img src="/Icons/DOCX.svg" alt="Docx" className="w-5 md:w-6" />
        Docx
      </label>
    </div>
  );
};

const MyResumes = () => {
  const{darkMode}  = useUser();
  const navigate = useNavigate();
  const [resumePdf, setResumePdf] = useState(null);
  const [openAts, setOpenAts] = useState(false);

  const url = `/cover_letter_templates/steps`;

  useEffect(() => {
    if (resumePdf) {
      handleATScheck();
    }
    // eslint-disable-next-line
  }, [resumePdf]);

  const handleATScheck = () => {
    console.log("ATS check initiated");
    setOpenAts(true);
  };

  const halfwayActivities = [
    {
      id: 'Cover Letter',
      creationDate: "12/11/2025",
      resumeImage: "/img/sampleCL.png",
      type: "Cover Letter",
        icon: "/Icons/Sidebar/MyResume.svg",
       darkIcon:<LuLetterText style={{color:'white', fontSize:'1.7vw'}}/>
    },
    {
      id: 'Cover Letter',
      creationDate: "12/11/2025",
      resumeImage: "/img/sampleCL.png",
      type: "Cover Letter",
      icon: "/Icons/Sidebar/MyResume.svg",
       darkIcon:<LuLetterText style={{color:'white', fontSize:'1.7vw'}}/>
    },
  ];

  const recentActivities = [
    {
      id: '',
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "11/05/2025",
      resumeImage: "/img/sampleCL.png",
      type: "Cover Letter",
      icon: "/Icons/Sidebar/MyCL.svg",
       darkIcon:<LuLetterText style={{color:'white', fontSize:'1.7vw'}}/>
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
    }
  ];

  return (
    <>
      <div className="my-[1vw] flex flex-col sm:flex-row items-center justify-between">
        <div className={`flex items-center text-[32px] font-bold ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
          My Cover Letter
          <img
            src="/img/myresumeicon.svg"
            alt="resume icon"
            className="w-7 h-7 -ml-3"
          />
        </div>
        <div className="flex gap-2">
          {/* Right Button - Filled */}
          <button className="cursor-pointer flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-[#00A6F4] rounded-full"
          onClick={()=>{
            navigate(`/cover_letter_templates`);
            setResumePdf(null);
          }}
          >
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Make a New Cover Letter
          </button>
        </div>
      </div>

      {halfwayActivities.length > 0 && (
        <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} rounded-[20px] px-[10px] sm:px-[14px] md:px-[20px] py-[14px] md:py-[20px] space-y-4 border-3 ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} border-dashed`}>
          <p className={`font-inter font-semibold text-[20px] sm:text-[24px] md:text-[30px] ${darkMode?'text-[white]':'text-[#1E1B39]'} `}>
            Almost done! Finish your Cover Letter.
          </p>
          <div className="flex flex-wrap gap-[16px] md:gap-[20px] ">
            {halfwayActivities.map((activity) => (
              <div
                key={activity.id}
                className={`items-center flex flex-col sm:flex-row justify-between w-full sm:w-fit gap-[12px] md:gap-[20px] ${darkMode?'bg-[#23272F]':'bg-[#F7F7FB]'} border ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} rounded-[20px] p-[12px]`}
              >
                {/* Resume Image */}
                <img
                  alt="resume"
                  className="
                    w-[250px]
                    sm:w-[140px]
                    md:w-[170px]
                    border border-[#DCDCDC] rounded-[15px]
                    mx-auto sm:mx-0
                    h-[249.74px]
                  "
                  src={activity.resumeImage}
                />
                {/* Details */}
                <div className="flex flex-col justify-between w-full sm:w-fit h-auto sm:h-42 mx-auto sm:mx-0">
                  <div className="flex flex-col gap-[10px] md:gap-[20px]">
                    <div className={`flex gap-[8px] md:gap-[10px] p-[10px] md:p-[15px] rounded-[9px] ${darkMode?'text-[white]':'text-[#1E1B39]'} ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'}  w-fit font-inter font-semibold text-[16px] md:text-[19.2px]`}>
                     {
                      darkMode?activity.darkIcon:
                       <img
                        src="/Icons/Sidebar/MyResume.svg"
                        alt="resume"
                        className="w-[16px] md:w-[20px] fill-[#00A6F4]"
                      />
                     }
                      {activity.type}
                    </div>
                    <p className={`text-[14px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                      <span className="font-bold font-inter">
                        Creation Date:
                      </span>{" "}
                      {activity.creationDate}
                    </p>
                  </div>
                  <div
                    className={`flex justify-center gap-[10px] border border-[#00A6F4] w-full py-[5px] rounded-full ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} text-[#00A6F4] font-inter font-semibold text-[16px] md:text-[19.2px] cursor-pointer transition-all hover:scale-95 mt-2 sm:mt-0`}
                    onClick={() => {
                      navigate(`${url}${activity.id}`);
                    }}
                  >
                    Continue Editing
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`box-border p-5 border ${darkMode?'border-[#74D4FF]':'border-[#B8E6FE]'} ${darkMode?'bg-[#00A6F433]':'bg-[#F0F9FF]'}   rounded-[20px] mt-[2vw] `}>
        <div className="inline-flex items-center gap-2 bg-[#00A6F4] text-white text-sm font-medium px-4 py-1.5 rounded mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Recent Activity
        </div>
        {recentActivities.map((activity) => (
          <React.Fragment key={activity.id}>
            <div
              className={`flex flex-col lg:flex-row justify-between items-center w-full ${darkMode?'bg-[#23272F]':'bg-[white] '} border  ${darkMode?'border-[#363B45]':'border-[#DCDCDC] '} rounded-[20px] p-[10px] sm:p-[16px] md:p-[20px] gap-4`}
            >
              {/* Resume Image */}
              <img
                src={`${activity.resumeImage}`}
                alt="resume"
                className="
                  w-[250px]
                  sm:w-[140px]
                  md:w-[170px]
                  border border-[#DCDCDC] rounded-[15px]
                  h-[249.74px]
                "
              />
              {/* Details */}
              <div className="flex flex-col gap-[10px] sm:gap-[18px] md:gap-[25px]">
                <div className={`flex gap-[6px] sm:gap-[8px] md:gap-[10px] border border-[#00A6F4] px-[12px] sm:px-[14px] md:px-[18px] py-[4px] sm:py-[5px] rounded-full ${darkMode?'bg-[#23272F]':'bg-[white] '}  w-fit text-[#00A6F4] font-inter font-semibold text-[15px] sm:text-[17px] md:text-[19.2px]`}>
                 {
                  darkMode?activity.darkIcon:
                   <img
                    src={`${activity.icon}`}
                    alt="resume"
                    className="w-[16px] sm:w-[18px] md:w-[20px] fill-[#00A6F4]"
                  />
                 }
                  {activity.type}
                </div>
                <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[20px]">
                  <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                    <span className="font-bold font-inter">⁃ Name:</span>{" "}
                    {activity.name}
                  </p>
                  <p className={`text-[13px] sm:text-[15px] md:text-[16px]  ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                    <span className="font-bold font-inter">⁃ Job Role:</span>{" "}
                    {activity.jobRole}
                  </p>
                  <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                    <span className="font-bold font-inter">⁃ Experience:</span>{" "}
                    {activity.experience}
                  </p>
                  <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                    <span className="font-bold font-inter">⁃ Creation Date:</span>{" "}
                    {activity.creationDate}
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto">
                {/* print edit email whatsapp */}
                <div className="flex flex-row  sm:flex-row justify-between w-full gap-2 sm:gap-4">
                  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#336EE7] border-[#336EE7] ${darkMode?'bg-[#336EE70D]':'bg-[white] '}`}
                    onClick={() => {
                      navigate(`${url}${activity.id}`)
                    }}>
                    <img src="/Icons/Edit.svg" alt="edit" className="w-4 sm:w-5 md:w-6" />
                    Edit
                  </div>
                  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#FE9A00] border-[#FE9A00] ${darkMode?'bg-[#FE9A000D]':'bg-[white] '}`}>
                    <img src="/Icons/print.svg" alt="print" className="w-4 sm:w-5 md:w-6" />
                    Print
                  </div>
                  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#9810FA] border-[#9810FA]  ${darkMode?'bg-[#9810FA0D]':'bg-[white] '}`}>
                    <img src="/Icons/mail.svg" alt="mail" className="w-4 sm:w-5 md:w-6" />
                    Email
                  </div>
                  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-5 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#00A63E] border-[#00A63E] ${darkMode?'bg-[#9810FA0D]':'bg-[white] '}`}>
                    <img src="/Icons/whatsapp.svg" alt="whatsapp" className="w-4 sm:w-5 md:w-6" />
                    Whatsapp
                  </div>
                </div>
                {/* download and ats */}
                <div style={{ width: '100%', border: '1px solid #DCDCDC', height: '0' }}></div>
                <div className="flex items-center justify-evenly box-border">
                  {/* download */}
                  <div className={`w-[100%] px-2 py-3 sm:px-4 sm:py-4 md:px-2 md:py-5 ${darkMode?'bg-[#1A1D23]':'bg-[#E3F6FF]'}  border ${darkMode?'border-[#363B45]':'border-[#DCDCDC] '}  flex flex-col md:flex-col justify-between rounded-2xl gap-2 sm:gap-4 md:gap-4 shadow-sm`}>
                    <FileTypeSelector id={activity.id} type="pdf" />
                    <div className="font-lexend text-xs sm:text-base md:text-lg border border-[#D3D9DE] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB] w-full">
                      <img
                        src="/Icons/download.svg"
                        alt="download"
                        className="w-5 md:w-6"
                      />
                      Download
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: '0', margin: '1vw 0' }}></div>
          </React.Fragment>
        ))}
      </div>
      {/* <Alltools/> */}
    </>
  );
};

export default MyResumes;
