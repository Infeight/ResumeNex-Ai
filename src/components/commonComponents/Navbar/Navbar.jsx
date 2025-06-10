import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ToolsDropdown from "./ToolsDropdown";
import OrganizationDropdown from "./OrganizationDropdown";
import ProfilePopup from "./ProfilePopup";
import MobileMenu from "./MobileMenu";
import Login from "../Login";
import { useUser } from "../usercontext";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

// Mobile Menu Component

// Main Navbar Component
const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  const{darkMode,setDarkMode} = useUser();

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


// daarkmode btn  
  const [rotation, setRotation] = useState(0);

  const handleDarkmode = () => {
   setDarkMode(prev=>!prev);

   if(!darkMode){ document.body.style.backgroundColor = '#23272F'}
   else{
     document.body.style.backgroundColor = 'white'
   }
    setRotation(prev => prev + 360); // Add 360° each time
  };


  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 w-full mx-auto px-4 sm:px-6 lg:px-12 py-4 border-b ${darkMode?'border-[#363B45]':'border-gray-200'} flex items-center justify-between text-gray-900 font-inter ${!darkMode?'bg-white':'bg-[#23272F]'}`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeAllMenus}>
          <img
            src="/img/Logo.webp"
            alt="ResumeNex AI Logo"
            className="w-[180px] sm:w-[214.65px]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex flex-grow justify-center items-center gap-x-6 xl:gap-x-8 text-base font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <Link to="/" onClick={closeAllMenus}>
            Home
          </Link>
          <ToolsDropdown
            isToolOpen={isToolOpen}
            toggleTool={toggleTool}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenuAndDropdowns={closeMobileMenuAndDropdowns}
          />
          <OrganizationDropdown
            isOrgOpen={isOrgOpen}
            toggleOrg={toggleOrg}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenuAndDropdowns={closeMobileMenuAndDropdowns}
          />
          <Link
            to="/blogs"
            onClick={closeAllMenus}
            className="hover:text-pink-600 transition-colors"
          >
            Blogs
          </Link>

         
        </div>

        {/* Right Section login / hamburger/ dashboard with profile popup */}
        <section className="flex items-center gap-x-2 sm:gap-x-3 text-base font-medium">

          {!isDashboard && (
            <div className="hidden lg:flex items-center gap-x-3">
              <Link to="/resumes_templates" onClick={closeAllMenus}>
                <p className="flex items-center gap-2 px-4 py-2 text-start text-white font-semibold rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 cursor-pointer hover:from-blue-700 hover:to-blue-500 whitespace-nowrap">
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
                className={`${darkMode ? 'text-white' : 'text-gray-900'} cursor-pointer hover:text-blue-600 hover:underline text-sm font-semibold whitespace-nowrap`}
              >
                Sign In
              </p>
            </div>
          )}


           {/* Dark Mode btn */}
          {/* <button id="darkmodebtn" className="w-10 h-10 flex justify-center items-center cursor-pointer" onClick={
           handleDarkmode
          }>
           {darkMode?<IoSunnyOutline style={{color:'white'}} /> :<FaMoon style={{}} />}
          </button> */}

           <button
      id="darkmodebtn"
      onClick={handleDarkmode}
      className={`w-10 h-10 rounded-4xl flex justify-center items-center cursor-pointer transition-transform duration-500 ${darkMode?'bg-[#363b45]':'bg-[#363b4529]'}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {darkMode ? (
        <IoSunnyOutline className="text-white text-xl" />
      ) : (
        <FaMoon className="text-black text-xl" />
      )}
    </button>
          


          {isDashboard && (
            <ProfilePopup
              isProfileOpen={isProfileOpen}
              toggleProfilePopup={toggleProfilePopup}
            />
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
              className={`w-6 h-6 ${darkMode ? 'text-[#fff]' : 'text-gray-700'}`}
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

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenuAndDropdowns={closeMobileMenuAndDropdowns}
        isDashboard={isDashboard}
        setIsModalOpen={setIsModalOpen}
        toolsNavElement={
          <ToolsDropdown
            isToolOpen={isToolOpen}
            toggleTool={toggleTool}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenuAndDropdowns={closeMobileMenuAndDropdowns}
          />
        }
        organizationNavElement={
          <OrganizationDropdown
            isOrgOpen={isOrgOpen}
            toggleOrg={toggleOrg}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenuAndDropdowns={closeMobileMenuAndDropdowns}
          />
        }
      />
      {/* login popup */}
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
