import { Link } from "react-router-dom";

const ToolsDropdown = ({
  isToolOpen,
  toggleTool,
  isMobileMenuOpen,
  closeMobileMenuAndDropdowns,
}) => {
  return (
    <div className="relative">
      <p
        className="flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-all lg:hover:underline py-2 lg:py-0"
        onClick={toggleTool}
      >
        <svg
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 h-3.5 "
        >
          <path
            d="M15.1523 0.171875C15.3992 4.09924 17.0706 7.80203 19.8535 10.585C22.6363 13.3676 26.3386 15.0382 30.2656 15.2852V15.2979C26.3385 15.5448 22.6363 17.2172 19.8535 20C17.0707 22.7828 15.3993 26.485 15.1523 30.4121H15.1387C14.8998 26.608 13.3251 23.0145 10.6973 20.2637L10.4385 19.999C7.73221 17.2929 4.15616 15.638 0.349609 15.3223C4.03394 15.0134 7.50224 13.4004 10.1748 10.8438L10.4385 10.585C13.2215 7.80196 14.8922 4.09936 15.1387 0.171875H15.1523Z"
            fill="#f7329a"
            stroke="black"
            strokeWidth="0.0512"
          />
        </svg>
        Tools
        <img
          src="/img/toolsDownArr.svg"
          alt="down arrow"
          className={`w-3 h-3 transition-transform ${
            isToolOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>
      {isToolOpen && (
        <>
          {isMobileMenuOpen ? (
            // Mobile Tools Dropdown List
            <div className="mt-2 w-full flex flex-col gap-1.5 bg-sky-100 p-3.5 rounded-xl shadow-md z-20 border border-sky-200">
              <Link
                to="/resumes_templates"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010]hover:bg-sky-200/70 rounded-lg"
              >
                AI Resume
              </Link>
              <Link
                to="/cover_letter_templates"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010]hover:bg-sky-200/70 rounded-lg"
              >
                AI Cover Letter
              </Link>
              <Link
                to="/resume_optimization"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010]hover:bg-sky-200/70 rounded-lg"
              >
                AI Resume Optimization
              </Link>
              <Link
                to="/job_specific_resume"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010]hover:bg-sky-200/70 rounded-lg"
              >
                AI Specified Job Resume
              </Link>
              <Link
                to="/linkedIn_optimization"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010]hover:bg-sky-200/70 rounded-lg"
              >
                LinkedIn Optimization
              </Link>
            </div>
          ) : (
            // Desktop Tools Dropdown Cards
            <div className="absolute top-full left-0 lg:-left-[400px] mt-2 flex flex-col lg:flex-row gap-4 bg-sky-200 p-4 rounded-2xl shadow-2xl shadow-sky-100 z-30">
              <Link to="/resumes_templates" onClick={toggleTool}>
                <div className="relative w-full lg:w-[200px] h-36 bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                  <div className="p-4 flex items-end">
                    <p className="font-manrope font-bold text-lg lg:text-xl">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        AI
                      </span>{" "}
                      Resume
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/1.png"
                    alt="AI Resume"
                    className="w-20 lg:w-24 -rotate-[20deg] absolute right-[-15px] bottom-[-20px] transition-all duration-300 group-hover:right-0 group-hover:bottom-0"
                  />
                </div>
              </Link>
              <Link to="/cover_letter_templates" onClick={toggleTool}>
                <div className="relative w-full lg:w-[200px] h-36 bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                  <div className="p-4 flex items-end">
                    <p className="font-manrope font-bold text-lg lg:text-xl">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        AI
                      </span>{" "}
                      Cover Letter
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/2.png"
                    alt="AI Cover Letter"
                    className="w-20 lg:w-24 -rotate-[8deg] absolute right-[-50px] bottom-[-10px] transition-all duration-300 group-hover:right-0 group-hover:bottom-0"
                  />
                </div>
              </Link>
              <Link to="/resume_optimization" onClick={toggleTool}>
                <div className="relative w-full lg:w-[200px] h-36 bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                  <div className="p-4 flex items-end">
                    <p className="font-manrope font-bold text-lg lg:text-xl">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        AI
                      </span>{" "}
                      Resume Optimization
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/3.png"
                    alt="AI Resume Optimization"
                    className="w-24 lg:w-28 -rotate-[8deg] absolute right-[-50px] bottom-[-10px] transition-all duration-300 group-hover:right-0 group-hover:bottom-0"
                  />
                </div>
              </Link>
              <Link to="/job_specific_resume" onClick={toggleTool}>
                <div className="relative w-full lg:w-[200px] h-36 bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                  <div className="p-4 flex items-end">
                    <p className="font-manrope font-bold text-lg lg:text-xl">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        AI
                      </span>{" "}
                      Specified Job Resume
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/4.png"
                    alt="AI Specified Job Resume"
                    className="w-16 lg:w-22 absolute right-[-15px] transition-all duration-300 group-hover:right-0 group-hover:-rotate-12"
                  />
                </div>
              </Link>
              <Link to="/linkedIn_optimization" onClick={toggleTool}>
                <div className="relative w-full lg:w-[200px] h-36 bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                  <div className="p-4 flex items-end">
                    <p className="font-manrope font-bold text-lg lg:text-xl">
                      LinkedIn Optimization
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/5.png"
                    alt="LinkedIn Optimization"
                    className="w-24 lg:w-28 -rotate-[20deg] absolute right-[-15px] top-[-20px] transition-all duration-300 group-hover:right-0 group-hover:w-28 lg:group-hover:w-32"
                  />
                </div>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ToolsDropdown;
