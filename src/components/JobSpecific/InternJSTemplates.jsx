import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../commonComponents/usercontext";

const InternJSTemplates = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the content is expanded
 const{darkMode} = useUser();
  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle between true/false
  };

  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);

  // Array of images and their corresponding URLs
  const InternResumes = [
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_1.avif",
      url: "/job_specific_resume/templates/InternTemplate001/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_2.avif",
      url: "/job_specific_resume/templates/InternTemplate002/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_3.avif",
      url: "/job_specific_resume/templates/InternTemplate003/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_4.avif",
      url: "/job_specific_resume/templates/InternTemplate004/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_5.avif",
      url: "/job_specific_resume/templates/InternTemplate005/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_6.avif",
      url: "/job_specific_resume/templates/InternTemplate006/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_7.avif",
      url: "/job_specific_resume/templates/InternTemplate007/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_8.avif",
      url: "/job_specific_resume/templates/InternTemplate008/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_9.avif",
      url: "/job_specific_resume/templates/InternTemplate009/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_10.avif",
      url: "/job_specific_resume/templates/InternTemplate010/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_11.avif",
      url: "/job_specific_resume/templates/InternTemplate011/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_12.avif",
      url: "/job_specific_resume/templates/InternTemplate012/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_13.avif",
      url: "/job_specific_resume/templates/InternTemplate013/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_14.avif",
      url: "/job_specific_resume/templates/InternTemplate014/steps",
    },
    {
      img: "/ResumesTempImg/Intern/HighImg/RESUME_INTERN_15.avif",
      url: "/job_specific_resume/templates/InternTemplate015/steps",
    },
  ];

  // Show only the first 10 InternResumes when not expanded
  const visibleInternResumes = isExpanded
    ? InternResumes
    : InternResumes.slice(0, 10);

  // Open popup with the clicked image
  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };

  return (
    <div className={`flex flex-col items-center gap-[30px] w-full ${darkMode?'bg-[#74D4FF33]':'bg-[#E3F6FF]'}  border border-[#74D4FF] rounded-[30px] px-[50px] py-[30px] `}>
      <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'}  font-manrope font-extrabold text-[30px] text-center`}>
        Intern
      </p>

      <div className="w-full flex flex-wrap gap-[43px] items-center justify-center">
        {/* Resume Cards */}
        {visibleInternResumes.map((resume, index) => (
          <div
            key={index}
            className="group w-[192px] h-[250px] overflow-hidden relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] "
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
              className="absolute bottom-3 left-1.5 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
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

      {/* Full-Screen Popup */}

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
          className={`${darkMode?'bg-[black]':'bg-[#F8F0FF]'} ${darkMode?'text-[white]':'text-[black]'} flex items-center gap-[8px] px-[12px] py-[2.4px] border-3 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-[13.68px] cursor-pointer transition hover:bg-[#3367E7] hover:text-white`}
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

export default InternJSTemplates;
