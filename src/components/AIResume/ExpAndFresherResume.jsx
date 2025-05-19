import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpAndFresherResume = () => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const [templateUrl, setTemplateUrl] = useState("");
  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [enterManually, setEnterManually] = useState(false);
  const [fetchFromResume, setFetchFromResume] = useState(false);
  const [continueToSteps, setContinueToSteps] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const expResumes = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_1",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_2",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_3",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_4",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_5",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_6",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_7",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_8",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_9",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_10",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_11",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_12",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_13",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_14",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_15",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_16.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_16",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_17.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_17",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_18.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_18",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_19.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_19",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_20.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_20",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_21.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_21",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_22.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_22",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_23.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_23",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_24.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_24",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_25.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_25",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_26.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_26",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_27.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_27",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_28.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_28",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_29.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_29",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_30.png",
      url: "/resumes_templates/steps/RESUME_ExpAndFresher_30",
    },
  ];

  const visibleexpResumes = isExpanded ? expResumes : expResumes.slice(0, 20);

  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };

  const handleUrlForBtn = (templateUrl) => {
    setTemplateUrl(templateUrl);
    setShowSelectOptions(true);
  };

  const closeSelectOptions = () => {
    setShowSelectOptions(false);
  };

  const handleEnterManually = () => {
    setContinueToSteps(!continueToSteps);
    setEnterManually(!enterManually);
    setFetchFromResume(false);
  };

  const handleFetchData = () => {
    setEnterManually(false);
    setContinueToSteps(false);
    setFetchFromResume(!fetchFromResume);
  };

  const [fileName, setFileName] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFileName(file.name);
    } else {
      alert("Please upload only PDF or DOCX files.");
      setFileName(null);
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileName(null);
    document.getElementById("dropzone-file").value = "";
  };

  return (
    <div className="flex flex-col items-center gap-[30px] w-full bg-[#F8F0FF] border border-[#DAB2FF] rounded-[30px] px-[50px] py-[30px] ">
      <p className="font-manrope font-extrabold text-[30px] text-center">
        Experience & Freshers
      </p>

      <div className="w-full flex flex-wrap space-y-10 items-center justify-between ">
        {visibleexpResumes.map((resume, index) => (
          <div
            key={index}
            className="group w-[221px] h-[288px] overflow-hidden relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] rounded-[10px]"
            onClick={() => openPopup(resume.img, resume.url)}
          >
            <img
              src={resume.img}
              className="w-full"
              alt={`Resume ${index + 1}`}
            />
            <div className="w-full h-full transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] absolute top-0 rounded-[5px]"></div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleUrlForBtn(resume.url);
              }}
              className="absolute bottom-3 left-5 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
            >
              Select This Template
            </div>
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
            <button
              className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-transform duration-300 hover:rotate-90 shadow-lg cursor-pointer"
              onClick={closePopup}
            >
              ✕
            </button>
            <div className="max-h-[80vh] overflow-y-auto custom-scrollbar p-4">
              <img
                src={popupImage}
                alt="Expanded Resume"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-6 text-center bg-gray-50">
              <div
                className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUrlForBtn(popupBtn);
                }}
              >
                Select This Template
              </div>
            </div>
          </div>
        </div>
      )}

      {showSelectOptions && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 select-none"
          onClick={closeSelectOptions}
        >
          <div
            className="relative w-fit bg-[#f3f4f6] rounded-2xl shadow-2xl p-6 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-5 place-items-center">
              <h2 className="font-manrope text-[20px] font-bold text-center">
                Select Options
              </h2>
              <div className="flex items-center justify-center gap-[50px] text-[#212529]">
                <div
                  className={`w-[300px] h-[186px] relative flex items-center bg-white p-4 cursor-pointer rounded-[16px] overflow-hidden ${
                    enterManually
                      ? "border-4 border-[#336EE7]"
                      : "border border-[#dcdcdc]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnterManually();
                  }}
                >
                  <p className="font-bold text-[25px] font-manrope ml-7">
                    Enter data <br /> manually
                  </p>
                  <img
                    src="/Icons/keyboard.svg"
                    alt="keyboard"
                    className="absolute -bottom-3 -right-5"
                  />
                  <img
                    src={`/Icons/${
                      enterManually ? "Select.svg" : "unSelect.svg"
                    }`}
                    alt="selection"
                    className="absolute top-2 left-2 cursor-pointer"
                  />
                </div>
                <div className="h-48 font-extrabold font-manrope text-[20px] flex flex-col items-center gap-2">
                  <div className="h-full border-l w-fit border-[#8A8D8F]"></div>
                  or
                  <div className="h-full border-l w-fit border-[#8A8D8F]"></div>
                </div>
                <div
                  className={`w-[300px] h-[186px] relative flex items-center bg-white p-4 cursor-pointer rounded-[16px] overflow-hidden ${
                    fetchFromResume
                      ? "border-4 border-[#AB2FFF]"
                      : "border border-[#dcdcdc]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFetchData();
                  }}
                >
                  <p className="font-bold text-[25px] font-manrope ml-7">
                    Fetch data from <br /> the resume
                  </p>
                  <img
                    src="/Icons/document.svg"
                    alt="document"
                    className="absolute -bottom-4 -right-0"
                  />
                  <img
                    src={`/Icons/${
                      fetchFromResume ? "Select2.svg" : "unSelect.svg"
                    }`}
                    alt="selection"
                    className="absolute top-2 left-2 cursor-pointer"
                  />
                </div>
              </div>
              {fetchFromResume && (
                <label
                  htmlFor="dropzone-file"
                  className={`flex flex-col items-center justify-center w-full h-52 border-4 border-[#AB2FFF] bg-white border-dashed rounded-[16px] cursor-pointer hover:bg-gray-100 ${
                    fileName ? "pt-5" : "pt-5 pb-6"
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {fileName ? (
                    <div className="flex flex-col items-center justify-center w-full">
                      <p className="text-[18px] font-inter font-semibold text-gray-700">
                        {fileName}
                      </p>
                      <button
                        onClick={handleRemove}
                        className="mt-4 px-8 py-2 font-semibold text-red-500 rounded-full border-2 border-red-500 hover:bg-red-100 border-dashed text-[18px]"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        className="w-15 h-15 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF or DOCX</p>
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              )}
              {(continueToSteps || fileName) && (
                <div
                  onClick={() => navigate(templateUrl)}
                  className="cursor-pointer font-manrope font-bold text-[20px] text-white bg-[#4C95FB] px-[50px] py-[10px] rounded-full"
                >
                  Continue
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

export default ExpAndFresherResume;
