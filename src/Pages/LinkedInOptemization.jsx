import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../components/commonComponents/usercontext";

const LinkedInOptemization = () => {
  const [enterManually, setEnterManually] = useState(false);
  const [fetchFromResume, setFetchFromResume] = useState(false);
  const [continueToSteps, setContinueToSteps] = useState(false);
  const [fileName, setFileName] = React.useState(null);
  const {darkMode} = useUser(); 

  // handle mandulay sta option
  const handleEnterManually = () => {
    setContinueToSteps(!continueToSteps);
    setEnterManually(!enterManually);
    setFetchFromResume(false);
  };

  // handle fetch data  option
  const handleFetchData = () => {
    setEnterManually(false);
    setContinueToSteps(false);
    setFetchFromResume(!fetchFromResume);
  };

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
    <section className={`relative w-full mx-auto flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-[50px] py-10 sm:py-12 md:py-[50px] ${darkMode?'text-[white]':'text-[#1E1B39]'} ${darkMode?'bg-[#23272F]':'bg-white'} px-4`}>
      <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-lexend font-semibold text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] text-center md:text-left mx-auto `}>
        Build a Job-Ready{" "}
        <span className="blueGradient  inline-flex items-center gap-1.5">
          Linkedin
        </span>{" "}
        Profile in Minutes with AI
      </p>

      <div className="relative w-fit ">
        <img
          src="/ToolsImg/5.png"
          alt=""
          className="w-[80px] sm:w-[100px] md:w-[130px] rotate-[-30deg] absolute left-[-50px] sm:left-[-50px] md:left-[-85px] top-[10px] sm:top-[15px] md:top-[20px]  sm:block"
        />

        <div className={`relative z-1 flex flex-col gap-6 md:gap-[35px] w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:w-[981px] mx-auto p-6 sm:p-8 md:p-[50px] md:pb-[70px] ${darkMode?'bg-[#1A1D23]':'bg-[#E3F6FF]'} rounded-[24px] sm:rounded-[34px] border ${darkMode?'border-[#1A1D23]':'border-[#74D4FF]'}  [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]`}>
          <div className="flex flex-col gap-6 md:gap-10 place-items-center ">
            <h2 className="font-manrope text-xl sm:text-2xl md:text-[25px] font-bold text-center">
              Select Options
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-8 md:gap-[50px] text-[#212529] w-full">
              {/* Card 1: Enter data manually */}
              <div
                className={`w-full max-w-md sm:w-[300px] h-[120px] md:h-[140px] lg:h-[170px]  relative flex items-center ${darkMode?'bg-[#1A1D23]':'bg-[white]'} p-3 sm:p-4 cursor-pointer rounded-[16px] overflow-hidden transition-all duration-200 ease-in-out ${
                  enterManually
                    ? "border-4 border-[#336EE7]"
                    :  `border ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} `
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnterManually();
                }}
              >
                <img
                  src={`/Icons/${
                    enterManually ? "Select.svg" : "unSelect.svg" // Assuming these are your radio-like selection images
                  }`}
                  alt="selection"
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" // Radio icon on the left
                />
                <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} flex-grow font-bold  sm:text-base md:text-lg font-manrope text-left`}>
                  {" "}
                  Enter data <br className="hidden sm:inline" /> manually{" "}
                </p>
                <img
                  src="/Icons/keyboard.svg"
                  alt="keyboard"
                  className="relative lg:absolute lg:-right-5 lg:-bottom-2 lg:w-32  w-10 h-auto  sm:w-12  md:w-14  ml-3 sm:ml-4 flex-shrink-0"
                />
              </div>

              {/* OR Divider */}
              <div className="h-auto md:h-32 lg:h-40 font-extrabold font-manrope text-base sm:text-lg md:text-[20px] flex flex-row md:flex-col items-center gap-2 my-4 md:my-0">
                {" "}
                {/* Adjusted height for new card size */}
                <div className="w-1/3 md:w-fit md:h-full border-b md:border-l md:border-b-0 border-[#8A8D8F]"></div>
                or
                <div className="w-1/3 md:w-fit md:h-full border-b md:border-l md:border-b-0 border-[#8A8D8F]"></div>
              </div>

              {/* Card 2: Fetch data from resume */}
              <div
                className={`w-full max-w-md sm:w-[300px] h-[120px] md:h-[140px] lg:h-[170px] relative flex items-center ${darkMode?'bg-[#1A1D23]':'bg-[white]'} p-3 sm:p-4 cursor-pointer rounded-[16px] overflow-hidden transition-all duration-200 ease-in-out ${
                  // Adjusted height, base padding
                  fetchFromResume
                    ? "border-4 border-[#AB2FFF]"
                    :  `border ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} `
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFetchData();
                }}
              >
                <img
                  src={`/Icons/${
                    fetchFromResume ? "Select2.svg" : "unSelect.svg" // Assuming these are your radio-like selection images
                  }`}
                  alt="selection"
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" // Radio icon on the left
                />
                <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} flex-grow font-bold sm:text-base md:text-lg font-manrope text-left`}>
                  {" "}
                  {/* Adjusted text size, flex-grow to take space */}
                  Fetch data from <br className="hidden sm:inline" /> the resume{" "}
                  {/* Hide br on xs if text too long */}
                </p>
                <img
                  src="/Icons/document.svg"
                  alt="document"
                  className="relative lg:absolute lg:-right-5 lg:-bottom-2 lg:w-20  w-10 h-auto  sm:w-12  md:w-14  ml-3 sm:ml-4 flex-shrink-0" // Decorative icon on the right
                />
              </div>
            </div>

            {fetchFromResume && (
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-48 sm:h-52 border-4 border-[#AB2FFF] ${darkMode?'bg-[#23272F]':'bg-white'} border-dashed rounded-[16px] cursor-pointer hover:bg-gray-100 p-4 ${
                  fileName ? "pt-5" : "pt-5 pb-6"
                }`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {fileName ? (
                  <div className="flex flex-col items-center justify-center w-full text-center">
                    <p className="text-sm sm:text-base md:text-[18px] font-inter font-semibold text-gray-700 break-all px-2">
                      {fileName}
                    </p>
                    <button
                      onClick={handleRemove}
                      className="mt-3 sm:mt-4 px-6 sm:px-8 py-1.5 sm:py-2 font-semibold text-red-500 rounded-full border-2 border-red-500 hover:bg-red-100 border-dashed text-sm sm:text-base md:text-[18px]"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 mb-3 sm:mb-4 text-gray-500"
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
                    <p className="mb-2 text-xs sm:text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
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

            <Link to={"/linkedIn_optimization/steps"}>
              {(continueToSteps || fileName) && (
                <div className="cursor-pointer font-manrope font-bold text-base sm:text-lg md:text-[20px] text-white bg-[#4C95FB] px-10 sm:px-12 md:px-[50px] py-2 sm:py-2.5 md:py-[10px] rounded-full">
                  Continue
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <p className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center text-gray-500 font-inter text-sm sm:text-base md:text-[16px] mt-5 px-4 sm:px-0">
        Whether you're job hunting or building your personal brand, we've got
        your LinkedIn covered. — in simple steps.
      </p>
    </section>
  );
};

export default LinkedInOptemization;
