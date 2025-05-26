import {  useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ProgressIndicator from "../commonComponents/ProgressIndicator";

const RightSectionAtsTempDownload = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const [templateUrl, setTemplateUrl] = useState("");
  const [templatePopupOpen, setTemplatePopupOpen] = useState(false);

  const handleOpenTemplates = () => setTemplatePopupOpen(true);
  const handleCloseTemplates = () => setTemplatePopupOpen(false);

  const expResumes = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_1",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_2",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_3",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_4",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_5",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_6",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_7",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_8",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_9",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_10",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_11",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_12",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_13",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_14",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_15",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_16.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_16",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_17.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_17",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_18.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_18",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_19.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_19",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_20.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_20",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_21.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_21",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_22.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_22",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_23.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_23",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_24.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_24",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_25.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_25",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_26.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_26",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_27.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_27",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_28.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_28",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_29.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_29",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_30.avif",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_30",
    },
  ];


    if (templateUrl && templateUrl !== location.pathname) {
      navigate(templateUrl);
    }
  

 


  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);
  const openPopup = (img, url) => {
    setPopupImage(img);
    setTemplateUrl(url);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };
  return (
    <div className="w-full max-w-[242px] h-auto flex flex-col gap-4 relative sticky top-[1vw]">
      {/* ATS Progress Card */}
      <div className="w-full h-[143px] px-2 py-6 bg-white border border-[#DCDCDC] text-xl sm:text-2xl font-manrope font-bold flex items-center justify-center gap-5 rounded-[30px] shadow-sm">
        <p>ATS</p>
        <ProgressIndicator percentage={10} />
      </div>

      {/* Recommend Templates */}
      <div className="w-full bg-[#FFD230] flex flex-col items-center justify-center rounded-[20px] overflow-hidden">
        <p className="text-xs sm:text-sm font-inter font-medium py-2">
          Recommend Templates
        </p>
        <div className="flex flex-col gap-3 items-center bg-white p-3 w-full rounded-[10px] border border-[#DCDCDC]">
          <img
            loading="lazy"
            src="/img/demoCL.avif"
            alt="img"
            className="w-full rounded-[10px] border border-[#DCDCDC]"
          />
          {/* Updated Show All Button */}
          <p
            className="flex items-center gap-2 px-3 py-1 border-2 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-xs sm:text-sm cursor-pointer transition hover:bg-[#3367E7] hover:text-white"
            onClick={handleOpenTemplates}
          >
            Show All
          </p>
        </div>
        {/* Template Popup */}
        {templatePopupOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Left side blur */}
            <div
              className="relative w-[20%] bg-black/30 backdrop-blur-sm cursor-pointer"
              onClick={handleCloseTemplates}
            >
              <button
                title="Left Button"
                className="absolute top-1/2 -right-5   z-40 group flex justify-center items-center   w-11 h-11 transition-all duration-500 rounded-full  bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:scale-90 cursor-pointer"
              >
                <svg
                  className="h-6 w-6 text-white group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Right side white panel */}
            <div className=" w-[80%] bg-[#F7F7FB] h-full p-[50px] overflow-y-auto cursor-pointer">
              <h2 className="font-lexend text-[35px] font-bold mb-6">
                Select Templates
              </h2>

              {/* Example templates */}
              <div className="w-full flex flex-wrap gap-[35px] items-center justify-center ">
                {expResumes.map((resume, index) => (
                  <div
                    key={index}
                    className="group w-[221px] h-[288px] overflow-hidden relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] "
                    onClick={() => openPopup(resume.img, resume.url)}
                  >
                    {/* Resume Image */}
                    <img
                    loading="lazy"
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
                      onClick={(e) => {
                            setTemplateUrl(resume.url);
                        e.stopPropagation();
                        handleCloseTemplates();
                        closePopup();
                      }}
                    >
                      Select This Template
                    </Link>

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <img
                        src="/Icons/zoom.svg"
                        className="w-10"
                        alt="Zoom Icon"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
                loading="lazy"
                  src={popupImage}
                  alt="Expanded Resume"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Select Button */}
              <div className="p-6 text-center bg-gray-50">
                <Link
                  to={templateUrl}
                  className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                  onClick={(e) => {
                            // setTemplateUrl(resume.url);
                    e.stopPropagation();
                    handleCloseTemplates();
                    closePopup();
                  }}
                >
                  Select This Template
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download, Print, Mail, WhatsApp Actions */}
      <div className="w-full bg-[#FFFFFF] flex flex-col gap-3 items-center justify-center rounded-[16px] border border-[#DCDCDC] p-4">
        <div className="w-full font-lexend text-base border border-[#D3D9DE] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:from-[#2F61D3] hover:to-[#4387E5]">
          <img src="/Icons/download.svg" alt="download" />
          Download
        </div>

        <div className="flex justify-between w-full gap-2">
          <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#FE9A00] bg-[#FFFAF2] hover:bg-[#FFF5E6]">
            <img src="/Icons/print.svg" alt="printer" className="w-6 sm:w-8" />
          </div>
          <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#9810FA] bg-[#FAF3FF] hover:bg-[#F5E9FF]">
            <img src="/Icons/mail.svg" alt="mail" className="w-6 sm:w-8" />
          </div>
          <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#00A63E] bg-[#F2FBF5] hover:bg-[#E6F8EB]">
            <img
              src="/Icons/whatsapp.svg"
              alt="whatsapp"
              className="w-6 sm:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSectionAtsTempDownload;
