import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExperienceResume = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the content is expanded

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle between true/false
  };

  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);

  // Array of images and their corresponding URLs
  const expResumes = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.png",
      url: "/resumes_templates/resume_expAndFresher_001",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.png",
      url: "/resumes_templates/resume_expAndFresher_002",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.png",
      url: "/resumes_templates/resume_expAndFresher_003",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.png",
      url: "/resumes_templates/resume_expAndFresher_004",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.png",
      url: "/resumes_templates/resume_expAndFresher_005",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.png",
      url: "/resumes_templates/resume_expAndFresher_006",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.png",
      url: "/resumes_templates/resume_expAndFresher_007",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.png",
      url: "/resumes_templates/resume_expAndFresher_008",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.png",
      url: "/resumes_templates/resume_expAndFresher_009",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.png",
      url: "/resumes_templates/resume_expAndFresher_010",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.png",
      url: "/resumes_templates/resume_expAndFresher_011",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.png",
      url: "/resumes_templates/resume_expAndFresher_012",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.png",
      url: "/resumes_templates/resume_expAndFresher_013",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.png",
      url: "/resumes_templates/resume_expAndFresher_014",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.png",
      url: "/resumes_templates/resume_expAndFresher_015",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_16.png",
      url: "/resumes_templates/resume_expAndFresher_016",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_17.png",
      url: "/resumes_templates/resume_expAndFresher_017",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_18.png",
      url: "/resumes_templates/resume_expAndFresher_018",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_19.png",
      url: "/resumes_templates/resume_expAndFresher_019",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_20.png",
      url: "/resumes_templates/resume_expAndFresher_020",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_21.png",
      url: "/resumes_templates/resume_expAndFresher_021",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_22.png",
      url: "/resumes_templates/resume_expAndFresher_022",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_23.png",
      url: "/resumes_templates/resume_expAndFresher_023",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_24.png",
      url: "/resumes_templates/resume_expAndFresher_024",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_25.png",
      url: "/resumes_templates/resume_expAndFresher_025",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_26.png",
      url: "/resumes_templates/resume_expAndFresher_026",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_27.png",
      url: "/resumes_templates/resume_expAndFresher_027",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_28.png",
      url: "/resumes_templates/resume_expAndFresher_028",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_29.png",
      url: "/resumes_templates/resume_expAndFresher_029",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_30.png",
      url: "/resumes_templates/resume_expAndFresher_030",
    },
  ];

  // Show only the first 10 expResumes when not expanded
  const visibleexpResumes = isExpanded ? expResumes : expResumes.slice(0, 20);

  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };
  return (
    <div className="flex flex-col items-center gap-[30px] w-full bg-[#F8F0FF] border border-[#DAB2FF] rounded-[30px] px-[50px] py-[30px] ">
      <p className="font-manrope font-extrabold text-[30px] text-center">
        Experience & Freshers
      </p>

      <div className="w-full flex flex-wrap space-y-10 items-center justify-between ">
        {/* Resume Cards */}
        {visibleexpResumes.map((resume, index) => (
          <div
            key={index}
            className="group w-[221px] h-[288px] overflow-hidden relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] "
            onClick={() => openPopup(resume.img, resume.url)}
          >
            {/* Resume Image */}
            <img
              src={resume.img}
              className="w-full"
              alt={`Resume ${index + 1}`}
            />

            {/* Black Fade */}
            <div className="w-full h-full transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] absolute top-0 rounded-[5px] "></div>

            {/* Select Button with Router Link */}
            <Link
              to={resume.url}
              className="absolute bottom-3 left-5 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
              onClick={(e) => e.stopPropagation()} // Prevents popup trigger
            >
              Select This Template
            </Link>

            {/* Zoom Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <img src="/Icons/zoom.svg" className="w-10" alt="Zoom Icon" />
            </div>
          </div>
        ))}
      </div>

      {popupImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] transform transition-all duration-300 scale-100 hover:scale-[1.02]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-transform duration-300 hover:rotate-90 shadow-lg cursor-pointer"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="max-h-[80vh] overflow-y-auto custom-scrollbar p-4">
              <img
                src={popupImage}
                alt="Expanded Resume"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Select Button */}
            <div className="p-6 text-center bg-gray-50">
              <Link
                to={popupBtn}
                className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                Select This Template
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* "See More" Button */}
      <div className="flex justify-center mt-6">
        <p
          onClick={toggleContent}
          className="flex items-center gap-[8px] px-[12px] py-[2.4px] border-3 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-[13.68px] cursor-pointer transition hover:bg-[#3367E7] hover:text-white"
        >
          {isExpanded ? "See Less" : "See More"}
          <img
            src="/img/toolsDownArr.svg"
            className={`w-[12px] transition-transform transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            alt="arrow"
          />
        </p>
      </div>
    </div>
  );
};

export default ExperienceResume;
