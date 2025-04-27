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
  const navRef = useRef(null);

  // Toggle Tool section
  const toggleTool = () => {
    setIsToolOpen((prev) => {
      if (!prev) {
        // If Tool is being opened, close Org and Profile
        setIsOrgOpen(false);
        setIsProfileOpen(false);
      }
      return !prev; // Toggle Tool open/close
    });
  };

  // Toggle Org section
  const toggleOrg = () => {
    setIsOrgOpen((prev) => {
      if (!prev) {
        // If Org is being opened, close Tool and Profile
        setIsToolOpen(false);
        setIsProfileOpen(false);
      }
      return !prev; // Toggle Org open/close
    });
  };

  // Toggle Profile Popup
  const toggleProfilePopup = () => {
    setIsProfileOpen((prev) => {
      if (!prev) {
        // If Profile popup is being opened, close Tool and Org
        setIsToolOpen(false);
        setIsOrgOpen(false);
      }
      return !prev; // Toggle Profile popup open/close
    });
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsProfileOpen(false);
        setIsToolOpen(false);
        setIsOrgOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 w-full mx-auto px-[50px] py-[15px] border-b-[1.5px] border-[#E5E5E5] flex items-center justify-between text-[#151515] font-inter bg-white"
      >
        <Link to={"/"}>
          <img
            src="/img/Logo.webp"
            alt="ResumeKaro.ai Logo"
            className="w-[214.65px]"
          />
        </Link>

        <section className="flex gap-[82px] text-[16px] font-medium">
          <Link to={"/"}>
            <p className="cursor-pointer hover:text-pink-600 transition-all hover:underline">
              Home
            </p>
          </Link>
          <div className="relative">
            {/* Tools Button */}
            <p
              className="flex gap-1 cursor-pointer hover:text-pink-600 transition-all hover:underline"
              onClick={toggleTool}
            >
              <img src="/img/Star.svg" className="w-[12px]" alt="star" />
              Tools
              <img
                src="/img/toolsDownArr.svg"
                alt="down arrow"
                className={`w-[12px] transition-transform ${
                  isToolOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </p>

            {/* Dropdown Menu */}
            {isToolOpen && (
              <div className="absolute -bottom-[200px] -left-[400px] flex gap-[20px] bg-sky-200 p-[12px] rounded-[24px] shadow-2xl shadow-sky-100 ">
                <Link to={"/resumes_templates"} onClick={toggleTool}>
                  <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                    <div className=" p-[15px] flex items-end">
                      <p className="font-manrope font-bold text-[20px]">
                        <span className="blueGradient"> AI</span> <br />
                        Resume
                      </p>
                    </div>
                    <img
                      src="/ToolsImg/1.png"
                      alt=""
                      className="w-[99px] -rotate-[20deg] absolute right-[-15px] bottom-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
                    />
                  </div>
                </Link>
                <Link to={"/cover_letter_templates"} onClick={toggleTool}>
                  <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                    <div className=" relative z-10relative z-10 p-[15px] flex items-end">
                      <p className="font-manrope font-bold text-[20px]">
                        <span className="blueGradient"> AI</span> <br />
                        Cover Letter
                      </p>
                    </div>
                    <img
                      src="/ToolsImg/2.png"
                      alt=""
                      className="w-[99px] -rotate-[8deg] absolute right-[-50px] bottom-[-10px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
                    />
                  </div>
                </Link>
                <Link to={"/resume_optimization"} onClick={toggleTool}>
                  <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                    <div className="relative z-10 p-[15px] flex items-end">
                      <p className="font-manrope font-bold text-[20px]">
                        <span className="blueGradient"> AI</span> Resume <br />
                        Optimization
                      </p>
                    </div>
                    <img
                      src="/ToolsImg/3.png"
                      alt=""
                      className="w-[110px] -rotate-[8deg] absolute right-[-50px] bottom-[-10px]transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
                    />
                  </div>
                </Link>
                <Link to={"/job_specific_resume"} onClick={toggleTool}>
                  {" "}
                  <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                    <div className="relative z-10 p-[15px] flex items-end">
                      <p className="font-manrope font-bold text-[20px]">
                        <span className="blueGradient"> AI </span> Specified{" "}
                        <br />
                        Job Resume
                      </p>
                    </div>
                    <img
                      src="/ToolsImg/4.png"
                      alt=""
                      className="w-[88px] absolute right-[-15px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:-rotate-12"
                    />
                  </div>
                </Link>{" "}
                <Link to={"/linkedIn_optimization"} onClick={toggleTool}>
                  <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                    <div className="relative z-10 p-[15px] flex items-end">
                      <p className="font-manrope font-bold text-[20px]">
                        LinkedIn <br /> Optimization
                      </p>
                    </div>
                    <img
                      src="/ToolsImg/5.png"
                      alt=""
                      className="w-[109px] -rotate-[20deg] absolute right-[-15px] top-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-[120px]"
                    />
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Org Button */}
            <p
              className="flex gap-1 cursor-pointer hover:text-pink-600 transition-all hover:underline"
              onClick={toggleOrg}
            >
              Organization
              <img
                src="/img/toolsDownArr.svg"
                alt="down arrow"
                className={`w-[12px] transition-transform ${
                  isOrgOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </p>

            {/* Dropdown Menu */}
            {isOrgOpen && (
              <div className="absolute -bottom-[220px] -left-[50px] flex flex-col gap-[20px] bg-sky-200 p-[12px] rounded-[24px] ">
                <div className="relative w-[250px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className=" p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px] ">
                      College / University
                    </p>
                  </div>
                  <img
                    src="/OrgImg/1.png"
                    className=" relative -bottom-8 w-[100px] h-fit"
                    alt=""
                  />
                </div>
                {/*  */}
                <div className="relative w-[250px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className=" p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px] ">
                      Corporate
                    </p>
                  </div>
                  <img
                    src="/OrgImg/2.png"
                    className=" relative -bottom-3 -right-7 w-[100px] h-fit"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <p className="cursor-pointer hover:text-pink-600 transition-all hover:underline">
            Blogs
          </p>
        </section>

        <section className="flex items-center gap-[24px] text-[16px] font-medium">
          {isDashboard ? (
            // Show a div with letter 'T' when the URL contains 'dashboard'
            <div className="relative" ref={navRef}>
              {/* Circle Button */}
              <div
                className="w-[38px] h-[38px] flex items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-full cursor-pointer select-none"
                onClick={toggleProfilePopup}
              >
                T
              </div>

              {/* Popup */}
              {isProfileOpen && (
                <div className="absolute top-12 right-0 w-60 bg-[#F0F9FF] rounded-2xl p-2 shadow-lg z-10 border border-[#00A6F4]">
                  <div className="flex flex-col">
                    {/* DashBoard */}
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/Sidebar/Dashboard.svg"
                        alt="DashBoard"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-[16px] text-[#1E1B39]">
                        DashBoard
                      </span>
                    </div>
                    {/* Edit Profile */}
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/EditProfile.svg"
                        alt="Edit Profile"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-[16px] text-[#1E1B39]">
                        Edit Profile
                      </span>
                    </div>

                    {/* History */}
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/History.svg"
                        alt="History"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-[16px] text-[#1E1B39]">
                        History
                      </span>
                    </div>

                    {/* Upload Resume */}
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/Upload%20Resume.svg"
                        alt="Upload Resume"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-[16px] text-[#1E1B39]">
                        Upload Resume
                      </span>
                    </div>
                    {/* Refer */}
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                      <img
                        src="/Icons/profilePopUp/Refer.svg"
                        alt="Refer"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-[16px] text-[#1E1B39]">
                        Refer
                      </span>
                    </div>

                    <hr className="m-2  border-[#00A6F4]" />

                    {/* Logout */}
                    <div className="flex items-center justify-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100  transition">
                      <img
                        src="/Icons/Sidebar/Logout.svg"
                        alt="Logout"
                        className="w-5 h-5"
                      />
                      <span className="font-inter font-semibold text-[16px] text-[#1E1B39]">
                        Logout
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Show the original content when the URL doesn't contain 'dashboard'
            <>
              <Link to={"/resumes_templates"}>
                <p className="flex items-center gap-[10px] px-[10px] py-[5px] text-white font-semibold rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer ">
                  Build Your Resume <img src="/img/BtnRightArr.svg" alt="" />
                </p>
              </Link>
              <div className="border-[1.5px] py-4 border-[#E5E5E5]"></div>
              <p
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:text-blue-600 hover:underline"
              >
                Sign In
              </p>
            </>
          )}
        </section>
      </nav>

      {/* signin popup */}
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
