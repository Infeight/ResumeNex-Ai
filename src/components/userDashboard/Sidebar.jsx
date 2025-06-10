import { NavLink } from "react-router-dom";
import { useUser } from "../commonComponents/usercontext";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { LuLetterText } from "react-icons/lu";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { MdOutlineDownloading } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";

const navItems = [
  {
    to: "/dashboard",
    icon: "/Icons/Sidebar/Dashboard.svg",
    darkMode:<LuLayoutDashboard style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "Dashboard",
  },
  {
    to: "/dashboard/my-resumes",
    icon: "/Icons/Sidebar/MyResume.svg",
    darkMode:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "My Resume",
  },
  {
    to: "/dashboard/my-cover-letters",
    icon: "/Icons/Sidebar/MyCL.svg",
    darkMode:<LuLetterText style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "My Cover Letter",
  },
  {
    to: "/dashboard/job-specific-resume",
    icon: "/Icons/Sidebar/JobSR.svg",
    darkMode:<GrDocumentUpdate style={{color:'white', fontSize:'1.7vw'}} />,
    label: "Job Specific Resume",
  },
  {
    to: "/dashboard/linkedin-optimization",
    icon: "/Icons/Sidebar/LinkedInOP.svg",
    darkMode:<FaLinkedinIn style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "LinkedIn Optimization",
  },
  {
    to: "/dashboard/ai-suggestions",
    icon: "/Icons/Sidebar/AISugg.svg",
    darkMode:<BsStars style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "AI Suggestion",
  },
  {
    to: "/dashboard/downloads",
    icon: "/Icons/Sidebar/download.svg",
    darkMode:<MdOutlineDownloading style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "Downloads",
  },
    {
    to: "/",
    icon: "/Icons/Sidebar/Logout.svg",
    darkMode:<RiLoginBoxLine style={{color:'white', fontSize:'1.7vw'}}/>,
    label: "Log Out",
  },
];

const Sidebar = () => {
   const{darkMode} = useUser();
  return (
    // Responsive wrapper: vertical on desktop, horizontal on mobile/tablet
   
<div
  className={`
    w-full lg:w-[315px]
    flex flex-col
    gap-0 lg:gap-52
    ${darkMode ? 'bg-[#23272F]' : 'bg-[#F7F7FB]'}
    lg:h-screen               
    sticky top-[70px] lg:top-[70px]
    p-0 lg:p-[23px]
    font-inter text-[17px] font-semibold
    ${darkMode ? 'text-white' : 'text-[#1E1B39]'}
    select-none
    z-30
    left-0 lg:left-0
    right-0 lg:right-0
    ml-0 lg:ml-0
    border-b-0 lg:border-b-0
  `}
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
    hover:scale-105 transition
    ${isActive ? `${darkMode?'bg-[#363B45]':'bg-blue-50'}` : `${darkMode?'text-[white]':'text-[#1E1B39]'}`}
    text-xs lg:text-[17px]
    min-w-[100px] lg:min-w-0
    justify-center lg:justify-start
    shrink-0
  `
}
    >
      {
        darkMode?item.darkMode:
        <img
        src={item.icon}
        alt={item.label}
        className="w-4.5 lg:w-6 h-6 mb-0 fill-white"
      />
      }
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
