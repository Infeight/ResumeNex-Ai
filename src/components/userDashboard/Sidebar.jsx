import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-fit flex flex-col gap-52 bg-white h-full p-[23px] font-inter text-[17px] font-semibold text-[#1E1B39] select-none">
      <nav className="flex flex-col gap-[15px]">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/Dashboard.svg" alt="Dashboard" />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/my-resumes"
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/MyResume.svg" alt="Dashboard" />
          My Resume
        </NavLink>

        <NavLink
          to="/dashboard/my-cover-letters"
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/MyCL.svg" alt="Dashboard" />
          My Cover Letter
        </NavLink>

        <NavLink
          to="/dashboard/job-specific-resume"
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/JobSR.svg" alt="Dashboard" />
          Job Specific Resume
        </NavLink>

        <NavLink
          to="/dashboard/linkedin-optimization"
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/LinkedInOP.svg" alt="Dashboard" />
          LinkedIn Optimization
        </NavLink>

        <NavLink
          to="/dashboard/ai-suggestions"
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/AISugg.svg" alt="Dashboard" />
          AI Suggestion
        </NavLink>

        <NavLink
          to="/dashboard/downloads"
          className={({ isActive }) =>
            `flex  gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-105 hover:bg-[#f7f7fb] transition ${
              isActive ? "bg-blue-50" : "bg-white"
            }`
          }
        >
          <img src="/Icons/Sidebar/download.svg" alt="Dashboard" />
          Downloads
        </NavLink>
      </nav>

      <div className="flex justify-center gap-[12px] px-[16px] py-[15px] rounded-[10px] hover:scale-95 bg-[#f7f7fb] transition cursor-pointer">
        Logout
        <img src="/Icons/Sidebar/Logout.svg" alt="Dashboard" />
      </div>
    </div>
  );
};
export default Sidebar;
