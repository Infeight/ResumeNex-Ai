import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/dashboard",
    icon: "/Icons/Sidebar/Dashboard.svg",
    label: "Dashboard",
  },
  {
    to: "/dashboard/my-resumes",
    icon: "/Icons/Sidebar/MyResume.svg",
    label: "My Resume",
  },
  {
    to: "/dashboard/my-cover-letters",
    icon: "/Icons/Sidebar/MyCL.svg",
    label: "My Cover Letter",
  },
  {
    to: "/dashboard/job-specific-resume",
    icon: "/Icons/Sidebar/JobSR.svg",
    label: "Job Specific Resume",
  },
  {
    to: "/dashboard/linkedin-optimization",
    icon: "/Icons/Sidebar/LinkedInOP.svg",
    label: "LinkedIn Optimization",
  },
  {
    to: "/dashboard/ai-suggestions",
    icon: "/Icons/Sidebar/AISugg.svg",
    label: "AI Suggestion",
  },
  {
    to: "/dashboard/downloads",
    icon: "/Icons/Sidebar/download.svg",
    label: "Downloads",
  },
    {
    to: "/",
    icon: "/Icons/Sidebar/Logout.svg",
    label: "Log Out",
  },
];

const Sidebar = () => {
  return (
    // Responsive wrapper: vertical on desktop, horizontal on mobile/tablet
<div
  className="
    w-full lg:w-[260px]
    flex flex-col lg:flex-col
    lg:gap-52 gap-0
    bg-white
    h-auto lg:h-full
    p-0 lg:p-[23px]
    font-inter text-[17px] font-semibold text-[#1E1B39] select-none
    fixed top-[70px] left-0 right-0 z-30
    ml-0
    lg:ml-0 lg:static lg:top-auto lg:left-auto lg:right-auto lg:z-auto
    border-b-0 lg:border-b-0
  "
>

<nav
  className="
    flex flex-row lg:flex-col
    gap-2 lg:gap-[15px]
    w-full
    justify-start lg:justify-start
    items-center lg:items-start
    px-2 lg:px-0
    overflow-x-auto lg:overflow-visible
    whitespace-nowrap lg:whitespace-normal
    scrollbar-hide
  "
>
  {navItems.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.to === "/dashboard"}
  className={({ isActive }) =>
  `
    flex flex-row
    items-center
    gap-1 lg:gap-[12px]
    px-2 lg:px-[16px]
    py-1.5 lg:py-[15px]
    rounded-[20px] lg:rounded-[10px]
    shadow-sm lg:shadow-none
    border-2 border-gray-200 lg:border-0     
      my-[10px]    
    hover:scale-105 hover:bg-[#f7f7fb] transition
    ${isActive ? "bg-blue-50" : "bg-white"}
    text-xs lg:text-[17px]
    min-w-[100px] lg:min-w-0
    justify-center lg:justify-start
    shrink-0
  `
}
    >
      <img
        src={item.icon}
        alt={item.label}
        className="w-4.5 lg:w-6 h-6 mb-0"
      />
      <span>{item.label}</span>
    </NavLink>
  ))}
</nav>


      {/* Logout button - moves into nav on mobile */}
      {/* <div
        className="
          flex flex-col lg:flex-row
          items-center
          gap-1 lg:gap-[12px]
          px-2 lg:px-[16px]
          py-2 lg:py-[15px]
          rounded-[10px]
          hover:scale-95 bg-[#f7f7fb] transition cursor-pointer
          mt-0 lg:mt-auto
          w-full lg:w-auto
          justify-center lg:justify-start
          text-xs lg:text-[17px]
        "
      >
        <span className="hidden lg:inline">Logout</span>
        <img src="/Icons/Sidebar/Logout.svg" alt="Logout" className="w-6 h-6" />
      </div> */}
    </div>
  );
};

export default Sidebar;
