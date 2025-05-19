import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CoverLetterTemplates = () => {
  const navigate = useNavigate();

  const [enterManually, setEnterManually] = useState(false);
  const [fetchFromResume, setFetchFromResume] = useState(false);
  const [continueToSteps, setContinueToSteps] = useState(false);
  const [fileName, setFileName] = React.useState(null);

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
    <>
      <section className="max-w-[1340px] mx-auto flex flex-col justify-center items-center gap-[30px] lg:gap-[50px] py-[50px] text-[#212529] px-4 sm:px-6">
        <p className="text-[#212529] font-lexend font-semibold text-xl sm:text-3xl md:text-[28px] lg:text-[30px] text-center   mx-auto  ">
          Select a Template & Let{" "}
          <span className="blueGradient font-black inline-flex items-center gap-1.5">
            <img
              src="/Icons/aiStar.svg"
              alt="AI"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
            AI
          </span>{" "}
          Write the Perfect Cover Letter!
        </p>
        <div className="relative w-full px-4 sm:px-0 ">
          <div className="relative z-1 flex flex-col gap-6 sm:gap-[35px] w-full max-w-[981px] mx-auto p-4 sm:p-[50px] pb-8 sm:pb-[70px] rounded-2xl sm:rounded-[34px] bg-[#f1fcdb] border border-[#9AE600] shadow-[0px_5px_16px_rgba(8,15,52,0.06)]">
            <div className="flex flex-col gap-6 sm:gap-10 place-items-center">
              <h2 className="font-manrope text-xl sm:text-[25px] font-bold text-center">
                Select Options
              </h2>

              {/* options - mobile optimized with visible images */}
              <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[50px] text-[#212529] w-full">
                {/* Enter manually - mobile optimized */}
                <div
                  className={`relative flex items-center w-full sm:w-[300px] h-32 sm:h-[186px] bg-white p-4 cursor-pointer rounded-xl sm:rounded-[16px] overflow-hidden ${
                    enterManually
                      ? "border-4 border-[#336EE7]"
                      : "border border-[#dcdcdc]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnterManually();
                  }}
                >
                  <p className="font-bold text-lg sm:text-[25px] font-manrope ml-4 sm:ml-7">
                    Enter data <br /> manually
                  </p>

                  {/* Mobile-optimized keyboard icon */}
                  <img
                    src="/Icons/keyboard.svg"
                    alt="keyboard"
                    className="absolute bottom-0 right-0 w-20 sm:w-auto sm:-bottom-3 sm:-right-5"
                  />

                  <img
                    src={`/Icons/${
                      enterManually ? "Select.svg" : "unSelect.svg"
                    }`}
                    alt="selection"
                    className="absolute top-2 left-2 w-6 sm:w-auto cursor-pointer"
                  />
                </div>

                {/* OR Divider - mobile friendly */}
                <div className="w-full sm:w-auto flex sm:flex-col items-center gap-2 font-extrabold font-manrope text-lg sm:text-[20px]">
                  {/* Line before "or" */}
                  <div className="flex-1 sm:flex-none h-px sm:h-full sm:w-px bg-[#8A8D8F]"></div>

                  {/* "or" Text */}
                  <span className="px-2 sm:px-0">or</span>

                  {/* Line after "or" */}
                  <div className="flex-1 sm:flex-none h-px sm:h-full sm:w-px bg-[#8A8D8F]"></div>
                </div>

                {/* Fetch from Resume - mobile optimized */}
                <div
                  className={`relative flex items-center w-full sm:w-[300px] h-32 sm:h-[186px] bg-white p-4 cursor-pointer rounded-xl sm:rounded-[16px] overflow-hidden ${
                    fetchFromResume
                      ? "border-4 border-[#AB2FFF]"
                      : "border border-[#dcdcdc]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFetchData();
                  }}
                >
                  <p className="font-bold text-lg sm:text-[25px] font-manrope ml-4 sm:ml-7">
                    Fetch data from <br /> the resume
                  </p>

                  {/* Mobile-optimized document icon */}
                  <img
                    src="/Icons/document.svg"
                    alt="document"
                    className="absolute bottom-0 right-0 w-16 sm:w-auto sm:-bottom-4 sm:-right-0"
                  />

                  <img
                    src={`/Icons/${
                      fetchFromResume ? "Select2.svg" : "unSelect.svg"
                    }`}
                    alt="selection"
                    className="absolute top-2 left-2 w-6 sm:w-auto cursor-pointer"
                  />
                </div>
              </div>

              {/* File Upload Dropzone - mobile optimized */}
              {fetchFromResume && (
                <label
                  htmlFor="dropzone-file"
                  className={`flex flex-col items-center justify-center w-full h-40 sm:h-52 border-4 border-[#AB2FFF] bg-white border-dashed rounded-xl sm:rounded-[16px] cursor-pointer hover:bg-gray-100 ${
                    fileName ? "pt-3 sm:pt-5" : "pt-3 sm:pt-5 pb-4 sm:pb-6"
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {fileName ? (
                    <div className="flex flex-col items-center justify-center w-full px-2">
                      <p className="text-base sm:text-[18px] font-inter font-semibold text-gray-700 text-center">
                        {fileName}
                      </p>
                      <button
                        onClick={handleRemove}
                        className="mt-3 sm:mt-4 px-4 sm:px-8 py-1 sm:py-2 font-semibold text-red-500 rounded-full border-2 border-red-500 hover:bg-red-100 border-dashed text-sm sm:text-[18px]"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center px-2">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4 text-gray-500"
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
                      <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-gray-500 text-center">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        PDF or DOCX
                      </p>
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

              {/* Continue Button - mobile optimized */}
              <Link to={"/cover_letter_templates/steps"}>
                {(continueToSteps || fileName) && (
                  <div className="cursor-pointer font-manrope font-bold text-base sm:text-[20px] text-white bg-[#4C95FB] px-6 sm:px-[50px] py-2 sm:py-[10px] rounded-full text-center w-full sm:w-auto">
                    Continue
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoverLetterTemplates;
