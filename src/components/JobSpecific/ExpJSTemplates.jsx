import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExpJSTemplates = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the content is expanded

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle between true/false
  };

  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);

  // Array of images and their corresponding URLs
  const expResumes = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate001/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate002/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate003/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate004/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate005/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate006/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate007/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate008/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate009/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate010/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate011/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate012/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate013/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate014/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate015/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_16.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate016/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_17.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate017/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_18.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate018/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_19.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate019/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_20.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate020/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_21.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate021/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_22.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate022/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_23.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate023/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_24.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate024/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_25.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate025/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_26.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate026/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_27.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate027/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_28.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate028/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_29.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate029/steps",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_30.avif",
      url: "/job_specific_resume/templates/Exp&FresherTemplate030/steps",
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
    <div className="flex flex-col items-center gap-[30px] w-full bg-[#774b352c] border border-[#774B35] rounded-[30px] px-[50px] py-[30px] ">
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

export default ExpJSTemplates;
