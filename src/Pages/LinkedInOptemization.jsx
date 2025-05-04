import React, { useState } from "react";

const LinkedInOptemization = () => {
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
    <section className="relative w-full mx-auto flex flex-col justify-center items-center gap-[50px] py-[50px] text-[#212529] bg-[#F7F7FB]">
      <p className="font-lexend font-semibold text-[30px] flex gap-3">
        Build a Job-Ready
        <span className="blueGradient flex items-center gap-1">Linkedin</span>
        Profile in Minutes with AI
      </p>

      <div className="relative">
        <div className="relative z-1 flex flex-col gap-[35px] w-[981px] mx-auto p-[50px] pb-[70px] bg-[#E3F6FF] rounded-[34px] border border-[#74D4FF] [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]">
          <div className="flex flex-col gap-10 place-items-center ">
            <h2 className=" font-manrope text-[25px] font-bold text-center">
              Select Options
            </h2>
            {/* options */}
            <div className=" flex items-center justify-center gap-[50px] text-[#212529] ">
              <div
                className={`w-[300px] h-[186px] relative flex items-center bg-white p-4 cursor-pointer  rounded-[16px] overflow-hidden ${
                  enterManually
                    ? "border-4 border-[#336EE7]"
                    : "border border-[#dcdcdc]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnterManually();
                }}
              >
                <p className=" font-bold text-[25px] font-manrope ml-7">
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

              <div className="h-48  font-extrabold font-manrope text-[20px] flex flex-col items-center gap-2 ">
                <div className="h-full border-l w-fit border-[#8A8D8F] "></div>
                or
                <div className="h-full border-l w-fit border-[#8A8D8F]"></div>
              </div>

              <div
                className={`w-[300px] h-[186px] relative flex items-center bg-white p-4 cursor-pointer  rounded-[16px] overflow-hidden ${
                  fetchFromResume
                    ? "border-4 border-[#AB2FFF]"
                    : "border border-[#dcdcdc]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFetchData();
                }}
              >
                <p className=" font-bold text-[25px] font-manrope ml-7">
                  Fetch data from <br /> the resume
                </p>

                <img
                  src="/Icons/document.svg"
                  alt="keyboard"
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

            {/* fetchdata */}

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

            {/* continue btn */}
            {(continueToSteps || fileName) && (
              <div className="cursor-pointer font-manrope font-bold text-[20px] text-white bg-[#4C95FB] px-[50px] py-[10px] rounded-full">
                Continue
              </div>
            )}
          </div>
        </div>

        <img
          src="/ToolsImg/5.png"
          alt=""
          className="w-[130px] rotate-[-30deg] absolute left-[-85px] top-[20px]"
        />
      </div>

      <p className="w-lg mx-auto text-center text-gray-500 font-inter text-[16px] mt-5 ">
        Whether you're job hunting or building your personal brand, we've got
        your LinkedIn covered. — in simple steps.
      </p>
    </section>
  );
};

export default LinkedInOptemization;
