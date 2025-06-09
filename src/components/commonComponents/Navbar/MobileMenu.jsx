import { Link } from "react-router-dom";
import { useUser } from "../usercontext";

const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenuAndDropdowns,
  isDashboard,
  setIsModalOpen,
  toolsNavElement,
  organizationNavElement,
}) => {
  const {darkMode} = useUser();
  return (
    <>
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0  ${darkMode ? 'text-[white]' : 'text-gray-700'}  bg-[#10101056] bg-opacity-50 z-[50] lg:hidden`}
          onClick={toggleMobileMenu}
        />
      )}
      <section
        className={`
          mobile-menu text-base font-medium
          ${
            isMobileMenuOpen
              ? `fixed inset-y-0 right-0 w-[280px] sm:w-[300px] max-w-[85vw] ${darkMode ? 'bg-[#1A1D23]' : 'bg-[white]'} shadow-2xl border-l ${darkMode ? 'border-[#1A1D23]' : 'border-gray-300'}  z-[60] flex flex-col p-6 space-y-3.5 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0`
              : `fixed inset-y-0 right-0 w-[280px] sm:w-[300px] max-w-[85vw] ${darkMode ? 'bg-[#1A1D23]' : 'bg-[white]'} shadow-2xl border-l ${darkMode ? 'border-[#1A1D23]' : 'border-gray-300'} z-[60] flex flex-col p-6 space-y-3.5 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-full pointer-events-none`
          }
          lg:hidden
        `}
      >
        <button
          onClick={toggleMobileMenu}
          className={`self-end p-2 ${darkMode ? 'text-[white]' : 'text-gray-700'}`}
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
          className={`block py-2 hover:text-pink-600 transition-colors ${darkMode ? 'text-[white]' : 'text-gray-700'}`}
        >
          Home
        </Link>
        {toolsNavElement}
        {organizationNavElement}
        <Link
          to="/blogs"
          onClick={closeMobileMenuAndDropdowns}
          className={`block py-2 hover:text-pink-600 transition-colors ${darkMode ? 'text-[white]' : 'text-gray-700'}`}
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
              className={`cursor-pointer text-sm hover:text-blue-600 hover:underline text-center w-full py-2 font-semibold ${darkMode ? 'text-[white]' : 'text-gray-700'}`}
            >
              Sign In
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default MobileMenu;
