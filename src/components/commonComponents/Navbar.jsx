import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  const [isToolOpen, setIsToolOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Toggle Tool section
  const toggleTool = () => {
    setIsToolOpen((prev) => {
      if (!prev) {
        setIsOrgOpen(false);
        setIsProfileOpen(false);
      }
      return !prev;
    });
  };

  // Toggle Org section
  const toggleOrg = () => {
    setIsOrgOpen((prev) => {
      if (!prev) {
        setIsToolOpen(false);
        setIsProfileOpen(false);
      }
      return !prev;
    });
  };

  // Toggle Profile Popup
  const toggleProfilePopup = () => {
    setIsProfileOpen((prev) => {
      if (!prev) {
        setIsToolOpen(false);
        setIsOrgOpen(false);
      }
      return !prev;
    });
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close dropdowns and mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsProfileOpen(false);
        setIsToolOpen(false);
        setIsOrgOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 w-full mx-auto px-4 sm:px-6 lg:px-12 py-4 border-b border-gray-200 flex items-center justify-between text-gray-900 font-inter bg-white"
      >
        <Link to="/">
          <img
            src="/img/Logo.webp"
            alt="ResumeKaro.ai Logo"
            className="w-[214.65px]"
          />
        </Link>

        {/* Navigation Links */}
        <section
          className={`${
            isMobileMenuOpen
              ? "flex px-5 py-6 border border-[#dcdcdc] "
              : "hidden px-4 py-6"
          } lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none  lg:p-0 gap-6 lg:gap-10 text-base font-medium`}
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <p className="cursor-pointer hover:text-pink-600 transition-all hover:underline">
              Home
            </p>
          </Link>
          <div className="relative">
            <p
              className="flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-all hover:underline"
              onClick={toggleTool}
            >
              <img src="/img/Star.svg" className="w-3" alt="star" />
              Tools
              <img
                src="/img/toolsDownArr.svg"
                alt="down arrow"
                className={`w-3 transition-transform ${
                  isToolOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </p>
            {isToolOpen && (
              <>
                {isMobileMenuOpen ? (
                  <div className="w-full flex flex-col gap-2 bg-sky-200 p-5 rounded-2xl shadow-2xl shadow-sky-100 z-20">
                    <Link
                      to="/resumes_templates"
                      onClick={toggleTool}
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                    >
                      AI Resume
                    </Link>
                    <Link
                      to="/cover_letter_templates"
                      onClick={toggleTool}
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                    >
                      AI Cover Letter
                    </Link>
                    <Link
                      to="/resume_optimization"
                      onClick={toggleTool}
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                    >
                      AI Resume Optimization
                    </Link>
                    <Link
                      to="/job_specific_resume"
                      onClick={toggleTool}
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                    >
                      AI Specified Job Resume
                    </Link>
                    <Link
                      to="/linkedIn_optimization"
                      onClick={toggleTool}
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                    >
                      LinkedIn Optimization
                    </Link>
                  </div>
                ) : (
                  <div className="absolute top-full left-0  lg:-left-[400px] flex flex-col lg:flex-row gap-4 bg-sky-200 p-4 rounded-2xl shadow-2xl shadow-sky-100 z-20">
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
                          alt=""
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
                          alt=""
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
                          alt=""
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
                          alt=""
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
                          alt=""
                          className="w-24 lg:w-28 -rotate-[20deg] absolute right-[-15px] top-[-20px] transition-all duration-300 group-hover:right-0 group-hover:w-28 lg:group-hover:w-32"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="relative">
            <p
              className="flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-all hover:underline"
              onClick={toggleOrg}
            >
              Organization
              <img
                src="/img/toolsDownArr.svg"
                alt="down arrow"
                className={`w-3 transition-transform ${
                  isOrgOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </p>
            {isOrgOpen && (
              <>
                {isMobileMenuOpen ? (
                  <div className="w-full flex flex-col gap-2 bg-sky-200 p-4 rounded-2xl shadow-2xl shadow-sky-100 z-20">
                    <div
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                      onClick={toggleOrg}
                    >
                      College / University
                    </div>
                    <div
                      className="block px-4 py-2 text-base font-manrope font-bold text-gray-900 hover:bg-sky-100 rounded-lg transition-all"
                      onClick={toggleOrg}
                    >
                      Corporate
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-full left-0 w-full lg:w-64 flex flex-col gap-4 bg-sky-200 p-4 rounded-2xl z-20">
                    <div className="relative w-full bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                      <div className="p-4 flex items-end">
                        <p className="font-manrope font-bold text-lg">
                          College / University
                        </p>
                      </div>
                      <img
                        src="/OrgImg/1.png"
                        className="relative -bottom-8 w-24 h-fit"
                        alt=""
                      />
                    </div>
                    <div className="relative w-full bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group">
                      <div className="p-4 flex items-end">
                        <p className="font-manrope font-bold text-lg">
                          Corporate
                        </p>
                      </div>
                      <img
                        src="/OrgImg/2.png"
                        className="relative -bottom-3 -right-7 w-24 h-fit"
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <p className="cursor-pointer hover:text-pink-600 transition-all hover:underline">
            Blogs
          </p>

          {!isDashboard && (
            <div className="flex gap-2 items-center lg:hidden">
              <Link to="/resumes_templates">
                <p className="flex items-center gap-2 px-3 py-2 text-white font-semibold rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 cursor-pointer">
                  Build Your Resume
                  <img src="/img/BtnRightArr.svg" alt="" />
                </p>
              </Link>
              <div className="border-l border-gray-200 h-8"></div>
              <p
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:text-blue-600 hover:underline"
              >
                Sign In
              </p>
            </div>
          )}
        </section>

        {/* Right Section */}
        <section className=" flex items-center gap-2 text-base font-medium">
          {isDashboard ? (
            <div className="relative" ref={navRef}>
              <div
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-full cursor-pointer select-none"
                onClick={toggleProfilePopup}
              >
                T
              </div>
              {isProfileOpen && (
                <div className="absolute top-12 right-0 w-60 bg-sky-100 rounded-2xl p-2 shadow-lg z-10 border border-blue-500">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/Sidebar/Dashboard.svg"
                        alt="DashBoard"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        DashBoard
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/EditProfile.svg"
                        alt="Edit Profile"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        Edit Profile
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/History.svg"
                        alt="History"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        History
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/Upload%20Resume.svg"
                        alt="Upload Resume"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        Upload Resume
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/Refer.svg"
                        alt="Refer"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        Refer
                      </span>
                    </div>
                    <hr className="m-2 border-blue-500" />
                    <div className="flex items-center justify-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/Sidebar/Logout.svg"
                        alt="Logout"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        Logout
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className=" gap-2 hidden lg:flex items-center">
              <Link to="/resumes_templates">
                <p className="flex items-center gap-2 px-3 py-2 text-white font-semibold rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 cursor-pointer">
                  Build Your Resume
                  <img src="/img/BtnRightArr.svg" alt="" />
                </p>
              </Link>
              <div className="border-l border-gray-200 h-8"></div>
              <p
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:text-blue-600 hover:underline"
              >
                Sign In
              </p>
            </div>
          )}

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 14 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </section>
      </nav>

      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
