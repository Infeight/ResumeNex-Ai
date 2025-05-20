import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResumeOptimization = () => {
  // Define state for the job role input
  const [jobRole, setJobRole] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setJobRole(e.target.value);
  };

  // handle file drag and drop from here
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
    <section className="relative w-full mx-auto flex flex-col justify-center items-center gap-[30px] lg:gap-[50px] py-[30px] lg:py-[50px] text-[#212529] bg-[#ffffff] px-4 sm:px-6">
      <p className="text-[#212529] font-lexend font-semibold text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] text-center md:text-left mx-auto">
        <span
          className="text-[#E3B200] font-black inline-flex items-center gap-1.5"
          style={{ textShadow: "0px 0px 100px #FFD230" }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          >
            <path
              d="M15.1523 0.171875C15.3992 4.09924 17.0706 7.80203 19.8535 10.585C22.6363 13.3676 26.3386 15.0382 30.2656 15.2852V15.2979C26.3385 15.5448 22.6363 17.2172 19.8535 20C17.0707 22.7828 15.3993 26.485 15.1523 30.4121H15.1387C14.8998 26.608 13.3251 23.0145 10.6973 20.2637L10.4385 19.999C7.73221 17.2929 4.15616 15.638 0.349609 15.3223C4.03394 15.0134 7.50224 13.4004 10.1748 10.8438L10.4385 10.585C13.2215 7.80196 14.8922 4.09936 15.1387 0.171875H15.1523Z"
              fill="#E3B200"
              stroke="black"
              strokeWidth="0.0512"
            />
          </svg>
          Optimize
        </span>{" "}
        Your Resume In Just One Click
      </p>

      <div className="relative w-full max-w-[981px]">
        <div className="relative z-1 flex flex-col gap-[35px] w-full p-6 sm:p-8 md:p-[50px] bg-[#fff9e4] rounded-[20px] md:rounded-[34px] border border-[#FFD230] shadow-sm">
          {/* UPLOAD LABEL */}
          <div className="space-y-[15px] ">
            <p className="font-inter font-medium text-[#212529] text-[16px] sm:text-[18px]">
              Upload resume:
            </p>
            <label
              htmlFor="dropzone-file"
              className={`flex flex-col items-center justify-center w-full h-52 border-[3px] border-dashed rounded-[16px] cursor-pointer transition-all  bg-white
          hover:border-[#FFD230] 
          ${fileName ? "border-[#FFD230]" : "hover:scale-95 border-[#dcdcdc]"}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {fileName ? (
                <div className="flex flex-col items-center justify-center w-full px-4 text-center">
                  <p className="text-[16px] sm:text-[18px] font-inter font-semibold text-gray-700 truncate">
                    {fileName}
                  </p>
                  <button
                    onClick={handleRemove}
                    className="mt-4 px-6 py-2 font-semibold text-red-500 rounded-full border-2 border-red-500 hover:bg-red-100 border-dashed text-[16px] sm:text-[18px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 px-4 sm:px-6 py-8 border-gray-300 rounded-xl text-center">
                  <svg
                    width="62"
                    height="51"
                    viewBox="0 0 62 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path
                      d="M20.7662 37.9616L31.0062 48.2016M31.0062 48.2016L41.2462 37.9616M31.0062 48.2016V25.1616M53.739 40.752C55.9646 39.187 57.6337 36.9534 58.5039 34.3754C59.3741 31.7975 59.4002 29.0094 58.5784 26.4156C57.7566 23.8218 56.1297 21.5574 53.9337 19.9509C51.7378 18.3444 49.087 17.4795 46.3662 17.4816H43.1406C42.3706 14.481 40.93 11.6941 38.9271 9.33079C36.9243 6.96748 34.4114 5.08933 31.5776 3.83773C28.7438 2.58613 25.6631 1.9937 22.5672 2.10503C19.4714 2.21636 16.4411 3.02856 13.7046 4.48048C10.968 5.9324 8.59653 7.9862 6.7686 10.4873C4.94066 12.9883 3.70393 15.8715 3.1515 18.9197C2.59908 21.9679 2.74536 25.1017 3.57933 28.0852C4.4133 31.0687 5.91323 33.8241 7.96619 36.144"
                      stroke="#A0AEC0"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-center text-gray-700 text-sm sm:text-base">
                    <span className="block font-semibold text-blue-600 hover:underline cursor-pointer transition text-[16px]">
                      Click to upload
                    </span>
                    or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">(PDF or DOCX)</p>
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
          </div>

          {/* JOB ROLE INPUT */}
          <div className="flex flex-col gap-[15px]">
            <label className="text-[#212529] font-inter font-medium mb-1 text-[16px] sm:text-[18px]">
              Job role applying for :
            </label>
            <input
              type="text"
              className={`bg-white border-[3px] rounded-full px-6 sm:px-8 py-4 sm:py-5 focus:outline-none focus:ring-3 focus:ring-[#FFD230] placeholder-[#A59DAA] text-[16px] sm:text-[18px] font-medium ${
                jobRole ? "border-[#FFD230]" : "border-[#DCDCDC]"
              }`}
              placeholder="Enter Job Role here"
              value={jobRole}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* SVG Image - Hide on smaller screens */}
        <img
          src="/Icons/OPResumeSvg.svg"
          alt=""
          className="hidden lg:block border-[#dcdcdc] w-[222px] rotate-[17deg] absolute right-[-175px] top-[50px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0 z-0"
        />

        {/* BUTTON */}
        <div className="w-full flex justify-center md:justify-end mt-[35px]">
          {fileName && jobRole ? (
            <Link to="/resume_optimization/final-download-page">
              <button className="group relative flex items-center justify-center pr-10 pl-8 py-4 text-[16px] sm:text-[18px] font-bold font-lexend rounded-full transition-all duration-300 overflow-hidden bg-[#FFD230] text-[#212529] hover:bg-white border-[3px] border-white hover:border-[#FFD230] cursor-pointer">
                Optimize Resume By Ai
                <span className="absolute right-6 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path
                      d="M5 12H19"
                      stroke="#212529"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#212529"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          ) : (
            <button
              className="group relative flex items-center justify-center px-6 py-4 text-[16px] sm:text-[18px] font-bold font-lexend rounded-full transition-all duration-300 overflow-hidden bg-gray-300 text-gray-500 cursor-not-allowed"
              disabled
            >
              Optimize Resume By Ai
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeOptimization;
