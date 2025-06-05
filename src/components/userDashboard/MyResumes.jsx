import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alltools from "./alltools";
import Checkats from "../AIResume/FormSteps/checkAtsComp";
import ProgressIndicator from "../commonComponents/ProgressIndicator";

// ... FileTypeSelector component remains unchanged ...
const FileTypeSelector = ({ id }) => {
  const [selected, setSelected] = useState("pdf");
  return (
    
    <div className="flex flex-row sm:flex-row gap-2 sm:gap-3 justify-around">
      {/* PDF Option */}
      <label className="w-[45%] font-lexend text-xs sm:text-base md:text-lg border border-[#D3D9DE] text-[#212529] px-1 sm:px-3 py-1 sm:py-2 rounded-xl bg-white flex items-center justify-center gap-2 cursor-pointer">
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
      <label className="w-1/2 font-lexend text-xs sm:text-base md:text-lg border border-[#D3D9DE] text-[#212529] px-1 sm:px-3 py-1 sm:py-2 rounded-xl bg-white flex items-center justify-center gap-2 cursor-pointer">
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
  const navigate = useNavigate();
  const [resumePdf, setResumePdf] = useState(null);
  const [openAts, setOpenAts] = useState(false);

  const url = `/resumes_templates/steps/`;

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

  const recentActivities = [
    {
      id: 'RESUME_ExpAndFresher_1',
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "11/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
    },
    {
      id: 'RESUME_ExpAndFresher_2',
      name: "Jarupula Sai Charan",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "20/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
    }
  ];

  return (
    <>
      <div className="my-[1vw] flex flex-col sm:flex-row  items-center justify-between">
        <div className="flex items-center text-[32px] font-bold text-[#1D1B4F] ">
         <span className="z-[10] "> My Resume</span>
          <img
            src="/img/myresumeicon.svg"
            alt="resume icon"
            className="w-7 h-7 -ml-3"
          />
        </div>
        <div className="flex gap-2">
          {/* Left Button - Outlined */}
          <button
            onClick={handleATScheck}
            className="cursor-pointer flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#A000FF] border border-[#A000FF] rounded-full"
          >
            Check ATS Score
          </button>
          {/* ATS POPUP */}
          {openAts && (
            <div
              className="fixed left-0 top-0 w-screen h-screen pt-[15vw] bg-white/10 backdrop-blur-sm z-50"
              onClick={() => setOpenAts(false)}
            >
              <div
                className="mx-auto w-fit"
                onClick={e => e.stopPropagation()}
              >
                <Checkats />
              </div>
            </div>
          )}
          {/* Right Button - Filled */}
          <button className="cursor-pointer flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-[#A000FF] rounded-full"
          onClick={()=>{
            navigate(`/resumes_templates`);
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
            Make a New Resume
          </button>
        </div>
      </div>
      {/* Halfway Activities */}
      {halfwayActivities.length > 0 && (
        <div className="bg-[#F7F7FB] rounded-[20px] px-[10px] sm:px-[14px] md:px-[20px] py-[14px] md:py-[20px] space-y-4 border-3 border-[#dcdcdc] border-dashed">
          <p className="font-inter font-semibold text-[20px] sm:text-[24px] md:text-[30px]">
            Almost done! Finish your resume.
          </p>
          <div className="flex flex-wrap gap-[16px] md:gap-[20px] ">
            {halfwayActivities.map((activity) => (
              <div
                key={activity.id}
                className="items-center flex flex-col sm:flex-row justify-between w-full sm:w-fit gap-[12px] md:gap-[20px] bg-white border border-[#DCDCDC] rounded-[20px] p-[12px]"
              >
                {/* Resume Image */}
                <img
                  alt="resume"
                  className="
                    w-[193.09px]
                    sm:w-[193.09px]
                    md:w-[193.09px]
                    border border-[#DCDCDC] rounded-[15px]
                    mx-auto sm:mx-0
                    h-[249.74px]
                  "
                  src={activity.resumeImage}
                />
                {/* Details */}
                <div className="flex flex-col justify-between w-full sm:w-fit h-auto sm:h-42 mx-auto sm:mx-0">
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
                  <div
                    className="flex justify-center gap-[10px] border border-[#00A6F4] w-full py-[5px] rounded-full bg-[#F0F9FF] text-[#00A6F4] font-inter font-semibold text-[16px] md:text-[19.2px] cursor-pointer transition-all hover:scale-95 mt-2 sm:mt-0"
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
      {/* Recent Activity */}
      <div className="box-border p-5 border-3 border-dashed border-[#9810FA] rounded-[20px] mt-[2vw] bg-[#9810FA0D]">
        <div className="inline-flex items-center gap-2 bg-[#A000FF] text-white text-sm font-medium px-4 py-1.5 rounded mb-5">
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
            {/* Responsive flex: column on mobile/tablet, row on large screens */}
            <div
              className="flex flex-col lg:flex-row justify-between items-center w-full bg-white border border-[#DCDCDC] rounded-[20px] p-[10px] sm:p-[16px] md:p-[20px] gap-4"
            >
              {/* Resume Image */}
              <img
                src={`${activity.resumeImage}`}
                alt="resume"
                className="
                  w-[193.09px]
                  sm:w-[193.09px]
                  md:w-[193.09px]
                  border border-[#DCDCDC] rounded-[15px]
                  h-[249.74px]
                "
              />
              {/* Details */}
              <div className="flex flex-col gap-[10px] sm:gap-[18px] md:gap-[25px]">
                <div className="flex gap-[6px] sm:gap-[8px] md:gap-[10px] border border-[#00A6F4] px-[12px] sm:px-[14px] md:px-[18px] py-[4px] sm:py-[5px] rounded-full bg-[#F0F9FF] w-fit text-[#00A6F4] font-inter font-semibold text-[15px] sm:text-[17px] md:text-[19.2px]">
                  <img
                    src={`${activity.icon}`}
                    alt="resume"
                    className="w-[16px] sm:w-[18px] md:w-[20px] fill-[#00A6F4]"
                  />
                  {activity.type}
                </div>
                <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[20px]">
                  <p className="text-[13px] sm:text-[15px] md:text-[16px] ">
                    <span className="font-bold font-inter">⁃ Name:</span>{" "}
                    {activity.name}
                  </p>
                  <p className="text-[13px] sm:text-[15px] md:text-[16px] ">
                    <span className="font-bold font-inter">⁃ Job Role:</span>{" "}
                    {activity.jobRole}
                  </p>
                  <p className="text-[13px] sm:text-[15px] md:text-[16px] ">
                    <span className="font-bold font-inter">⁃ Experience:</span>{" "}
                    {activity.experience}
                  </p>
                  <p className="text-[13px] sm:text-[15px] md:text-[16px] ">
                    <span className="font-bold font-inter">⁃ Creation Date:</span>{" "}
                    {activity.creationDate}
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto">
                {/* print edit email whatsapp */}
                {/* CHANGED: flex-col for mobile, flex-row for sm and up */}
                <div className="flex flex-row sm:flex-row justify-between w-full gap-2 sm:gap-4">
                  <div className="max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#336EE7] border-[#336EE7] bg-[#F8FDFF]"
                    onClick={() => {
                      navigate(`${url}${activity.id}`)
                    }}>
                    <img src="/Icons/Edit.svg" alt="edit" className="w-4 sm:w-5 md:w-6" />
                    Edit
                  </div>
                  <div className="max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#FE9A00] border-[#FE9A00] bg-[#FFFAF2]">
                    <img src="/Icons/print.svg" alt="print" className="w-4 sm:w-5 md:w-6" />
                    Print
                  </div>
                  <div className="max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#9810FA] border-[#9810FA] bg-[#FAF3FF]">
                    <img src="/Icons/mail.svg" alt="mail" className="w-4 sm:w-5 md:w-6" />
                    Email
                  </div>
                  <div className="max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-5 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#00A63E] border-[#00A63E] bg-[#F2FBF5]">
                    <img src="/Icons/whatsapp.svg" alt="whatsapp" className="w-4 sm:w-5 md:w-6" />
                    Whatsapp
                  </div>
                </div>
                {/* download and ats */}
                <div style={{ width: '100%', border: '1px solid #DCDCDC', height: '0' }}></div>
                {/* CHANGED: flex-col for mobile, flex-row for md and up */}
                <div className="flex flex-col md:flex-row items-center justify-evenly box-border">
                  {/* ATS Progress Card */}
                <div className="w-full lg:w-[45%] px-2 py-3 sm:px-4 sm:py-4 md:px-2 md:py-5 bg-white border border-[#DCDCDC] text-xl sm:text-2xl font-manrope font-bold flex items-center justify-center gap-5 rounded-2xl shadow-sm">
  <p>ATS</p>
  <ProgressIndicator percentage={10} />
</div>
                  {/* download */}
                  <div className="w-full lg:w-[45%] px-2 py-3 sm:px-4 sm:py-4 md:px-2 md:py-5 bg-white border border-[#DCDCDC] flex flex-col md:flex-col justify-between rounded-2xl gap-2 sm:gap-4 md:gap-4 shadow-sm">
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
            <div style={{ width: "100%", border: '1px solid #9810FA', height: '0', margin: '1vw 0' }}></div>
          </React.Fragment>
        ))}
      </div>
      {/* <Alltools/> */}
    </>
  );
};

export default MyResumes;
