import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login"; // Assuming Login component exists

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  const [isToolOpen, setIsToolOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleTool = () => {
    setIsToolOpen((prev) => {
      if (!prev) setIsOrgOpen(false);
      return !prev;
    });
  };

  const toggleOrg = () => {
    setIsOrgOpen((prev) => {
      if (!prev) setIsToolOpen(false);
      return !prev;
    });
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      console.log("Mobile menu toggled, new state:", !prev); // Debug log
      if (prev) {
        setIsToolOpen(false);
        setIsOrgOpen(false);
      }
      return !prev;
    });
  };

  const closeAllMenus = () => {
    setIsProfileOpen(false);
    setIsToolOpen(false);
    setIsOrgOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenuAndDropdowns = () => {
    setIsMobileMenuOpen(false);
    setIsToolOpen(false);
    setIsOrgOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest("section.mobile-menu") // Exclude sidebar clicks
      ) {
        console.log("Closing menus due to outside click"); // Debug log
        closeAllMenus();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Common JSX for Tools (triggers and dropdowns)
  const toolsNavElement = (
    <div className="relative">
      <p
        className="flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-all lg:hover:underline py-2 lg:py-0"
        onClick={toggleTool}
      >
        <img src="/img/Star.svg" className="w-3 h-3" alt="star" />
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
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg"
              >
                AI Resume
              </Link>
              <Link
                to="/cover_letter_templates"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg"
              >
                AI Cover Letter
              </Link>
              <Link
                to="/resume_optimization"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg"
              >
                AI Resume Optimization
              </Link>
              <Link
                to="/job_specific_resume"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg"
              >
                AI Specified Job Resume
              </Link>
              <Link
                to="/linkedIn_optimization"
                onClick={closeMobileMenuAndDropdowns}
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg"
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

  // Common JSX for Organization (triggers and dropdowns)
  const organizationNavElement = (
    <div className="relative">
      <p
        className="flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-all lg:hover:underline py-2 lg:py-0"
        onClick={toggleOrg}
      >
        Organization
        <img
          src="/img/toolsDownArr.svg"
          alt="down arrow"
          className={`w-3 h-3 transition-transform ${
            isOrgOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>
      {isOrgOpen && (
        <>
          {isMobileMenuOpen ? (
            <div className="mt-2 w-full flex flex-col gap-1.5 bg-sky-100 p-3.5 rounded-xl shadow-md z-20 border border-sky-200">
              <div
                onClick={() => {
                  toggleOrg();
                  closeMobileMenuAndDropdowns();
                }}
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg cursor-pointer"
              >
                College / University
              </div>
              <div
                onClick={() => {
                  toggleOrg();
                  closeMobileMenuAndDropdowns();
                }}
                className="block px-3 py-1.5 text-sm font-manrope font-semibold text-gray-700 hover:bg-sky-200/70 rounded-lg cursor-pointer"
              >
                Corporate
              </div>
            </div>
          ) : (
            <div className="absolute top-full left-0 w-full lg:w-64 mt-2 flex flex-col gap-4 bg-sky-200 p-4 rounded-2xl z-30 shadow-2xl shadow-sky-100">
              <div
                onClick={toggleOrg}
                className="relative w-full bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group"
              >
                <div className="p-4 flex items-end">
                  <p className="font-manrope font-bold text-lg">
                    College / University
                  </p>
                </div>
                <img
                  src="/OrgImg/1.png"
                  className="relative -bottom-8 w-24 h-fit"
                  alt="College/University"
                />
              </div>
              <div
                onClick={toggleOrg}
                className="relative w-full bg-gray-100 rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-gray-100 transition-all overflow-hidden group"
              >
                <div className="p-4 flex items-end">
                  <p className="font-manrope font-bold text-lg">Corporate</p>
                </div>
                <img
                  src="/OrgImg/2.png"
                  className="relative -bottom-3 -right-7 w-24 h-fit"
                  alt="Corporate"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 w-full mx-auto px-4 sm:px-6 lg:px-12 py-4 border-b border-gray-200 flex items-center justify-between text-gray-900 font-inter bg-white"
      >
        {/* 1. LOGO (Left) */}
        <Link to="/" onClick={closeAllMenus}>
          <img
            src="/img/Logo.webp"
            alt="ResumeNex AI Logo"
            className="w-[180px] sm:w-[214.65px]"
          />
        </Link>

        {/* 2. DESKTOP CENTERED NAVIGATION LINKS (Visible on lg+) */}
        <div className="hidden lg:flex flex-grow justify-center items-center gap-x-6 xl:gap-x-8 text-base font-medium">
          <Link
            to="/"
            onClick={closeAllMenus}
            className="hover:text-pink-600 transition-colors"
          >
            Home
          </Link>
          {toolsNavElement}
          {organizationNavElement}
          <Link
            to="/blogs"
            onClick={closeAllMenus}
            className="hover:text-pink-600 transition-colors"
          >
            Blogs
          </Link>
        </div>

        {/* 3. RIGHT SECTION (Desktop Buttons / Mobile Hamburger) */}
        <section className="flex items-center gap-x-2 sm:gap-x-3 text-base font-medium">
          {!isDashboard && (
            <div className="hidden lg:flex items-center gap-x-3">
              <Link to="/resumes_templates" onClick={closeAllMenus}>
                <p className="flex items-center gap-2 px-3 py-2 text-sm text-white font-semibold rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 cursor-pointer hover:from-blue-700 hover:to-blue-500 whitespace-nowrap">
                  Build Your Resume
                  <img src="/img/BtnRightArr.svg" alt="" className="w-4 h-4" />
                </p>
              </Link>
              <div className="border-l border-gray-300 h-6"></div>
              <p
                onClick={() => {
                  setIsModalOpen(true);
                  closeAllMenus();
                }}
                className="cursor-pointer hover:text-blue-600 hover:underline text-sm font-semibold whitespace-nowrap"
              >
                Sign In
              </p>
            </div>
          )}
          {isDashboard && (
            <div className="hidden lg:block relative">
              <div
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-full cursor-pointer select-none"
                onClick={toggleProfilePopup}
              >
                T
              </div>
              {isProfileOpen && (
                <div className="absolute top-12 right-0 mt-2 w-60 bg-sky-100 rounded-2xl p-2 shadow-lg z-30 border border-blue-500">
                  <div className="flex flex-col">
                    <Link
                      to="/dashboard"
                      onClick={toggleProfilePopup}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
                    >
                      <img
                        src="/Icons/Sidebar/Dashboard.svg"
                        alt="DashBoard"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        DashBoard
                      </span>
                    </Link>
                    <div
                      onClick={toggleProfilePopup}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
                    >
                      <img
                        src="/Icons/profilePopUp/EditProfile.svg"
                        alt="Edit Profile"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        Edit Profile
                      </span>
                    </div>
                    <div
                      onClick={toggleProfilePopup}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
                    >
                      <img
                        src="/Icons/profilePopUp/History.svg"
                        alt="History"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        History
                      </span>
                    </div>
                    <div
                      onClick={toggleProfilePopup}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
                    >
                      <img
                        src="/Icons/profilePopUp/Upload%20Resume.svg"
                        alt="Upload Resume"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-base text-gray-900">
                        Upload Resume
                      </span>
                    </div>
                    <div
                      onClick={toggleProfilePopup}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
                    >
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
                    <div
                      onClick={toggleProfilePopup}
                      className="flex items-center justify-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
                    >
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
          )}
          <button
            className="lg:hidden p-1 sm:p-2 focus:outline-none z-[70]"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              className="w-6 h-6 text-gray-700"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </section>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#10101056] bg-opacity-50 z-[50] lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* MOBILE NAVIGATION PANEL */}
      <section
        className={`
          mobile-menu text-base font-medium
          ${
            isMobileMenuOpen
              ? "fixed inset-y-0 right-0 w-[280px] sm:w-[300px] max-w-[85vw] bg-white shadow-2xl border-l border-gray-300 z-[60] flex flex-col p-6 space-y-3.5 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0"
              : "fixed inset-y-0 right-0 w-[280px] sm:w-[300px] max-w-[85vw] bg-white shadow-2xl border-l border-gray-300 z-[60] flex flex-col p-6 space-y-3.5 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-full pointer-events-none"
          }
          lg:hidden
        `}
      >
        <button
          onClick={toggleMobileMenu}
          className="self-end p-2 text-gray-700"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link
          to="/"
          onClick={closeMobileMenuAndDropdowns}
          className="block py-2 hover:text-pink-600 transition-colors"
        >
          Home
        </Link>
        {toolsNavElement}
        {organizationNavElement}
        <Link
          to="/blogs"
          onClick={closeMobileMenuAndDropdowns}
          className="block py-2 hover:text-pink-600 transition-colors"
        >
          Blogs
        </Link>
        {!isDashboard && (
          <div className="mt-auto pt-6 border-t border-gray-300 space-y-3">
            <Link
              to="/resumes_templates"
              onClick={closeMobileMenuAndDropdowns}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-white font-semibold rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-colors duration-200 cursor-pointer w-full text-center"
            >
              Build Your Resume
              <img src="/img/BtnRightArr.svg" alt="arrow" className="w-4 h-4" />
            </Link>
            <p
              onClick={() => {
                setIsModalOpen(true);
                closeMobileMenuAndDropdowns();
              }}
              className="cursor-pointer text-sm hover:text-blue-600 hover:underline text-center w-full py-2 font-semibold"
            >
              Sign In
            </p>
          </div>
        )}
      </section>

      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
