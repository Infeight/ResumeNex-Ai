import { useUser } from "../usercontext";

const OrganizationDropdown = ({
  isOrgOpen,
  toggleOrg,
  isMobileMenuOpen,
  closeMobileMenuAndDropdowns,
}) => {
  const{darkMode} = useUser();
  return (
    <div className="relative">
      <p
        className={`${darkMode ? 'text-[white]' : 'text-[black]'} flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-all lg:hover:underline py-2 lg:py-0`}
        onClick={toggleOrg}
      >
        Organization
        <img
          src={`${darkMode?'/img/dropdown-white.svg':'/img/toolsDownArr.svg'}`}
          alt="down arrow"
          className={`w-3 h-3 transition-transform ${
            isOrgOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>
      {isOrgOpen && (
        <>
          {isMobileMenuOpen ? (
            <div className={`mt-2 w-full flex flex-col gap-1.5 ${darkMode ? 'bg-[#1c4058]' : 'bg-sky-200'}   p-3.5 rounded-xl shadow-md z-20 border border-sky-200`}>
              <div
                onClick={() => {
                  toggleOrg();
                  closeMobileMenuAndDropdowns();
                }}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010] hover:bg-sky-200/70 rounded-lg cursor-pointer"
              >
                College / University
              </div>
              <div
                onClick={() => {
                  toggleOrg();
                  closeMobileMenuAndDropdowns();
                }}
                className="block px-3 py-1.5 text-sm  font-inter font-semibold text-[#101010] hover:bg-sky-200/70 rounded-lg cursor-pointer"
              >
                Corporate
              </div>
            </div>
          ) : (
            <div className={`absolute top-full left-0 w-full lg:w-64 mt-2 flex flex-col gap-4 ${darkMode ? 'bg-[#1c4058]' : 'bg-sky-200'}    p-4 rounded-2xl shadow-2xl ${darkMode ? 'shadow-[#23272F]' : 'shadow-sky-100'} border ${darkMode ? 'border-[#74D4FF]' : 'border-sky-500'}`}>
              <div
                onClick={toggleOrg}
                className={`relative w-full  ${darkMode ? 'bg-[#1A1D23]' : 'bg-gray-100'} rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-pink-0 transition-all overflow-hidden group`}
              >
                <div className="p-4 flex items-end">
                  <p className="font-manrope font-bold text-lg">
                    College / University
                  </p>
                </div>
                <img
                loading="lazy"
                  src="/OrgImg/1.avif"
                  className="relative -bottom-8 w-24 h-fit"
                  alt="College/University"
                />
              </div>
              <div
                onClick={toggleOrg}
                className={`relative w-full ${darkMode ? 'bg-[#1A1D23]' : 'bg-gray-100'} rounded-2xl flex cursor-pointer hover:shadow-[0_0_0_2px_#4C95FB] hover:bg-gradient-to-tr from-sky-100 to-pink-0 transition-all overflow-hidden group`}
              >
                <div className="p-4 flex items-end">
                  <p className="font-manrope font-bold text-lg">Corporate</p>
                </div>
                <img
                loading="lazy"
                  src="/OrgImg/2.avif"
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
};

export default OrganizationDropdown;
